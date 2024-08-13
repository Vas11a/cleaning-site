import React from 'react'
import back1 from '../../assets/back3.png'
import back2 from '../../assets/back5.png'
import back3 from '../../assets/back2.2.png'
import { motion } from 'framer-motion'

export default function PriceElement() {

    return (
        <div className='relative'>
            <motion.img whileHover={{ rotate: 0 }} initial={{ rotate: 45 }}
                transition={{ duration: 0.4 }} src={back1} className='absolute hidden sm:block bottom-56 left-96 -rotate-45 w-32 opacity-50 h-auto' alt="" />
            <motion.img whileHover={{ rotate: 0 }} initial={{ rotate: 45 }}
                transition={{ duration: 0.4 }} src={back2} className='absolute hidden bottom-16 sm:block right-64  w-50 opacity-50  h-auto' alt="" />

            <motion.img whileHover={{ rotate: 0 }} initial={{ rotate: 45 }}
                transition={{ duration: 0.4 }} src={back3} className='absolute  top-32 left-32  w-20 opacity-20 sm:opacity-50  h-auto' alt="" />

            <motion.img whileHover={{ rotate: 0 }} initial={{ rotate: 45 }}
                transition={{ duration: 0.4 }} src={back3} className='absolute   top-20 right-64 w-20 opacity-20  sm:opacity-50  h-auto' alt="" />
            
            
            <div className='linegrad'></div>
            <div className="title  sm:text-4xl text-3xl lg:text-5xl pt-10 sm:pt-16 relative z-10 ">
                <div className=' text-center '>Ttiel1</div>
            </div>
            <div className='m-auto relative z-10 flex flex-col gap-8 pt-10 pb-10 sm:pb-20'>
                <div className='flex gap-2 sm:gap-4  justify-center sm:text-3xl text-xl '>
                    <div>До 40квм</div>
                    <div>-</div>
                    <div>від 4300</div>
                </div>
                <div className='flex gap-2 sm:gap-4  justify-center sm:text-3xl text-xl '>
                    <div>До 40квм</div>
                    <div>-</div>
                    <div>від 4300</div>
                </div>
                <div className='flex gap-2 sm:gap-4  justify-center sm:text-3xl text-xl '>
                    <div>До 40квм</div>
                    <div>-</div>
                    <div>від 4300</div>
                </div>
                <div className='flex gap-2 sm:gap-4  justify-center sm:text-3xl text-xl '>
                    <div>До 40квм</div>
                    <div>-</div>
                    <div>від 4300</div>
                </div>
            </div>
        </div>
    )
}
