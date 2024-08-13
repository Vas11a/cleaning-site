import React from 'react'
import logo from '../../assets/logo1.png'
import back_arr from '../../assets/back-arr.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


export default function NavCatalog() {
    return (
        <motion.div
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className='p-2 py-6 sm:p-6 flex gap-2 justify-between items-center'>
            <Link to='/' className='flex gap-1.5 sm:gap-4 items-center sm:border-b sm:border-main cursor-pointer sm:pb-3'>
                <img src={back_arr} className=" w-8 sm:w-10 h-auto" alt="" />
                <div className="text-xl sm:text-3xl font-semibold text-main">На головну <span className='hidden sm:inline'>сторінку</span></div>
            </Link>
            <Link to='/'>
                <img src={logo} className=" w-36 sm:w-44 h-auto" alt="" />
            </Link>
        </motion.div>
    )
}
