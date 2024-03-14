import React, { useState } from 'react'
import CarDetails from './CarDetails'
import Transport from './Transport'
import GooglemapApi from './GooglemapApi'
import {useLocation} from 'react-router-dom'

export const DriverInfo = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    const startlat = params.get('startlat')
    const startlng = params.get('startlng')
    const endlat = params.get('endlat')
    const endlng = params.get('endlng')

    

  return (
        <div className='h-[767px] w-100%  border rounded-lg flex justify-between m-3 p-3 gap-3 shadow-[0px_0px_10px_rgba(8,_112,_184,_0.7)]  shadow-[#5E81AC] '>
            <div className='w-[522px] h-100% flex flex-col gap-3'>
                <CarDetails id={id}/>
                <Transport id={id}/>
            </div>
            {/* <Map/> */}
            <GooglemapApi startlat = {startlat} startlng = {startlng} endlat = {endlat} endlng = {endlng}/>
            
            

        </div>
  

  
  )
  }