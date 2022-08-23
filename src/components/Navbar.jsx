
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
    <div className='flex justify-between items-center h-20 px-4'>
     <div>
      <h1 onClick={handleNav} className={logo? 'hidden':'block'}>Hello..</h1> 
     </div>
   
      <ul  className='hidden  md:flex '>
        <li>HOME</li>
         <li>ABOUT</li>
         <li>EVENTS</li>
         <li>PROJECTS</li>
         <li>SHOP</li>
         <li>CONTACT</li>
         </ul>
         <div className='hidden md:flex'>
         <TbWorld size={40}/>
         </div>

        {/* hmburger*/}
         <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={40}/> :<HiOutlineMenuAlt4 size={40}/>}
          
         </div>
         {/*moble menu*/}
         <div onClick={handleNav} className= {nav? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col':'absolute left-[-100]'}>
         
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