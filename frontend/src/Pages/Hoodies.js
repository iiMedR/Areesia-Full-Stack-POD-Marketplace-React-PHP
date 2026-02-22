import React, {useState} from 'react'
import Navbar from '../components/Designer/NavBar'
import SweatshirtFrontIMG from '../assets/img/sweatshirt_front.png'
import SweatshirtBackIMG from '../assets/img/sweatshirt_back.png'
import SweatshirtLogoIMG from '../assets/img/sweatshirt_logo.png'
import SweatshirtSleeveLeftIMG from '../assets/img/sweatshirt_sleeve_left.png'
import SweatshirtSleeveRightIMG from '../assets/img/sweatshirt_sleeve_right.png'
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Buttongroup from '../components/Designer/btngrp/ButtonGroup'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Front from '../components/Designer/Upload Sweatshirt/Front/Front'
import Back from '../components/Designer/Upload Sweatshirt/Back/Back'
import Logo from '../components/Designer/Upload Sweatshirt/Logo/Logo'
import LeftSleeve from '../components/Designer/Upload Sweatshirt/Left Sleeve/LeftSleeve'
import RightSleeve from '../components/Designer/Upload Sweatshirt/Right Sleeve/RightSleeve'


function SweatShirt() {
  //const [coverImage, setCoverImage] = useState('');
  const [activeStep, setActiveStep] = useState(1)
  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  }
  const handleBack = () => {
    setActiveStep((prevstep) => prevstep - 1);
  }

  /**********************part dyal upload popup */
  const [isFrontOpen, setFrontOpen] = useState(false);
  const openFrontPopup = () => {
    setFrontOpen(true);
  };

  const closeFrontPopup = () => {
    setFrontOpen(false);
  };

  const [isBackOpen, setBackOpen] = useState(false);
  const openBackPopup = () => {
    setBackOpen(true);
  };

  const closeBackPopup = () => {
    setBackOpen(false);
  };

  const [isLogoOpen, setLogoOpen] = useState(false);
  const openLogoPopup = () => {
    setLogoOpen(true);
  };

  const closeLogoPopup = () => {
    setLogoOpen(false);
  };

  const [isLeftSleeveOpen, setLeftSleeveOpen] = useState(false);
  const openLeftSleevePopup = () => {
    setLeftSleeveOpen(true);
  };

  const closeLeftSleevePopup = () => {
    setLeftSleeveOpen(false);
  };

  const [isRightSleeveOpen, setRightSleeveOpen] = useState(false);
  const openRightSleevePopup = () => {
    setRightSleeveOpen(true);
  };

  const closeRightSleevePopup = () => {
    setRightSleeveOpen(false);
  };

  const Places = [
    {picture: `${SweatshirtFrontIMG}`,alt: 'Sweatshirt front printing', printingType: 'Front', firstButton: openFrontPopup},
    {picture: `${SweatshirtBackIMG}`,alt: 'Sweatshirt back printing',  printingType: 'Back', firstButton: openBackPopup},
    {picture: `${SweatshirtLogoIMG}`,alt: 'Sweatshirt logo printing',  printingType: 'Logo', firstButton: openLogoPopup},
    {picture: `${SweatshirtSleeveLeftIMG}`,alt: 'Sweatshirt sleeve printing (Left One)',  printingType: 'Left Sleeve', firstButton: openLeftSleevePopup},
    {picture: `${SweatshirtSleeveRightIMG}`,alt: 'Sweatshirt sleeve printing (Right one)',  printingType: 'Right Sleeve', firstButton: openRightSleevePopup},
  ]

  const WhiteBorderTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    fieldset {
      border-color: #0F0F26; /* Custom border color */
      border-radius: 10px; /* Custom border radius */
      border-width: 2px;
    }

    &:hover fieldset {
      border-color: #0F0F26; /* Optional: Change border color on hover */
    }

    &.Mui-focused fieldset {
      border-color: #0F0F26; /* Border color when focused */
    }
  }

  & label.Mui-focused {
    color: #0F0F26; /* Label color when focused */
  }
`;



  return (
    <div>
        <Navbar />
        <div className='Printing_Places_Container'>
            {/***** step 1 *****/}
            {activeStep === 1 && (
              <div className='step1_Container'>
                <h3>Printing Places</h3>
                <div className='Products_Container'>
                  {Places.map((places, index) =>(
                    <div className='Product_Place'>
                      <div className='Product_Place_Border'>
                        <img key={index} src={places.picture} alt={places.alt} />
                        <button className='primaryButton' onClick={places.firstButton}>Upload Design</button>
                        <button className='secondaryButton'>Download Mockup</button>
                      </div>
                      <h4>{places.printingType}</h4>
                    </div>
                  ))}
                </div>
                <button className='primaryButton' onClick={handleNext} style={{maxWidth: '500px', margin: '15px auto', padding: '10px'}}>Next</button>
              </div>
            )}
            {/***** step 2 *****/}
            {activeStep === 2 && (
              <div className='step2_Container'>
                <h4>Title</h4>
                <p>Use a descriptive title that explains your work in 4-8 words.</p>
                <WhiteBorderTextField id="Title" placeholder='Example: Great Wave of Trees' sx={{width: '100%'}} required/>
                <h4 style={{marginTop: '15px'}}>Description</h4>
                <p>Share the story or meaning behind your work.</p>
                <WhiteBorderTextField id="Description" multiline rows={4} placeholder='Example: Drawing I did while camping at the national park.' sx={{width: '100%'}} required/>
                <div className='Buttons_Group'>
                  <button className='secondaryButton' onClick={handleBack} style={{ margin: '10px auto', padding: '10px'}}>Back</button>
                  <button className='primaryButton' onClick={handleNext} style={{ margin: '10px auto', padding: '10px'}}>Next</button>
                </div>
              </div>
            )}
            {/***** step 3 *****/}
            {activeStep === 3 && (
              <div className='step3_Container'>
                <div className='Left_Right_Container'>
                  <div className='step3_Left_Side'>
                    <div className='design_Mockup'>
                      {/*{coverImage && <img src={coverImage} alt="Cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}*/}
                    </div>
                  </div>
                  <div className='step3_Right_Side'>
                    <Buttongroup />
                    <h4>Choose audience type</h4>
                    <div>
                    <FormControlLabel control={<Checkbox color='default' />} label="Men" />
                    <FormControlLabel control={<Checkbox color='default' />} label="Women" />
                    <FormControlLabel control={<Checkbox color='default' />} label="Kids" />
                    </div>
                    <h4>Select Colors</h4>
                    <div>
                    <FormControlLabel control={<Checkbox color='default' />} label="Black" />
                    <FormControlLabel control={<Checkbox color='default' />} label="White" />
                    </div>
                    <h4>Default Color</h4>
                    <div>
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                      <FormControlLabel value="Black" control={<Radio color='default' />} label="Black" />
                      <FormControlLabel value="White" control={<Radio color='default' />} label="White" />
                    </RadioGroup>
                    </div>
                    <h4>Your Profit Margin</h4>
                      <WhiteBorderTextField id="Title" type='number' placeholder='50' sx={{width: '40%'}} required/>
                      <p>Total : 200 MAD</p>
                  </div>
                </div>  
                <div className='Buttons_Group'>
                  <button className='secondaryButton' onClick={handleBack} style={{ margin: '10px auto', padding: '10px'}}>Back</button>
                  <button className='primaryButton' onClick={handleNext} style={{ margin: '10px auto', padding: '10px'}}>Next</button>
                </div>
              </div>
            )}
            {/***** step 4 *****/}
            {activeStep === 4 && (
              <div className='step4_Container'>
                <h4>Who Can see this work</h4>
                <RadioGroup>
                  <FormControlLabel value="Public" control={<Radio color='default'/>} label="Anyone / Public" />
                  <FormControlLabel value="private" control={<Radio color='default'/>} label="Only you / private" />
                </RadioGroup>
                <FormControlLabel className='checkbx' control={<Checkbox color='default' />} label="I agree to the Platform User Agreement, and I confirm that I have the right to sell products containing this artwork." />
                <div className='Buttons_Group'>
                  <button className='secondaryButton' onClick={handleBack} style={{ margin: '10px auto', padding: '10px'}}>Back</button>
                  <button className='primaryButton' style={{ margin: '10px auto', padding: '10px'}}>Publish</button>
                </div>
              </div>
            )}
            <div className='step-indicator-container'>
                <div className={activeStep === 1 ? 'step-indicator active' : 'step-indicator'}></div>
                <div className={activeStep === 2 ? 'step-indicator active' : 'step-indicator'}></div>
                <div className={activeStep === 3 ? 'step-indicator active' : 'step-indicator'}></div>
                <div className={activeStep === 4 ? 'step-indicator active' : 'step-indicator'}></div>
            </div>
        </div>
        <Front isOpen={isFrontOpen} onClose={closeFrontPopup} />
        <Back isOpen={isBackOpen} onClose={closeBackPopup} />
        <Logo isOpen={isLogoOpen} onClose={closeLogoPopup}/>
        <LeftSleeve isOpen={isLeftSleeveOpen} onClose={closeLeftSleevePopup} />
        <RightSleeve isOpen={isRightSleeveOpen} onClose={closeRightSleevePopup} />
    </div>
  )
}

export default SweatShirt