import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
   <div  className=' grid w-screen h-80 mt-20 md:h-40 justify-center  bg-slate-400   '>

    <div className='  ml-60 mt-10  md:mt-[60px] absolute font-Raleway'>
    <h3 className='font-bold' >Usful Likns</h3>
     <span className=' underline underline-offset-1'>
     <p>Estou Refuglado</p>
     <p>Somamos</p>
     <p>Free Art Courses</p>
     </span>
    </div>
   <div className='space-y-4'>
    <input type="email" placeholder="Email" name="email" className="w-60 mt-40 ml-40 md:mt-[50px] md:ml-[350px] md:w-80 px-3 py-2  border shadow-sm bg-slate-400   border-black focus:outline-none  focus:ring-black-500 block  rounded-md sm:text-sm focus:ring-1"  />
      <button  className=' grid mt-40 ml-44  md:mt-[45px] md:ml-[450px]  bg-zinc-900 text-white text-center px-8 py-1 justify-center'>SUBSCRIBE</button>
   
      </div>
    
    <div className=' ml-48 mt-0 md:mt-[-90px] md:ml-[750px]  space-x-4 grid grid-rows grid-flow-col'>
           <FaInstagram size={28} className="icon text-blue-500" />
            <FaInstagram size={28} className="icon text-blue-500" />
            <FaTwitter size={28} className="icon text-teal-400" />
            <FaFacebook size={28} className="icon text-blue-500" />
            <FaInstagram size={28} className="icon text-blue-500" />
             
         </div>
    

   </div>
  )
}

export default Footer
