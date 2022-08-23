
import React, { useState } from 'react';
import { TbWorld } from "react-icons/tb"
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import clsx from 'clsx';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  }


  return (
    <div className='flex justify-between items-center h-20 px-4'>
      <div>
        <h1 onClick={handleNav} className={clsx(logo ? 'hidden' : 'block', 'bg-green-200 p-5')}>
          Hello..
        </h1>
      </div>

      <ul className='hidden  md:flex'>
        <NavLink title="Home" />
        <NavLink title="about" />
        <NavLink title="events" />
        <NavLink title="projects" />
        <NavLink title="shop" />
        <NavLink title="contact" />
      </ul>

      <div className='hidden md:flex'>
        <TbWorld size={40} />
      </div>

      {/* hmburger*/}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={28} /> : <HiOutlineMenuAlt4 size={28} />}
      </div>

      {/*moble menu*/}
      <div onClick={handleNav} className={clsx(
        nav ? 'left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'left-[-120px]',
        "absolute md:hidden"
      )}>

        <ul>
          <h1>hello</h1>
          <NavLink title="Home" />
          <NavLink title="about" />
          <NavLink title="events" />
          <NavLink title="projects" />
          <NavLink title="shop" />
          <NavLink title="contact" />

          <div className='flex justify-between my-7'>
            <FaInstagram size={28} className="icon text-blue-500" />
            <FaFacebook size={28} className="icon text-blue-500" />
            <FaTwitter size={28} className="icon text-teal-400" />
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

function NavLink({ title, href }) {
  return <a href={href} >
    <li className='border-b cursor-pointer uppercase hover:underline'>{title}</li>
  </a>
}