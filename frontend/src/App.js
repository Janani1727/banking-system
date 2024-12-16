
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
 return(
  <div>
     <Routes>
        <Route element={<Register/>} path='/register'/>
        <Route element={<Login/>} path='/login'/>
     </Routes>
  </div>
 )
}

export default App;


