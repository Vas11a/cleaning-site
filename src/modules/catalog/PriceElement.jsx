import React from 'react'
import back1 from '../../assets/back3.png'
import back2 from '../../assets/back5.png'
import back3 from '../../assets/back2.2.png'
import { motion } from 'framer-motion'
import Number from '../main/Number'
import testImg from '../../assets/catalog/sofa.png'

export default function PriceElement() {

    const [isNumberOpen, setIsNumberOpen] = React.useState(false);

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
            <motion.div
                initial='hidden'
                variants={animation}
                whileInView='visible'
                custom={-0.5}
                className="title  sm:text-4xl text-3xl lg:text-5xl pt-10 sm:pt-16 relative z-10 ">
                <div className=' text-center '>Генеральне прибирання</div>
            </motion.div>
            <motion.div
    initial='hidden'
    variants={animation}
    whileInView='visible'
    custom={-0.6}
    className='mx-auto relative z-10 flex flex-col pt-16 gap-8 pb-10 sm:pb-20 max-w-lg'>
    <div className='flex gap-4 items-center text-2xl font-bold justify-between w-full'>
        <div className='text-left w-fit'>До 30кв.м</div>
        <div className='text-right border-2 border-main px-5 py-1.5 rounded-full w-fit'>від 4600грн</div>
    </div>
    <div className='flex gap-4 items-center text-2xl font-bold justify-between w-full'>
        <div className='text-left w-fit'>До 40кв.м</div>
        <div className='text-right border-2 border-main px-5 py-1.5 rounded-full w-fit'>від 6500грн</div>
    </div>
    <div className='flex gap-4 items-center text-2xl font-bold justify-between w-full'>
        <div className='text-left w-fit'>До 50кв.м</div>
        <div className='text-right border-2 border-main px-5 py-1.5 rounded-full w-fit'>від 7500грн</div>
    </div>
    <div className='flex gap-4 items-center text-2xl font-bold justify-between w-full'>
        <div className='text-left w-fit'>До 60кв.м</div>
        <div className='text-right border-2 border-main px-5 py-1.5 rounded-full w-fit'>від 7700грн</div>
    </div>
    <div className='flex gap-4 items-center text-2xl font-bold justify-between w-full'>
        <div className='text-left w-fit'>До 70кв.м</div>
        <div className='text-right border-2 border-main px-5 py-1.5 rounded-full w-fit'>від 8500грн</div>
    </div>
    <div className='flex gap-4 items-center text-2xl font-bold justify-between w-full'>
        <div className='text-left w-fit'>До 80кв.м</div>
        <div className='text-right border-2 border-main px-5 py-1.5 rounded-full w-fit'>від 9500грн</div>
    </div>
    <div className='flex gap-4 items-center text-2xl font-bold justify-between w-full'>
        <div className='text-left w-fit'>До 90кв.м</div>
        <div className='text-right border-2 border-main px-5 py-1.5 rounded-full w-fit'>від 10 000грн</div>
    </div>
    <div className='flex gap-4 items-center text-2xl font-bold justify-between w-full'>
        <div className='text-left w-fit'>До 100кв.м</div>
        <div className='text-right border-2 border-main px-5 py-1.5 rounded-full w-fit'>від 11 000грн</div>
    </div>
    <div className='flex gap-4 items-center text-2xl font-bold justify-between w-full'>
        <div className='text-left w-fit'>Від 100кв.м</div>
        <div className='text-right border-2 border-main px-5 py-1.5 rounded-full w-fit'>90-300грн за кв.м</div>
    </div>
                {/* <div className='flex justify-between px-5 sm:justify-center gap-4'>
                    <div className='relative flex flex-col items-center'>
                        <img src={testImg} className=' w-36 -mb-6 relative z-10 h-auto' alt="" />
                        <div className=' text-lg sm:text-2xl py-2 px-3 sm:px-5 sm:py-4 border-4 border-main rounded-full w-fit'>М'яке крісло</div>
                        <div className='text-lg sm:text-2xl top-full px-5 bg-white -mt-3 mr-10 py-1 border-2 border-main rounded-full'>250$</div>
                        <div className='text-lg sm:text-xl top-full px-2 sm:px-5 bg-white -mt-2 ml-10 sm:ml-20 py-0 border-2 border-main rounded-full'>+200   text
                            <div className='text-gray-400 text-sm -mt-2'>сушка*</div>
                        </div>
                    </div>
                    <div className='relative flex flex-col items-center'>
                        <img src={testImg} className=' w-36 -mb-6 relative z-10 h-auto' alt="" />
                        <div className=' text-lg sm:text-2xl py-2 px-3 sm:px-5 sm:py-4 border-4 border-main rounded-full w-fit'>М'яке крісло</div>
                        <div className='text-lg sm:text-2xl top-full px-5 bg-white -mt-3 mr-10 py-1 border-2 border-main rounded-full'>250$</div>
                        <div className='text-lg sm:text-xl top-full px-2 sm:px-5 bg-white -mt-2 ml-10 sm:ml-20 py-0 border-2 border-main rounded-full'>+200   text
                            <div className='text-gray-400 text-sm -mt-2'>сушка*</div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between px-5 sm:justify-center gap-4'>
                    <div className='relative flex flex-col items-center'>
                        <img src={testImg} className=' w-36 -mb-6 relative z-10 h-auto' alt="" />
                        <div className=' text-lg sm:text-2xl py-2 px-3 sm:px-5 sm:py-4 border-4 border-main rounded-full w-fit'>М'яке крісло</div>
                        <div className='text-lg sm:text-2xl top-full px-5 bg-white -mt-3 mr-10 py-1 border-2 border-main rounded-full'>250$</div>
                        <div className='text-lg sm:text-xl top-full px-2 sm:px-5 bg-white -mt-2 ml-10 sm:ml-20 py-0 border-2 border-main rounded-full'>+200   text
                            <div className='text-gray-400 text-sm -mt-2'>сушка*</div>
                        </div>
                    </div>
                    <div className='relative flex flex-col items-center'>
                        <img src={testImg} className=' w-36 -mb-6 relative z-10 h-auto' alt="" />
                        <div className=' text-lg sm:text-2xl py-2 px-3 sm:px-5 sm:py-4 border-4 border-main rounded-full w-fit'>М'яке крісло</div>
                        <div className='text-lg sm:text-2xl top-full px-5 bg-white -mt-3 mr-10 py-1 border-2 border-main rounded-full'>250$</div>
                        <div className='text-lg sm:text-xl top-full px-2 sm:px-5 bg-white -mt-2 ml-10 sm:ml-20 py-0 border-2 border-main rounded-full'>+200   text
                            <div className='text-gray-400 text-sm -mt-2'>сушка*</div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between px-5 sm:justify-center gap-4'>
                    <div className='relative flex flex-col items-center'>
                        <img src={testImg} className=' w-36 -mb-6 relative z-10 h-auto' alt="" />
                        <div className=' text-lg sm:text-2xl py-2 px-3 sm:px-5 sm:py-4 border-4 border-main rounded-full w-fit'>М'яке крісло</div>
                        <div className='text-lg sm:text-2xl top-full px-5 bg-white -mt-3 mr-10 py-1 border-2 border-main rounded-full'>250$</div>
                        <div className='text-lg sm:text-xl top-full px-2 sm:px-5 bg-white -mt-2 ml-10 sm:ml-20 py-0 border-2 border-main rounded-full'>+200   text
                            <div className='text-gray-400 text-sm -mt-2'>сушка*</div>
                        </div>
                    </div>
                    <div className='relative flex flex-col items-center'>
                        <img src={testImg} className=' w-36 -mb-6 relative z-10 h-auto' alt="" />
                        <div className=' text-lg sm:text-2xl py-2 px-3 sm:px-5 sm:py-4 border-4 border-main rounded-full w-fit'>М'яке крісло</div>
                        <div className='text-lg sm:text-2xl top-full px-5 bg-white -mt-3 mr-10 py-1 border-2 border-main rounded-full'>250$</div>
                        <div className='text-lg sm:text-xl top-full px-2 sm:px-5 bg-white -mt-2 ml-10 sm:ml-20 py-0 border-2 border-main rounded-full'>+200   text
                            <div className='text-gray-400 text-sm -mt-2'>сушка*</div>
                        </div>
                    </div>
                </div> */}
                

                <motion.div
                    initial='hidden'
                    variants={animation}
                    whileInView='visible'
                    custom={-0.7}
                    className='flex flex-col gap-2 items-center'>
                    {isNumberOpen && <Number />}
                    <button onClick={() => setIsNumberOpen(!isNumberOpen)} className="bg-teal-100 mt-5 px-2 py-1 text-xl rounded-xl w-full border border-main sm:text-2xl ">Замовити</button>
                </motion.div>
            </motion.div>

        </div>
    )
}
