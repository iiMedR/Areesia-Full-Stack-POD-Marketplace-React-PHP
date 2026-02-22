import React from 'react'
import TextField from '@mui/material/TextField';
import styled from "styled-components";
import BankTransferIMG from '../../assets/img/BankTransfer.png'
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

function BankTransfer({ isOpen, onClose }) {
  return (
    <div  className={`popup ${isOpen ? 'open' : ''}`} onClick={onClose}>
        <div className="popup-container" onClick={e => e.stopPropagation()}>
            <div className='CashPlus_Container'>
                <img src={BankTransferIMG} alt='CashPlus' />
                <div className='name-fields'>
                    <WhiteBorderTextField className='fields' id="firstName" label="Account Holder Name" required/>
                    <WhiteBorderTextField className='fields' id="lastName" label="Bank Name" required/>
                </div>
                <WhiteBorderTextField className='fields' id="nationalID" label="Account Number (IBAN)" required/>
                <p>your bank account statement (24 digits)</p>
                <FormControlLabel control={<Checkbox required color='default' />} label="I confirm that all Information above are mine and correct." />
                <p>Warning: We do not accept responsibility for any delays, additional expenses, or financial losses resulting from inaccurate account information.
Please double-check the details with your financial institution before submitting a Bank Transfer request.</p>
                <div className="buttons-container">
                    <button className="primaryButton">Save Payment method</button>
                    <button className="secondaryButton" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BankTransfer