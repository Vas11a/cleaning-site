import React from 'react'
import tg from '../../assets/tds.svg'
import social2 from '../../assets/social2.svg'
import social3 from '../../assets/social3.svg'
import { motion } from 'framer-motion';
import Number from '../main/Number';
import { Link } from 'react-router-dom';

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
    <footer id='contacts' className="reviews w-full  pt-5 pb-10">
        <div className='linegrad mt-20'></div>
            <motion.h1 
            initial='hidden'
            variants={animation2}
            whileInView='visible'
            custom={-0.5}
            className="title px-5 md:px-20 pt-8  text-main text-4xl sm:text-5xl md:text-6xl py-5">Контакти</motion.h1>
        <div className="flex items-center flex-wrap gap-5 lg:gap-20 justify-between pr-5 md:pr-36 px-5 md:px-20 pt-5 sm:pt-10">
            <motion.div 
            initial='hidden'
            variants={animation}
            whileInView='visible'
            custom={-0.5}
            className="flex flex-col gap-8">
                <Number/>
            </motion.div>
            <motion.div 
            initial='hidden'
            variants={animation}
            whileInView='visible'
            custom={-0.4}
            className="flex gap-5 ">
                {/* <img src={social1} className="w-10 h-auto cursor-pointer" alt=""/> */}
                <a target='blank' href="https://www.instagram.com/ad_clavum?igsh=MTFvZ2p0MWc3M2J2dg%3D%3D&utm_source=qr"><img src={social2} className="w-10 h-auto cursor-pointer" alt=""/></a>
                <a target='blank' href=" mailto:adclavumcleaning@gmail.com"><img src={social3} className="w-10 h-auto cursor-pointer" alt=""/></a>
                <a target='blank' href=" https://t.me/adclavum_cleaning"><img src={tg} className="w-10 h-auto cursor-pointer" alt=""/></a>
                
            </motion.div>

            <motion.div 
            initial='hidden'
            variants={animation}
            whileInView='visible'
            custom={-0.3}
            className="flex flex-col text-xl gap-2">
                <div className="font-bold">Години роботи</div>
                {/* <div>Monday - Friday: 9:00 - 18:00</div>
                <div>Saturday - Sunday: 10:00 - 16:00</div> */}
                <div>Працюємо без вихідних з 08:00 до 23:00</div>
            </motion.div>
            
        </div>
        <div className='flex items-center flex-wrap gap-5 lg:gap-20 pr-5 md:pr-36 px-5 md:px-20 pt-5 sm:pt-10'>
            <Link to={'/privacy-policy'} className='text-main font-bold text-xl'>Privacy Policy</Link>
            <Link to={'/user-agreement'} className='text-main font-bold text-xl'>User Agreement</Link>
            <Link to={'/contract'} className='text-main font-bold text-xl'>Contract</Link>
        </div>
        
    </footer>
  )
}
