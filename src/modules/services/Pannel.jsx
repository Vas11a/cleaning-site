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
            x: 200,
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
        <div
            className="service duration-500 px-5 sm:px-20 pt-10 mt-10 bg-white border-t relative" >
            <motion.img whileHover={{ rotate: 0 }} initial={{ rotate: 45 }}
                transition={{ duration: 0.4 }} src={back1} className='absolute top-20 rotate-45 opacity-50 left-2/3 w-20 h-auto' alt="" />
            <motion.img whileHover={{ rotate: 0 }} initial={{ rotate: 45 }}
                transition={{ duration: 0.4 }} src={back2} className='absolute bottom-0 rotate-45 opacity-50 left-1/2 w-20 h-auto' alt="" />
            <motion.img whileHover={{ rotate: 0 }} initial={{ rotate: 45 }}
                transition={{ duration: 0.4 }} src={back2} className='absolute bottom-0 -rotate-45 opacity-50 left-32 w-20 h-auto' alt="" />
            <div className="flex justify-between items-center">
                <motion.div 
                initial='hidden'
                variants={animation}
                whileInView='visible'
                custom={-0.5}
                className=" text-4xl md:text-5xl font-normal md:font-semibold">Service 1</motion.div>
                <div className='flex gap-1 items-center'>
                    <img src={arrow} alt="<" className='w-12 h-auto cursor-pointer' />
                    <img src={arrow} alt=">" className='w-12 h-auto cursor-pointer rotate-180' />
                </div>
            </div>

            <div className="flex xl:flex-row flex-col-reverse justify-between items-center gap-10 pt-8 md:pt-20">
                <div className=' flex-1 w-full xl:w-fit'>
                    <motion.div
                        initial='hidden'
                        variants={animation}
                        whileInView='visible'
                        custom={-0.5}
                        className=' h-64 sm:h-80 m-auto xl:m-0 w-full xl:w-4/5'
                        style={{ maxWidth: '600px'}}>
                        <Carousel>
                            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                        </Carousel>
                    </motion.div>
                    <div className=" text-center  xl:text-left pt-5  text-xl md:text-2xl font-semibold">
                        Before/After
                    </div>

                </div>


                <motion.div
                    initial='hidden'
                    variants={animation2}
                    whileInView='visible'
                    custom={-0.5}
                    className="flex flex-col gap-8 flex-1  items-end">
                    <div className="text-4xl md:text-5xl pb-6 border-b border-main">Why this ?</div>

                    <div className="flex gap-3 items-center">
                        <img src={checkmark} className="w-6 h-auto" alt="" />
                        <div className=" text-xl md:text-2xl text-right">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, mollitia.</div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={checkmark} className="w-6 h-auto" alt="" />
                        <div className=" text-xl md:text-2xl text-right">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, mollitia.</div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={checkmark} className="w-6 h-auto" alt="" />
                        <div className=" text-xl md:text-2xl text-right">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, mollitia.</div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={checkmark} className="w-6 h-auto" alt="" />
                        <div className=" text-xl md:text-2xl text-right">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, mollitia.</div>
                    </div>

                    <div className="border-t border-main text-3xl font-normal md:font-semibold pt-5 text-left">
                        From 600$
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
