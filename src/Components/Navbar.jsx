import React from 'react'
import { Link } from 'react-router-dom';
// import Logo from "../Components/Images/logoH.jpg";
import {  Bell, ChatCenteredText, List } from "phosphor-react";
import { HomeIcon, chart, logo, group, app, money  } from '../icons';



const Navbar = () =>{ 
  return (
    <nav className="mx-8 p-4">
        <div className='w-full bg-white border-2 rounded-full  drop-shadow-lg px-4 py-2'>
              <div className='flex justify-between w-full h-full  '>
                {logo}
                  <ul className='flex justify-center items-center w-full '>

                      <li className="flex items-center mx-4">
                      {HomeIcon}
                      <Link to="/" className="text-gray-400 p-4 ">Home</Link>
                      </li>
                      <li className="flex items-center mx-4">
                        {chart} 
                      <Link to="/about" className="text-gray-400 p-4">Analytics</Link>
                      </li>
                      <li className="flex mx-4 items-center rounded-full border-2 p-2 bg-[#131316] ">
                        {money}
                      {/* <Money size={25}  className="text-gray-200 pr-2 " /> */}
                      <Link to="/about" className="text-gray-200 ">Resources</Link>
                      </li>
                      <li className="flex items-center mx-4 gap-4">
                        {group}
                      {/* <Users size={20} className="text-gray-400" /> */}
                      <Link to="/about" className="text-gray-400 p-4">CRM</Link>
                      </li>
                      <li className="flex items-center  mx-4">
                        {app}
                      {/* <SquaresFour size={20}  className="text-gray-400"/> */}
                      <Link to="/about" className="text-gray-400 p-4">Apps</Link>
                      </li>
                  </ul>
                  <div className='flex items-center'>
                    <div className="flex justify-center items-center w-full">
                      <span className='w-12'>
                      <Bell size={20} />
                      </span>
                      <span className='w-12'>
                      <ChatCenteredText size={20} />
                      </span>
                      <div className='flex justify-between items-center bg-[#EFF1F6] pr-4 pl-2 py-1 rounded-full min-w-[5rem]'>
                        <span className="bg-[#5C6670] text-white flex justify-center items-center rounded-full w-8 h-8">
                          OJ
                        </span>
                        <span>
                        <List size={20} />
                        </span>
                      </div>
                    </div>
                    
                  </div>   
              </div>
        </div>
    </nav>
  )
}
export default Navbar;