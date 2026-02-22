import React from 'react'
import TextField from '@mui/material/TextField';
import styled from "styled-components";
import WafaCashIMG from '../../assets/img/WafaCash.png'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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

function WafaCash({ isOpen, onClose }) {
  return (
    <div  className={`popup ${isOpen ? 'open' : ''}`} onClick={onClose}>
        <div className="popup-container" onClick={e => e.stopPropagation()}>
            <div className='CashPlus_Container'>
                <img src={WafaCashIMG} alt='CashPlus' />
                <div className='name-fields'>
                    <WhiteBorderTextField className='fields' id="firstName" label="First Name" required/>
                    <WhiteBorderTextField className='fields' id="lastName" label="Last Name" required/>
                </div>
                <WhiteBorderTextField className='fields' id="nationalID" label="National Card ID" required/>
                <FormControlLabel control={<Checkbox required color='default' />} label="I confirm that all Information above are mine and correct." />
                <p>Warning: To withdraw funds from Wafacash, it's essential to provide your national card ID.</p>
                <div className="buttons-container">
                    <button className="primaryButton">Save Payment method</button>
                    <button className="secondaryButton" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WafaCash