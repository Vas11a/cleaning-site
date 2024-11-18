import React from 'react'
import arrow from '../../assets/arrow2.svg'

export default function Up() {
  return (
    <a href='#catalog_home' className='floatingButton'>
        <img src={arrow} className=' w-12 sm:w-16 h-auto rotate-90' alt="" />
    </a>
  )
}
