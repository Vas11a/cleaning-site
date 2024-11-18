import React from 'react'
import NavCatalog from './NavCatalog'
import CatalogHome from './CatalogHome'
import PriceElement from './PriceElement'
import Up from './Up'

export default function CatalogMain({data}) {
  return (
    <>
        <NavCatalog />
        <div className='relative'>
          <CatalogHome data={data.labels}/>
          <PriceElement/>
          <PriceElement/>
        </div>
        <Up/>
    </>
  )
}
