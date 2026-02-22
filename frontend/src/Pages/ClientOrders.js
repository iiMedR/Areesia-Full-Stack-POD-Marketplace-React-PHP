import React from 'react'
import ClientNavbar from '../components/Client/ProductsNavbar/ProductsNavbar'
import OrdersData from '../components/Client/OrdersData/OrdersData'

function ClientOrders() {
  return (
    <div>
        <ClientNavbar />
        <div className='Cient_Orders_Container'>
            <h2>Your Orders</h2>
            <OrdersData />
        </div>
    </div>
  )
}

export default ClientOrders