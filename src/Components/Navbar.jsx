import React from 'react'
import { Link, NavLink, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const loggedIn= localStorage.getItem("loggedIn")
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    alert("You're Logout Successfully");
    navigate("/login");
  }
  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <span className="ml-3 text-xl">CRUD-APP</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      <NavLink to='/' className="mr-5 hover:text-white">Home</NavLink>
      <NavLink to='/adminuser' className="mr-5 hover:text-white">Add Admin User</NavLink>
      <NavLink to='/login' className="mr-5 hover:text-white">Login</NavLink>
      {loggedIn? <button onClick={handleLogout} type='submit' className="mr-5 hover:text-white">Logout</button>:""}
      <NavLink to='/register' className="mr-5 hover:text-white">Register</NavLink>

    </nav>
    {/* <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> */}
  </div>
</header>
    </div>
  )
}

export default Navbar
