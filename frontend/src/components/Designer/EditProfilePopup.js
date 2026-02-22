/*
import React, { useState } from 'react';
import UserIcon from '../../assets/img/Account.png';
import axios from 'axios';
import BaseURL from '../BaseURL';
import { decryptData, encryptData } from '../Encrypting';

function EditProfilePopup({ isOpen, onClose }) {
    const designerData = sessionStorage.getItem('des_userSession') ? decryptData(sessionStorage.getItem('des_userSession')) : "";
    const [coverImage, setCoverImage] = useState(designerData.Cover ? designerData.Cover : '');
    const [profileImage, setProfileImage] = useState(designerData.Profile ? designerData.Profile : UserIcon);

    //****************************************Back end******************
    const [formData, setFormData] = useState({
        id: designerData.Id,
        coverImageFile: designerData.Cover,
        profileImageFile: designerData.Profile
    })

    const handleCoverImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setCoverImage(URL.createObjectURL(event.target.files[0]));
            setFormData({ ...formData, coverImageFile: event.target.files[0] });
        }
    };
    
    const handleProfileImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setProfileImage(URL.createObjectURL(event.target.files[0]));
            setFormData({ ...formData, profileImageFile: event.target.files[0] });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        let data = new FormData();
        data.append('id', formData.id)
        if(formData.coverImageFile) data.append('coverImage', formData.coverImageFile);
        if(formData.profileImageFile) data.append('profileImage', formData.profileImageFile);

        try {
            const response = await axios.post(`${BaseURL}/areesiaAPI/DesignerUploadCoverProfile.php`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data.message);
            if(response.data.status === 1){
                designerData.Cover = response.data.data.Cover
                designerData.profile = response.data.data.Profile

                setCoverImage(designerData.Cover)
                setProfileImage(designerData.profile)

                const encryptedDesignerData = encryptData(designerData);
                sessionStorage.setItem('des_userSession', encryptedDesignerData);
            }

        } catch (error) {
            console.error(error)
        }
    }
    

    if (!isOpen){return null};
    return (
        <div className="popup-overlay">
            <form onSubmit={handleSubmit} className="popup-container">
                <h2>Setup your profile image</h2>
                <div className="image-upload-container">
                    <div className="cover-upload" onClick={() => document.getElementById('coverImageInput').click()}>
                        {coverImage && <img src={coverImage} alt="Cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                        <input type="file" id="coverImageInput" accept="image/jpeg" style={{ display: 'none' }} onChange={handleCoverImageChange} />
                    </div>
                    <div className="profile-upload" onClick={() => document.getElementById('profileImageInput').click()}>
                        <img src={profileImage} alt="Profile" />
                        <input type="file" id="profileImageInput" accept="image/jpeg" style={{ display: 'none' }} onChange={handleProfileImageChange} />
                    </div>
                </div>
                <div className="popup-buttons">
                    <button type='submit' className="primaryButton">Save</button>
                    <button className="secondaryButton" onClick={onClose}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default EditProfilePopup;

 */

import React, { useState } from 'react';
import UserIcon from '../../assets/img/Account.png';
import axios from 'axios';
import BaseURL from '../BaseURL';
import { decryptData, encryptData } from '../Encrypting';

function EditProfilePopup({ isOpen, onClose }) {
    const designerData = sessionStorage.getItem('des_userSession') ? decryptData(sessionStorage.getItem('des_userSession')) : "";
    const [coverImage, setCoverImage] = useState('');
    const [profileImage, setProfileImage] = useState(UserIcon);

    //****************************************Back end******************
    const [formData, setFormData] = useState({
        id: designerData.Id,
        coverImageFile: null,
        profileImageFile: null
    })

    const handleCoverImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setCoverImage(URL.createObjectURL(event.target.files[0]));
            setFormData({ ...formData, coverImageFile: event.target.files[0] });
        }
    };
    
    const handleProfileImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setProfileImage(URL.createObjectURL(event.target.files[0]));
            setFormData({ ...formData, profileImageFile: event.target.files[0] });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        let data = new FormData();
        data.append('id', formData.id)
        if(formData.coverImageFile) data.append('coverImage', formData.coverImageFile);
        if(formData.profileImageFile) data.append('profileImage', formData.profileImageFile);

        try {
            const response = await axios.post(`${BaseURL}/areesiaAPI/DesignerUploadCoverProfile.php`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data.message);
            if(response.data.status === 1){
                designerData.Cover = response.data.data.Cover
                designerData.profile = response.data.data.Profile

                const encryptedDesignerData = encryptData(designerData);
                sessionStorage.setItem('des_userSession', encryptedDesignerData);
            }

        } catch (error) {
            console.error(error)
        }
    }
    

    if (!isOpen){return null};
    return (
        <div className="popup-overlay">
            <form onSubmit={handleSubmit} className="popup-container">
                <h2>Setup your profile image</h2>
                <div className="image-upload-container">
                    <div className="cover-upload" onClick={() => document.getElementById('coverImageInput').click()}>
                        {coverImage && <img src={coverImage} alt="Cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                        <input type="file" id="coverImageInput" accept="image/jpeg" style={{ display: 'none' }} onChange={handleCoverImageChange} />
                    </div>
                    <div className="profile-upload" onClick={() => document.getElementById('profileImageInput').click()}>
                        <img src={profileImage} alt="Profile" />
                        <input type="file" id="profileImageInput" accept="image/jpeg" style={{ display: 'none' }} onChange={handleProfileImageChange} />
                    </div>
                </div>
                <div className="popup-buttons">
                    <button type='submit' className="primaryButton">Save</button>
                    <button className="secondaryButton" onClick={onClose}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default EditProfilePopup;
