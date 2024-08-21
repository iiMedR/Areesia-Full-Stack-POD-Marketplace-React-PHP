import React from 'react'
import Navbar from '../components/Client/ProductsNavbar/ProductsNavbar'
import orderCompleted from '../assets/img/ordercompleted.png' 


function Invoice() {
    const orders = [
        {name: 'Black cat with flowers Pullov...', unitCost: '250.00', qty: '1', total:'250.00'}
    ]

  return (
    <div>
        <Navbar />
        <div className='Invoice_Page_Container'>
            <h2>Order Completed</h2>
            <div className='Invoice_Container'>
                <div className='Invoice_Left_Side'>
                    <img src={orderCompleted} alt='order Completed' />
                    <div className='text'>
                        <h3>Thank you for trusting us</h3>
                        <h6>We will call you within a day</h6>
                    </div>
                </div>
                <div className='Invoice_Right_Side'>
                <div id='invoice' style={{padding: '35px'}}>
                    <h4>Invoice</h4>
                    <div className='Invoice_Information'>
                        <div className='Left_Side'>
                            <h5>Billed To</h5>
                            <p>Mohamed Reda</p>
                            <p>Hay Bni Makada, mabrouka rue 12, N 13</p>
                            <p>Tangier, Morocco, 90060</p>
                        </div> 
                        <div className='Right_Side'>
                            <h5>Invoice Number</h5>
                            <p>100001</p>
                            <h5>Invoice Total</h5>
                            <p>250.00 MAD</p>
                        </div>
                    </div>
                    <hr/>
                    <div className='Invoice_Bottom'>
                        <h5>Subtotal</h5>
                        <p>250.00 MAD</p>
                    </div>
                    <div className='Invoice_Bottom'>
                        <h5>Delivery</h5>
                        <p>0.00 MAD</p>
                    </div>
                </div>     
                </div>
            </div>
        </div>
    </div>
  )
}

export default Invoice