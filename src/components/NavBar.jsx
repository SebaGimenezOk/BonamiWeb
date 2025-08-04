"use client";

import React from 'react'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Image from 'next/image';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'Inicio',
        },
        {
            id: 2,
            link: 'Nosotros',
        },
        {
            id: 3,
            link: 'Tickets',
        },
        {
            id: 4,
            link: 'Eventos',
        },
        {
            id: 5,
            link: 'Contact',
        },
    ];
    return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-white top-0  fixed '>


            <div>
             <Image
        src="/logoblancodisco.png"
        alt="Bonami"
        width={100}
        height={30}
        className="mb-6 py-3 px-3"
        priority
      /> 
            </div>
            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize  text-sm font-medium text-white hover:scale-125 duration-200'><Link to={link} smooth duration={500}>{link}</Link></li>
                ))}
            </ul>


            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-white md:hidden'>
                {nav ? <FaTimes size={18} /> : <FaBars size={18} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b bg-slate-900  to-gray-800 text-gray-200  '>
                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize py-4 text-1xl'><Link onClick={() => setNav(!nav)} to={link} smooth duration={700}>{link}</Link></li>
                    ))}
                </ul>
            )}
            

        </div>
    )
}

export default Navbar