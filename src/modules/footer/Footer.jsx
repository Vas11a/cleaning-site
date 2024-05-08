import React from 'react'
import social1 from '../../assets/social1.svg'
import social2 from '../../assets/social2.svg'
import social3 from '../../assets/social3.svg'
import { motion } from 'framer-motion';

export default function Footer() {
    const animation = {
        hidden: {
            y: -200,
            opacity: 0
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom + 0.5,
                duration: 0.5
            }
        })
    };

    const animation2 = {
        hidden: {
            x: -200,
            opacity: 0
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: custom + 0.5,
                duration: 0.5
            }
        })
    };
  return (
    <footer className="reviews w-full  pt-5 pb-10">
        <div className='linegrad mt-20'></div>
            <motion.h1 
            initial='hidden'
            variants={animation2}
            whileInView='visible'
            custom={-0.5}
            className="title px-5 md:px-20 pt-8  text-main text-4xl sm:text-5xl md:text-6xl py-5">Contacts</motion.h1>
        <div className="flex items-center flex-wrap gap-5 lg:gap-20 justify-between pr-5 md:pr-36 px-5 md:px-20 pt-5 sm:pt-10">
            <motion.div 
            initial='hidden'
            variants={animation}
            whileInView='visible'
            custom={-0.5}
            className="flex flex-col gap-8">
                <div className="flex gap-5 items-center flex-wrap ">
                    <input type="text"
                        className="shadow-sm bg-gray-50 border border-teal-500  text-xl text-gray-900 relative z-10  rounded-lg focus:ring-main focus:border-teal-300 block p-2.5"
                        placeholder="+380 000 0000 00" />
                    <button type="button"
                        className="text-white text-xl relative z-10 bg-main hover:bg-teal-400 duration-300 focus:ring-4 focus:ring-main font-medium rounded-lg  px-5 py-2.5">Get
                        in touch</button>
                </div>

            </motion.div>
            <motion.div 
            initial='hidden'
            variants={animation}
            whileInView='visible'
            custom={-0.4}
            className="flex gap-5 ">
                <img src={social1} className="w-10 h-auto cursor-pointer" alt=""/>
                <img src={social2} className="w-10 h-auto cursor-pointer" alt=""/>
                <img src={social3} className="w-10 h-auto cursor-pointer" alt=""/>
            </motion.div>

            <motion.div 
            initial='hidden'
            variants={animation}
            whileInView='visible'
            custom={-0.3}
            className="flex flex-col text-xl gap-2">
                <div className="font-bold">Working hours</div>
                <div>Monday - Friday: 9:00 - 18:00</div>
                <div>Saturday - Sunday: 10:00 - 16:00</div>
            </motion.div>
        </div>
    </footer>
  )
}
