
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import { Route, Routes } from 'react-router-dom';
import CreateAcc from './Components/CreateAcc';
import DashBoard from './Components/DashBoard';

function App() {
 return(
  <div>
     <Routes>
        <Route element={<Register/>} path='/register'/>
        <Route element={<Login/>} path='/login'/>
        <Route element={<CreateAcc/>} path='/create'/>
        <Route element={<DashBoard/> } path="/dashboard"/>
     </Routes>
  </div>
 )
}

export default App;


