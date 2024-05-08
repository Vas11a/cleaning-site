import React from 'react'
import service from '../../assets/service1.svg'

export default function Service({ setIsPannelOpen }) {
    return (
        <div
            onClick={() => setIsPannelOpen(true)}
            className="flex flex-col justify-center items-center w-full max-w-72 px-2 sm:px-10 cursor-pointer py-5 sm:py-5 duration-500 hover:shadow-2xl active:shadow-sm bg-gray-100">
            <div className="flex gap-3 items-center">
                <img src={service} className=" w-6 sm:w-8 h-auto" alt="" />
                <div className="text-xl sm:text-2xl font-bold">Serivce 1</div>
            </div>
            <div className='text-sm sm:text-base  pt-2 -mb-2 sm:hidden'>Know more</div>

            <div className=" text-sm sm:text-base text-center pt-5 hide sm:block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
                voluptate.
            </div>
        </div>
    )
}
