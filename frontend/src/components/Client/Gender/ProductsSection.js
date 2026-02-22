import React from 'react'
import './ProductsSection.css'
import { Link } from 'react-router-dom'

function ProductsSection() {
  return (
    <div className='Sections_Container'>
        <div className='Top_Container'>
            <Link to='/products' className='Section Kids'>
                <p>Shop For Kids</p>
            </Link>
            <Link to='/products' className='Section Women'>
                <p>Shop For Women</p>
            </Link>
        </div>
        <div className='Bottom_Container'>
            <Link to='/products' className='Section Men'>
                <p>Shop For Men</p>
            </Link>
        </div>
    </div>
  )
}

export default ProductsSection