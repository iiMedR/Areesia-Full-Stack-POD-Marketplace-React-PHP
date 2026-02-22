import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import styled from "styled-components";
import axios from 'axios';
import BaseURL from '../../BaseURL';
import { decryptData } from '../../Encrypting'
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

const AddreessPopUp = ({ isOpen, onClose }) => {

    /********************************Back end********************************/
    const client = sessionStorage.getItem('clt_userSession') ? decryptData(sessionStorage.getItem('clt_userSession')) : "";
    const [formData, setFormData] = useState({
      id: client.id,
      Country: '',
      Address: '',
      PostalCode: '',
      City: '',
      IsDefault: '',
      UserAgreement: ''
    });
    const handleInputChange = (e) => {
      const target = e.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.id;
    
      setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(`${BaseURL}/areesiaAPI/AddNewAddress.php`, formData);
        console.log(response.data.message);
        
        if(response.data.status === 1){
          setTimeout(() => {
              window.location.reload(); // Reload the page
          }, 1000); // Wait for 1 second before reloading
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    }


  return (
    <div className={`popup ${isOpen ? 'open' : ''}`} onClick={onclose}>
      <form onSubmit={handleSubmit} className="popup-content" style={{width: '100vw', maxWidth: '60vw', justifyContent: 'center'}}>
        <h2>Address</h2>
        <div className='name-fields'>
          <WhiteBorderTextField 
            className='fields' 
            id="Country" 
            label="Country" 
            onChange={handleInputChange}
            required
          />
          <WhiteBorderTextField 
            className='fields' 
            id="Address" 
            label="Adress" 
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='name-fields'>
          <WhiteBorderTextField 
            className='fields' 
            id="PostalCode" 
            label="Postal Code" 
            onChange={handleInputChange}
            required
          />
          <WhiteBorderTextField 
            className='fields' 
            id="City" 
            label="City" 
            onChange={handleInputChange}
            required
          />
        </div>
        <div style={{width: '100%', textAlign: 'left', fontFamily: 'Cairo', display: 'flex', flexDirection: 'column'}}>
          <FormControlLabel control={<Checkbox color='default' id='IsDefault' onChange={handleInputChange} />} label="Make It Default Address" />
          <FormControlLabel control={<Checkbox color='default' id='UserAgreement' onChange={handleInputChange} required />} label="By checking this box, I confirm that the provided address details are accurate and mine." />
        </div>
        <div className="buttons-container" style={{maxWidth: '80%', margin: '20px auto 0 auto'}}>
          <button className="primaryButton">Save Password</button>
          <button className="secondaryButton" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddreessPopUp;
