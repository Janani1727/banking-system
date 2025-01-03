import "./Dashboard.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import Sidebar from "./Sidebar";

const DashBoard = () => {
  const [balance, setBalance] = useState(0);
  const [data, setData] = useState([]);
  const [transactions, setTransactions] = useState([]);

  async function transacData() {
    let res = await axios.get(
      "http://localhost:8081/transac/transactions/677760a4dc156117fc79850a"
    );
    setData(res.data);
    setTransactions(res.data);
  }

  useEffect(() => {
    transacData();
  }, []);

  // Calculate balance after transactions data is set
  useEffect(() => {
    if (transactions.length > 0) {
      const groupedData = transactions.reduce(
        (acc, transaction) => {
          if (transaction.type === "Deposit") {
            acc.deposits += transaction.amount;
          } else if (transaction.type === "Withdrawal") {
            acc.withdrawals += transaction.amount;
          }
          return acc;
        },
        { deposits: 0, withdrawals: 0 }
      );
      // Set the balance
      setBalance(groupedData.deposits - groupedData.withdrawals);
    }
  }, [transactions]);

  const getPieChartData = () => {
    if (!Array.isArray(transactions)) {
      return [];
    }

    const groupedData = transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "Deposit") {
          acc.deposits += transaction.amount;
        } else if (transaction.type === "Withdrawal") {
          acc.withdrawals += transaction.amount;
        }
        return acc;
      },
      { deposits: 0, withdrawals: 0 }
    );

    return [
      { name: "Deposits", value: groupedData.deposits },
      { name: "Withdrawals", value: groupedData.withdrawals },
    ];
  };

  const pieChartData = getPieChartData();
  const COLORS = ["#0088FE", "#FF8042"];

  return (
    <>
    <Sidebar balance={balance} />

      <div className="dashboard-container">
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
                <th>Type</th>
                <th>Deposit Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0, 3).map((el, index) => {
                const dateObj = new Date(el.date);
                const formattedDate = `${String(dateObj.getDate()).padStart(2, "0")}-${String(
                  dateObj.getMonth() + 1
                ).padStart(2, "0")}-${dateObj.getFullYear()}`;
                return (
                  <tr key={el._id}>
                    <td>{index + 1}</td>
                    <td>{el.accountId}</td>
                    <td>{el.accountId}</td>
                    <td>{el.type}</td>
                    <td>{el.amount}</td>
                    <td>{formattedDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="chart-and-card">
            <PieChart width={400} height={400}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend layout="vertical" align="left" verticalAlign="middle" />
            </PieChart>

            <div className="card-container">
              <div className="card">
                <div className="ATM-Card card-front">
                  <div className="logos">
                    <img
                      className="logoOne"
                      src="https://cdn-icons-png.flaticon.com/512/6404/6404100.png"
                      alt="logo"
                    />
                    <img
                      className="logoTwo"
                      src="https://www.freepnglogos.com/uploads/visa-card-logo-9.png"
                      alt="logoTwo"
                    />
                  </div>
                  <div className="card-number">
                    <h1>1234 1234 1234 1323</h1>
                  </div>
                  <div className="card-info">
                    <div className="card-holder">
                      <h5>Card Holder</h5>
                      <h3>Janani Jayaraman</h3>
                    </div>
                    <div className="card-expiry">
                      <h5>Expiry Date</h5>
                      <h3>12/027</h3>
                    </div>
                  </div>
                </div>

                <div className="ATM-Card card-back">
                  <div className="blackStrip"></div>
                  <div className="cvv">
                    <h3 className="cvv-number">123</h3>
                  </div>
                  <div className="info">
                    <p>
                      CVV number is present on the back side of your card on the
                      magnetic strip. It verifies that the card is physically
                      available with the individual using it during the
                      transaction. Debit and credit cards are mainly used for
                      online transactions or for other virtual payment gateways.
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
