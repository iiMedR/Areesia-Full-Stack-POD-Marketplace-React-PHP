import React, { useState } from 'react';
import ClientNavbar from '../components/Client/ProductsNavbar/ProductsNavbar'
import ClientFooter from '../components/Client/Footer/ClientFooter'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Btngrp from '../components/Client/btngrp/ButtonGroup'
import SizeIcon from '@mui/icons-material/StraightenOutlined';
import p1 from '../assets/img/product1.png'
import p2 from '../assets/img/product2.png'
import p3 from '../assets/img/product3.png'
import p4 from '../assets/img/product4.png'

function Product() {
    const [selectedImage, setSelectedImage] = useState(p1);

    const sizes =[
        {name: 'SB', value: 'sb'},
        {name: 'S', value: 's'},
        {name: 'M', value: 'm'},
        {name: 'K', value: 'k'},
        {name: 'KB', value: 'kb'},
    ]

    const details = [
        {title: 'Fabric type', content: 'Solid colors: 100% Cotton; Heather Grey: 90% Cotton, 10% Polyester; All Other Heathers: 50% Cotton,50% Polyester'},
        {title: 'Care instructions', content: 'Machine Wash'},
        {title: 'Origin', content: 'Moroccan'},
    ]
  return (
    <div>
        <ClientNavbar />
        <div className='Product_Page_container'>
            <div className='Left_Side'>
                <div className='Small_Photos_Container'>
                    <button onClick={() => setSelectedImage(p1)}><img src={p1} alt='' /></button>
                    <button onClick={() => setSelectedImage(p2)}><img src={p2} alt='' /></button>
                    <button onClick={() => setSelectedImage(p3)}><img src={p3} alt='' /></button>
                    <button onClick={() => setSelectedImage(p4)}><img src={p4} alt='' /></button>
                </div>
                <div className='Main_Photo_Container'>
                    <img src={selectedImage} alt='' />
                </div>
            </div>
        </div>
        <ClientFooter />
    </div>
  )
}

export default Product