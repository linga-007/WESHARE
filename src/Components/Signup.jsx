import React, { useState } from 'react';
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Signup = () => {
  const [Username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [error,seterror] = useState('')
  const navigate = useNavigate()

  
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(Username)
    console.log(password)
    if(Username !== '' || password !== ''){
        axios.post('https://ride-share-service.onrender.com/signup',{
        Name:Username,
        Password:password
    }).then(response => {
        console.log(response.data.status)
        navigate("/Login")
    }).catch(error => {
        seterror(error.response.data.status)
        
    })
    }
    else{
        seterror('Fill The Credentials Properly')
    }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
        
      <div className="bg-white rounded-lg  flex items-center justify-center  flex-col w-[700px] h-[600px] ">
    
        <h2 className="text-black mb-14 text-Inter text-3xl font-medium">
          SignUp
        </h2>
        {error && <p className='error' style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSignUp}>
          <div className="mb-8">
            <label className="block text-[#333333] text-Inter">
              Username
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-[416px] border  text-black rounded-md border-[#8A8A8A]"
              placeholder="username"
              value={Username}
              onChange={(e)=>{
                setUsername(e.target.value)
              }}
            />
          </div>
          <div className="mb-8">
            <label className="block text-[#333333] text-Inter ">
              Email
            </label>
            <input
              type="email"
              className="mt-1 p-2 w-[416px] text-black border rounded-md border-[#8A8A8A]"
              placeholder="admin@gmail.com"
              value={email}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
            />
          </div>
          <div className="mb-8">
            <label className="block text-[#333333] text-Inter ">
               Password
            </label>
            <input
              type="password"
              className="mt-1 p-2 w-[416px] text-black border rounded-md border-[#8A8A8A]"
              placeholder="********"
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
            />
          </div>
          <div className="mb-8">
            <label className="block text-[#333333] text-Inter ">
              Confirm Password
            </label>
            <input
              type="password"
              className="mt-1 p-2 w-[416px] text-black border rounded-md border-[#8A8A8A]"
              placeholder="********"
              value={number}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
            />
          </div>
          
          <button 
           
            className="w-[416px] bg-[#000]  text-white py-2 rounded-md "
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;