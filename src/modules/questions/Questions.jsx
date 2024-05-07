import React from 'react'
import linda2 from '../../assets/linda2.png'
import Question from './Question'
import './questions.css'
import { motion } from 'framer-motion'

export default function Questions() {
    const [questions, setQuestions] = React.useState([
        {
            name: 'Why bla bla blabla blabalal ??',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non laborum magni facere quaerat animi provident, eum eos amet illum quas harum, itaque facilis nihil error consequatur aliquid tenetur quidem? Eveniet ex officiis quae hic? Commodi natus debitis architecto aliquam, porro non amet.',
            isOpen: false
        },
        {
            name: 'Why bla bla blabla blabalal ??',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non laborum magni facere quaerat animi provident, eum eos amet illum quas harum, itaque facilis nihil error consequatur aliquid tenetur quidem? Eveniet ex officiis quae hic? Commodi natus debitis architecto aliquam, porro non amet.',
            isOpen: false
        },
        {
            name: 'Why bla bla blabla blabalal ??',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non laborum magni facere quaerat animi provident, eum eos amet illum quas harum, itaque facilis nihil error consequatur aliquid tenetur quidem? Eveniet ex officiis quae hic? Commodi natus debitis architecto aliquam, porro non amet.',
            isOpen: false
        },
        {
            name: 'Why bla bla blabla blabalal ??',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non laborum magni facere quaerat animi provident, eum eos amet illum quas harum, itaque facilis nihil error consequatur aliquid tenetur quidem? Eveniet ex officiis quae hic? Commodi natus debitis architecto aliquam, porro non amet.',
            isOpen: false
        },
        {
            name: 'Why bla bla blabla blabalal ??',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non laborum magni facere quaerat animi provident, eum eos amet illum quas harum, itaque facilis nihil error consequatur aliquid tenetur quidem? Eveniet ex officiis quae hic? Commodi natus debitis architecto aliquam, porro non amet.',
            isOpen: false
        },
        {
            name: 'Why bla bla blabla blabalal ??',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non laborum magni facere quaerat animi provident, eum eos amet illum quas harum, itaque facilis nihil error consequatur aliquid tenetur quidem? Eveniet ex officiis quae hic? Commodi natus debitis architecto aliquam, porro non amet.',
            isOpen: false
        },
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
            x: -500,
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
            x: 500,
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

        <div className="questions w-full  pt-5 pb-10">
            <div className='linegrad mt-20'></div>
            <motion.h1
                initial='hidden'
                variants={animation}
                whileInView='visible'
                custom={-0.5}
                className="title  px-20 pt-8  text-main text-6xl py-5">Questions</motion.h1>
            <div className="flex justify-between items-center py-20 px-20 pt-14">
                <div className="flex-1">
                    <motion.img
                        onMouseMove={handleMouseMove}
                        style={{ position: 'relative', left: `${xOffset}px`, top: `${yOffset}px` }}
                        custom={-0.8} src={linda2} className="linda_img duration-300" alt="" />
                </div>

                <motion.div
                    initial='hidden'
                    variants={animation2}
                    whileInView='visible'
                    custom={-0.2}
                    className="flex justify-center flex-1">
                    <div className="w-full p-8 pb-6 pt-10 border-2 flex flex-col gap-6 border-main h-fit rounded-md">
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
