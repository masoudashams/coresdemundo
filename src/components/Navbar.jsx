
import React,{useState} from 'react';
import {TbWorld} from "react-icons/tb"
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa'

function Navbar() {
  const [nav,setNav]=useState(false);
  const [logo,setLogo] =useState(false)
  const handleNav=()=>{
    setNav(!nav);
    setLogo(!logo)
  }
  return (
    <div className=' border-b border-black flex justify-between items-center h-24 mx-w-[1240px] px-12'>
     <div>
      <a onClick={handleNav} className={logo? 'hidden':'block'}><img src={require('../assets/logo.png')} /></a> 
     </div>
   
      <ul  className='hidden  md:flex '>
       <li className='hover:underline cursor-pointer'>HOME</li>
         <li className='hover:underline cursor-pointer'>ABOUT</li>
         <li className='hover:underline cursor-pointer'>EVENTS</li>
         <li className='hover:underline cursor-pointer'>PROJECTS</li>
         <li className='hover:underline cursor-pointer'>SHOP</li>
         <li className='hover:underline cursor-pointer'>CONTACT</li>
         </ul>
         <div className='hidden md:flex ml-3'>
         <TbWorld size={38}/>
         </div>

        {/* hmburger*/}
         <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={40}/> :<HiOutlineMenuAlt4 size={40}/>}
          
         </div>
         {/*moble menu*/}
         <div onClick={handleNav} className= {nav? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col':'absolute left-[-120px]'}>
         
         <ul>
          <h1>hello</h1>
         <li className='border-b'>HOME</li>
         <li className='border-b'>ABOUT</li>
         <li className='border-b'>EVENTS</li>
         <li className='border-b'>PROJECTS</li>
         <li className='boder-b'>SHOP</li>
         <li className='border-b'>CONTACT</li>
         
         
         <div className='flex justify-between my-7'>
          <FaInstagram className="icon"/>
          <FaFacebook className="icon"/>
          <FaTwitter className="icon"/>

        </div>
        </ul>
    </div>
    </div>
  )
}

export default Navbar