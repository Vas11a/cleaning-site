import React from 'react'
import arrow from '../../assets/arrow.svg'

export default function Question({name, description, isOpen, handleQuestion}) {
    return (
        <>
            <div
                onClick={handleQuestion}
                className="flex justify-between items-center pb-4 cursor-pointer border-b border-main">
                <div className="text-2xl font-semibold">Why bla bla blabla blabalal ??</div>
                <img src={arrow} style={{transform: isOpen ? 'rotate(-90deg)' : 'rotate(0deg)'}} className="accArrow w-10 h-auto duration-500" alt=""/>
            </div>
            <div style={{maxHeight: isOpen ? '100px' : '0px'}} className="accElem text-lg duration-500 overflow-y-auto">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non laborum magni facere
                quaerat animi provident, eum eos amet illum quas harum, itaque facilis nihil error
                consequatur aliquid tenetur quidem? Eveniet ex officiis quae hic? Commodi natus debitis
                architecto aliquam, porro non amet.
            </div>
        </>
    )
}
