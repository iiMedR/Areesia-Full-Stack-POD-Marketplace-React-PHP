import React from 'react'
import { Link } from 'react-router-dom'
import ClientNavbar from '../components/Client/ProductsNavbar/ProductsNavbar'
import Cover from '../assets/img/cover.png'
import Profile from '../assets/img/prfl.png'
import prd1 from '../assets/img/design1.png'
import prd2 from '../assets/img/design2.png'
import prd3 from '../assets/img/design3.png'
import prd4 from '../assets/img/design4.png'
import prd5 from '../assets/img/design5.png'


function DesignerProfile() {
  const data = [
    {id: '1', src: prd1, title: 'title number 1 for you', owner: 'mohamed reda', ownerid: '1', price: '300',type: 'tee'},
    {id: '2', src: prd2, title: 'title number 2 for you', owner: 'mohamed reda', ownerid: '2', price: '350',type: 'tee'},
    {id: '3', src: prd3, title: 'title number 3 for you', owner: 'mohamed reda', ownerid: '3', price: '400',type: 'tee'},
    {id: '4', src: prd4, title: 'title number 4 for you', owner: 'mohamed reda', ownerid: '4', price: '200',type: 'tee'},
    {id: '5', src: prd5, title: 'title number 5 for you', owner: 'mohamed reda', ownerid: '5', price: '370',type: 'hoodie'},
    {id: '6', src: prd1, title: 'title number 6 for you', owner: 'mohamed reda', ownerid: '6', price: '290',type: 'tee'},
    {id: '7', src: prd2, title: 'title number 7 for you', owner: 'mohamed reda', ownerid: '7', price: '530',type: 'tee'},
    {id: '8', src: prd3, title: 'title number 8 for you', owner: 'mohamed reda', ownerid: '8', price: '250',type: 'tee'},
    {id: '9', src: prd4, title: 'title number 9 for you', owner: 'mohamed reda', ownerid: '9', price: '400',type: 'tee'},
    {id: '10', src: prd5, title: 'title number 10 for you', owner: 'mohamed reda', ownerid: '10', price: '400',type: 'hoodie'},
    {id: '11', src: prd4, title: 'title number 11 for you', owner: 'mohamed reda', ownerid: '9', price: '300',type: 'tee'},
    {id: '12', src: prd5, title: 'title number 12 for you', owner: 'mohamed reda', ownerid: '10', price: '300',type: 'hoodie'},
  ]
  return (
    <div>
        <ClientNavbar />
        <div className='Designer_Profile_Container'>
          <div className='images_Container'>
            <div className='Designer_Profile_Cover'>
              <img src={Cover} alt='' />
            </div>
            <div className='Designer_Profile_Photo'>
              <img src={Profile} alt='' />
            </div>
          </div>
          <div className='Designer_Profile_Info'>
            <h4 className='name'>Mohamed Reda El Ghazouani</h4>
            <div className='Row'>
              <p>Tangier, Morocco</p>
              <p>5 Designs</p>
            </div>
          </div>
          <div className='Designer_Profile_Products'>
            {data.map((data,index) => (
              <Link to={`./product?id=${data.id}`} key={index} className='Product' >
                <img src={data.src} alt="product" />
                <Link className='text' id='title' to={`./product?id=${data.id}`}>{data.title}</Link>
                <Link className='text' id='owner-name' to={`/designer?id=${data.ownerid}`}>{data.owner}</Link>
                <p>{data.price}</p>
              </Link>
            ))}
          </div>
        </div>
    </div>
  )
}

export default DesignerProfile