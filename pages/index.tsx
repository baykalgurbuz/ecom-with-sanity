import React from 'react'
import {Product,FooterBanner,HeroBanner} from '../components'
const Home = () => {
  return (
    <>
    <HeroBanner/> 
    <div className='products-heading'>
      <h2>Best Selling Product</h2>
      <p>Speakers of many variations</p>
    </div>
    <div className='products-container'>
      {['Produt1','Product2'].map((product)=>product)}
    </div>


    <FooterBanner/>
    </>
  )
}

export default Home