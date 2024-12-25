import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './components/Home/Home.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { About } from './components/About/About.jsx'
import { BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import { Signup } from './components/Signup/Signup.jsx'
import { Signin } from './components/Signin/Signin.jsx'
import { Todo } from './components/Todo/Todo.jsx'
import { useEffect } from 'react'
import {useDispatch} from "react-redux"
import { authActions } from './store/index.js'
function App() {
  const dispatch=useDispatch()
useEffect(function(){
  if(sessionStorage.getItem("id")){
    dispatch(authActions.login())
  }
},[])
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/todo" element={<Todo/>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        </Routes>
        <Footer></Footer></BrowserRouter>

  
    </div>
  )
}

export default App
