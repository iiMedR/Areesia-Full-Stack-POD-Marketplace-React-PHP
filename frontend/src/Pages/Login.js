import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BaseURL from '../components/BaseURL';
import { encryptData } from '../components/Encrypting'

function Login() {
  /*****************************Back End***************************************/
  const history = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputsChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(`${BaseURL}/areesiaAPI/DesignerLogin.php`, formData);
      console.log(response.data.message)
      if(response.data.status === 1){
        const designerData = response.data.data;
        const encryptedDesignerData = encryptData(designerData);
        sessionStorage.setItem('des_userSession', encryptedDesignerData);

        const isClientAuth = true;
        sessionStorage.setItem('des_auth', isClientAuth);

        history("/dashboard");
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
        <div className='Login_Container'>
        <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
                <div className='Left_Item'>
                  <h1>Login</h1>
                  <p>Please enter your information here to sign in.</p>
                  <form onSubmit={handleSubmit} className='Login_Form'>
                      <TextField className='fields' onChange={handleInputsChange} type='email' id="email" label="Email" required/>
                      <TextField className='fields' onChange={handleInputsChange} type='password' id="password" label="Password" required/>
                      <Link to={'/forget-password'} className='Link'>Forget Password</Link>
                      <button type='submit' className='primaryButton'>Sign in</button>
                  </form>
                  <Link to={'/signup'} className='Link'>Creat an account</Link>
                </div>
            </Grid>
            <Grid item xs={0} md={6}>
                <div className='Right_Item'>
                  <div className='signup_welcoming'>
                    <p className='message'><span className='coma'>“</span><br/>let your designs speak louder than words.</p>
                  </div>
                </div>
            </Grid>
        </Grid>
    </div>
    </div>
  )
}

export default Login