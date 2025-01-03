import React, { useEffect, useState } from "react";
import "./Transactions.css";
import axios from "axios";

const Transactions = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 

  async function transacData() {
    let res = await axios.get(
      "http://localhost:8081/transac/transactions/677760a4dc156117fc79850a"
    );
    setData(res.data);
  }

  useEffect(() => {
    transacData();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage); 
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ); 

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="dashboard-container">
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
            {currentData.map((el, index) => {
              const dateObj = new Date(el.date);
              const formattedDate = `${String(dateObj.getDate()).padStart(2, "0")}-${String(
                dateObj.getMonth() + 1
              ).padStart(2, "0")}-${dateObj.getFullYear()}`;
              return (
                <tr key={el._id}>
                  <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
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

     
        <div className="pagination-controls">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Transactions;
