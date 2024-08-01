import React, { useState } from 'react';
import Pannel from './Pannel';
import bubles1 from '../../assets/bubbles3.svg';
import logo from '../../assets/logo1.png';
import service1 from '../../assets/service1.JPG';
import service2 from '../../assets/service2.jpg'
import Service from './Service';
import { motion } from 'framer-motion';
import './service.css';

export default function Services() {
    const serviceRef = React.useRef(null);
    const [animationPlayed, setAnimationPlayed] = useState(false);
    const serviceList = [{
        id: 0,
        name: 'Генеральне прибирання',
        photos: [],
        information: [
            "Безкоштовний виїзд менеджера для оцінки або прорахунок замовлення по Вашим фото/відео;",
            "Фіксований прорахунок, який не змінюється під час прибирання;",
            "Спрацьовуємо по кожному сантиметру домівки;",
            "Наявність менеджера контролю якості на протязі всього прибирання;",
            "Індивідуальний підбір засобів та інвентарю під Ваше замовлення;",
            "Дбайливість клінерів до Вашої оселі та предметів інтерʼєру;",
            "Систематичне підвищення кваліфікації персоналу;",
            
            "Генеральне прибирання існує у 2-х тарифах - VIP та Standart:",
            ["дізнатися який підходить саме Вам, можливо зателефонувавши нашому менеджеру чистоти."],
            "Орієнтовна тривалість прибирання 5-8 годин.",
            
        ],
        price: '6 500',
    },{
        id: 1,
        name: 'Прибирання після ремонту',
        photos: [],
        information: [
            "Безкоштовний виїзд менеджера для оцінки або прорахунок замовлення по Вашим фото/відео;",
            "Фіксований прорахунок, який не змінюється під час прибирання;",
            "Вивезення післябудівельного сміття;",
            "Професійне зняття заводської плівки з віконних рам;",
            "Спрацьовуємо по кожному сантиметру домівки;",
            "Повне видалення післябудівельного пилу та залишків фуги;",
            "Наявність менеджера контролю якості на протязі всього прибирання;",
            "Індивідуальний підбір засобів та інвентарю в залежності від матеріалів з яких виконаний ремонт;",
            "Дбайливість клінерів до Вашої оселі та предметів інтерʼєру;",
            "Систематичне підвищення кваліфікації персоналу;",
            "Орієнтовна тривалість прибирання 5-8 годин."
        ],
        price: '8 300',
    },{
        id: 2,
        name: 'Прибирання після квартирантів',
        photos: [],
        information: [
            "Безкоштовний виїзд менеджера для оцінки або прорахунок замовлення по Вашим фото/відео;",
            "Фіксований прорахунок, який не змінюється під час прибирання;",
            "Змішаний тип прибирання при якому ми опираємось на Ваші побажання;",
            "Можливість залучити нашого майстра або сантехніка якщо є необхідність щось відремонтувати;",
            "Дбайливість клінерів до Вашої оселі та предметів інтерʼєру;",
            "Орієнтовна тривалість прибирання 3-6 годин."
          ],
        price: '4 800',
    },{
        id: 3,
        name: 'Регулярне підтримуюче «Домогосподарочка»',
        subName: '«Домогосподарочка» - це одна із авторських послуг, яку ми розробили саме під Вас.',
        photos: [],
        information: [
            "Професійні засоби та інвентар нашої компанії, які виділяються суто під Вашу оселю;",
            "Закріплення 1-2 клінерів за Вашою домівкою в залежності від площі приміщення;",
            "Персональний менеджер у відділі постійних клієнтів;",
            "Охайний та кваліфікований клінер;",
            "Можливість замовляти додаткові послуги Домогосподарочці через персонального менеджера;",
            "Заміна клінера за Вашим бажанням;",
            "Домогосподарочка існує у 2-х тарифа - VIP та Standart:",
            ["дізнатися який варіант підходить саме Вам, можливо зателефонувавши нашому менеджеру чистоти."],
            "Вартість даної послуги залежить від площі приміщення та Ваших побажань;",
            "Мінімальне замовлення від 2-х разів на місяць;",
            "За необхідності Домогосподарочка може забирати Ваш одяг до хімчистки та привозити його назад;",
            "Генеральне прибирання та хімчистка виконується по знижці для постійних клієнтів;",
            "Тривалість прибирання 3-5 годин."
          ],
        price: '1 200',
    },{
        id: 4,
        name: 'Разове підтримуюче прибирання',
        photos: [],
        information: [
            "Безкоштовний виїзд менеджера для оцінки або прорахунок замовлення по Вашим фото/відео;",
            "Фіксований прорахунок, який не змінюється під час прибирання;",
            "Більш поглиблене ніж регулярне прибирання;",
            "Охайні та кваліфіковані клінери;",
            "Вартість данної послуги залежить від стану та площі приміщення;",
            "Враховуються усі Ваші побажання;",
            "Разове підтримуюче прибирання існує у 2-х варіантах: VIP та Standart;",
            ['дізнатися який підходить саме Вам, можливо зателефонувавши нашому менеджеру чистоти'],
            "Тривалість прибирання 3-6 годин."
          ],
        price: '1000',
    },{
        id: 5,
        name: 'Хімчистка',
        photos: [],
        information: [
            "Безкоштовний виїзд менеджера для оцінки або прорахунок замовлення по Вашим фото/відео;",
            "Фіксований прорахунок, який не змінюється під час виконання хімчистки;",
            "Дбайливе відношення до меблів при виконанні замовлення;",
            "За потреби заберемо та похімчистимо Ваш одяг;",
            "Хімчистка килимів в цеху;",
            "Досвідчені майстри з хімчистки, які знаються на виведенні застарілих та важких плям;",
            "Тривалість хімчистки меблів, залежить від обʼєму роботи. Орієнтовно від 2-х годин;",
            "Мінімальна вартість замовлення: ",
            ['Харків - 1800 грн,', 'Київ - 2800 грн.'],
            "Можливість виконати повну сушку виробу після хімчистки."
          ],
        price: '1000',
    },{
        id: 6,
        name: 'Часткове прибирання',
        photos: [],
        information:  [
            "Безкоштовний виїзд менеджера для оцінки або прорахунок замовлення по Вашим фото/відео;",
            "Фіксований прорахунок який не змінюється під час прибирання:",
            [
                "Кухня - від 4300 грн,",
                "Ванна кімната - від 2800 грн,",
                "Кімната (спальня/дитяча/вітальня та інші) - від 2600 грн,",
                "Балкон - від 2800 грн,",
                "Прибирання прибудинкової території - від 3000 грн."
            ],
            "Індивідуальний підбір засобів та інвентарю під Ваше замовлення.",
        ],
        price: '2 600',
    },
    {
        id: 7,
        name: 'Прибирання комерційних приміщень',
        photos: [],
        information:  [
            "Безкоштовний виїзд менеджера для оцінки або прорахунок замовлення по Вашим фото/відео;",
            "Фіксований прорахунок, який не змінюється під час прибирання;",
            "Гнучкий графік прибирання, який підлаштовується під Вас;",
            "Наявність менеджера з контролю якості під час прибирання;",
            "Варіанти співпраць:",
            [
                "Послуга генерального прибирання,",
                "Регулярне підтримуюче прибирання «Домогосподарочка» для комерційних приміщень,",
                "Підписання договору співпраці з фіксованими цінами на тривалий термін,",
                "Замовлення окремих послуг: миття вікон, хімчистка, часткове прибирання,",
                "Миття фасадів та прибирання прибудинкової території."
            ],
            "Надійність та конфіденційність;",
            "Наявність персонального менеджера."
        ],
        price: '2 500',
    },
    {
        id: 8,
        name: 'Додаткові послуги',
        photos: [],
        information:  [
        ],
        price: '2 500',
    },
    {
        id: 9,
        name: 'Чистота домівки «під ключ»',
        photos: [],
        information:  [
            ["Одна із авторських послуг нашої компанії, яка дозволяє Вам насолоджуватись життям і не витрачати свій час на рутинний догляд за домівкою на протязі всього року.",
            "«Чистота домівки під ключ» - це багатофункціональна послуга, яка розробляється індивідуально під кожну квартиру, дім та будь-яке приміщення комерційного типу. "]
        ],
        price: '87 800',
        year: true
    }]

    const [selectedService, setSelectedService] = useState(serviceList[0]);

    const handlePopup = (idx) => {
        serviceRef.current.scrollIntoView({ behavior: 'smooth' });

        setSelectedService(serviceList[idx]);
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
        <>
            <div 
                className='linegrad'></div>
            <motion.h1
                initial='hidden'
                variants={animation}
                id='services'
                whileInView='visible'
                custom={-0.5}
                className="title px-5 md:px-20 pt-8  text-main text-4xl sm:text-5xl md:text-6xl py-5">Послуги</motion.h1>

            <div className="flex flex-col  xl:flex-row justify-between relative " >
                <img src={bubles1}
                    className="w-auto opacity-20 h-96  md:h-600   z-0 absolute bottom-0 left-1/4 " alt="" />
                <div className="flex items-center xl:items-start flex-col gap-5 md:gap-16 pb-5 md:pb-20 px-5 md:px-20 pt-5 md:pt-14 relative z-10">
                    <motion.div 
                    initial='hidden'
                    variants={animation}
                    whileInView='visible'
                    custom={-0.4}
                    className="flex gap-5 w-full sm:w-fit md:gap-20">
                        <Service title='Генеральне прибирання' text='' setIsPannelOpen={() => handlePopup(0)} />
                        <Service title='Прибирання після ремонту' text='' setIsPannelOpen={() => handlePopup(1)} />
                    </motion.div>
                    <motion.div 
                    initial='hidden'
                    whileInView='visible'
                    variants={animation}
                    custom={-0.3}
                    className="flex gap-5 w-full sm:w-fit md:gap-20">
                        <Service title='Прибирання після квартирантів' text='' setIsPannelOpen={() => handlePopup(2)} />
                        <Service title='Регулярне підтримуюче «Домогосподарочка»' text='' setIsPannelOpen={() => handlePopup(3)} />
                    </motion.div>
                    <motion.div 
                    initial='hidden'
                    whileInView='visible'
                    variants={animation}
                    custom={-0.2}
                    className="flex w-full sm:w-fit gap-5 md:gap-20">
                        <Service title='Разове підтримуюче прибирання' text='' setIsPannelOpen={() => handlePopup(4)} />
                        <Service title='Хімчистка' text='' setIsPannelOpen={() => handlePopup(5)} />
                    </motion.div>
                    <motion.div 
                    initial='hidden'
                    whileInView='visible'
                    variants={animation}
                    custom={-0.2}
                    className="flex w-full sm:w-fit gap-5 md:gap-20">
                        <Service title='Часткове прибирання' text='' setIsPannelOpen={() => handlePopup(6)} />
                        <Service title='Прибирання комерційних приміщень' text='' setIsPannelOpen={() => handlePopup(7)} />
                    </motion.div>
                    <motion.div 
                    initial='hidden'
                    whileInView='visible'
                    variants={animation}
                    custom={-0.2}
                    className="flex w-full sm:w-fit gap-5 md:gap-20">
                        <Service title='Додаткові послуги' text='' setIsPannelOpen={() => handlePopup(8)} />
                        <Service title='«Чистота домівки під ключ»' text='' setIsPannelOpen={() => handlePopup(9)} />
                    </motion.div>
                </div>

                <div className="py-20 px-5 relative sm:px-20 pt-14">
                    <div className="relative">
                        <motion.img 
                        initial='hidden'
                        whileInView='visible'
                        variants={animation2}
                        custom={-0.5}
                        src={service1} 
                        className=" w-40 sm:w-64 lg:w-96 h-auto border-8 border-gray-300" alt="" />
                        <motion.img 
                        initial='hidden'
                        whileInView='visible'
                        variants={animation2}
                        custom={-0.3}
                        src={service2}
                        className=" w-40 sm:w-64 lg:w-96 h-auto absolute top-24 xl:top-40  left-24 xl:-left-36 xl:right-64 border-8 border-main" alt="" />
                        
                    </div>
                    <motion.img 
                        initial='hidden'
                        whileInView='visible'
                        variants={animation2} src={logo} className='absolute hidden xl:block bottom-40 right-[80px] opacity-60' alt="" />
                </div>
            </div>
            <div id='prices' className='relative'>
                <div ref={serviceRef} className='absolute -top-32'></div>
                <Pannel serviceList={serviceList} selectedService={selectedService} setSelectedService={setSelectedService}/>
            </div>
        </>
    )
}
