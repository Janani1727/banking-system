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
    accType,
    pan,
    aadhar,
  } = req.body;


  
  const userId = req.userId;
  try {
   
    const newAccount = new AccountModel({
      userId,  
      firstName,
      lastName,
      phone,
      dob,
      gender,
      address,
      accNum,
      accType,  
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

module.exports = { accRouter };
