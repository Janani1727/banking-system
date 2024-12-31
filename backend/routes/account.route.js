const express = require("express");
const {verifyToken}=require("../verify")
const { UserModel } = require("../model/user.model");
const { AccountModel } = require("../model/account.model");

const accRouter = express.Router();

accRouter.post("/createAcc",verifyToken,async (req, res) => {
  const {
    
    firstName,
    lastName,
    phone,
    dob,
    gender,
    address,
    accNum,
    atype,
    pan,
    aadhar,
  } = req.body;


  
  const userId = req.userId;
  console.log(userId,"janani")
  try {
   
    const existingAccount = await AccountModel.findOne({ userId });
    if (existingAccount) {
      return res.status(400).send({ message: "Account already exists for this user" });
    }
    const newAccount = new AccountModel({
      userId,  
      firstName,
      lastName,
      phone,
      dob,
      gender,
      address,
      accNum,
      atype,  
      pan,
      aadhar,
    });

   
    const savedAccount = await newAccount.save();
    // console.log(savedAccount)
    res.status(201).send(savedAccount); 

  } catch (error) {
    // console.error("Error creating account:", error);
    res.status(500).send({ message: "Error creating account", error: error.message });
  }
});

accRouter.get("/specificUser/:id",async (req,res) => {
  try {
    let userId = req.params.id; 
    let specificUser = await AccountModel.find({ userId }); 

    if (!specificUser) {
      return res.status(404).json({ message: "Account not found" });
    }

    res.send(specificUser);
  } catch (error) {
    res.send({ message: "Server Error", error: error.message });
  }
})

module.exports = { accRouter };


