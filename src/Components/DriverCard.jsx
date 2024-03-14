import React from "react";
import user from "../images/user.png";
import {useNavigate} from 'react-router-dom'

const DriverCard = (props) => {
    console.log("hii")

    const navigate = useNavigate();
    console.log(props.startlat)


function booknow(){
    navigate(`/Dash?id=${props.data._id}&startlat=${props.startlat}&startlng=${props.startlng}&endlat=${props.endlat}&endlng=${props.endlng}`)

}

  return (
    <div className="w-[80%] h-auto rounded-lg border bg-grey gap-10 flex border-black p-3">
      <div>
      <img src={user} width={70} height={70} className=""></img>
      </div>
      <div className="flex flex-col gap-1 ">
        <h2 className="font-semibold font-sans text-xl">{props.data.name}</h2>
        <h5  className="font-semibold font-sans text-xl text-gray-500">{props.data.driverId}</h5>
        <h2  className="font-semibold font-sans text-lg">Rating:4.5</h2>
        
      </div>
      <div className="flex flex-col gap-1">
      <h2  className="font-semibold font-sans text-xl">{props.data.carType}</h2>
      <h2  className="font-semibold font-sans text-gray-500 text-lg">3/5</h2>
      </div>
      <button className='border w-[90px] h-[40px] bg-black rounded-lg text-white border-black' onClick={booknow}>Book Now</button>

    </div>
  );
};

export default DriverCard;
