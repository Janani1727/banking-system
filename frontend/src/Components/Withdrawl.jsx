import React, { useState } from "react";
import "./Withdrawl.css";

const Withdrawl = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="dashboard-container">
    <div className="container">
      <h1>Withdrawal Options</h1>
      <div className="button-container">
        <button className="btn" onClick={() => openModal("account")}>
          Withdraw by Account
        </button>
        <button className="btn" onClick={() => openModal("atmCard")}>
          Withdraw by ATM Card
        </button>
      </div>

      {/* Account Modal */}
      {activeModal === "account" && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Withdraw by Account Number</h2>
            <label htmlFor="accountNumber">Account Number:</label>
            <input type="text" id="accountNumber" placeholder="Enter account number" required />

            <label htmlFor="accountAmount">Amount:</label>
            <input type="number" id="accountAmount" placeholder="Enter amount" required />

            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </div>
      )}

      {/* ATM Card Modal */}
      {activeModal === "atmCard" && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Withdraw by ATM Card</h2>
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" placeholder="Enter card number" required />

            <label htmlFor="cardPin">PIN:</label>
            <input type="password" id="cardPin" placeholder="Enter PIN" required />

            <label htmlFor="cardAmount">Amount:</label>
            <input type="number" id="cardAmount" placeholder="Enter amount" required />

            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Withdrawl;
