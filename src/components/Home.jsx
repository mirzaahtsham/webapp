import React from 'react';
import heroimage from '../assets/Mirza-Ahtsham-Profile-Image.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaInstagram, FaYoutube, FaPinterest, FaWhatsapp, } from 'react-icons/fa';
import { SiUdemy } from "react-icons/si";
import { SiLinktree } from "react-icons/si";

const Home = () => {

                const links = [
                  {
                    id: 1,
                    child: (
                      <>
                       <FaInstagram size={25}/>
                      </>
                    ),
                    onClick: () => window.open('https://www.instagram.com/websdesignwala/'),
                    style: 'rounded-tr-md',
                  },
                  {
                    id: 2,
                    child: (
                      <>
                       <FaYoutube size={25}/>
                      </>
                    ),
                    onClick: () => window.open('https://www.youtube.com/channel/UCECmARzL9NsJiDpe01t6PWw??sub_confirmation=1'),
                   
                  },
                  {
                    id: 3,
                    child: (
                      <>
                       <FaPinterest size={25}/>
                      </>
                    ),
                    onClick: () => window.open('https://www.pinterest.com/mirzaahtsham/'),
                    
                  },
                  {
                    id: 4,
                    child: (
                      <>
                       <FaWhatsapp size={25}/>
                      </>
                    ),
                    onClick: () => window.open('https://wa.me/+923464784039/'),
                    
                  },
                  {
                    id: 5,
                    child: (
                      <>
                       <SiLinktree size={25}/>
                      </>
                    ),
                    onClick: () => window.open('https://linktr.ee/websitedesignwala'),
                    
                  },
                  {
                    id: 6,
                    child: (
                      <>
                       <SiUdemy size={25}/>
                      </>
                    ),
                    onClick: () => window.open('https://www.linkedin.com/in/mirzaahtsham/'),
                    
                  },
                ]

    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm Full Stack Developer</h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I am a well-experienced person with strong expertise in Javascript, React and Tailwind CSS. I
                        have 7 Years of Experience Building Website Using Wordpress, Shopify, Wix ETC CMS. I love to
                        work on Web Application Using React, Tailwind CSS, Node JS and Next JS.
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
                <div className="relative">
                    <img src={heroimage} alt="My Profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg rounded-lg p-4 flex justify-center items-center mx-6 -mb-10">
                              {links.map(({ id, child, onClick, style }) => (
                                <div key={id} className={`text-gray-300 mx-2 transition duration-800 ease-in-out transform hover:text-white ${style}`}>
                                    <button onClick={onClick} className="flex items-center space-x-1">
                                        <span>{child}</span>
                                    </button>
                                </div>
                            ))}

                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
