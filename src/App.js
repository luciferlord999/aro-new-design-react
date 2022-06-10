
import axios from 'axios';
import React from 'react'
import Home from './Home/Home'


function App() {
  axios.defaults.baseURL = "http://3.110.38.250/";
  return (
    <>
      <Home />
    </>
  )
}

export default App