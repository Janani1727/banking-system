
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import { Route, Routes } from 'react-router-dom';
import CreateAcc from './Components/CreateAcc';

function App() {
 return(
  <div>
     <Routes>
        <Route element={<Register/>} path='/register'/>
        <Route element={<Login/>} path='/login'/>
        <Route element={<CreateAcc/>} path='/create'/>
     </Routes>
  </div>
 )
}

export default App;


