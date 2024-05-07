import React from 'react'
import { Carousel } from "flowbite-react";
import Review from './Review';
import {motion} from 'framer-motion'
import back1 from '../../assets/back3.png'
import back2 from '../../assets/back5.png'


export default function Reviews() {

    const animation = {
        hidden: {
            x: -500,
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
        <div className="reviews relative w-full">
            <motion.img whileHover={{ rotate: 0 }} initial={{ rotate: 45 }}
                transition={{ duration: 0.4 }} src={back1} className='absolute bottom-56 left-64 -rotate-45 w-32 opacity-50 h-auto' alt="" />
            <motion.img whileHover={{ rotate: 0 }} initial={{ rotate: 45 }}
                transition={{ duration: 0.4 }} src={back2} className='absolute bottom-16 right-64 w-50 opacity-50  h-auto' alt="" />
            <div className='linegrad'></div>
            <motion.h1 
            initial='hidden'
            variants={animation}
            whileInView='visible'
            custom={-0.5}
            className="title  px-20 pt-8  text-main text-6xl py-5">Reviews</motion.h1>
            <motion.div
            initial='hidden'
            variants={animation2}
            whileInView='visible'
            custom={-0.5}
            style={{ width: '700px', height: '380px' }} className=" bg-cyan-200 rounded-md mx-auto my-20 relative">
                <Carousel>
                    <Review />
                    <Review />
                    <Review />
                </Carousel>
                <div className="pt-8 text-center text-xl font-semibold">
                    You can write your fitback <span className="text-main cursor-pointer">here)</span>
                </div>
            </motion.div>
        </div>
    )
}
