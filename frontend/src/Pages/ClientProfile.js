import React from 'react'
import ClientNavbar from '../components/Client/ProductsNavbar/ProductsNavbar'
import img1 from '../assets/img/SettingsCard.png'
import img2 from '../assets/img/OrdersCard.png'
import { Link } from 'react-router-dom'

function ClientProfile() {
    const cards = [
        {src: img1, title: 'Your Personal info', href: '/client-settings'},
        {src: img2, title: 'Your Orders', href: '/orders'},
    ]
  return (
    <div className='Client_Profile_Page'>
        <ClientNavbar />
        <div className='Client_Profile_Container'>
            <h2>Profile</h2>
            <div className='Cards_Container'>
                {cards.map((card, index) => (
                    <Link to={card.href} className='Card' key={index}>
                        <img src={card.src} alt={card.title} />
                        <p>{card.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ClientProfile