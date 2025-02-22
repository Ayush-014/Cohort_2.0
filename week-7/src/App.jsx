import { useState } from 'react'
// import './App.css'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Home from './components/Home'

function App() {
  // const navigate = useNavigate(); {/** this hook can only be invoked inside <BrowserRouter> component */}

  return (
    <div>
      {/*1. <div style={{background: "black", color:"white"}}>
          Hi this is the topbar
      </div> */}

      {/* 2. // not actually client side routing and actually refetching the home,dashboard page. i.e. actually a hard-reloading of the page-> all the html,css,js,etc are getting fetched again.
       <div>
        <button onClick={() => {
          window.location.href = "/home"; }}>
          Home
        </button>
        <button onClick={() => {
          window.location.href = "/dashboard"; }}>
          Dashboard
        </button>
      </div> */}

      {/* 3. //this will not work properly bcz useNavigate expects that the component in which it is being used is inside the <BrowserRouter> component.
      <div>
        <button onClick={() => {
          navigate("/home");
        }}>
          Home
        </button>
        <button onClick={() => {
          navigate("/dashboard");
        }}>
          Dashboard
        </button>
      </div> */}

      <BrowserRouter>
        <AppBar />  {/* all the prevoius logic(just above comment i.e. 3rd one) is now wrapped inside a function to put it inside <BrowserRouter> component */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function AppBar() {
  const navigate = useNavigate();
  
  return  <div>
  <button onClick={() => {
    navigate("/home");
  }}>
    Home
  </button>
  <button onClick={() => {
    navigate("/dashboard");
  }}>
    Dashboard
  </button>
</div>
}

export default App
