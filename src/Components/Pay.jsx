import React from 'react'
import payment from '../images/payment.jpeg'
import tick from '../images/tick.png'
const Pay = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white rounded-lg  flex items-center justify-center gap-10 flex-col w-[627px] h-[484px] "
      style={{
        backgroundImage: `url(${payment})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <p className='text-white font-bold font-sans text-5xl'>Success !</p>
        <img src={tick} width={200} height={200}></img>
        <p className='text-[#00BF62] font-bold font-sans text-2xl'>Thank you for your Ride !</p>
      </div>
    </div>
  )
}

export default Pay