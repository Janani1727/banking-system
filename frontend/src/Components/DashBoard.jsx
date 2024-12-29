import React from 'react';
import './Dashboard.css';

const DashBoard = () => {
  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <p>My Dashboard</p>
      </div>

      {/* Dashboard Container */}
      <div className="dashboard-container">
        {/* Sidebar */}
        <div className="sidebar">
          <p>New Account</p>
          <p>Accounts</p>
          <p>Transactions</p>
          <p>Profile Settings</p>
          <p>Logout</p>
        </div>

      
        <div className="main-content">
          <div className='wel'>
          <h3>welcome back janani!</h3>
          <h3>your account balance <span>5000</span></h3>
          </div>
           
        </div>
      </div>
    </>
  );
};

export default DashBoard;
