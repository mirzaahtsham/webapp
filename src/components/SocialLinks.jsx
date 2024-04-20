import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
const SocialLinks = () => {

        const links = [
            {
                id: 1,
                child: (
                    <>
                    Linkedin <FaLinkedin size={30}/>
                    </>
                ),
                href: 'https://www.linkedin.com/in/mirzaahtsham/',
                style: 'rounded-tr-md',
            },
            {
                id: 2,
                child: (
                    <>
                    Github <FaGithub size={30}/>
                    </>
                ),
                href: 'https://github.com/mirzaahtsham/',

            },
            {
                id: 3,
                child: (
                    <>
                    Email <HiOutlineMail size={30}/>
                    </>
                ),
                href: 'mailto:mirza.ahtsham786@gmail.com',
                
            },
            {
                id: 4,
                child: (
                    <>
                    Resume <BsFillPersonLinesFill size={30}/>
                    </>
                ),
                href: "/Mirza-Muhammad-Ahtsham-Web-Developer-and-Graphic-Designer-Resume.pdf",
                style: 'rounded-br-md',
                download: true,
            },
        ]

  return (
    <div className="lg:flex-col lg:top-[35%] lg:left-0 lg:fixed hidden lg:block">
        <ul>

            {links.map(({id, child, href, style, download}) => (   
                <li key={id}
                className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-cyan-500 to-blue-500" + 
                " " + 
                style
                }
                >
                <a 
                href={href}
                className="flex justify-between items-center w-full text-white"
                downlaod={download}
                target="_blank"
                rel="noreferrer"
                >
                    {child}
                </a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialLinks
