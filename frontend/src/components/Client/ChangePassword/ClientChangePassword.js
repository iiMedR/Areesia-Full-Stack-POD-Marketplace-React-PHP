import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import styled from "styled-components";
import axios from 'axios';
import BaseURL from '../../BaseURL';
import { decryptData } from '../../Encrypting'

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

const ClientChangePassword = ({ isOpen, onClose }) => {

    /********************************Back end********************************/
    const data = sessionStorage.getItem('clt_userSession') ? decryptData(sessionStorage.getItem('clt_userSession')) : "";
    const [formData, setFormData] = useState({
        id: data.id,
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(`${BaseURL}/areesiaAPI/changePassword.php`, formData);
            console.log(response.data.message);

            // logic li bghit hna
            if(response.data.status === 1){
                setTimeout(() => {
                    window.location.reload(); // Reload the page
                }, 2000); // Wait for 3 seconds before reloading
            }

        } catch(error){
            console.error('Error during changing password:', error);
        }
    }


  return (
    <div className={`popup ${isOpen ? 'open' : ''}`} onClick={onclose}>
      <form onSubmit={handleSubmit} className="popup-content">
        <h2>Password Change</h2>
        <WhiteBorderTextField onChange={handleInputChange} label="Current Password" type="password" id='oldPassword' fullWidth margin="normal" required/>
        <WhiteBorderTextField onChange={handleInputChange} label="New Password" type="password" id='newPassword' fullWidth margin="normal" required/>
        <WhiteBorderTextField onChange={handleInputChange} label="Confirm New Password" type="password" id='confirmNewPassword' fullWidth margin="normal" required/>
        <div className="buttons-container">
          <button type='submit' className="primaryButton">Save Password</button>
          <button className="secondaryButton" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ClientChangePassword;
