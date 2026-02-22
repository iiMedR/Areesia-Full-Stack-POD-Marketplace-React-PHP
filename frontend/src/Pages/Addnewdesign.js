import React from 'react'
import Navbar from '../components/Designer/NavBar'
import Hoodie from '../assets/img/Hoodie.png'
import Shirt from '../assets/img/Tshirt.png'
import Tote from '../assets/img/Tote.png'
import SweatShirt from '../assets/img/Sweatshirt.png'
import Pillow from '../assets/img/Pillow.png'
import { useNavigate } from 'react-router-dom';

function Addnewdesign() {
    const navigate = useNavigate();

    const Products = [
        {picture: `${Hoodie}`, name: 'HOODIES', button: 'Upload Design',href: '/Add-new-design/hoodies'},
        {picture: `${Shirt}`, name: 'TEES', button: 'Coming Soon'},
        {picture: `${Tote}`, name: 'TOTES', button: 'Coming Soon'},
        {picture: `${SweatShirt}`, name: 'SWEATSHIRT', button: 'Coming Soon'},
        {picture: `${Pillow}`, name: 'PILLOWS', button: 'Coming Soon'}
    ]
  return (
    <div>
        <Navbar />
        <div className='Addnewdesign_Container'>
            <h3>Products</h3>
            <div className='Products_Container'>
                {Products.map((products, index) => (
                    <div key={index} className='Product_Card'>
                        <img src={products.picture} alt={products.name} />
                        <h5>{products.name}</h5>
                        <button onClick={() => navigate(products.href)}>{products.button}</button>
                    </div>
                ))}

            </div>
        </div>
    </div>
  )
}

export default Addnewdesign