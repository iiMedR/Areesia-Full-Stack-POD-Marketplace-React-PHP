import React, { useState } from 'react';
import './ButtonGroup.css'; // Import your CSS file

function DynamicButtonGroup({ buttons }) {
  const [selectedButton, setSelectedButton] = useState(buttons[0]?.value);

  return (
    <div className="button-group-client">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`group-button ${selectedButton === button.value ? 'selected' : ''}`}
          onClick={() => setSelectedButton(button.value)}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
}

export default DynamicButtonGroup;
