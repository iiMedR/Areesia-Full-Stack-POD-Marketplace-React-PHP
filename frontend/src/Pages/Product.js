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
            <div className='Right_Side'>
                <h3>Black cat with flowers Pullover Hoodie</h3>
                <p className='Owner'>By Mahmoud Bakhat</p>
                <p className='Price'>250 MAD</p>
                <h4>Color</h4>
                <div className='Checkboxes'>
                    <FormControlLabel control={<Checkbox color='default' />} label="Black" />
                    <FormControlLabel control={<Checkbox color='default' />} label="White" />
                </div>
                <h4>Size</h4>
                <div className='Fit_Size'>
                    <Btngrp buttons={sizes}/>
                    <p><SizeIcon /> Fit Size</p>
                </div>
                <button className='primaryButton'>Complete Purchase</button>
                <button className='secondaryButton'>Add To Cart</button>
            </div>
        </div>
        <div className='Product_Description'>
            <h4>Product details</h4>
            <div className='Details_Container'>
                {details.map((details,index) => (
                    <div key={index} className='Details'>
                        <p className='Title'>{details.title}</p>
                        <p className='Content'>{details.content}</p>
                    </div>
                ))}
            </div>
            <h4>Story About This Item</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo con</p>
        </div>
        <ClientFooter />
    </div>
  )
}

export default Product