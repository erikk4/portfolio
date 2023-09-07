import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'ausbildung'
        },
        {
            id: 3,
            link: 'kenntnisse'
        },
        {
            id: 5,
            link: 'kontakt'
        },
    ]

    return (
        <div className=' z-10 flex justify-between h-16 md:h-20 items-center w-full sticky top-0 bg-mybg text-white pl-8 pr-8 md:pl-16 md:pr-16'>
            <div >
                <h1 className='text-2xl font-bold'>Erik Keplinger</h1>
                <p className='hidden md:flex'>Schüler HTL Leonding</p>
            </div>

            <ul className='hidden md:flex'>

                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 capitalize font-medium text-gray-400 hover:scale-105 duration-250 group transition cursor-pointer'>
                        <a>
                            <Link to={link} smooth duration={500} offset={-80}>
                                {link}
                            </Link>
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-myblue"></span>
                        </a>
                    </li>
                ))}


            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer z-10 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black'>
                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize py-4 text-4xl text-gray-400'>
                            <a>
                                <Link onClick={() => setNav(!nav)}
                                    to={link}
                                    smooth
                                    duration={500} offset={-80}>
                                    {link}
                                </Link>
                            </a>
                        </li>
                    ))}
                </ul>
            )}



        </div>
    )
}

export default NavBar