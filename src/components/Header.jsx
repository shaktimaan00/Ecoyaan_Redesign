import React from 'react'
import './Style.css'
import logo from '../assets/logo2.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showMenu && !event.target.closest('.hamburger-content')) {
        setShowMenu((prevShowMenu) => !prevShowMenu);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <div className='header-container px-2 sm:px-3 md:px-[3rem] flex items-center justify-between'>
      <div>
        <img src={logo} alt="logo" className='logo cursor-pointer' />
      </div>
      <div className='nav-item'>
        <ul className='flex gap-5 text-[1rem] cursor-pointer'>
          <li className='text-black hover:text-slate-400'><Link to="/">Home</Link></li>
          <li className='text-black hover:text-slate-400'><Link to="/about">About Us</Link></li>
          <li className='text-black hover:text-slate-400'>Sell on Ecoyaan</li>
          <li className='text-black hover:text-slate-400'>Contact Us</li>
        </ul>
      </div>
      <div className='flex items-center'>
        <button className='text-[1rem] px-4 py-2 bg-[#efefef] rounded-xl border border-black active:bg-[#fff] hover:text-slate-400'>Contact Us</button>
        <div className='relative'>
        <span className="material-symbols-outlined hamburger block md:hidden text-[2.5rem]" onClick={toggleMenu}>menu</span>
          {showMenu && (
            <div className='absolute right-2 top-14 bg-[#eee] border border-[#777] rounded-md shadow-lg w-[12rem] p-5 hamburger-content'>
              <ul className='flex flex-col gap-5 text-[1rem] cursor-pointer'>
                <li className='text-black hover:text-slate-400'><Link to="/">Home</Link></li>
                {/* <li className='text-black hover:text-slate-400'><Link to="/about">About Us</Link></li> */}
                <li className='text-black hover:text-slate-400'><Link to="/about">About Us</Link></li>
                <li className='text-black hover:text-slate-400'>Sell on Ecoyaan</li>
                <li className='text-black hover:text-slate-400'>Contact Us</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header;