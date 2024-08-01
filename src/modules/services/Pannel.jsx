import React from 'react'
import checkmark from '../../assets/checkmark.svg'
import beforeafter from '../../assets/beforeafter1.PNG'
import ba2 from '../../assets/ba2.PNG'
import ba3 from '../../assets/ba3.PNG'
import ba4 from '../../assets/ba4.PNG'
import ba5 from '../../assets/ba5.PNG'
import ba6 from '../../assets/ba6.PNG'
import ba7 from '../../assets/ba7.PNG'
import ba8 from '../../assets/ba8.PNG'
import ba9 from '../../assets/ba9.PNG'
import ba10 from '../../assets/ba10.PNG'
import ba11 from '../../assets/ba11.PNG'
import ba12 from '../../assets/ba12.PNG'
import ba13 from '../../assets/ba13.PNG'
import ba14 from '../../assets/ba14.PNG'
import ba15 from '../../assets/ba15.PNG'
import mark from '../../assets/mark.svg'
import { Carousel } from 'flowbite-react'
import arrow from '../../assets/arrow2.svg'
import back1 from '../../assets/back1.png'
import back2 from '../../assets/back2.png'
import { motion } from 'framer-motion'

export default function Pannel({serviceList, selectedService, setSelectedService}) {

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

    const changeServiceLeft = () => {
        if (selectedService.id > 0) {
            setSelectedService(serviceList[selectedService.id - 1]);
            
        } else {
            setSelectedService(serviceList[serviceList.length - 1]);
        }
    }

    const changeServiceRight = () => {
        if (selectedService.id < serviceList.length - 1) {
            setSelectedService(serviceList[selectedService.id + 1]);
        } else {
            console.log(2);
            setSelectedService(serviceList[0]);
        }
    }

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
                <div className='flex flex-col gap-3'>
                <motion.div 
                initial='hidden'
                variants={animation}
                whileInView='visible'
                custom={-0.5}
                className=" text-4xl md:text-4xl font-normal md:font-semibold">{selectedService.name}</motion.div>
                 <motion.div 
                initial='hidden'
                variants={animation}
                whileInView='visible'
                custom={-0.5}
                className=" text-2xl md:text-2xl text-gray-600 font-normal md:font-semibold">{selectedService.subName ? selectedService.subName: ''}</motion.div>
                </div>
                
                <div className='flex gap-1 items-center'>
                    <img onClick={changeServiceLeft} src={arrow} alt="<" className='w-12 h-auto cursor-pointer' />
                    <img onClick={changeServiceRight}src={arrow} alt=">" className='w-12 h-auto cursor-pointer rotate-180' />
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
                            {/* <img src={beforeafter} alt="..." />
                            <img src={beforeafter} alt="..." />
                            <img src={beforeafter} alt="..." />
                            <img src={beforeafter} alt="..." />
                            <img src={beforeafter} alt="..." /> */}
                            <img src={beforeafter} alt="..." />
                            <img src={ba2} alt="..." />
                            <img src={ba3} alt="..." />
                            <img src={ba4} alt="..." />
                            <img src={ba5} alt="..." />
                            <img src={ba6} alt="..." />
                            <img src={ba7} alt="..." />
                            <img src={ba8} alt="..." />
                            <img src={ba9} alt="..." />
                            <img src={ba10} alt="..." />
                            <img src={ba11} alt="..." />
                            <img src={ba12} alt="..." />
                            <img src={ba13} alt="..." />
                            <img src={ba14} alt="..." />
                            <img src={ba15} alt="..." />

                        </Carousel>
                    </motion.div>
                    <div className=" text-center  xl:text-left pt-5  text-xl md:text-2xl font-semibold">
                        До/Після
                    </div>

                </div>


                <motion.div
                    initial='hidden'
                    variants={animation2}
                    whileInView='visible'
                    custom={-0.5}
                    className="flex flex-col gap-8 flex-1  items-end">
                    <div className="text-4xl md:text-4xl  pb-6 border-b border-main">Наша унікальність:</div>
                    <div className=' h-80 overflow-auto flex flex-col gap-8'>
                    {
                        selectedService.information.map((item, index) => {
                            return typeof item === 'string' ? (
                                <div key={index} className="flex gap-3 items-center pr-5">
                                <img src={mark} className="w-8 h-auto" alt="" />
                                <div className=" text-xl md:text-2xl text-left">{item}</div>
                            </div>
                            ) : (
                                item.map((item, index) => (
                                    <li className="custom-list-item list-none ml-4 -mt-2 px-5 md:text-xl text-left">{item}</li>
                                ))
                            )
                        })
                    }
                    {
                        selectedService.id === 8 && (
                            <li className="custom-list-item list-none ml-4 -mt-2 px-5 md:text-xl text-left">
                                Для того, щоб детально ознайомитись з орієнтовною вартістю додаткових послуг, можете перейти за <a href="" className='text-blue-500'>посиланням</a> або за цим кью-ар кодом:
                            </li>
                            
                        )
                    }
                    </div>
                    {
                        selectedService.id !== 8 && (
                            <div className="border-t border-main text-3xl font-normal md:font-semibold pt-5 text-left">
                                Від {selectedService.price}₴{selectedService.year ? " (на рік)": ''}
                            </div>
                        )
                    }
                    
                </motion.div>
            </div>
        </div>
    )
}
