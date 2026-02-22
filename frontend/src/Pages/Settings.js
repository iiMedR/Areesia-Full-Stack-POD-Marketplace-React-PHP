import React, {useState} from 'react'
import Navbar from '../components/Designer/NavBar'
import TextField from '@mui/material/TextField';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserIcon from '../assets/img/Account.png'
import ChangePasswordPopup from '../components/Designer/ChangePasswordPopup';
import EditProfilePopup from '../components/Designer/EditProfilePopup';
import styled from "styled-components";
import { decryptData , encryptData } from '../components/Encrypting';
import axios from 'axios';
import BaseURL from '../components/BaseURL';

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


function Settings() {
  const Profile = UserIcon
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isProfilePopupOpen, setProfilePopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const openProfilePopup = () => {
    setProfilePopupOpen(true);
  };

  const closeProfilePopup = () => {
    setProfilePopupOpen(false);
  };

  /*********************Back end********************/
  const data = sessionStorage.getItem('des_userSession') ? decryptData(sessionStorage.getItem('des_userSession')) : "";
  const [firstName, setFirstName] = useState(data.FirstName ? data.FirstName : "");
  const [lastName, setlastName] = useState(data.LastName ? data.LastName : "");
  const [email, setEmail] = useState(data.Email ? data.Email : "");
  const [phoneNumber, setPhoneNumber] = useState(data.PhoneNumber ? data.PhoneNumber : "");
  const [country, setCountry] = useState(data.Country ? data.Country : "");
  const [city, setCity] = useState(data.City ? data.City : "");
  const [postalCode, setPostalCode] = useState(data.PostalCode ? data.PostalCode : "");
  const [address, setAddress] = useState(data.Address ? data.Address : "");

  const handleFirstName = (e) =>{
    setFirstName(e.target.value)
    setFormData({...formData, [e.target.id]: e.target.value})
  }
  const handleLastName = (e) => {
    setlastName(e.target.value)
    setFormData({...formData, [e.target.id]: e.target.value})
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
    setFormData({...formData, [e.target.id]: e.target.value})
  }
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
    setFormData({...formData, [e.target.id]: e.target.value})
  }
  const handleCountry = (e) => {
    setCountry(e.target.value)
    setFormData({...formData, [e.target.id]: e.target.value})
  }
  const handleCity = (e) => {
    setCity(e.target.value)
    setFormData({...formData, [e.target.id]: e.target.value})
  }
  const hendlePostalCode = (e) => {
    setPostalCode(e.target.value)
    setFormData({...formData, [e.target.id]: e.target.value})
  }
  const handleAddress = (e) => {
    setAddress(e.target.value)
    setFormData({...formData, [e.target.id]: e.target.value})
  }
  const [formData, setFormData] = useState({
    id: data.Id,
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    country: country,
    city: city,
    postalCode: postalCode,
    address: address
  })

  const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log(formData)
    try {
      const response = await axios.post(`${BaseURL}/areesiaAPI/DesignerSettings.php`, formData)
      console.log(response.data.message)

      if(response.data.status === 1){
        data.FirstName = response.data.data.FirstName
        data.LastName = response.data.data.LastName
        data.PhoneNumber = response.data.data.PhoneNumber
        data.Country = response.data.data.Country
        data.City = response.data.data.City
        data.PostalCode = response.data.data.PostalCode
        data.Address = response.data.data.Address

        const encryptedDesignerData = encryptData(data);
        sessionStorage.setItem('des_userSession', encryptedDesignerData);
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
        <Navbar />
        <div className='Settings_Container'>
          <h3>Profile</h3>
          <div className='Settings_Form_Container'>
            <div className='Settings_Left_Side'>
              <div className='Settings_Profile_img'>
                <img src={Profile} alt='User profile'></img>
                <button className="primaryButton" onClick={openProfilePopup}>Edit your profile images</button>
              </div>
              <div className='name-fields'>
                <WhiteBorderTextField className='fields' id="firstName" value={firstName} onChange={handleFirstName} label="First Name" required/>
                <WhiteBorderTextField className='fields' id="lastName" value={lastName} onChange={handleLastName} label="Last Name" required/>
              </div>
              <WhiteBorderTextField className='fields' type='email' id="email" value={email} onChange={handleEmail} label="Email" disabled required/>
            </div>
            <div className='Settings_Right_Side'>
              <WhiteBorderTextField className='fields' id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumber} label="Phone Number" sx={{}} required/>
              <WhiteBorderTextField className='fields' id="country" value={country} onChange={handleCountry} label="Country" sx={{}} required/>
              <WhiteBorderTextField className='fields' id="postalCode" value={postalCode} onChange={hendlePostalCode} label="Postal Code" sx={{}} required/>
              <WhiteBorderTextField className='fields' id="address" value={address} onChange={handleAddress} label="Address"  required/>
              <WhiteBorderTextField className='fields' id="city" value={city} onChange={handleCity} label="City" sx={{}} required/>
            </div>
          </div>
          <div className='settings_Buttons_Container'>
            <button className="primaryButton" onClick={handleSubmit}>Save</button>
            <button className="secondaryButton" onClick={openPopup}>Change Password</button>
          </div>
        </div>
        <ChangePasswordPopup isOpen={isPopupOpen} onClose={closePopup} />
        <EditProfilePopup isOpen={isProfilePopupOpen} onClose={closeProfilePopup} /> 
    </div>
  )
}

export default Settings