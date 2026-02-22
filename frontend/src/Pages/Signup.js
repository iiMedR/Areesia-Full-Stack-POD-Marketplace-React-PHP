import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BaseURL from '../components/BaseURL';


function Signup() {
  const [activeStep, setActiveStep] = useState(1)
  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  }
  const handleBack = () => {
    setActiveStep((prevstep) => prevstep - 1);
  }


  /**************************Back End***********************************************/
  const [formData , setFormData] = useState({
    type: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const handleArtist = () => {
    setFormData({...formData, type: 'artist'})
    handleNext()
  }

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value})
  }
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      const response = await axios.post(`${BaseURL}/areesiaAPI/DesignerSignup.php`, formData)
      console.log(response.data.message)
      if(response.data.status === 1){
        handleNext()
      }
    } catch(error){
      console.error(error)
    }
    
  }
  return (
    <div className='Signup_Container'>
        <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
                <div className='Left_Item'>
                  <h1>Sign up</h1>
                  <p>Ready to showcase your creativity ?</p>
                  <div className='Signup_Form'>
                    {/** step 1 */}
                    {activeStep === 1 && (
                      <div className='Signup_First_Step'>
                        <button className='primaryButton' id='type' onClick={handleArtist}>Artist</button>
                        <button className='secondaryButton' disabled>Influencer</button>
                      </div>
                    )}
                    {/** step 2 */}
                    {activeStep === 2 && (
                      <div className='Signup_Second_Step'>
                        <div className='name-fields'>
                          <TextField className='fields' id="firstName" onChange={handleInputChange} label="First Name" required/>
                          <TextField className='fields' id="lastName" onChange={handleInputChange} label="Last Name" required/>
                        </div>
                        <TextField className='fields' type='email' onChange={handleInputChange} id="email" label="Email" required/>
                        <TextField className='fields' type='password' onChange={handleInputChange} id="password" label="Password" required/>
                        <button className='primaryButton' onClick={handleSubmit}>Confirm Email</button>
                        <button className='secondaryButton' onClick={() => handleBack()}>Back</button>
                      </div>
                    )}
                    {/** step 3 */}
                    {activeStep === 3 && (
                      <div className='Signup_Third_Step'>
                        <p>We've sent a confirmation email your way. Please check your inbox to complete the signup process and start sharing your incredible designs with the world.</p>
                      </div>
                    )}
                    
                  </div>
                  <div className='step-indicator-container'>
                      <div className={activeStep === 1 ? 'step-indicator active' : 'step-indicator'}></div>
                      <div className={activeStep === 2 ? 'step-indicator active' : 'step-indicator'}></div>
                      <div className={activeStep === 3 ? 'step-indicator active' : 'step-indicator'}></div>
                  </div>
                  <Link to={'/login'} className='Link'>I Have an account</Link>
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
  )
}

export default Signup