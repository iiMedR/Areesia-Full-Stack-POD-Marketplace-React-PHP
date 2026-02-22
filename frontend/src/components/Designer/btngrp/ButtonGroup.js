import React, { useState } from 'react';
import './ButtonGroup.css'; // Import your CSS file

function ButtonGroup() {
  const [selectedButton, setSelectedButton] = useState('front');

  return (
    <div className="button-group">
      <button 
        className={`group-button ${selectedButton === 'front' ? 'selected' : ''}`} 
        onClick={() => setSelectedButton('front')}
      >
        Front
      </button>
      <button 
        className={`group-button ${selectedButton === 'back' ? 'selected' : ''}`} 
        onClick={() => setSelectedButton('back')}
      >
        Back
      </button>
      <button 
        className={`group-button ${selectedButton === 'logo' ? 'selected' : ''}`} 
        onClick={() => setSelectedButton('logo')}
      >
        Logo
      </button>
      <button 
        className={`group-button ${selectedButton === 'sleeve' ? 'selected' : ''}`} 
        onClick={() => setSelectedButton('sleeve')}
      >
        Sleeves
      </button>
    </div>
  );
}

export default ButtonGroup;
