import React from "react";
import distance from "../images/distance.png";
import percentage from "../images/percentage.png";
import time from "../images/time.png";
import travel from "../images/travel.png";

const TrackingComponent = () => {
  return (
    <div className="pt-7 flex flex-col gap-10">
      <div className="flex flex-row items-center gap-8">
          <img src={travel} width={40} height={40}></img>   
        <div>
          <h2 className="text-xl font-semibold">Total Runtime</h2>
          <h4 className="text-[#7b7e83] font-medium text-lg">67 minutes</h4>
        </div>
      </div>
      <div className="flex flex-row items-center gap-8">  
          <img src={time} width={40} height={40}></img>  
        <div>
        <h2 className="text-xl font-semibold">Total Wait-time</h2>
        <h4 className="text-[#7b7e83] font-medium text-lg">12 minutes</h4>
        </div>
      </div>
      <div className="flex flex-row items-center gap-8">
          <img src={distance} width={40} height={40}></img>
        <div>
        <h2 className="text-xl font-semibold">Total Distance Travelled</h2>
        <h4 className="text-[#7b7e83] font-medium text-lg">9.7 KM</h4>
        </div>
      </div>
      <div className="flex flex-row items-center gap-8">    
          <img src={percentage} width={40} height={40}></img>    
        <div>
        <h2 className="text-xl font-semibold">Remaining % of Travel</h2>
        <h4 className="text-[#7b7e83] font-medium text-lg">24%</h4>
        </div>
      </div>
    </div>
  );
};

export default TrackingComponent;
