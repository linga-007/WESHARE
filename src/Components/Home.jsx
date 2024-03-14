import React from "react";
import homecar from "../images/homecar.jpg";
import wave from "../images/wave.svg";
import phone from "../images/phone.svg";
import logo from '../images/logo.jpeg'
const Home = () => {
  return (
    <div
      className="h-[869px] w-100% flex justify-end  "
      style={{
        backgroundImage: `url(${wave})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex pt-10 pl-5 gap-10 font-bold text-3xl">
        <img src={logo} className="h-[50px] w-[50px] rounded-lg"></img>
        <p>WeShare</p>
      </div>
      <div className="flex justify-center items-center text-5xl font-sans  font-bold  pr-24 leading-relaxed ">
        Sharing the Road, Sharing the Load: <br></br>Your Trusted Ride-Share
        Partner!
      </div>
      <div>
        <div className="flex justify-between">
          <div className="flex pl-10">
            <div className=" pt-10 text-black text-2xl font-semibold font-sans">
              <a href="/Login">LOGIN</a>
            </div>
            <div className="mx-10 p-10 text-black text-2xl font-semibold font-sans">
              <a href="/Signup">SIGNUP</a>
            </div>
            
          </div>
        </div>

        <img src={phone} className="relative top-10 w-[600px] h-[600px]"></img>
      </div>
    </div>
  );
};

export default Home;
