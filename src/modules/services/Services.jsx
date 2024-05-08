import React, { useState } from 'react';
import Pannel from './Pannel';
import bubles1 from '../../assets/bubles1.jpg';
import clean1 from '../../assets/clean1.jpeg';
import clean2 from '../../assets/clean2.jpeg';
import Service from './Service';
import { motion } from 'framer-motion';
import './service.css';

export default function Services() {
    const serviceRef = React.useRef(null);
    const [animationPlayed, setAnimationPlayed] = useState(false);

    const handlePopup = () => {
        serviceRef.current.scrollIntoView({ behavior: 'smooth' });
    };

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
        <>
            <div
                className='linegrad'></div>
            <motion.h1
                initial='hidden'
                variants={animation}
                whileInView='visible'
                custom={-0.5}
                className="title px-5 md:px-20 pt-8  text-main text-4xl sm:text-5xl md:text-6xl py-5">Services</motion.h1>

            <div className="flex flex-col  xl:flex-row justify-between relative " >
                <img src={bubles1}
                    className="w-auto opacity-20 h-96  md:h-600   z-0 absolute bottom-0 left-1/4 " alt="" />
                <div className="flex items-center xl:items-start flex-col gap-5 md:gap-16 pb-5 md:pb-20 px-5 md:px-20 pt-5 md:pt-14 relative z-10">
                    <motion.div 
                    initial='hidden'
                    variants={animation}
                    whileInView='visible'
                    custom={-0.4}
                    className="flex gap-5 w-full sm:w-fit md:gap-20">
                        <Service setIsPannelOpen={handlePopup} />
                        <Service setIsPannelOpen={handlePopup} />
                    </motion.div>
                    <motion.div 
                    initial='hidden'
                    whileInView='visible'
                    variants={animation}
                    custom={-0.3}
                    className="flex gap-5 w-full sm:w-fit md:gap-20">
                        <Service setIsPannelOpen={handlePopup} />
                        <Service setIsPannelOpen={handlePopup} />
                    </motion.div>
                    <motion.div 
                    initial='hidden'
                    whileInView='visible'
                    variants={animation}
                    custom={-0.2}
                    className="flex w-full sm:w-fit gap-5 md:gap-20">
                        <Service setIsPannelOpen={handlePopup} />
                        <Service setIsPannelOpen={handlePopup} />
                    </motion.div>
                </div>

                <div className="py-20 px-5 sm:px-20 pt-14">
                    <div className="relative">
                        <motion.img 
                        initial='hidden'
                        whileInView='visible'
                        variants={animation2}
                        custom={-0.5}
                        src={clean1} 
                        className=" w-40 sm:w-64 lg:w-96 h-auto border-8 border-gray-300" alt="" />
                        <motion.img 
                        initial='hidden'
                        whileInView='visible'
                        variants={animation2}
                        custom={-0.3}
                        src={clean2}
                        className=" w-40 sm:w-64 lg:w-96 h-auto absolute top-16 xl:top-32  left-24 xl:-left-36 xl:right-64 border-8 border-main" alt="" />
                    </div>
                </div>
            </div>
            <div className='relative'>
                <div ref={serviceRef} className='absolute -top-32'></div>
                <Pannel />
            </div>
        </>
    )
}
