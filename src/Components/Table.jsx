// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { useState } from 'react';
// import axios from 'axios';

// const Table = ({data,deleteUser}) => {
//    const [nameList, setNameList]=useState([]);
//    const[search, setSearch]=useState("");
   
//    useEffect(()=>{
//     axios.get("http://localhost:5176/userdata")
//     .then((response)=>
//         (console.log(response.data)))
//    },[]);

//     return (
//     <>     

// <div className="relative overflow-x-auto bg-gray-700">
// <div className="input-wrapper">
//         <input type="text" placeholder='Type here to search' onChange={(e)=>setSearch(e.target.value)}/>
//         {
//             nameList.filter((username)=>{
//                 if(search===""){
//                     return username
//                 }
//                 else if(username.username.toLowerCase().includes(search.toLowerCase())){
//                     return username
//                 }
//             })
//         }
//         </div>
//     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
//             <tr>
//                 <th scope="col" className="px-6 py-3">
//                     Sr.No.
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     UserId
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Username
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Phone
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Email
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Country
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Actions
//                 </th>
//             </tr>
//         </thead>
//         <tbody>
//             {
//                 data?.map((item,index)=>{
//                    const {id,userid,username,country,age,city,dob,address,phone,email}=item
//                    return(
//             <tr key={userid} className="bg-white dark:bg-gray-800">
//                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     {index+1}
//                 </th>
//                 <td className="px-6 py-4">
//                     {userid}
//                 </td>
//                 <td className="px-6 py-4">
//                     {username}
//                 </td>
//                 <td className="px-6 py-4">
//                     {phone}
//                 </td>
//                 <td className="px-6 py-4">
//                     {email}
//                 </td>
//                 <td className="px-6 py-4">
//                     {country}
//                 </td>
//             <Link to={`userdetails/${id}`}>  <button className='border-2 rounded border-slate-200 py-2 px-3 text-white font-bold'>View</button></Link>
//             <Link to={`editdata/${id}`}> <button className='border-2 rounded border-slate-500 py-2 px-3 text-white font-bold mx-2'>Edit</button></Link>
//                 <button onClick={()=>deleteUser(id)} className='border-2 rounded border-red-800 py-2 px-3 text-white font-bold'>Delete</button>
                
//             </tr>

//                    )
//                 })
//             }
//         </tbody>
//     </table>
// </div>

//     </>
//   )
// }

// export default Table


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Table = ({ deleteUser }) => {
    const [nameList, setNameList] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5176/userdata')
            .then((response) => {
                setNameList(response.data); // Update nameList state with fetched data
            })
            .catch((error) => {
                console.error('Error fetching userdata:', error);
            });
    }, []);

    return (
        <>
            <div className="relative overflow-x-auto bg-gray-700">
                <div>
                <span className='text-white mx-2'>Search here:</span>
                    <input type="text" placeholder="Type here to search"  className="border border-gray-300 bg-slate-700 text-white h-10 px-5 pr-40 rounded-full text-sm focus:outline-none  my-2" 
                    onChange={(e) => setSearch(e.target.value)}  />
                </div>    
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Sr.No.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                UserId
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Username
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Country
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {nameList
                            .filter((user) => {
                                if (!search) return true; // If search is empty, show all users
                                return user.username.toLowerCase().includes(search.toLowerCase());
                            })
                            .map((user, index) => {
                                const { id, userid, username, country, phone, email } = user;
                                return (
                                    <tr key={userid} className="bg-white dark:bg-gray-800">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {index + 1}
                                        </th>
                                        <td className="px-6 py-4">{userid}</td>
                                        <td className="px-6 py-4">{username}</td>
                                        <td className="px-6 py-4">{phone}</td>
                                        <td className="px-6 py-4">{email}</td>
                                        <td className="px-6 py-4">{country}</td>
                                        <td>
                                            <Link to={`userdetails/${id}`}>
                                                <button className="border-2 rounded border-slate-200 py-2 px-3 text-white font-bold">View</button>
                                            </Link>
                                            <Link to={`editdata/${id}`}>
                                                <button className="border-2 rounded border-slate-500 py-2 px-3 text-white font-bold mx-2">Edit</button>
                                            </Link>
                                            <button onClick={() => deleteUser(id)} className="border-2 rounded border-red-800 py-2 px-3 text-white font-bold">Delete</button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Table;
