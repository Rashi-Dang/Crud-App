import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const navigate= useNavigate();
 const [input, setInput] = useState({
  name:"",
  email:"",
  password:""
 });
 
 // to store value in local storage
 const handleSubmit = (e) =>{
  e.preventDefault();
  localStorage.setItem("user", JSON.stringify(input));
  navigate("/login");
 };

  return (
    <div className="max-w-sm mx-auto mt-10 mb-10 p-12 bg-slate-900 rounded-lg">
      <h2 className="text-3xl mb-4 text-white text-center pb-2">Create An Account</h2>
      <form onSubmit={handleSubmit}>
        <input
        name="name"
        value={input.name}
          type="text"
          placeholder="UserName"
          className=" placeholder:text-slate-400 block bg-slate-800 w-full rounded-md py-2 pl-9 pr-3 "
          onChange={(e) => setInput({...input,[e.target.name]: e.target.value,})}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          className=" placeholder:text-slate-400 block bg-slate-800 w-full rounded-md py-2 pl-9 pr-3 "
          name="email"
          value={input.email}
          onChange={(e) => setInput({...input,[e.target.name]: e.target.value,})}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className=" placeholder:text-slate-400 block bg-slate-800 w-full rounded-md py-2 pl-9 pr-3 "
          name="password"
          value={input.password}
          onChange={(e) => setInput({...input,[e.target.name]: e.target.value,})}
        />
        <br />
        <button type="submit" className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded">Register</button>

      <p className='text-center text-muted mt-5 mb-0 text-white'>Already have an Account? 
      <Link to='/login' className='text-white font-bold text-blue-700'> Login Here!</Link></p>
      </form>
    </div>
  );
};

export default RegisterForm;
