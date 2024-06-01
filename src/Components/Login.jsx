import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name:"",
    email:"",
    password:""
   });

  const handleLogin = (e) =>{
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    
    if(input.email === loggeduser.email && input.password === loggeduser.password){
    localStorage.setItem("loggedIn", true);
    alert("You're Successfully Login");
    navigate("/");
    }   
    else{
      alert("You entered wrong Email and Password");
    }
  }; 

  return (
    <div className="max-w-sm mx-auto mt-10 mb-10 p-8 bg-slate-900 rounded-lg">
      <h2 className="text-3xl mb-4 text-white text-center">Login</h2>
      <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        name="email"
        value={input.email}
        onChange={(e) => setInput({...input,[e.target.name]: e.target.value,})}
        className=" placeholder:text-slate-400 block bg-slate-800 w-full rounded-md py-2 pl-9 pr-3 "
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={input.password}
        onChange={(e) => setInput({...input,[e.target.name]: e.target.value,})}
        className=" placeholder:text-slate-400 block bg-slate-800 w-full rounded-md py-2 pl-9 pr-3 "
      />
      <br />
      <button className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded">Login</button>
      <br />
      <p className='text-center text-muted mt-5 mb-0 text-white'>Don't have an Account?
      <Link to='/register' className='text-white font-bold text-blue-700'> Register Here!</Link></p>
      </form>
    </div>
  );
};

export default LoginForm;

