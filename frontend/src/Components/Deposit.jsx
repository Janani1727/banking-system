import React from "react";
import "./Deposit.css";

function DepositForm() {
  return (
    <div className="deposit-form-container">
      <h2>Deposit Money</h2>
      <form>
        <div className="form-section">
          {/* Left Column */}
          <div className="input-group">
            <label htmlFor="fromAccountNumber">From Account Number:</label>
            <input type="text" id="fromAccountNumber" placeholder="Enter from account number" required />
          </div>

          <div className="input-group">
            <label htmlFor="toAccountNumber">To Account Number:</label>
            <input type="text" id="toAccountNumber" placeholder="Enter to account number" required />
          </div>

          <div className="input-group">
            <label htmlFor="accountHolderName">Name of the Account Holder:</label>
            <input type="text" id="accountHolderName" placeholder="Enter account holder's name" required />
          </div>

          <div className="input-group">
            <label htmlFor="depositAmount">Amount:</label>
            <input type="number" id="depositAmount" placeholder="Enter amount" required />
          </div>

          <div className="input-group">
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input type="text" id="mobileNumber" placeholder="Enter mobile number" required />
          </div>
        </div>

        <div className="form-section">
          {/* Right Column */}
          <div className="input-group">
            <label htmlFor="depositAccountNumber">Account Number:</label>
            <input type="text" id="depositAccountNumber" placeholder="Enter account number" required />
          </div>

          <div className="input-group">
            <label htmlFor="rupeesInWords">Rupees in Words:</label>
            <input type="text" id="rupeesInWords" placeholder="Enter amount in words" required />
          </div>

          <div className="input-group">
            <label htmlFor="accountType">Type of Account:</label>
            <select id="accountType" required>
              <option value="">Select account type</option>
              <option value="savings">Savings</option>
              <option value="current">Current</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="depositDate">Date:</label>
            <input type="date" id="depositDate" required />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default DepositForm;
