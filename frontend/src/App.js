import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import CreateAcc from './Components/CreateAcc';
import DashBoard from './Components/DashBoard';
import Withdrawl from './Components/Withdrawl';
import Deposit from './Components/Deposit';
import LoanRequestForm from './Components/LoanReq';
import Update from './Components/Update';
import Transactions from './Components/Transactions';
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <div>
      <Routes>
        {/* Public routes (without Sidebar) */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateAcc />} />

        {/* Authenticated routes (with Sidebar) */}
        <Route
          path="/*"
          element={
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <div className="main-content">
                <Routes>
                  <Route path="/" element={<DashBoard />} />
                  <Route path="/withdraw" element={<Withdrawl />} />
                  <Route path="/deposit" element={<Deposit />} />
                  <Route path="/loanreq" element={<LoanRequestForm />} />
                  <Route path="/update" element={<Update />} />
                  <Route path="/transactions" element={<Transactions />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
