import React from 'react'
import raiting from '../../assets/rating.svg'

export default function Review() {
    return (
        <div className='flex justify-center items-center h-full'>
            <div className="w-2/3 p-8  rounded-md">
            <div className="text-center font-bold text-2xl">Ivan Ivanych</div>
            <div className="flex gap-1 pt-3 justify-center">
                <img src={raiting} className="w-6 h-auto" alt="" />
                <img src={raiting} className="w-6 h-auto" alt="" />
                <img src={raiting} className="w-6 h-auto" alt="" />
                <img src={raiting} className="w-6 h-auto" alt="" />
                <img src={raiting} className="w-6 h-auto" alt="" />
            </div>
            <div className="pt-3 text-center text-xl">Lorem ipsum dolor sit amet consectetur
                adipisicing.</div>
        </div>
        </div>
    )
}
