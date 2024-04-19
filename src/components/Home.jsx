import React from 'react'
import heroimage from '../assets/Mirza-Ahtsham-Profile-Image.png';
import { MdKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
             <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">
                  I'm Full Stack Developer
                </h2>
                     <p className="text-gray-500 py-4 max-w-md">
                      I am a well-experienced person with strong expertise in Javascript, React and Tailwind CSS. I have 7 Years of Experience Building Website Using Wordpress, Shopify, Wix ETC CMS. I love to work on Web Application Using React, Tailwind CSS, Node JS and Next JS.
                     </p>
                     <div>
                        <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                          portfolio
                          <span className="group-hover:rotate-90 duration-300">
                          <MdKeyboardArrowRight size={25} className="ml-1" />
                          </span>
                        </button>
                     </div>
             </div>
                    <div>
                        <img src={heroimage} alt="My Profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
                    </div>
        </div>
    </div>
  )
}

export default Home
