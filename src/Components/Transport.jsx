import React, { useEffect } from 'react'
import { useState } from 'react'
import Analytics from './Analytics'
import TrackingComponent from './TrackingComponent'
import Details from './Details'
import {useNavigate} from 'react-router-dom'

const Transport = (props) => {
    const navigate = useNavigate();
    
    
    const [data,setdata] = useState({})

    useEffect(()=>{
        fetch("https://ride-share-service.onrender.com/findData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        _id:props.id
      }),
    }).then((res) => {
      res.json().then((response) => {
        
        response.map((value,index)=>{
            setdata(value);
        })
      });
    });
    },[])

    function handlepay(){
        fetch("https://ride-share-service.onrender.com/edit",{
                method: 'PATCH',
                headers: {
                  'content-type': 'application/json'
                },
                body: JSON.stringify({
                  id:data._id,
                  totalRide:data.totalRide
                })
              })
        navigate('/Pay')
    }



    const [options, setOptions] = useState("tracking")
  return (
    <div className='w-[55vh] h-[54vh] p-5 border border-gray-950 bg-[#e4ecfd] rounded-lg  '>
                    <div className='flex justify-start gap-16'>
                        <button className='font-semibold text-[#7b7e83] text-xl' onClick={()=>{setOptions("tracking")}}>Tracking</button>
                        <button className='font-semibold text-[#7b7e83] text-xl' onClick={()=>{setOptions("analytics")}}>Analytics</button>
                        <button className='font-semibold text-[#7b7e83] text-xl' onClick={()=>{setOptions("details")}}>Details</button>
                    
                    </div>
                    
                    <div className='flex h-100% w-full '>
                        {
                            (options === "tracking")? <TrackingComponent /> : ""
                        }
                        {
                            (options === "analytics")? <Analytics /> : ""
                        }
                        {
                            (options === "details")? <Details /> : ""
                        }
                    </div>
                    <div className=' flex justify-end'>
                        <button className='w-[90px]  rounded-lg text-2xl h-[40px] bg-[#00BF62] flex  justify-center' onClick={handlepay}>Pay</button>
                    </div>
                </div>
  )
}

export default Transport