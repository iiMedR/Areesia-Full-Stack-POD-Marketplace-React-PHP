import React from 'react'
import Hoodie from '../../../assets/img/Hoodie.png'
import Shirt from '../../../assets/img/Tshirt.png'
import Tote from '../../../assets/img/Tote.png'
import SweatShirt from '../../../assets/img/Sweatshirt.png'
import Pillow from '../../../assets/img/Pillow.png'
import { useNavigate } from 'react-router-dom';
import './Categories.css'

function Categories() {
    const navigate = useNavigate();

    const categories = [
      {image:`${Hoodie}`, title:'HOODIES', href:'/products'},
      {image:`${Shirt}`, title:'TEES', href:'/products'},
      {image:`${Tote}`, title:'TOTES', href:'/products'},
      {image:`${SweatShirt}`, title:'SWEATSHIRTS', href:'/products'},
      {image:`${Pillow}`, title:'PILLOWS', href:'/products'}
    ]
  return (
    <div className='Categories_Container'>
        <h2>SHOP BY CATEGORY</h2>
        <div className='Categories'>
        {categories.map((categories, index) => (
            <button key={index} className='Category_Card' onClick={() => navigate(categories.href)}>
                <img src={categories.image} alt={categories.title} />
                <h5>{categories.title}</h5>
            </button>
        ))}
        </div>
    </div>
  )
}

export default Categories