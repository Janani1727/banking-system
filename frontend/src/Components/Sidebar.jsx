import React,{useState} from "react";
import "./Sidebar.css";
import { IoNotifications } from "react-icons/io5";
import { Link, Route, Routes } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";  

const Sidebar = ({balance}) => {
 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setIsModalOpen(true);  // Open the modal when logout is clicked
  };

  const handleLogoutConfirm = () => {
   
    navigate("/register");
  };

  const handleCancel = () => {
    setIsModalOpen(false);  // Close the modal if Cancel is clicked
  };

  return (
    <>
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
            <h3>Welcome back, Janani!</h3>
          </div>
          <div className="account-balance">
            <h3>
              Your account balance: <span>{balance}</span>
            </h3>
            <p className="notification-icon">
              <IoNotifications size={22} />
            </p>
            <button className="log" onClick={handleLogoutClick}>Logout</button>
          </div>
        </div>
      </div>

      
        <div className="sidebar">
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
          
         

      {/* Modal for Logout */}
      
    </div>
            
        <div className="main-content">
          
          
          {isModalOpen && (
        <div  className="modal-overlay">
          <div className="modal-content">
            <h3>Are you sure you want to logout?</h3>
            <button onClick={handleLogoutConfirm} className="btn-confirm">Yes, Logout</button>
            <button onClick={handleCancel} className="btn-cancel">Cancel</button>
          </div>
        </div>
      )}
        </div>
     
    </>
  );
};

export default Sidebar;
