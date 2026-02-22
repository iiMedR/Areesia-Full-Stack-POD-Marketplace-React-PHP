import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './ClientFooter.css'
import Logo from '../../../assets/img/LOGOS.png'

function ClientFooter() {

  const navigate = useNavigate();
  return (
    <div className='Client_Footer_Container'>
        <div className='Logo_Container'>
            <img className='Footer_Logo' src={Logo} alt='Logo' onClick={() => navigate('/')}/>
        </div>
        <div className='Sections_Container'>
            <div className='Section'>
                <p className='title'>SHOP</p>
                <Link to='/Products' className='link'>MEN</Link>
                <Link to='/Products' className='link'>WOMEN</Link>
                <Link to='/Products' className='link'>KIDS</Link>
            </div>
            <div className='Section'>
                <p className='title'>ABOUT</p>
                <Link to='/About-us' className='link'>ABOUT US</Link>
                <Link to='/signup' className='link'>PARTNER PROGRAM</Link>
                <Link to='/affiliate' className='link'>AFFILIATE</Link>
                <Link to='/jobs' className='link'>JOBS</Link>
            </div>
            <div className='Section'>
                <p className='title'>Help</p>
                <Link to='/delivery' className='link'>DELIVERY</Link>
                <Link to='/returns' className='link'>RETURNS</Link>
                <Link to='/contact us' className='link'>CONTACT US</Link>
            </div>
            <div className='Section'>
                <p className='title'>Socials</p>
                <Link to='/' className='link'>INSTAGRAM</Link>
                <Link to='/' className='link'>TIKTOK</Link>
            </div>
        </div>
        <p className='rights'>
            &copy; {new Date().getFullYear()} AREESIA | All Rights Reserved
        </p>
    </div>
  )
}

export default ClientFooter