import React from "react";
import "./Dashboard.css";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const DashBoard = () => {
  const data = [
    { name: "Deposit", value: 5000 },
    { name: "Withdrawal", value: 8000 },
  ];

  const COLORS = ["#0088FE", "#FF8042"];
  return (
    <>
{/*     
      <div className="navbar">
        <div className="wel">
          <div className="welcome-info">
            <div className="profile-image">
              <img
                className="profile-image-src"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR19ENBIPpTLgZZ7wOfmGO-3RVCiE0OVAAw76VvtmQYgQcf9vt8gmZG_P3P2fJYvEDWkQE&usqp=CAU"
                alt="profile"
              />
            </div>
            <h3>welcome back janani!</h3>
          </div>
          <div className="account-balance">
            <h3>
              your account balance <span>5000</span>
            </h3>
            <p className="notification-icon">
              <IoNotifications  size={22} />
            </p>
          </div>
        </div>
      </div> */}

  
      <div className="dashboard-container">
     
      {/* <div className="sidebar">
          <h2>AJ Bank</h2>
          <Link to="/" className="sidebar-link">
            <p>Dashboard</p>
          </Link>
          <Link to="/transactions" className="sidebar-link">
            <p>All Transactions</p>
          </Link>
          <Link to="/withdraw" className="sidebar-link">
            <p>Withdraw</p>
          </Link>
          <Link to="/deposit" className="sidebar-link">
            <p>Deposit</p>
          </Link>
          <Link to="/loanreq" className="sidebar-link">
            <p>Loan Request</p>
          </Link>
          <Link to="/update" className="sidebar-link">
            <p>Profile Settings</p>
          </Link>
          {/* <Link to="/mini-statement" className="sidebar-link">
            <p>Mini Statement</p>
          </Link> */}
          {/* <p>Logout</p>
        </div> */} 

        <div className="main-content">
          <div className="recent-transactions-header">
            <h3>Recent Transactions</h3>
            <button className="all-transactions-btn">All Transactions</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>From Acc</th>
                <th>To Acc</th>
                <th>To Acc UserName</th>
                <th>Type</th>
                <th>Deposit Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>12345678900</td>
                <td>12345678900</td>
                <td>Janani J</td>
                <td>Savings</td>
                <td>1000</td>
                <td>12/12</td>
              </tr>
              <tr>
                <td>1</td>
                <td>12345678900</td>
                <td>12345678900</td>
                <td>Janani J</td>
                <td>Savings</td>
                <td>1000</td>
                <td>12/12</td>
              </tr>
              <tr>
                <td>1</td>
                <td>12345678900</td>
                <td>12345678900</td>
                <td>Janani J</td>
                <td>Savings</td>
                <td>1000</td>
                <td>12/12</td>
              </tr>
            </tbody>
          </table>
          
              
           
          <div className="chart-and-card">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%" 
                cy="50%" 
                outerRadius={120} 
                fill="#8884d8"
                dataKey="value" 
                label 
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend
        layout="vertical" 
        align="left" 
        verticalAlign="middle" 
      /> 
            </PieChart>

            
           <div class="card-container">
  <div class="card">
 
    <div class="ATM-Card card-front">
      <div class="logos">
        <img
          class="logoOne"
          src="https://cdn-icons-png.flaticon.com/512/6404/6404100.png"
          alt="logo"
        />
        <img
          class="logoTwo"
          src="https://www.freepnglogos.com/uploads/visa-card-logo-9.png"
          alt="logoTwo"
        />
      </div>
      <div class="card-number">
        <h1>1234 1234 1234 1323</h1>
      </div>
      <div class="card-info">
        <div class="card-holder">
          <h5>Card Holder</h5>
          <h3>Janani Jayaraman</h3>
        </div>
        <div class="card-expiry">
          <h5>Expiry Date</h5>
          <h3>12/027</h3>
        </div>
      </div>
    </div>
   
    <div class="ATM-Card card-back">
      <div class="blackStrip"></div>
      <div class="cvv">
        <h3 class="cvv-number">123</h3>
      </div>
      <div class="info">
        <p>
          CVV number is present on the back side of your card on the magnetic
          strip. It verifies that the card is physically available with the
          individual using it during the transaction. Debit and credit cards
          are mainly used for online transactions or for other virtual payment
          gateways.
        </p>
      </div>
    </div>
  </div>
</div>


          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
