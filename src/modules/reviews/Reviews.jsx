import React from 'react'
import { Carousel } from "flowbite-react";
import Review from './Review';
import { motion } from 'framer-motion'
import back1 from '../../assets/back3.png'
import back2 from '../../assets/back5.png'
import back3 from '../../assets/back2.2.png'
import qr from '../../assets/qr.png'
import ba1_1 from '../../assets/reviews/ba1.1-min.PNG'
import ba1_2 from '../../assets/reviews/ba1.2-min.PNG'
import ba1_3 from '../../assets/reviews/ba1.3-min.PNG'
import ba1_4 from '../../assets/reviews/ba1.4-min.PNG'
import ba1_5 from '../../assets/reviews/ba1.5-min.PNG'
import './reviews.css'


export default function Reviews() {

    const animation = {
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

    const animation2 = {
        hidden: {
            scale: 0,
            opacity: 0
        },
        visible: custom => ({
            scale: 1,
            opacity: 1,
            transition: {
                delay: custom + 0.5,
                duration: 0.5
            }
        })
    };

    return (
        <div id='reviews' className="reviews relative w-full pb-10 md:pb-20">
            <motion.img whileHover={{ rotate: 0 }} initial={{ rotate: 45 }}
                transition={{ duration: 0.4 }} src={back1} className='absolute bottom-56 left-64 -rotate-45 w-32 opacity-50 h-auto' alt="" />
            <motion.img whileHover={{ rotate: 0 }} initial={{ rotate: 45 }}
                transition={{ duration: 0.4 }} src={back2} className='absolute bottom-16 right-64 w-50 opacity-50  h-auto' alt="" />

            <motion.img whileHover={{ rotate: 0 }} initial={{ rotate: 45 }}
                transition={{ duration: 0.4 }} src={back3} className='absolute top-32 left-32 w-20 opacity-50  h-auto' alt="" />

            <motion.img whileHover={{ rotate: 0 }} initial={{ rotate: 45 }}
                transition={{ duration: 0.4 }} src={back3} className='absolute top-20 right-64 w-20 opacity-50  h-auto' alt="" />


            <div className='linegrad'></div>
            <motion.h1
                initial='hidden'
                variants={animation}
                whileInView='visible'
                custom={-0.5}
                className="title px-5 md:px-20 pt-8   text-main text-4xl sm:text-5xl md:text-6xl py-5">Відгуки</motion.h1>
            <div className='flex justify-center sm:pt-20 sm:pb-20'>
            <motion.div
                initial='hidden'
                variants={animation2}
                whileInView='visible'
                custom={-0.5}
                className=' h-64 sm:h-80 mx-auto xl:m-0 w-full xl:w-4/5'
                style={{ maxWidth: '600px', width: '90%', }}
                >
                <Carousel>
                    {/* <Review /> */}
                    
                    {/* <Review /> */}
                    {/* <Review /> */}
                    <img src={ba1_1} alt="..." />
                    <img src={ba1_2} alt="..." />
                    <img src={ba1_3} alt="..." />
                    <img src={ba1_4} alt="..." />
                    <img src={ba1_5} alt="..." />
                </Carousel>

            </motion.div>
            </div>
            <div className="sm:pt-8 text-center text-xl font-semibold lg:-mt-10">
                Телеграм канал з нашими <a href='https://t.me/adclavumreviews' target='blank' className="text-main cursor-pointer">відгуками</a>
            </div>
            <div className='flex justify-center'>
                <img src={qr} className='w-32 h-32' alt="" />
            </div>
        </div>
    )
}
