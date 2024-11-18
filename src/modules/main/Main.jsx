import React from 'react'
import linda from '../../assets/linda/linda2.png'
import bubles3 from '../../assets/BUBLES3.jpg'
import { motion } from 'framer-motion'
import Number from './Number'
import './main.css'
import mark from '../../assets/mark.svg'

export default function Main() {
    const [xOffset, setXOffset] = React.useState(0);
    const [yOffset, setYOffset] = React.useState(0);

    const handleMouseMove = (e) => {
        const randomX = Math.floor(Math.random() * 31);
        const randomY = Math.floor(Math.random() * 31);
        setXOffset(randomX);
        setYOffset(randomY);
    };
    return (
        <div className='back pb-44 sm:pb-40 md:pb-20 ' id='home'>
            <div className="main pt-0 sm:pt-4 mt-32 ">
                <div  className="title  sm:text-right text-4xl sm:text-5xl lg:text-6xl sm:pt-20 relative z-10 ">
                    <div className=' sm:text-end text-center '><span className='border-b-4 border-main'>Акція місяця!</span></div>
                    <div className=" sm:text-end text-center pt-5 text-2xl sm:text-3xl lg:text-4xl">-5% на миття вікон за <span className='border-b-2 border-main'> промокодом</span>:<br/> <div className='mt-5'>«Чисті вікна 2.0»</div></div>
                </div>
                <div className="flex flex-col justify-end gap-5 items-end pt-10">
                    <Number/>
                    <div className=' sm:text-end relative z-10 w-full text-center'>
                    Залиште свій номер, і ми зв’яжемося з вами для консультації щодо прибирання. <br /> Працюємо без вихідних з 08:00 до 20:00.
                    </div>
                    <div className=' text-xl sm:text-lg relative z-10 w-full text-center sm:text-end lg:text-end xl:text-2xl'>
                        <div>Міста та області де нас можна знайти: </div>
                        <div className='flex flex-col items-center sm:items-end gap-2'>
                            <span className='flex items-center gap-2'><img src={mark} className='w-8 h-auto' alt="" />Київ</span>
                            <span className='flex items-center gap-2'><img src={mark} className='w-8 h-auto' alt="" />Харків</span>
                        </div>
                        
                    </div>

                </div>

                <motion.div
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 80, damping: 30 }}
                    className="linda">
                    <motion.img
                        onMouseMove={handleMouseMove}
                        style={{ position: 'relative', left: `${xOffset}px`, top: `${yOffset}px` }}
                        className="linda_img duration-300 opacity-30 sm:opacity-70 xl:opacity-100"
                        src={linda} alt="" />
                </motion.div>

                <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 30 }}
                    className="bubles">
                    <img className="bubles_img hide xl:block" src={bubles3} alt="" />
                </motion.div>
            </div>
        </div>
    )
}
