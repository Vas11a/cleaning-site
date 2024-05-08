import React from 'react'
import social4 from '../../assets/social4.png'
import social5 from '../../assets/social5.webp'
import social7 from '../../assets/social7.webp'
import phone from '../../assets/phone.svg'

export default function Call() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    
    <div className="floatingButton flex gap-3 sm:gap-7 items-center">
        <div style={{width: isOpen ? '230px' : '0', border: isOpen ? '1px solid #4eac99' : 'none'}}
            className="socBlock border  duration-500 overflow-hidden rounded-md py-2 sm:py-5 bg-white flex flex-col gap-3 items-center">
            <div className="text-xl font-semibold">chotottam@gmail.com</div>
            <div className="flex gap-3">
                <img src={social4}  className="w-8 rounded-full h-auto" alt=""/>
                <img  src={social5}  className="w-8 rounded-full h-auto" alt=""/>
                <img  src={social5}  className="w-8 rounded-full h-auto" alt=""/>
                <img  src={social7}  className="w-8 rounded-full h-auto" alt=""/>
            </div>
        </div>
        <div
            onClick={() => setIsOpen(!isOpen)}
            className="floatBtn w-14 h-14 sm:w-20 sm:h-20 flex justify-center items-center rounded-full bg-teal-400">
            <img src={phone} className=" w-9 sm:w-12 h-auto" alt=""/>
        </div>
    </div>
  )
}
