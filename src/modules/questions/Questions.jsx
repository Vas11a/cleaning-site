import React from 'react'
import linda2 from '../../assets/linda1.png'
import Question from './Question'
import './questions.css'
import { motion } from 'framer-motion'

export default function Questions() {
    const [questions, setQuestions] = React.useState([
        {
            name: 'Від чого залежить вартість послуг?',
            description: 'Кожна домівка особлива та індивідуальна. Вона має свої внутрішні складові, такі як: матеріали з яких вона зроблена, предмети декору, текстилю та технічний паспорт. Тобто при однаковій площині кількість кімнат, санвузлів та балконів може бути різна. Хочемо зазначити, що орієнтовна вартість ніколи не відповідає дійсності. Тому для детального прорахунку необхідний виїзд менеджера або Ваші фото/відео приміщення.',
            isOpen: false
        },
        {
            name: 'Оцінка вартості: виїзд менеджера та фото/відео. Для чого?',
            description: 'Виїзд менеджера або Ваші фото/відео допомагають сформувати вартість, яка вже не буде змінюватися під час прибирання. Оскільки після огляду домівки чи перегляду медіафайлів менеджер чистоти має змогу візуально оцінити об\'єм роботи та вислухати Ваші побажання. В нашій компанії ця послуга безкоштовна. Після оцінки та рекомендацій менеджера Ви можете обрати найкращий вид послуги та тариф для себе.',
            isOpen: false
        },
        {
            name: 'Прибирання VIP та Standart - що обрати?',
            description: 'Майже кожна послуга нашої компанії має 2 тарифи - VIP та Standart. Різниця між VIP та Standart полягає у тому, що VIP прибирання - це той самий Standart, але з більш розширеним переліком робіт. При замовленні Вам обов\'язково нададуть інформацію про послугу у цих двох варіантах з перевагами та відмінностями.',
            isOpen: false
        },
        {
            name: 'Як розраховується кількість клінерів для прибирання?',
            description: 'Менеджер чистоти після виїзду або перегляду фото/відео оцінює не тільки вартість прибирання, а й кількість клінерів в залежності від тих даних, які він отримав.',
            isOpen: false
        },
        {
            name: 'Чому етап сушіння виробу після хімчистки не рекомендовано оминати?',
            description: 'Сушіння меблів - це завершальний етап при хімчистці, який є таким же важливим, як і основна чистка. Нехтуючи цим етапом, можна здобути безліч негативних наслідків. Навіть при правильній технології, якщо не зробити сушку, найнеприємнішим наслідком є ризик утилізації самого виробу.',
            isOpen: false
        },
        {
            name: 'Якщо я алергік, як бути?',
            description: 'Наша компанія відрізняється тим, що ми підбираємо засоби та інвентар не тільки під приміщення, а й під власників. В нашому арсеналі є велика кількість засобів, які ми можемо підібрати саме під Вас. Попередьте, будь ласка, менеджера чистоти про наявність алергії у Вас або у будь-якого члена родини, включаючи тварин.',
            isOpen: false
        }
    ])

    const handleQuestion = (idx) => {
        const newQuestions = [...questions]
        newQuestions[idx].isOpen = !newQuestions[idx].isOpen
        setQuestions(newQuestions)
    }


    const [xOffset, setXOffset] = React.useState(0);
    const [yOffset, setYOffset] = React.useState(0);

    const handleMouseMove = (e) => {
        const randomX = Math.floor(Math.random() * 31);
        const randomY = Math.floor(Math.random() * 31);
        setXOffset(randomX);
        setYOffset(randomY);
    };

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
    return (

        <div id='questions' className="questions w-full  pt-5 pb-10">
            <div className='linegrad mt-20'></div>
            <motion.h1
                initial='hidden'
                variants={animation}
                whileInView='visible'
                custom={-0.5}
                className="title px-5 md:px-20 pt-8  text-main text-4xl sm:text-5xl md:text-6xl py-5">Відповіді на часті питання</motion.h1>
            <div className="flex justify-between items-center py-5 sm:py-20 p-5 sm:px-20 pt-5 sm:pt-14 relative">
                <div className="xl:flex-1 ">
                    <motion.img
                        onMouseMove={handleMouseMove}
                        style={{ 
                            left: `${xOffset}px`, 
                            top: `${yOffset}px`,
                            height: 'auto' 
                        }}
                        custom={-0.8} src={linda2} className=" w-96 md:w-500 opacity-20 ml-16 sm:ml-64 mt-32 md:ml-96 xl:ml-0 xl:opacity-100 sm:mt-72 xl:mt-0  z-0  absolute xl:relative duration-300" alt="" />
                </div>

                <motion.div
                    initial='hidden'
                    variants={animation2}
                    whileInView='visible'
                    custom={-0.2}
                    className="flex justify-center flex-1">
                    <div className="w-full relative z-10 p-5 sm:p-8 pb-6 pt-5 sm:pt-10 border-2 flex flex-col gap-3 sm:gap-6 border-main h-fit rounded-md">
                        {
                            questions.map((elem, idx) => (
                                <Question handleQuestion={() => handleQuestion(idx)} name={elem.name} description={elem.description} isOpen={elem.isOpen} key={idx} />
                            ))
                        }


                    </div>
                </motion.div>
            </div>
        </div>
    )
}
