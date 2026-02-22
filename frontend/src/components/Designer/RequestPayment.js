import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import styled from "styled-components";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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


function RequestPayment({ isOpen, onClose }) {


    const [paymentMethod, setPaymentMethod] = useState('');

    const handleChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const Methods =[
        {name: 'Bank Transfer', id: '1'},
        {name: 'CashPlus', id: '2'},
        {name: 'WafaCash', id: '3'},
    ]


  return (
    <div  className={`popup ${isOpen ? 'open' : ''}`} onClick={onClose}>
        <div className="popup-container" onClick={e => e.stopPropagation()}>
            <div className='CashPlus_Container'>
                <h4>Request Payment</h4>
                <div className='name-fields'>
                    <WhiteBorderTextField className='fields' id="Amount" type='number' label="Amount" required/>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" style={{color: '#0F0F26'}}>Payment Method</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        sx={{
                            color: "#0F0F26",
                            '.MuiOutlinedInput-notchedOutline': {
                            borderColor: '#0F0F26',
                            borderRadius: '10px',
                            borderWidth: '2px',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#0F0F26',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#0F0F26',
                            },
                            '.MuiSvgIcon-root ': {
                            fill: "#0F0F26 !important",
                            },
                        }}
                        id="demo-simple-select"
                        value={paymentMethod}
                        label="Payment Method"
                        onChange={handleChange}
                        >
                            {Methods.map((methods) => (
                                <MenuItem value={methods.id}>{methods.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <WhiteBorderTextField className='fields' id="Message" label="Message" multiline rows={4} required/>
                <FormControlLabel style={{textAlign: 'left', marginTop: '20px'}} control={<Checkbox required color='default' />} label="By checking this box, I confirm that the provided withdrawal details are accurate and I acknowledge that any discrepancies
                leading to delays or financial issues are my responsibility. I also understand that the processing time may vary based on the
                payment method chosen." />
                <div className="buttons-container">
                    <button className="primaryButton">Save Payment method</button>
                    <button className="secondaryButton" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RequestPayment