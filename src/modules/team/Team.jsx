import React from 'react'
import { motion } from 'framer-motion'
import loca from '../../assets/loca.svg'
import alina from '../../assets/alina.JPG'

const KV = [{
    name: 'Тут буде ім`я',
    pos: 'Директор',
    image: '',
    tekst: 'Якійсь опис'
}, {
    name: 'Ляшенко Аліна Сергіївна',
    pos: 'Заступник директора',
    image: alina,
    tekst: 'Ляшенко Аліна Сергіївна - Заступник директора'
},
{
    name: 'Тут буде ім`я',
    pos: 'Керівник',
    image: '',
    tekst: 'Якійсь опис'
},
{
    name: 'Тут буде ім`я',
    pos: 'Менеджер систем якості',
    image: '',
    tekst: 'Якійсь опис'
}]

const KH = [{
    name: 'Тут буде ім`я',
    pos: 'Директор',
    image: '',
    tekst: 'Якійсь опис'
}, {
    name: 'Ляшенко Аліна Сергіївна',
    pos: 'Заступник директора',
    image: alina,
    tekst: 'Ляшенко Аліна Сергіївна - Заступник директора'
},
{
    name: 'Тут буде ім`я',
    pos: 'Керівник',
    image: '',
    tekst: 'Якійсь опис'
},
{
    name: 'Тут буде ім`я',
    pos: 'Менеджер систем якості',
    image: '',
    tekst: 'Якійсь опис'
}]

export default function Team() {

    const [team, setTeam] = React.useState(KH)

    const [current, setCurrent] = React.useState(0)

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

    const [selectedValue, setSelectedValue] = React.useState('Kh'); // Встановіть початкове значення за замовчуванням

    // Функція для обробки зміни вибраного значення
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        if(event.target.value === 'Kh'){
            setTeam(KH)
        } else {
            setTeam(KV)
        }
    };

    return (
        <div id="team" className="reviews relative w-full sm:py-10">
            <div className='linegrad'></div>
            <motion.h1
                initial='hidden'
                variants={animation}
                whileInView='visible'
                custom={-0.5}
                className="title px-5 md:px-20 pt-8  text-main text-4xl sm:text-5xl md:text-6xl py-5">Наша команда</motion.h1>


            <motion.div
                initial='hidden'
                variants={animation}
                whileInView='visible'
                custom={-0.5}
                className=' px-5 md:px-20 pt-0 sm:pt-5 flex justify-between gap-5 items-center'>
                <motion.div className=' text-2xl sm:text-3xl font-semibold'>{team[current].name}</motion.div>

                <div className='flex gap-3 items-end'>
                    <img src={loca} alt="" className='w-9 h-auto' />
                    <select
                        id="underline_select"
                        className="block px-0 w-40 text-xl text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer p-2"
                        value={selectedValue} // Встановлення значення для керування
                        onChange={handleChange} // Обробник зміни значення
                    >
                        <option value="Kh">Харків</option>
                        <option value="Kiev">Київ</option>
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
                                className={`lg:w-[300] py-1 rounded-md  cursor-pointer px-5 bg-gray-50 duration-300 hover:scale-105 border border-gray-400`}>{item.pos}</div>
                        )
                    }
                </motion.div>

                <motion.div
                    initial='hidden'
                    variants={animation2}
                    whileInView='visible'
                    custom={-0.3}
                    className='flex mt-5 lg:mt-0 justify-end xl:justify-center flex-1'>
                    <div style={{ maxWidth: '600px', }} className='border-2 border-gray-400 rounded-md p-5 md:p-8 px-5 md:px-14 flex gap-5 flex-col justify-center items-center'>
                        {
                            team[current].image !== '' ? (
                                <img src={team[current].image} alt="" className=' w-20 h-20 lg:w-32 lg:h-32 rounded-full' />
                            ) : (
                                <div className='w-20 h-20 bg-blue-300 rounded-full'></div>
                            )
                        }
                        
                        <div className='text-center text-lg'>{team[current].tekst}</div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
