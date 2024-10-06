import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js'; // Import Typed.js library
import heroimage from '../assets/Mirza-Ahtsham-Profile-Image.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaInstagram, FaYoutube, FaPinterest, FaWhatsapp } from 'react-icons/fa';
import { SiUdemy } from 'react-icons/si';
import { SiLinktree } from 'react-icons/si';

const Home = () => {
    const links = [
        {
            id: 1,
            child: <FaInstagram size={25} />,
            onClick: () => window.open('https://www.instagram.com/websdesignwala/'),
        },
        {
            id: 2,
            child: <FaYoutube size={25} />,
            onClick: () =>
                window.open('https://www.youtube.com/channel/UCECmARzL9NsJiDpe01t6PWw??sub_confirmation=1'),
        },
        {
            id: 3,
            child: <FaPinterest size={25} />,
            onClick: () => window.open('https://www.pinterest.com/mirzaahtsham/'),
        },
        {
            id: 4,
            child: <FaWhatsapp size={25} />,
            onClick: () => window.open('https://wa.me/+923464784039/'),
        },
        {
            id: 5,
            child: <SiLinktree size={25} />,
            onClick: () => window.open('https://linktr.ee/websitedesignwala'),
        },
        {
            id: 6,
            child: <SiUdemy size={25} />,
            onClick: () => window.open('https://www.linkedin.com/in/mirzaahtsham/'),
        },
    ];


        // Use useRef to reference the typed element
        const typedRef = useRef(null);

        useEffect(() => {
            // Initialize Typed.js when component mounts
            const typed = new Typed(typedRef.current, {
                strings: ['Frontend Developer', 'WordPress Designer', 'Shopify Partner', 'WIX Partner'],
                typeSpeed: 50,
                backSpeed: 60,
                loop: true,
                startDelay: 1000, // Delay before typing starts
            });
    
            // Cleanup Typed.js on component unmount
            return () => {
                typed.destroy();
            };
        }, []);

    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-2 md:flex-row text-white">
                <div className="flex flex-col justify-center h-full md:w-2/3">
                    <h2 className="text-4xl sm:text-7xl font-normal text-white">I'm&nbsp;<br></br><span ref={typedRef} className="text-3xl sm:text-7xl font-bold"></span></h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I am a well-experienced person with strong expertise in Javascript, React and Tailwind CSS. I
                        have 7 Years of Experience Building Website Using Wordpress, Shopify, Wix, Blogger CMS. I love to
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
                <div className="flex flex-col items-center justify-center h-full md:w-1/3">
                    <img src={heroimage} alt="My Profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
                    <div className="-mt-6 flex justify-center">
                        <div className="bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg rounded-lg p-4 flex justify-center items-center">
                            {links.map(({ id, child, onClick }, index) => (
                                <div
                                    key={id}
                                    className={`text-gray-300 mx-2 transition duration-300 ease-in-out transform hover:text-white ${
                                        index !== links.length - 1 ? 'border-r border-gray-400 pr-2' : ''
                                    }`}>
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
