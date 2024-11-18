import React from 'react'
import logo from '../../assets/logo1.png'
import { motion } from 'framer-motion'
import menu from '../../assets/menu.svg'

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [hasScrolled, setHasScrolled] = React.useState(false);
    const [city, setCity] = React.useState('Kharkiv')

    React.useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            if (currentPosition > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <motion.nav
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className={`p-5 sm:p-7 bg-white fixed w-full top-0 pb-3 ${hasScrolled ? 'border-b border-main' : ''}`}
            style={{ zIndex: 100, }}>
            <div className=" flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="2xl:h-24 h-16" alt=" Logo" />
                </a>
                <img src={menu} alt="X" onClick={() => setIsMenuOpen(!isMenuOpen)} className='w-12 auto cursor-pointer 2xl:hidden' />

                <div
                    id="nav"
                    className={`w-full 2xl:block 2xl:w-auto ${isMenuOpen ? 'block' : 'hide'}`}>
                    <ul
                        className="font-medium flex flex-col p-4 2xl:p-0 mt-4 border items-start 2xl:items-end gap-5 border-gray-100 rounded-lg bg-gray-50 2xl:space-x-8 rtl:space-x-reverse 2xl:mt-0 2xl:border-0 2xl:bg-white ">
                        <div className="flex flex-col 2xl:flex-row gap-1 2xl:gap-10">
                            <li onClick={() => setIsMenuOpen(false)}>
                                <a href="#home"
                                    className="block duration-300 py-2 px-3 text-xl xl:text-2xl  text-gray-900 rounded hover:bg-gray-100 2xl:hover:bg-transparent 2xl:border-0 2xl:hover:text-main 2xl:p-0 ">
                                    Головна</a>
                            </li>
                            <li onClick={() => setIsMenuOpen(false)}>

                                <a href="#services"
                                    className="block duration-300 py-2 px-3 text-xl xl:text-2xl  text-gray-900 rounded hover:bg-gray-100 2xl:hover:bg-transparent 2xl:border-0 2xl:hover:text-main 2xl:p-0 ">
                                    Послуги</a>
                            </li>
                            <li onClick={() => setIsMenuOpen(false)}>

                                <a href="#prices"
                                    className="block duration-300 py-2 px-3 text-xl xl:text-2xl  text-gray-900 rounded hover:bg-gray-100 2xl:hover:bg-transparent 2xl:border-0 2xl:hover:text-main 2xl:p-0 ">
                                    Наша унікальність</a>
                            </li>
                            <li onClick={() => setIsMenuOpen(false)}> 
                                <a href="#questions"
                                    className="block duration-300 py-2 px-3 text-xl xl:text-2xl  text-gray-900 rounded hover:bg-gray-100 2xl:hover:bg-transparent 2xl:border-0 2xl:hover:text-main 2xl:p-0 ">
                                    Часті питання</a>
                            </li>
                            <li onClick={() => setIsMenuOpen(false)}>
                                <a href="#reviews"
                                    className="block duration-300 py-2 px-3 text-xl xl:text-2xl  text-gray-900 rounded hover:bg-gray-100 2xl:hover:bg-transparent 2xl:border-0 2xl:hover:text-main 2xl:p-0 ">
                                    Відгуки</a>
                            </li>
                            <li onClick={() => setIsMenuOpen(false)}>
                                <a href="#team"
                                    className="block duration-300 py-2 px-3 text-xl xl:text-2xl  text-gray-900 rounded hover:bg-gray-100 2xl:hover:bg-transparent 2xl:border-0 2xl:hover:text-main 2xl:p-0 ">
                                    Колектив</a>
                            </li>
                            <li onClick={() => setIsMenuOpen(false)}>
                                <a href="#contacts"
                                    className="block duration-300 py-2 px-3 text-xl xl:text-2xl  text-gray-900 rounded hover:bg-gray-100 2xl:hover:bg-transparent 2xl:border-0 2xl:hover:text-main 2xl:p-0 ">
                                    Контакти</a>
                            </li>
                        </div>
                        <div className='flex flex-wrap gap-10 px-3 lg:px-0 items-center'>
                            <div className='flex flex-wrap gap-5 items-center'>
                                <div className='text-xl '>Для зв'язку: </div>
                                <select id="underline_select" onChange={(e) => setCity(e.target.value)} value={city}  className="block px-0 w-fit text-xl  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer p-2">
                                    <option value="UA">Україна</option>
                                </select>
                                <a className="block px-0 w-fit text-xl  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer p-2" href='tel:+380930909090' value="UA">+38(093)09-09-109</a>
                            </div>
                        

                        </div>
                    </ul>
                </div>
            </div>
        </motion.nav>
    )
}
