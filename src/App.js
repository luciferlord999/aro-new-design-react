
import axios from 'axios';
import React from 'react'
import Home from './Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Service from './Pages/Service';
import CartInfo from './Cart/CartInfo';


function App() {
  axios.defaults.baseURL = "http://3.110.38.250/";
  return (
    <>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/service/:service_url" element={<Service />} />
        <Route path="/cartinfo" element={<CartInfo/>}/>
        </Routes>

      </Router>
      
      {/* <Home /> */}
    </>
  )
}

export default App