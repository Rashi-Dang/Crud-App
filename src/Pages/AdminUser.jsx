import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AdminUser = () => {
    const navigate = useNavigate();
  const [formdata,setFormdata]=useState({
    username:"",
    name:"",
    userid:"",
    age:"",
    email:"",
    country:"",
    city:"",
    dob:"",
    phone:"",
    address:""
  })

  const onchangehandler=(e)=>{
  const {name,value}=e.target;
  setFormdata({...formdata,[name]:value})
  }
  const submitdata= async (e)=>{
  e.preventDefault();
  console.log(formdata);
  await axios.post('http://localhost:5176/userdata',formdata);
  alert( "Your Data is added Successfully");
  setFormdata({});
  navigate("/")

  }
  return (
    <div>
      {/* <!-- Modal toggle --> */}
{/* <div className="flex justify-center m-5">
    <button id="defaultModalButton" data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">
    Create product
    </button>
</div> */}

{/* <!-- Main modal --> */}
<div id="defaultModal" tabindex="-1" aria-hidden="true" className=" overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-modal md:h-full">
    <div className="m-auto p-4 w-full max-w-2xl h-full md:h-auto">
        {/* <!-- Modal content --> */}
        <div className=" p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Add Product
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <form action="#" onSubmit={submitdata}>
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" onChange={(e)=>onchangehandler(e)} value={formdata.name} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Full Name" required=""/>
                    </div>
                    <div>
                        <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                        <input type="text" onChange={(e)=>onchangehandler(e)} value={formdata.username} name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="UserName" required=""/>
                    </div>
                    <div>
                        <label for="userId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UserId</label>
                        <input type="number" onChange={(e)=>onchangehandler(e)} value={formdata.userid} name="userid" id="userId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="101" required=""/>
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" onChange={(e)=>onchangehandler(e)} value={formdata.email} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="abc@gmail.com" required=""/>
                    </div>
                    <div>
                        <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone No.</label>
                        <input type="text" onChange={(e)=>onchangehandler(e)} value={formdata.phone} name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="123-456-7890" required=""/>
                    </div>
                    <div>
                        <label for="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                        <input type="number" onChange={(e)=>onchangehandler(e)} value={formdata.age} name="age" id="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your age" required=""/>
                    </div>
                    <div>
                        <label for="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                        <input type="text" onChange={(e)=>onchangehandler(e)} value={formdata.country} name="country" id="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Country" required=""/>
                    </div>
                    <div>
                        <label for="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                        <input type="text" onChange={(e)=>onchangehandler(e)} value={formdata.city} name="city" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="City" required=""/>
                    </div>
                    <div>
                        <label for="dob" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                        <input type="date" onChange={(e)=>onchangehandler(e)} value={formdata.dob} name="dob" id="dob" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="dob" required=""/>
                    </div>
                    
                    <div className="sm:col-span-2">
                        <label for="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <textarea id="address" onChange={(e)=>onchangehandler(e)} value={formdata.address} name="address" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write your address here..."></textarea>                    
                    </div>
                </div>
                <button type="submit" className="text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ml-40">
                    <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Add new product
                </button>
            </form>
        </div>
    </div>
</div>
    </div>
  )
}

export default AdminUser
