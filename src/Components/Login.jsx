import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


const Login = () => {
    // const history = useHistory()
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
      e.preventDefault();
      console.log(username)
      console.log(password)
      if(username !== '' || password !== ''){
          axios.post('https://ride-share-service.onrender.com/login',{
          Name:username,
          Password:password
      }).then(response => {
          console.log(response.data.status)
          navigate("/Info")
      }).catch(error => {
          setError(error.response.data.status)
          
      })
      }
      else{
          setError('Fill The Credentials Properly')
      }
  };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white rounded-lg  flex items-center justify-center  flex-col w-[627px] h-[484px] ">
       

        <h2 className="text-black mb-14 text-Inter text-3xl font-medium">
          Log In
        </h2>
        {error && <p className='error' style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-8">
            <label className="block text-[#333333] text-Inter">
              Email
            </label>
            <input
              type="string"
              className="mt-1 p-2 w-[416px] border  text-black rounded-md border-[#8A8A8A]"
              placeholder="admin@gmail.com"
              value={username}
              onChange={(e)=>{
                setUsername(e.target.value)
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
          <button 
           
            className="w-[416px] bg-[#000]  text-white py-2 rounded-md "
          >
            Log In
          </button>
        </form>
      </div>
    </div>
    );
};

export default Login;