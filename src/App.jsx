import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Layout from './Pages/Layout'
import Login from './Components/Login'
import Home from './Pages/Home'
import RegisterForm from './Components/Register'
import Protectedroute from './Components/Protectedroute'
import AdminUser from './Pages/AdminUser'
import View from './Pages/View'
import Editdata from './Pages/Editdata'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout />}>  
      <Route path='/' element={<Protectedroute/>}> 
      <Route index element={<Home/>}/> 
      <Route path='/adminuser' element={<AdminUser />}/>
      <Route path='/userdetails/:id' element={<View/>}/>
      <Route path='/editdata/:id' element={<Editdata/>}/>
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<RegisterForm />} />
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App

