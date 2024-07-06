import React from 'react'
import logo from '../../assets/logo1.png'
import { motion } from 'framer-motion'
import menu from '../../assets/menu.svg'
import loca from '../../assets/loca.svg'

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [hasScrolled, setHasScrolled] = React.useState(false);
    const [city, setCity] = React.useState('Kharkiv')
    React.useEffect(() => {
        console.log(city);
    }, [city])

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
                    <img src={logo} className="lg:h-24 h-16" alt=" Logo" />
                </a>
                <img src={menu} alt="X" onClick={() => setIsMenuOpen(!isMenuOpen)} className='w-12 auto cursor-pointer lg:hidden' />

                <div
                    id="nav"
                    className={`w-full lg:block lg:w-auto ${isMenuOpen ? 'block' : 'hide'}`}>
                    <ul
                        className="font-medium flex flex-col p-4 lg:p-0 mt-4 border items-start lg:items-end gap-5 border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white ">
                        <div className="flex flex-col lg:flex-row gap-1 lg:gap-10">
                            <li>
                                <a href="/"
                                    className="block duration-300 py-2 px-3 text-xl xl:text-2xl  text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-main lg:p-0 ">Додому</a>
                            </li>
                            <li>

                                <a href="/"
                                    className="block duration-300 py-2 px-3 text-xl xl:text-2xl  text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-main lg:p-0 ">Про нас</a>
                            </li>
                            <li>

                                <a href="/"
                                    className="block duration-300 py-2 px-3 text-xl xl:text-2xl  text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-main lg:p-0 ">Наші сервіси</a>
                            </li>
                            <li>
                                <a href="/"
                                    className="block duration-300 py-2 px-3 text-xl xl:text-2xl  text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-main lg:p-0 ">Ціни</a>
                            </li>
                        </div>
                        <div className='flex flex-wrap gap-10 px-3 lg:px-0 items-center'>
                            <div className='flex flex-wrap gap-5 items-center'>
                                <div className='text-xl '>Менеджер міста: </div>
                                <select id="underline_select" onChange={(e) => setCity(e.target.value)} value={city}  className="block px-0 w-fit text-xl  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer p-2">
                                    <option value="Kh">Kharkiv</option>
                                    <option value="Kiev">Kiev</option>
                                    <option value="Warsaw">Warsaw</option>
                                    <option value="Krakow">Krakow</option>
                                </select>
                                <select id="underline_select"  className="block px-0 w-fit text-xl  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer p-2">
                                    <option value="Kh">+380 66636363634</option>
                                    <option value="Kiev">+380 666805933</option>
                                    <option value="Warsaw">+ggvpggvpggpv</option>
                                    <option value="Krakow">+1488 192 22</option>
                                </select>
                            </div>
                        

                        </div>
                    </ul>
                </div>
            </div>
        </motion.nav>
    )
}
