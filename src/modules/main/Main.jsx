import React from 'react'
import linda from '../../assets/linda1.png'
import bubles3 from '../../assets/BUBLES3.jpg'
import { motion } from 'framer-motion'
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
        <div className='back pb-20'>
            <div className="main p-4 mt-32 ">
                <div  className="title text-right text-7xl pt-20 relative z-10">Ad clavum - slogan blablabla <br />
                    <div className="pt-5">blabla blabla</div>
                </div>
                <div className="flex flex-col justify-end gap-5 items-end pt-10">
                    <div className='flex  justify-end gap-5 items-center pt-10"'>
                        <input type="text" className=" shadow-sm bg-gray-50 border border-teal-500 text-xl text-gray-900 relative z-10 rounded-lg focus:ring-main focus:border-teal-300 block p-2.5" placeholder="+380 000 0000 00" />
                        <button type="button" className="text-white text-xl relative z-10 bg-main hover:bg-teal-400 duration-300 focus:ring-4 focus:ring-main font-medium rounded-lg px-5 py-2.5">Getin touch</button>
                    </div>
                    <div className='text-lg relative z-10 w-1/4 text-end'>Subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, animi!</div>

                </div>

                <motion.div
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                    className="linda">
                    <motion.img
                        onMouseMove={handleMouseMove}
                        style={{ position: 'relative', left: `${xOffset}px`, top: `${yOffset}px` }}
                        className="linda_img duration-300"
                        src={linda} alt="" />
                </motion.div>

                <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                    className="bubles">
                    <img className="bubles_img" src={bubles3} alt="" />
                </motion.div>
            </div>
        </div>
    )
}
