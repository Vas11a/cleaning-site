import React from 'react'
import logo from '../../assets/logo1.png'
import { motion } from 'framer-motion'
import menu from '../../assets/menu.svg'

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    return (
        <motion.nav
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className=" border-gray-200 p-5 sm:p-7 bg-white fixed w-full top-0 pb-3  " style={{ zIndex: 100, }}>
            <div className=" flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="md:h-24 h-16" alt=" Logo" />
                </a>
                <img src={menu} alt="X" onClick={() => setIsMenuOpen(!isMenuOpen)} className='w-12 auto cursor-pointer md:hidden' />

                <div 
                id="nav"
                className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hide'}`}>
                    <ul
                        className="font-medium flex flex-col p-4 md:p-0 mt-4 border items-start md:items-end gap-5 border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
                        <div className="flex flex-col md:flex-row gap-1 md:gap-10">
                            <li>
                                <a href="/"
                                    className="block duration-300 py-2 px-3 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0 ">Home</a>
                            </li>
                            <li>

                                <a href="/"
                                    className="block duration-300 py-2 px-3 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0 ">About</a>
                            </li>
                            <li>

                                <a href="/"
                                    className="block duration-300 py-2 px-3 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0 ">Services</a>
                            </li>
                            <li>
                                <a href="/"
                                    className="block duration-300 py-2 px-3 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0 ">Pricing</a>
                            </li>
                        </div>
                        <button type="button"
                            className="text-white relative z-10 bg-main hover:bg-teal-400 duration-300 focus:ring-4 focus:ring-main font-medium rounded-lg text-lg px-5 py-2.5">Button</button>
                    </ul>
                </div>
            </div>
        </motion.nav>
    )
}
