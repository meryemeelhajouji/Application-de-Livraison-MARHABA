import React from 'react';
import './App.css';
// import Login from  './composents/auth/login'
import Login from "./authPage/login";
import Home from "./authPage/HomePage";
import Register from "./authPage/Register";
import Dashboard from "./composents/Dashboard"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./composents/Header";
import Protected from "./composents/Protected"


function App() {
  return (
  
  <Router>
  <div className="">
    <Header/>
     
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/Register" element={<Register/>}/>
   <Route 
   path="/Dashboard" 
   element=
   {<Protected>
   <Dashboard/>
   </Protected>}
   />



   </Routes>

    </div>
  </Router>
 
  );
}

export default App;
