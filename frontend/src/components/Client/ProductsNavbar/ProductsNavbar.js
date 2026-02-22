import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IconButton} from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './ProductsNavbar.css'
import Logo from '../../../assets/img/LOGO.png'

function ClientNavbar() {
  const navigate = useNavigate();


  return (
    <div className='Products_Navbar_Container'>
        <div className='Products_Navbar_Top'>
            <div className='Logo_Container'>
                <div className='Logo_Container'>
                    <img className='logoo' src={Logo} alt='Logo' onClick={() => navigate('/')}/>
                </div>
            </div>
            <div className='Icons_Container'>
            <IconButton
                edge="end"
                color="inherit"
                onClick={() => navigate('/Profile')}
                sx={{ marginRight: '0px', width: '55px' }}
            >
                <PersonOutlineOutlinedIcon />
            </IconButton>
            <IconButton
                edge="end"
                color="inherit"
                onClick={() => navigate('/Cart')}
                sx={{ marginRight: '0px', width: '55px' }}
            >
                <ShoppingCartOutlinedIcon />
            </IconButton>
            </div>
        </div>
    </div>
  )
}

export default ClientNavbar