import React, {useState} from 'react'
import Navbar from '../components/Client/ProductsNavbar/ProductsNavbar'
import QuantityInput from '../components/Client/NumberInput/QuantityInput'
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

    const [activeStep, setActiveStep] = useState(1)
    const handleNext = () => {
      setActiveStep((prevStep) => prevStep + 1);
    }
    const handleBack = () => {
      setActiveStep((prevstep) => prevstep - 1);
    }

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
                                    <QuantityInput />
                                    <p>250 MAD</p>
                                    <button className='close'><div className='a'/><div className='b'/></button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <hr />
                </div>
                <div className='Cart_Right_Side'>
                    {/** step 1 */}
                    {activeStep === 1 && (
                        <div>
                            <h4>Shipping</h4>
                            <div className='Shipping_Container'>
                                <RadioGroup defaultValue="free" name="shipping">
                                    <FormControl size="lg">
                                        <Radio value="free" label="Free Shipping" color="neutral" />
                                        <FormHelperText>
                                            Between 2 - 5 days
                                        </FormHelperText>
                                    </FormControl>
                                </RadioGroup>
                                <h5>0 MAD</h5>
                            </div>
                            <h4>Order Summary</h4>
                            <div className='Order_Summary'>
                                <p>Subtotal</p>
                                <p>250 MAD</p>
                            </div>
                            <div className='Order_Summary'>
                                <p>Shipping fees</p>
                                <p>0 MAD</p>
                            </div>
                            <div className='Order_Summary'>
                                <p>Total</p>
                                <p>250 MAD</p>
                            </div>
                            <div className='Cart_Right_Bottom'>
                                <button className='primaryButton' onClick={() => handleNext()}>NEXT</button>
                                <div className='step-indicator-container'>
                                    <div className={activeStep === 1 ? 'step-indicator active' : 'step-indicator'}></div>
                                    <div className={activeStep === 2 ? 'step-indicator active' : 'step-indicator'}></div>
                                </div>
                            </div>
                        </div>
                    )}
                    {/** step 1 */}
                    {activeStep === 2 && (
                        <div>
                            <h4>Delivery Info</h4>
                            <div className='Cart_Form'>
                                <div className='name-fields'>
                                    <WhiteBorderTextField className='fields' id="firstName" label="First Name" required/>
                                    <WhiteBorderTextField className='fields' id="lastName" label="Last Name" required/>
                                </div>
                                <div className='name-fields'>
                                    <WhiteBorderTextField className='fields' id="city" label="City" required/>
                                    <WhiteBorderTextField className='fields' id="country" label="Country" required/>
                                </div>
                                <div className='name-fields'>
                                    <WhiteBorderTextField className='fields' id="postalCode" label="Postal Code" required/>
                                    <WhiteBorderTextField className='fields' id="phoneNumber" label="Phone Number" required/>
                                </div>
                                <WhiteBorderTextField className='fields' id="Address" label="Address" sx={{width: '100%'}} required/>
                            </div>
                            <div className='Cart_Right_Bottom'>
                                <button className='primaryButton'>Finish The Order</button>
                                <button className='secondaryButton' onClick={() => handleBack()}>Back</button>
                                <div className='step-indicator-container'>
                                    <div className={activeStep === 1 ? 'step-indicator active' : 'step-indicator'}></div>
                                    <div className={activeStep === 2 ? 'step-indicator active' : 'step-indicator'}></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart