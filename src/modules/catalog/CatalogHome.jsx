import React from 'react';
import linda from '../../assets/linda/linda2.png';
import { motion } from 'framer-motion';
import bubles3 from '../../assets/BUBLES3.jpg'

export default function CatalogHome({data}) {
    const [xOffset, setXOffset] = React.useState(0);
    const [yOffset, setYOffset] = React.useState(0);

    const handleMouseMove = (e) => {
        const randomX = Math.floor(Math.random() * 31);
        const randomY = Math.floor(Math.random() * 31);
        setXOffset(randomX);
        setYOffset(randomY);
    };

    const [dataState, setDataState] = React.useState(data);
    React.useEffect(() => {
        setDataState(data);
    }, [data]);

    const setDropDownOpen = (idx) => {
        const newDataState = [...dataState];
        newDataState[idx].open = !newDataState[idx].open;
        setDataState(newDataState);
    }
  return (
    <div className='pb-20 back' id='home_catalog'>
            <div className="main pt-0 sm:pt-4 mt-32 ">
                <div  className="title  sm:text-right text-4xl sm:text-5xl lg:text-6xl sm:pt-20 relative z-10 ">
                    <div className=' sm:text-end text-center '>Каталог послуг</div>
                </div>
                <div className='flex relative z-10 items-center gap-2 flex-wrap w-full sm:w-1/2 lg:w-1/3 ml-auto justify-end pt-8'>
                    {
                        dataState.map((elem, idx) => {
                            return elem.type === 'single' ? (
                                <a href={`#${elem.label}`} key={idx} className=' px-3 py-1 duration-500 hover:scale-105 text-xl sm:text-2xl border-2 cursor-pointer border-main rounded-xl'>{elem.value}</a>
                            ) : (
                                <div className=' relative'>
                                    <div onClick={() => setDropDownOpen(idx)} class="px-3 py-1 duration-500 hover:scale-105 select-none  text-xl sm:text-2xl border-2 cursor-pointer border-main rounded-xl">
                                        {elem.value}
                                    </div>
                                    {
                                        elem.open && (
                                            <div className='absolute top-full mt-1 bg-white left-0 w-fit border-2 cursor-pointer flex flex-col gap-2  z-20 rounded-xl p-2'>
                                                {
                                                    elem.children.map((child, idx) => {
                                                        return (
                                                            <a href={`#${child.label}`} className='text-xl sm:text-2xl' key={idx}>{child.value}</a>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        })
                    }

                    
                    
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
