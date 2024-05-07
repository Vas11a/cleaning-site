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
        <>
            <div
                className='linegrad'></div>
            <motion.h1
                initial='hidden'
                variants={animation}
                whileInView='visible'
                custom={-0.5}
                className="title  px-20 pt-8  text-main text-6xl py-5">Services</motion.h1>

            <div className="flex justify-between relative " >
                <img src={bubles1} style={{ height: '600px' }}
                    className="w-auto opacity-20 z-0 absolute bottom-0 left-1/4 " alt="" />
                <div className="flex flex-col gap-16 py-20 px-20 pt-14 relative z-10">
                    <motion.div 
                    initial='hidden'
                    variants={animation}
                    whileInView='visible'
                    custom={-0.4}
                    className="flex gap-20">
                        <Service setIsPannelOpen={handlePopup} />
                        <Service setIsPannelOpen={handlePopup} />
                    </motion.div>
                    <motion.div 
                    initial='hidden'
                    whileInView='visible'
                    variants={animation}
                    custom={-0.3}
                    className="flex gap-20">
                        <Service setIsPannelOpen={handlePopup} />
                        <Service setIsPannelOpen={handlePopup} />
                    </motion.div>
                    <motion.div 
                    initial='hidden'
                    whileInView='visible'
                    variants={animation}
                    custom={-0.2}
                    className="flex gap-20">
                        <Service setIsPannelOpen={handlePopup} />
                        <Service setIsPannelOpen={handlePopup} />
                    </motion.div>
                </div>

                <div className="py-20 px-20 pt-14">
                    <div className="relative">
                        <motion.img 
                        initial='hidden'
                        whileInView='visible'
                        variants={animation2}
                        custom={-0.5}
                        src={clean1} className="w-96 h-auto border-8 border-gray-300" alt="" />
                        <motion.img 
                        initial='hidden'
                        whileInView='visible'
                        variants={animation2}
                        custom={-0.3}
                        src={clean2}
                            className="w-96 h-auto absolute top-32 right-64 border-8 border-main" alt="" />
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
