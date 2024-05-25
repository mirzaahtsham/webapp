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
import GA4 from "../assets/GA4.png";
import GMC from "../assets/Google-Merchant-Center.png";
import GCR from "../assets/Google-Class-Room.png";
import GD from "../assets/googledeveloper.png";
import GDS from "../assets/Google-Drive.png";
import PS from "../assets/Photoshop.png";
import AI from "../assets/Illustrator.png";
import Camtesia from "../assets/Camtesia-Video-Editing-Tool.png";
import B2BSystems from "../assets/B2B-Systems.png";
import GDW from "../assets/Graphic-Design-Wali.png";
import EMS from "../assets/emerchant-shop.png";
import ShopifyPartner from "../assets/Shopify-Partner.png";
import WixPartner from "../assets/Wix-Partner.png";
import FiverrAffiliate from "../assets/Fiverr-Affiliate.png";
import Themeforest from "../assets/themeforest.png";
import Namecheap from "../assets/Namecheap.png";


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
                style: 'shadow-blue-700',
            },
            {
                id: 11,
                src: Wix,
                title: 'Wix',
                style: 'shadow-yellow-300',
            },
            {
                id: 12,
                src: blogger,
                title: 'Blogger',
                style: 'shadow-orange-700',
            },
        ];
    
        const googleProduct = [
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
                style: 'shadow-sky-900',
            },
            {
                id: 18,
                src: GA4,
                title: 'Google Analytic 4',
                style: 'shadow-orange-400',
            },
            {
                id: 20,
                src: GCR,
                title: 'Google Class Room',
                style: 'shadow-orange-400',
            },
            {
                id: 20,
                src: GDS,
                title: 'Google Drive Storage',
                style: 'shadow-orange-400',
            },
            {
                id: 19,
                src: GD,
                title: 'Google Developer',
                style: 'shadow-orange-400',
            },
            {
                id: 20,
                src: GMC,
                title: 'Google Merchant',
                style: 'shadow-orange-400',
            },
        ];
        
        const partnersAffiliates = [
            {
                id: 21,
                src: EMS,
                title: 'E-Merchantshop',
                style: 'shadow-sky-500',
            },
            {
                id: 22,
                src: GDW,
                title: 'Graphic Design Wali',
                style: 'shadow-orange-800',
            },
            {
                id: 23,
                src: B2BSystems,
                title: 'B2B Systems',
                style: 'shadow-green-500',
            },
            // {
            //     id: 24,
            //     src: Sparko,
            //     title: 'Sparko',
            //     style: 'shadow-purple-500',
            // },
            {
                id: 25,
                src: ShopifyPartner,
                title: 'Shopify Partner',
                style: 'shadow-orange-400',
            },
            {
                id: 26,
                src: WixPartner,
                title: 'Wix Partner',
                style: 'shadow-orange-400',
            },
            {
                id: 27,
                src: FiverrAffiliate,
                title: 'Fiverr Affiliate',
                style: 'shadow-sky-900',
            },
            {
                id: 28,
                src: Themeforest,
                title: 'Themeforest Affiliate',
                style: 'shadow-orange-400',
            },
            {
                id: 29,
                src: Namecheap,
                title: 'Namecheap Affiliate',
                style: 'shadow-orange-400',
            },
            // {
            //     id: 30,
            //     src: GA4,
            //     title: 'Themeforest Affiliate',
            //     style: 'shadow-orange-400',
            // },
        ];

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
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Content Managment Systems</p>
                    <p className="py-6">These are CMS platforms I've worked with</p>
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
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Google Products</p>
                    <p className="py-6">These Google Products I've worked with</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
                    {googleProduct.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Partners & Affiliates</p>
                    <p className="py-6">These are Companes Which are Our Partners and Affiliate with them.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
                    {partnersAffiliates.map(({ id, src, title, style }) => (
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