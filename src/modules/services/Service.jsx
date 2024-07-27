import React from 'react'
import service from '../../assets/service1.svg'

export default function Service({ setIsPannelOpen, title }) {
    return (
        <div
            onClick={setIsPannelOpen}
            className="flex flex-col justify-center border-4 border-main items-center w-[280px] px-2 sm:px-5 cursor-pointer py-5 sm:py-5 duration-500 hover:shadow-2xl active:shadow-sm bg-gray-100">
            <div className="flex gap-3 items-center">
                <div style={{wordWrap: 'break-words'}} className="text-md sm:text-2xl text-center break-words font-bold">{title}</div>
            </div>
            <div className='text-sm sm:text-base  pt-2 -mb-2 sm:hidden text-center'>Дізнатися…</div>

            <div className=" text-sm sm:text-base text-center pt-5 hide sm:block">Дізнатися…
            </div>
        </div>
    )
}
