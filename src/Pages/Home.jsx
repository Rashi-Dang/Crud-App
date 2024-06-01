import React, { useEffect } from 'react'
import Table from '../Components/Table';
import axios from 'axios';
import { useState } from 'react';

const Home = () => {
  // const userName = JSON.parse (localStorage.getItem("user"));
  const [data,setData] = useState([]);
  // const [loading,setLoading] = useState(false);
  const getAlldata = async()=>{
  const response = await axios.get("http://localhost:5176/userdata");
  console.log(response.data);
  setData(response.data);
  }

  // delete user data
  const deleteUser = async (userId)=>{
    const check = confirm('Are You Sure?');
    if(check){
        await axios.delete(`http://localhost:5176/userdata/${userId}`);
        alert('Your data is deleted Successfully'); 
        getAlldata();
    } 
    }

  useEffect(()=>{
    getAlldata();
  },[]);

  return (
    <>
    {/* <p className='text-4xl text-center'>Welcome! {userName.name}</p> */}
    <Table data={data} deleteUser={deleteUser}/>
    </>
  )
}

export default Home
