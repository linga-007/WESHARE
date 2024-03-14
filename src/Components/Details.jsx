import React from 'react'

import experience from "../images/suitcase.png"
import id from "../images/id.png"
import language from "../images/language.png"
import accidents from "../images/accident.png"

const Details = () => {
  return (
    <div className="pt-7 flex flex-col gap-10">
      <div className="flex flex-row items-center gap-8">
          <img src={experience} width={40} height={40}></img>   
        <div>
          <h2 className="text-xl font-semibold">Experience</h2>
          <h4 className="text-[#7b7e83] font-medium text-lg">5 yrs</h4>
        </div>
      </div>
      <div className="flex flex-row items-center gap-8">  
          <img src={id} width={40} height={40}></img>  
        <div>
        <h2 className="text-xl font-semibold">Id Proof</h2>
        <h4 className="text-[#7b7e83] font-medium text-lg">80%</h4>
        </div>
      </div>
      <div className="flex flex-row items-center gap-8">
          <img src={language} width={40} height={40}></img>
        <div>
        <h2 className="text-xl font-semibold">Language</h2>
        <h4 className="text-[#7b7e83] font-medium text-lg">Tamil,English</h4>
        </div>
      </div>
      <div className="flex flex-row items-center gap-8">    
          <img src={accidents} width={40} height={40}></img>    
        <div>
        <h2 className="text-xl font-semibold">Number of Accidents</h2>
        <h4 className="text-[#7b7e83] font-medium text-lg">Nil</h4>
        </div>
      </div>
    </div>
  )
}

export default Details