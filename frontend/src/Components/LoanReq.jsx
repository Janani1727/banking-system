import React from "react";
import "./LoanReq.css"; 

function LoanReq() {
  return (
    <div className="loan-form-container">
      <h2>Loan Request Form</h2>
      <form>
        <div className="form-section">
          {/* Left Column */}
          <div className="input-group">
            <label htmlFor="account-number">Account Number*</label>
            <input type="text" id="account-number" placeholder="Enter your account number" required />
          </div>

          <div className="input-group">
            <label htmlFor="amount">Loan Amount*</label>
            <input type="number" id="amount" placeholder="Enter loan amount" required />
          </div>

          <div className="input-group">
            <label htmlFor="reason">Reason for Loan*</label>
            <select id="reason" required> 
              <option value="">Select a reason</option>
              <option value="home-improvement">Home Improvement</option>
              <option value="business-launching">Business Launching</option>
              <option value="education">Education</option>
              <option value="investment">Investment</option>
              <option value="home-loan">Home Loan</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="income">Annual Income*</label>
            <input type="number" id="income" placeholder="Enter your annual income" required />
          </div>
        </div>

        <div className="form-section">
          {/* Right Column */}
          <div className="input-group">
            <label htmlFor="occupation">Occupation*</label>
            <input type="text" id="occupation" placeholder="Enter your occupation" required />
          </div>

          <div className="consent-group">
            <input type="checkbox" id="consent" required />
            <label htmlFor="consent">
              I authorize prospective Credit Grantors/Lending/Leasing Companies to obtain personal and credit information about me from my employer and credit bureau, or credit reporting agency, any person who has or may have any financial dealing with me, or from any references I have provided. This information, as well as that provided by me in the application, will be referred to in connection with this lease and any other relationships we may establish from time to time. Any personal and credit information obtained may be disclosed from time to time to other lenders, credit bureaus, or other credit reporting agencies. <br /> <br />
              I hereby agree that the information given is true, accurate, and complete as of the date of this application submission.
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Send Application
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoanReq;
