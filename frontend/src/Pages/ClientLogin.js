import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import { encryptData } from '../components/Encrypting'
import axios from 'axios';
import BaseURL from '../components/BaseURL';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const WhiteBorderTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    fieldset {
      border-color: #0F0F26; /* Custom border color */
      border-radius: 5px; /* Custom border radius */
      border-width: 1px;
    }

    &:hover fieldset {
      border-color: #0F0F26; /* Optional: Change border color on hover */
    }

    &.Mui-focused fieldset {
      border-color: #6661F7; /* Border color when focused */
      border-width: 2px;
    }
  }

  & label.Mui-focused {
    color: #6661F7; /* Label color when focused */
  }
`;


function ClientLogin() {
  /*******************************Back end************************************/
  const history = useNavigate(); // Add this line

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BaseURL}/areesiaAPI/login.php`, formData);
      console.log(response.data.message);
      
    // If signup is successful, store encrypted user data in session storage
    if (response.data.status === 1) {
      const clientData = {
        id: response.data.id,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        phoneNumber: response.data.phoneNumber,
        email: response.data.email,
        birthday: response.data.birthday,
        defaultAddress: response.data.defaultPassword,
        emailConfirmation: response.data.emailConfirmation
      };
      const encryptedClientData = encryptData(clientData);
      sessionStorage.setItem('clt_userSession', encryptedClientData);

      const isClientAuth = true;
      sessionStorage.setItem('clt_auth', isClientAuth);

      history("/profile"); // Redirect to homepage
      // Decrypt and log the data for demonstration
      //const decryptedUserData = decryptData(encryptedUserData);
      //console.log('Decrypted User Data:', decryptedUserData.id);
    }

    } catch (error) {
      console.error('Error during login:', error);
    }
  }

  return (
    <div className='Client_Signup_Container'>
        <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
                <div className='Client_Left_Item'>
                  <h1>Sign in</h1>
                  <p>Please enter your information here to sign in.</p>
                  <form onSubmit={handleSubmit} className='Client_Signup_Form'>
                      <div className='Client_Signup_First_Step'>
                        <WhiteBorderTextField onChange={handleInputChange} className='fields' type='email' id="email" label="Email" required/>
                        <WhiteBorderTextField onChange={handleInputChange} className='fields' type='password' id="password" label="Password" required/>
                        <button type='submit' className='primaryButton'>Sign in</button>
                      </div>
                  </form>
                  <Link to={'/client-signup'} className='Link'>Create Your Account</Link>
                </div>
            </Grid>
            <Grid item xs={0} md={6}>
                <div className='Client_Right_Item'>
                  <div className='signup_welcoming'>
                    <p className='message'><span className='coma'>“</span><br/>Welcome back Twhechnaaaaaak <span className='smile'>:)</span></p>
                  </div>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default ClientLogin