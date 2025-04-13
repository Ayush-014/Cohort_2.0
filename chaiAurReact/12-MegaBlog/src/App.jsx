import { useEffect, useState } from 'react'
import './App.css'
import conf from "./conf/conf.js"
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth.js"
import {login, logout} from "./store/authSlice.js"
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from "react-router-dom"
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData)
          dispatch(login({userData}))
      else
          dispatch(logout())
    })
    .finally(() => setLoading(false))
  },[])

  return loading ? null : (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-500'>
      <div className='w-full block'>
          <Header />
          <main>
            TODO: {/* <Outlet /> */}
          </main>
          <Footer />
      </div>
    </div>
  )
}

export default App
