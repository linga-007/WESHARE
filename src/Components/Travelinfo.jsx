import React, { useEffect, useState } from "react";
import startimg from "../images/start.png";
import team from "../images/team.png";

import endimg from "../images/final.png"
import car from "../images/carblue.jpeg";
import DriverCard from "./DriverCard";
import axios from "axios";

const Travelinfo = () => {
  const [start, setstart] = useState("");
  const [end, setend] = useState("");

  const [startlat, setstartlat] = useState("");
  const [startlng, setstartlng] = useState("");

  const [endlat, setendlat] = useState("");
  const [endlng, setendlng] = useState("");

  const[istrue,setistrue] = useState(false)

  function changeStart(e) {
    setstart(e.target.value);
  }
  function changeEnd(e) {
    setend(e.target.value);
  }

  const [Resp, setResponse] = useState([]);
  

  function SearchDriver() {
    // console.log(start,end)
    // var url = "https://geocoder.ls.hereapi.com/6.2/geocode.json?searchtext="+start + "&gen=9&apiKey={zAymfjkXtJ8y6mErXuprXDZHICc1g5xlZyqjwt2GLqk}";
    // var htp = new XMLHttpRequest();
    // htp.open("GET",url,false);
    // htp.send(null);
    // var json_ = JSON.parse(htp.responseText);
    // console.log(json_);
    var apiKey = "ZvMWyrsuWLdeiE3JPENy-hpUihjQf2A5S2x3GXTPqA0";
  var url = 'https://geocode.search.hereapi.com/v1/geocode?q=' + encodeURIComponent(start) + '&apiKey=' + apiKey;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data.items.length) {
      setstartlat(data.items[0].position.lat);
      setstartlng(data.items[0].position.lng);
      console.log(data.items[0].position.lat)
      
    } else {
      console.log("Error: Unable to retrieve latitude and longitude for the provided location.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
  var url = 'https://geocode.search.hereapi.com/v1/geocode?q=' + encodeURIComponent(end) + '&apiKey=' + apiKey;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data.items.length) {
      setendlat(data.items[0].position.lat);
      setendlng(data.items[0].position.lng);
      console.log(endlat)
      
    } else {
      console.log("Error: Unable to retrieve latitude and longitude for the provided location.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
   
    fetch("https://ride-share-service.onrender.com/findData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        startcity: start,
        endcity: end,
      }),
    }).then((res) => {
      res.json().then((response) => {
        setResponse(response);
      });
    });
  }
//   console.log(Resp);
  return (
    <div
      className="h-[869px] w-100%  border position: static rounded-lg flex justify-center gap-10 items-center "
      style={{
        backgroundImage: `url(${car})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-[780px] w-[600px] position-absolute bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white  rounded-lg shadow-lg border-opacity-70 border-white flex justify-center items-center border flex-col gap-10  ">
        <h2 className="text-4xl font-bold mt-10 ">
          Go anywhere with <br></br>Socio
        </h2>
        <div className="flex direction-row gap-4">
          <img src={startimg} width={40} height={40}></img>
          <input
            type="String"
            placeholder="Enter Location"
            onChange={changeStart}
            className="border-black border bg-transparent text-black rounded-lg w-[300px] pl-5"
          ></input>
        </div>
        <div className="flex direction-row gap-4">
          <img src={endimg} width={40} height={40}></img>
          <input
            type="String"
            placeholder="Enter Destination"
            onChange={changeEnd}
            className="border-black  bg-transparent border rounded-lg w-[300px] pl-5"
          ></input>
        </div>
        <div className="flex direction-row gap-4">
          <img src={team} width={40} height={40}></img>
          <input
            type="String"
            placeholder="Number of Persons"
            className="border-black  bg-transparent border rounded-lg w-[300px] pl-5"
          ></input>
        </div>
        <button
          className="border w-[90px] h-[40px] bg-black rounded-lg text-white border-black"
          onClick={SearchDriver}
        >
          Search
        </button>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.3919747899258!2d77.0599895293973!3d10.8278392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba84f7e1e2799e1%3A0x2574ee7143b04954!2sBahwan%20Cybertek!5e0!3m2!1sen!2sin!4v1710247631408!5m2!1sen!2sin"
          width="600"
          height="350"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="p-5"
        ></iframe>
      </div>
      <div className="h-[780px] position-absolute w-[600px] bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white shadow-lg border-opacity-30 border-white border border-black rounded-lg flex justify-center items-center p-5 flex-col gap-10">
        {
          // Resp.length?console.log(Resp):null

          Resp.length
            ? Resp.map((data, index) =>{
                return (
                <DriverCard data={data} startlat = {startlat} startlng = {startlng} endlat = {endlat} endlng = {endlng}/>
                // console.log("ok")
            )})
            : <div>Drivers will be shown here</div>
        }
      </div>
      {/* <a href='/Dash'><button>gotodashboard</button></a> */}
    </div>
  );
};

export default Travelinfo;
