import React from 'react'
import service from '../../assets/service1.svg'

export default function Service({ setIsPannelOpen }) {
    return (
        <div 
            onClick={() => setIsPannelOpen(true)}
            className="flex flex-col justify-center items-center max-w-72 px-10 cursor-pointer py-5 duration-500 hover:shadow-2xl active:shadow-sm bg-gray-100">
            <div className="flex gap-3 items-center">
                <img src={service} className="w-8 h-auto" alt=""/>
                    <div className="text-2xl font-bold">Serivce 1</div>
            </div>
            <div className="text-center pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
                voluptate.</div>
        </div>
    )
}
