import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import github from "../assets/github.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import nextjs from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import Shopify from "../assets/Shopify.png";
import wordpress from "../assets/wordpress.png";
import Wix from "../assets/Wix.png";
import blogger from "../assets/blogger.png";
import PPT from "../assets/PPT.png";
import Doc from "../assets/Doc.png";
import Sheet from "../assets/Sheet.png";
import Form from "../assets/Form.png";
import GMB from "../assets/GMB.png";

    const Experience = () => {
        const technologies = [
            {
                id: 1,
                src: html,
                title: 'HTML',
                style: 'shadow-orange-500',
            },
            {
                id: 2,
                src: css,
                title: 'CSS',
                style: 'shadow-blue-500',
            },
            {
                id: 3,
                src: javascript,
                title: 'JavaScript',
                style: 'shadow-yellow-500',
            },
            {
                id: 4,
                src: react,
                title: 'React',
                style: 'shadow-blue-600',
            },
            {
                id: 5,
                src: tailwind,
                title: 'Tailwind',
                style: 'shadow-sky-400',
            },
            {
                id: 6,
                src: node,
                title: 'Node JS',
                style: 'shadow-green-500',
            },
            {
                id: 7,
                src: nextjs,
                title: 'Next JS',
                style: 'shadow-white',
            },
            {
                id: 8,
                src: github,
                title: 'Github',
                style: 'shadow-gray-500',
            },
        ];
    
        const cms = [
            {
                id: 9,
                src: Shopify,
                title: 'Shopify',
                style: 'shadow-green-400',
            },
            {
                id: 10,
                src: wordpress,
                title: 'WordPress',
                style: 'shadow-black',
            },
            {
                id: 11,
                src: Wix,
                title: 'Wix',
                style: 'shadow-Yellow-300',
            },
            {
                id: 12,
                src: blogger,
                title: 'Blogger',
                style: 'shadow-orange-700',
            },
        ];
    
        const otherIcons = [
            {
                id: 13,
                src: Doc,
                title: 'Google Doc',
                style: 'shadow-sky-500',
            },
            {
                id: 14,
                src: PPT,
                title: 'Google PPT',
                style: 'shadow-orange-800',
            },
            {
                id: 15,
                src: Sheet,
                title: 'Google Sheet',
                style: 'shadow-green-500',
            },
            {
                id: 16,
                src: Form,
                title: 'Google Form',
                style: 'shadow-purple-500',
            },
            {
                id: 17,
                src: GMB,
                title: 'Google Profile',
                style: 'shadow-sky-600',
            },
        ];
            // {
            //     id: 9,
            //     src: Shopify,
            //     title: 'Shopify',
            //     style: 'shadow-green-400',
            // },
            // {
            //     id: 10,
            //     src: wordpress,
            //     title: 'Wordpress',
            //     style: 'shadow-black',
            // },
            // {
            //     id: 11,
            //     src: Wix,
            //     title: 'Wix',
            //     style: 'shadow-Yellow-300',
            // },
            // {
            //     id: 12,
            //     src: blogger,
            //     title: 'Blogger',
            //     style: 'shadow-orange-700',
            // },
            // {
            //     id: 13,
            //     src: Doc,
            //     title: 'Google Doc',
            //     style: 'shadow-sky-500',
            // },
            // {
            //     id: 14,
            //     src: PPT,
            //     title: 'Google PPT',
            //     style: 'shadow-orange-800',
            // },
            // {
            //     id: 15,
            //     src: Sheet,
            //     title: 'Google Sheet',
            //     style: 'shadow-green-500',
            // },
            // {
            //     id: 16,
            //     src: Form,
            //     title: 'Google Form',
            //     style: 'shadow-purple-500',
            // },
            // {
            //     id: 17,
            //     src: GMB,
            //     title: 'Google Profile',
            //     style: 'shadow-sky-600',
            // },
        

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
                    {technologies.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">CMS</p>
                    <p className="py-6">These are the CMS platforms I've worked with</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
                    {cms.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Other Icons</p>
                    <p className="py-6">Other icons I've worked with</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
                    {otherIcons.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;