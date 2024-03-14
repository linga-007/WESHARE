import React from 'react'
import car from '../images/car.png'
import { useEffect , useState } from 'react'

const CarDetails = (props) => {

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

  return (
    <div className=' w-[55vh] h-[30vh] flex gap-4 flex-col pl-5 pr-5 bg-[#e4ecfd] pt-5 border border-gray-950 rounded-lg  '>
        <div className='flex justify-between pl-7 pr-7'>
            <h1 className='font-bold text-2xl'>{data.name}<br></br><h5 className='font-normal text-xl'>{data.driverId}</h5></h1>
            <h2 className='text-[#7b7e83] font-semibold text-xl'>Driver Rating<br></br><h3>star</h3></h2>
        </div>
        <div className='w-100% h-[0.5px] bg-[#7b7e83]'></div>
        <div className='flex justify-start items-center pl-7 gap-5 '>
            <img src={car} width={60} height={60} ></img>
            <div className='flex flex-col'>
                <h1 className='font-semibold text-[#7b7e83]'>Vehicle Name</h1>
                <h1 className='text-black font-bold text-xl'>{data.vechiName}</h1>
            </div>
        </div>
        <div className='w-100% h-[0.5px] bg-[#7b7e83] '></div>
        <div className='flex justify-between pl-7 pr-7'>
        <h1 className='font-semibold text-[#7b7e83] '>Vehicle Model<br></br><h2 className='text-black font-bold text-xl'>{data.carType}</h2></h1>
        <h1 className='font-semibold text-[#7b7e83]'>Insurance<br></br><h2 className='text-black font-bold text-xl'>{data.insId}</h2></h1>
        <h1 className='font-semibold text-[#7b7e83]'>Vehicle Code<br></br><h2 className='text-black font-bold text-xl'>{data.vechiNo}</h2></h1>

        </div>
    </div>
  )
}

export default CarDetails