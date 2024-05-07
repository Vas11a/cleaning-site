import React from 'react'
import checkmark from '../../assets/checkmark.svg'
import { Carousel } from 'flowbite-react'
import arrow from '../../assets/arrow2.svg'
import back1 from '../../assets/back1.png'
import back2 from '../../assets/back2.png'
import { motion } from 'framer-motion'

export default function Pannel() {

    const animation = {
        hidden: {
            x: 400,
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
            x: -400,
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
        <div
            className="service duration-500 p-20 pt-10 mt-10 bg-white border-t relative" >
            <motion.img whileHover={{ rotate: 0 }} initial={{ rotate: 45 }}
                transition={{ duration: 0.4 }} src={back1} className='absolute top-20 rotate-45 opacity-50 left-2/3 w-20 h-auto' alt="" />
            <motion.img whileHover={{ rotate: 0 }} initial={{ rotate: 45 }}
                transition={{ duration: 0.4 }} src={back2} className='absolute bottom-0 rotate-45 opacity-50 left-1/2 w-20 h-auto' alt="" />
            <motion.img whileHover={{ rotate: 0 }} initial={{ rotate: 45 }}
                transition={{ duration: 0.4 }} src={back2} className='absolute bottom-0 -rotate-45 opacity-50 left-32 w-20 h-auto' alt="" />
            <div className="flex justify-between">
                <motion.div 
                initial='hidden'
                variants={animation}
                whileInView='visible'
                custom={-0.5}
                className="text-5xl font-semibold">Service 1</motion.div>
                <div className='flex gap-1 items-center'>
                    <img src={arrow} alt="<" className='w-12 h-auto cursor-pointer' />
                    <img src={arrow} alt=">" className='w-12 h-auto cursor-pointer rotate-180' />
                </div>
            </div>

            <div className="flex justify-between items-center pt-20">
                <div style={{ width: '40%' }}>
                    <motion.div
                        initial='hidden'
                        variants={animation}
                        whileInView='visible'
                        custom={-0.5}
                        style={{ width: '100%', height: '330px' }}>
                        <Carousel>
                            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                        </Carousel>
                    </motion.div>
                    <div className="text-center pt-5 text-2xl font-semibold">
                        Before/After
                    </div>

                </div>


                <motion.div
                    initial='hidden'
                    variants={animation2}
                    whileInView='visible'
                    custom={-0.5}
                    className="flex flex-col gap-8 flex-1  items-end">
                    <div className="text-5xl pb-6 border-b border-main">Why this ?</div>

                    <div className="flex gap-3 items-center">
                        <img src={checkmark} className="w-6 h-auto" alt="" />
                        <div className="text-2xl ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, mollitia.</div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={checkmark} className="w-6 h-auto" alt="" />
                        <div className="text-2xl ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, mollitia.</div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={checkmark} className="w-6 h-auto" alt="" />
                        <div className="text-2xl ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, mollitia.</div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={checkmark} className="w-6 h-auto" alt="" />
                        <div className="text-2xl ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, mollitia.</div>
                    </div>

                    <div className="border-t border-main text-3xl font-semibold pt-5 text-left">
                        From 600$
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
