import React from 'react'
import { motion } from 'framer-motion'
import loca from '../../assets/loca.svg'

export default function Team() {

    const [team, setTeam] = React.useState([{
        name: 'Ivan Ivanych',
        pos: 'SEO',
        image: '',
        tekst: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quas consectetur ratione! Facere earum reiciendis natus ab recusandae, molestias a.'
    },
    {
        name: 'Dim Dimych',
        pos: 'COO',
        image: '',
        tekst: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quas consectetur ratione! Facere earum reiciendis natus ab recusandae, molestias a.'
    },{
        name: 'Gleb Glebich',
        pos: 'Manager',
        image: '',
        tekst: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quas consectetur ratione! Facere earum reiciendis natus ab recusandae, molestias a.'
    },{
        name: 'Vlad Vladimirovich',
        pos: 'Developer',
        image: '',
        tekst: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quas consectetur ratione! Facere earum reiciendis natus ab recusandae, molestias a.'
    },{
        name: 'Aleksey Alekseevich',
        pos: 'Cleaner',
        image: '',
        tekst: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quas consectetur ratione! Facere earum reiciendis natus ab recusandae, molestias a.'
    },{
        name: 'Petr Petrovich',
        pos: 'Cleaner 1',
        image: '',
        tekst: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quas consectetur ratione! Facere earum reiciendis natus ab recusandae, molestias a.'
    }])

    const [current, setCurrent] = React.useState(2)

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
        <div id="team" className="reviews relative w-full sm:py-10">
            <div className='linegrad'></div>
            <motion.h1
                initial='hidden'
                variants={animation}
                whileInView='visible'
                custom={-0.5}
                className="title px-5 md:px-20 pt-8  text-main text-4xl sm:text-5xl md:text-6xl py-5">Our team</motion.h1>
                

            <motion.div 
            initial='hidden'
            variants={animation}
            whileInView='visible'
            custom={-0.5}
            className=' px-5 md:px-20 pt-0 sm:pt-5 flex justify-between gap-5 items-center'>
                <motion.div className=' text-2xl sm:text-3xl font-semibold'>{team[current].name}</motion.div>

                <div className='flex gap-3 items-end'>
                    <img src={loca} alt="" className='w-9 h-auto' />
                    <select id="underline_select" className="block px-0 w-40 text-xl text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer p-2">
                        <option className='' value="Kh">Kharkiv</option>
                        <option value="Kiev">Kiev</option>
                        <option value="Ws">Warsaw</option>
                        <option value="Kr">Krakow</option>
                    </select>
                </div>
            </motion.div>

            <div className=' px-5 md:px-20 pt-8 flex lg:flex-row flex-col justify-between items-center'>
                <motion.div 
                initial='hidden'
                variants={animation2}
                whileInView='visible'
                custom={-0.5}
                className='flex flex-row flex-wrap justify-center md:justify-normal lg:flex-col gap-2'>
                    {
                        team.map((item, index) => 
                            <div 
                            onClick={() => setCurrent(index)}
                            key={index} 
                            style={
                                {
                                    fontSize: index === current ? '20px' : '18px',
                                    background: index === current ? 'lightgray' : 'rgb(249 250 251)',
                                    wordWrap: 'break-word'
                                }
                            }
                            className={`lg:w-52 py-1 rounded-md  cursor-pointer px-5 bg-gray-50 duration-300 hover:scale-105 border border-gray-400`}>{item.pos}</div>
                        )
                    }
                </motion.div>

                <motion.div
                initial='hidden'
                variants={animation2}
                whileInView='visible'
                custom={-0.3}
                className='flex mt-5 lg:mt-0 justify-end xl:justify-center flex-1'>
                    <div style={{maxWidth: '600px'}} className='border-2 border-gray-400 rounded-md p-5 md:p-8 px-5 md:px-14 flex gap-5 flex-col justify-center items-center'>
                        <div className='w-20 h-20 bg-blue-300 rounded-full'></div>
                        <div className='text-center text-lg'>{team[current].tekst}</div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
