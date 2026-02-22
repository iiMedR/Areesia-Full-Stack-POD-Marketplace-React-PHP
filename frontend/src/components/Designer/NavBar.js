import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Avatar, Box } from '@mui/material';
import { useNavigate, NavLink } from 'react-router-dom';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import Logo from '../../assets/img/LOGOB.png'


function Navbar() {
  const navigate = useNavigate();

  // You might want to replace this with the actual amount and currency
  const walletAmount = '1,000 MAD';

  const navLinks = [
    { title: "Dashboard", path: "/dashboard" },
    { title: "Manage Designs", path: "/manage-designs" },
    { title: "Add New Design", path: "/add-new-design" },
    { title: "Withdrawals", path: "/withdrawals" },
    { title: "Settings", path: "/settings" }
  ];

  return (
    <div>
      <AppBar position="static" color="default" sx={{paddingTop: '30px', backgroundColor: 'white', boxShadow: 'none' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            {/* Logo with left padding */}
            <div className='Logo_Container'>
              <img className='logoo' src={Logo} alt='Logo' onClick={() => navigate('/')}/>
            </div>
          </Box>

          {/* Wallet Button */}
          <Button
            color="inherit"
            onClick={() => navigate('/withdrawals')}
            startIcon={<AccountBalanceWalletOutlinedIcon />}
            sx={{ marginRight: '20px' }}
          >
            {walletAmount}
          </Button>

          {/* Profile Icon */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => navigate('/settings')}
            sx={{ marginRight: '0px' }}
          >
            <Avatar alt="Profile" src='' />
          </IconButton>
        </Toolbar>
      </AppBar>
      <AppBar position="static" color="default" className="navbar">
      <Toolbar className="toolbar">
        <div className="nav-link-container">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
