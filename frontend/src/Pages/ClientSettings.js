import React, {useState, useEffect} from 'react'
import Navbar from '../components/Client/ProductsNavbar/ProductsNavbar'
import TextField from '@mui/material/TextField';
import ClientChangePassword from '../components/Client/ChangePassword/ClientChangePassword';
import styled from "styled-components";
import { decryptData, encryptData } from '../components/Encrypting'
import axios from 'axios';
import BaseURL from '../components/BaseURL';
import { Link } from 'react-router-dom';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import AddreessPopUp from '../components/Client/AddressPopUP/AdressPopUp';
import AddNewAdressPopUP from '../components/Client/AddressPopUP/AddNewAdressPopUp';


const WhiteBorderTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    fieldset {
      border-color: #0F0F26; /* Custom border color */
      border-radius: 5px; /* Custom border radius */
      border-width: 1px;
    }

    &:hover fieldset {
      border-color: #0F0F26; /* Optional: Change border color on hover */
    }

    &.Mui-focused fieldset {
      border-color: #6661F7; /* Border color when focused */
      border-width: 2px;
    }
  }

  & label.Mui-focused {
    color: #6661F7; /* Label color when focused */
  }
`;


function ClientSettings() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isAddressPopupOpen, setAddressPopupOpen] = useState(false);
  const [isAddNewAddressOpen, setAddNewAddressOpen] = useState(false);

  /*const addresses = [
    {id: '1', country: 'Morocco', city: 'Tangier', postalCode: '90060', address: 'Hay Bni makada, Mabrouka 05, Rue 25, N12', userAgreement: true},
    {id: '2', country: 'Morocco', city: 'Tetouan', postalCode: '90000', address: 'Hay amal, marjane, rue 1, N13', userAgreement: true},
  ];*/







  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const openAddNewAddressPopup = () => {
    setAddNewAddressOpen(true);
  };

  const closeAddNewAddressPopup = () => {
    setAddNewAddressOpen(false);
  };

  const [selectedAddress, setSelectedAddress] = useState(null);
  const openAddressPopup = (address) => {
    setSelectedAddress(address);
    setAddressPopupOpen(true);
  };

  const closeAddressPopup = () => {
    setAddressPopupOpen(false);
  };



  /**************************************Back end******************************************/
  const data = sessionStorage.getItem('clt_userSession') ? decryptData(sessionStorage.getItem('clt_userSession')) : "";
  const defaultAddress = data.defaultAddress ? data.defaultAddress : 0
  //const [defaultAddress, setDefaultAddress] = useState(0)
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(loading)//hadi riir bach nzwl dak error d loading ba9i makhdemt biha hh


  useEffect(() => {
    const clientId = {id: data.id};
    const fetchAddresses = async () => {
      try {
        const response = await axios.post(`${BaseURL}/areesiaAPI/PageRendering/Clients/clientSettings.php`, clientId);
        console.log(response.data.message);
        if(response.data.status === 1){
          setAddress(response.data.data.data)
          if (response.data.defaultAddress) {
            const currentSessionData = sessionStorage.getItem('clt_userSession') ? decryptData(sessionStorage.getItem('clt_userSession')) : "{}";
            currentSessionData.defaultAddress = response.data.defaultAddress;
            const encryptedUpdatedData = encryptData(currentSessionData);
            sessionStorage.setItem('clt_userSession', encryptedUpdatedData);
          }

        }

      } catch (error) {
        console.error('Error fetching addresses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAddresses();
  }, [data.id]);

  //normalement n9dar ndisplayi data li f address mobachara bla mahtaj addresses, but hitach deja kont khdam b addresses o 3mlt
  //popup based 3liha mli kan3ml address mobachara makitftahch popup b data dyalha, so ashal hal hwa n3ml hayda hahahha
  const addresses = address.map(item => ({
    id: item.Id,
    clientId: item.ClientId,
    country: item.Country,
    city: item.City,
    postalCode: item.PostalCode,
    address: item.Address,
    userAgreement: item.Agreement === "1"
  }))



  const [firstName, setFirstName] = useState(data.firstName ? data.firstName : "");
  const [lastName, setlastName] = useState(data.lastName ? data.lastName : "");
  const [email, setEmail] = useState(data.email ? data.email : "");
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber ? data.phoneNumber : "");
  const [birthday, setBirthday] = useState(data.birthday ? data.birthday : "");

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleLastName = (event) => {
    setlastName(event.target.value);
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleBirthday = (event) => {
    setBirthday(event.target.value);
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const [formData, setFormData] = useState({
    id: data.id,
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    birthday: null,
  });

  const handleInfoSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BaseURL}/areesiaAPI/settings.php`, formData);
      console.log(response.data.message);

      if (response.data.status === 1) {
        const clientData = {
          id: data.id,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          phoneNumber: response.data.phoneNumber,
          email: response.data.email,
          birthday: response.data.birthday,
          defaultAddress: response.data.defaultPassword,
          emailConfirmation: response.data.emailConfirmation
        };
        const encryptedClientData = encryptData(clientData);
        sessionStorage.setItem('clt_userSession', encryptedClientData);
      
      }

    } catch (error) {
      console.error('Error during changing settings:', error);
    }
  }


  return (
    <div>
        <Navbar />
        <div className='Client_Settings_Container'>
          <h3>Profile</h3>
          <div className='Client_Settings_Form_Container'>
            <form className='Client_Settings_Left_Side'>
              <div className='name-fields'>
                <WhiteBorderTextField className='fields' id="firstName" label="First Name" value={firstName} onChange={handleFirstName} required/>
                <WhiteBorderTextField className='fields' id="lastName" label="Last Name" value={lastName} onChange={handleLastName} required/>
              </div>
              <WhiteBorderTextField className='fields' type='email' id="email" label="Email" value={email} onChange={handleEmail} sx={{}} disabled required/>
              <WhiteBorderTextField className='fields' id="phoneNumber" label="Phone Number" value={phoneNumber} onChange={handlePhoneNumber} required/>
              <input 
                  className='datePicker' 
                  type="date" 
                  id="birthday" 
                  placeholder='dd-mm-yyyy'
                  value={birthday} 
                  onChange={handleBirthday} 
                  min="1965-01-01" max="2016-12-31"
                  required
                />
            </form>
            <div className='Client_Settings_Right_Side'>
                <div >
                  <RadioGroup defaultValue={defaultAddress} name="Address">
                    {addresses && addresses.map((address, index) => (
                        <FormControl size="lg" key={index} className='Address_Container'>
                            <div>
                              <Radio value={address.id} label={address.address} color="neutral" disabled/>
                              <FormHelperText>
                                  Country: {address.country}, City: {address.city}, Postal Code: {address.postalCode}
                              </FormHelperText>
                            </div>
                            <Link className='link' onClick={() => openAddressPopup(address)}>Edit</Link>
                        </FormControl>
                    ))}
                  </RadioGroup>
                <button className='primaryButton' onClick={openAddNewAddressPopup}>Add New Address</button>
                </div>
            </div>
          </div>
          <div className='Client_settings_Buttons_Container'>
            <button className="primaryButton" onClick={handleInfoSave}>Save</button>
            <button className="secondaryButton" onClick={openPopup}>Change Password</button>
          </div>
        </div>
        <ClientChangePassword isOpen={isPopupOpen} onClose={closePopup} />
        <AddreessPopUp 
          isOpen={isAddressPopupOpen} 
          onClose={closeAddressPopup}
          addressDetails={selectedAddress}
          isDefault={selectedAddress && selectedAddress.id === defaultAddress.toString()}
          userAgreement={selectedAddress ? selectedAddress.userAgreement : false}
        />
        <AddNewAdressPopUP isOpen={isAddNewAddressOpen} onClose={closeAddNewAddressPopup}/>

    </div>
  )
}

export default ClientSettings