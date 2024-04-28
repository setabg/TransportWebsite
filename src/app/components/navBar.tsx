"use client";
import React, { useState } from 'react';


const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className='flex p-4 justify-center w-full h-[50px]'>
      <div className='flex justify-between items-center w-full'>
        <div className='flex items-center'>
          <h1 className='text-[#01303A] text-xl font-bold leading-7 align-middle'>
            Website
          </h1>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <img src={"/icons/hamburger.svg"} alt='hamburger icon' width={25} height={25} />
          </button>
        </div>


        {showMenu && (
          <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 flex justify-center items-center">
            <ul className="p-4 flex flex-col items-center space-y-10">
              <li>
                <a className='text-[#3C4A47] hover:text-gray-300 cursor-pointer' onClick={toggleMenu}> Начало</a>
              </li>
              <li className='mb-4'>
                <a className='text-[#3C4A47] hover:text-gray-300 cursor-pointer' onClick={toggleMenu}> За нас</a>
              </li>
              <li className='mb-4'>
                <a className='text-[#3C4A47] hover:text-gray-300 cursor-pointer' onClick={toggleMenu}> Услуги</a>
              </li>
              <li className='mb-4'>
                <a className='text-[#3C4A47] hover:text-gray-300 cursor-pointer' onClick={toggleMenu}> Цени</a>
              </li>
              <li className='mb-4'>
                <a className='text-[#3C4A47] hover:text-gray-300 cursor-pointer' onClick={toggleMenu}> Контакти</a>
              </li>
              <li className='mb-4'>
                <button className="bg-white border rounded-xl border-black text-[#01303A] text-[16px] hover:bg-[#01303A] hover:text-white font-semibold px-4 py-3" onClick={toggleMenu}>
                  Заявка за пратка
                </button>
              </li>
              <li className='mb-4'>
                <p className="text-[#083C2F] cursor-pointer hover:underline" onClick={toggleMenu}>Профил</p>
              </li>
              <li>
                <button className="bg-[#01303A] text-white rounded-md px-4 py-2" onClick={closeMenu}>
                  Затвори
                </button>
              </li>
            </ul>
          </div>
        )}

        <ul className={`hidden md:flex items-center justify-center space-x-6`}>
          <li>
            <a className='text-[#3C4A47] hover:text-gray-300 cursor-pointer'> Начало</a>
          </li>
          <li className='mr-7'>
            <a className='text-[#3C4A47] hover:text-gray-300 cursor-pointer'> За нас</a>
          </li>
          <li className='mr-7'>
            <a className='text-[#3C4A47] hover:text-gray-300 cursor-pointer'> Услуги</a>
          </li>
          <li className='mr-7'>
            <a className='text-[#3C4A47] hover:text-gray-300 cursor-pointer'> Цени</a>
          </li>
          <li className='mr-7'>
            <a className='text-[#3C4A47] hover:text-gray-300 cursor-pointer'> Контакти</a>
          </li>
        </ul>

        <div className="hidden md:flex items-center">
          <p className="text-[#083C2F] cursor-pointer mr-6 w-[55px] h-[25px] hover:underline">Профил</p>
          <button className="bg-white border rounded-xl border-black text-[#01303A] text-[16px] hover:bg-[#01303A] hover:text-white font-semibold px-4 py-3">
            Заявка за пратка
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;