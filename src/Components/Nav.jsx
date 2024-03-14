import React from 'react'

import user from '../images/user.png'
import logout from '../images/logout.png'


export const Nav = () => {
  return (
    <div className='flex items-center justify-between w-100% bg-[#5E81AC] rounded-lg  pl-12 pr-12 pt-3 m-2'>
        <img src={user} width={50} className=''></img>
        <a href='/Info'><img src={logout} width={40} className='h-10'></img></a>
    </div>
  )
}
