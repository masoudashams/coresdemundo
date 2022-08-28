
import React, { useState } from 'react';
import { TbWorld } from "react-icons/tb"
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import clsx from 'clsx';

function Navbar({ setPage }) {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  }


  return (
    <div className='flex justify-between items-center h-20 px-4 border-b-2'>
      <div>
        <div onClick={handleNav} className={clsx(logo ? 'hidden' : 'block', ' p-5', 'w-50')}>
          <img src={require('../assets/logo.png')} alt="LOGO" />
        </div>
      </div>

      <ul className='hidden  md:flex'>
        <NavLink title="Home" onClick={() => setPage(0)} />
        <NavLink title="about" onClick={() => setPage(1)} />
        <NavLink title="events" onClick={() => setPage(2)} />
        <NavLink title="projects" onClick={() => setPage(3)} />
        <NavLink title="shop" onClick={() => setPage(3)} />
        <NavLink title="contact" onClick={() => setPage(4)} />
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
        nav ? 'left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'left-[-160px]',
        "absolute md:hidden"
      )}>

        <ul>
          <img src={require('../assets/logo.png')} alt="LOGO" />
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

function NavLink({ title, href, onClick }) {
  return <button onClick={onClick}>
    <li className=' cursor-pointer uppercase hover:underline'>{title}</li>
  </button>
}