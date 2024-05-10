import React from 'react'
import linda from '../../assets/linda2.png'
import bubles3 from '../../assets/BUBLES3.jpg'
import { motion } from 'framer-motion'
import Number from './Number'
import './main.css'

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
        <div className='back pb-20 '>
            <div className="main pt-0 sm:pt-4 mt-32 ">
                <div  className="title text-center sm:text-right text-4xl sm:text-5xl lg:text-7xl sm:pt-20 relative z-10">Ad clavum - slog blablabla <br />
                    <div className="sm:pt-5">blabla blabla</div>
                </div>
                <div className="flex flex-col justify-end gap-5 items-end pt-10">
                    <Number/>
                    <div className=' text-xl sm:text-lg relative z-10 w-full sm:w-1/2 lg:w-1/4 text-center lg:text-end xl:text-2xl'>Subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, animi!</div>

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
