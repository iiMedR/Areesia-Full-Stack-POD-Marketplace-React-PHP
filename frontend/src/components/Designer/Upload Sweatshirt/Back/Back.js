import React from 'react'
import './Back.css'

function Back({ isOpen, onClose }) {
  const [design, setDesign] = React.useState('');

      // Function to handle cover image change
      const handleDesignChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          setDesign(URL.createObjectURL(event.target.files[0]));
        }
    };
  return (
    <div  className={`popup ${isOpen ? 'open' : ''}`} onClick={onClose}>
        <div className="popup-container" onClick={e => e.stopPropagation()}>
            <div className='Back_Container'>
                <h4>Upload Design</h4>
                <div className='Back_Mockup'>
                  <div className='design_Mockup'>
                    <div className='upload_Container' onClick={() => document.getElementById('backDesignInput').click()}>
                      {design && <img src={design} alt="Design" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                      <input type="file" id="backDesignInput" accept="image/png" style={{ display: 'none' }} onChange={handleDesignChange} />
                    </div>
                  </div>
                </div>
                <div className="buttons-container">
                    <button className="primaryButton">Save Design</button>
                    <button className="secondaryButton" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Back