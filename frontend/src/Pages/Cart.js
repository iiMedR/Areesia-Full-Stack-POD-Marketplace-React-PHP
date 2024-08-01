import React, {useState} from 'react'
import Navbar from '../components/Client/ProductsNavbar/ProductsNavbar'
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import p1 from '../assets/img/product1.png';

const WhiteBorderTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    fieldset {
      border-color: #0F0F26; /* Custom border color */
      border-radius: 10px; /* Custom border radius */
      border-width: 2px;
    }

    &:hover fieldset {
      border-color: #0F0F26; /* Optional: Change border color on hover */
    }

    &.Mui-focused fieldset {
      border-color: #0F0F26; /* Border color when focused */
    }
  }

  & label.Mui-focused {
    color: #0F0F26; /* Label color when focused */
  }
`;

function Cart() {
    const products = [
        {image: p1, title:'Black cat with flowers Pullover Hoodie', price:'150'},
    ]

  return (
    <div>
        <Navbar />
        <div className='Cart_Page_Container'>
            <h2>Shopping Cart</h2>
            <div className='Cart_Container'>
                <div className='Cart_Left_Side'>
                    {products.map((product,index) => (
                        <div key={index} className='Products_Container'>
                            <div className='Product_Image'>
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className='Product_Info_Container'>
                                <h6>{product.title}</h6>
                                <div className='Product_Info'>
                                    <p>Quantity</p>
                                    <p>250 MAD</p>
                                    <button className='close'><div className='a'/><div className='b'/></button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <hr />
                </div>
                <div className='Cart_Right_Side'>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart