import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import {IconButton} from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './ClientNavbar.css'
import Logo from '../../../assets/img/LOGOW.png'

function ClientNavbar() {
  const navigate = useNavigate();

  const navLinks = [
    { title: "NEW", path: "/products" },
    { title: "MEN", path: "/products" },
    { title: "WOMEN", path: "/products" },
    { title: "KIDS", path: "/products" },
  ];



  /*****************************Back end*******************************************/
  const isAuth = sessionStorage.getItem('clt_auth')

  return (
    <div className='Client_Navbar_Container'>
        <div className='Logo_Container'>
              <img className='logoo' src={Logo} alt='Logo' onClick={() => navigate('/')}/>
        </div>
        <div className='Links_Section_Container'>
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className='nav-link'
            >
              {link.title}
            </NavLink>
          ))}
        </div>
        <div className='Icons_Container'>
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => navigate(isAuth ? '/profile' : '/client-login')}
            sx={{ marginRight: '0px' }}
          >
            <PersonOutlineOutlinedIcon />
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => navigate(isAuth ? '/Cart' : '/client-login')}
            sx={{ marginRight: '0px' }}
          >
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </div>
    </div>
  )
}

export default ClientNavbar