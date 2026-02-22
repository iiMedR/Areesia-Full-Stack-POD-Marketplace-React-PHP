import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import styled from "styled-components";
//import axios from 'axios';
//import BaseURL from '../../BaseURL';
//import { decryptData } from '../../Encrypting'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import BaseURL from '../../BaseURL';

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

const AddreessPopUp = ({ isOpen, onClose, addressDetails, isDefault, userAgreement }) => {

    /********************************Back end********************************/
    //const data = sessionStorage.getItem('clt_userSession') ? decryptData(sessionStorage.getItem('clt_userSession')) : "";
    const [localAddressDetails, setLocalAddressDetails] = useState(addressDetails || {id: '', clientId: '', country: '', address: '', postalCode: '', city: '', userAgreement: ''});
    const [isDefaultAddress, setIsDefaultAddress] = useState(isDefault);
    const [isUserAgreementChecked, setIsUserAgreementChecked] = useState(userAgreement);




    // Update local state when addressDetails prop changes
    useEffect(() => {
          setLocalAddressDetails(addressDetails || {id: '', clientId: '', country: '', address: '', postalCode: '', city: '', userAgreement: ''});
          setIsDefaultAddress(isDefault);
          setIsUserAgreementChecked(userAgreement);
      }, [addressDetails, isDefault, userAgreement]);
  
      const handleInputChange = (event) => {
          const { id, value } = event.target;
          setLocalAddressDetails({ ...localAddressDetails, [id]: value });
      };
  
      const handleDefaultAddressChange = (event) => {
          setIsDefaultAddress(event.target.checked);
      };

      const handleUserAgreementChange = (event) => {
        setIsUserAgreementChecked(event.target.checked);
      };


      /**********************Back end********************************************************/
      /*console.log(localAddressDetails);
      console.log(isDefaultAddress);*/
      const [formData, setFormData] = useState({
        id: '',
        clientId: '',
        country: '',
        address: '',
        postalCode: '',
        city: '',
        isDefault: '',
        isUerAgreement: ''
      });
      useEffect(() => {
        setFormData({
          id: localAddressDetails.id,
          clientId: localAddressDetails.clientId,
          country: localAddressDetails.country,
          address: localAddressDetails.address,
          postalCode: localAddressDetails.postalCode,
          city: localAddressDetails.city,
          isDefault: isDefaultAddress,
          isUerAgreement: localAddressDetails.userAgreement
        })
      },[localAddressDetails, isDefaultAddress])

      const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          const response = await axios.post(`${BaseURL}/areesiaAPI/EditAddress.php`, formData)
          console.log(response.data.message)
          if(response.data.status === 1){
            setTimeout(() => {
                window.location.reload(); // Reload the page
            }, 1000); // Wait for 1 second before reloading
          }
        } catch (error) {
          console.error('Error during changing address:', error);
        }
      }

  return (
    <div className={`popup ${isOpen ? 'open' : ''}`} onClick={onclose}>
      <div  className="popup-content" style={{width: '100vw', maxWidth: '60vw', justifyContent: 'center'}}>
        <h2>Address</h2>
        <div className='name-fields'>
          <WhiteBorderTextField 
            className='fields' 
            value={localAddressDetails.country} 
            onChange={handleInputChange} 
            id="country" 
            label="Country" 
            required
          />
          <WhiteBorderTextField 
            className='fields' 
            value={localAddressDetails.address} 
            onChange={handleInputChange} 
            id="address" 
            label="Adress" 
            required
          />
        </div>
        <div className='name-fields'>
          <WhiteBorderTextField 
            className='fields' 
            value={localAddressDetails.postalCode} 
            onChange={handleInputChange} 
            id="postalCode" 
            label="Postal Code" 
            required
          />
          <WhiteBorderTextField 
            className='fields' 
            value={localAddressDetails.city} 
            onChange={handleInputChange} 
            id="city" 
            label="City" 
            required
          />
        </div>
        <div style={{width: '100%', textAlign: 'left', fontFamily: 'Cairo', display: 'flex', flexDirection: 'column'}}>
          <FormControlLabel 
            control={
              <Checkbox 
                checked={isDefaultAddress}
                onChange={handleDefaultAddressChange}
                color='default'
              />} 
            label="Make It Default Address"
          />
          <FormControlLabel 
            control={
              <Checkbox 
                checked={isUserAgreementChecked}
                onChange={handleUserAgreementChange}
                color='default' 
              />} 
            label="By checking this box, I confirm that the provided address details are accurate and mine." 
          />
        </div>
        <div className="buttons-container" style={{maxWidth: '80%', margin: '20px auto 0 auto'}}>
          <button className="primaryButton" onClick={handleSubmit} type='submit'>Save Password</button>
          <button className="secondaryButton" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddreessPopUp;
