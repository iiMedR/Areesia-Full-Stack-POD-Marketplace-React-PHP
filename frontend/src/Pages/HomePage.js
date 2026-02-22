import React from 'react'
import ClientNavbar from '../components/Client/Navbar/ClientNavbar'
import ClientFooter from '../components/Client/Footer/ClientFooter'
import HoodieWelcomingImg from '../assets/img/Welcoming.png'
import Categories from '../components/Client/Categories/Categories'
import ProductsSection from '../components/Client/Gender/ProductsSection'

function HomePage() {

  return (
    <div>
      <div className='Header_Container'>
        <ClientNavbar />
        <div className='Welcoming_Container'>
          <h1 className='stroke'>creative haven</h1>
          <p>where every design is a masterpiece in the making</p>
          <img src={HoodieWelcomingImg} alt='Hoodies'/>
          <h1>creative haven</h1>
        </div>
      </div>
      <Categories />
      <ProductsSection />
      <ClientFooter />
    </div>
  )
}

export default HomePage