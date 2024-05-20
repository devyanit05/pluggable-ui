import React, { useState, useEffect } from 'react';
import '../styles/displayData.css';
import { useNavigate } from 'react-router-dom';

const DataDisplay = () => {
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the database or Redux store
    // Example: fetchData().then(data => setData(data));
  }, []); // Add dependencies if needed

  const handleRender = () => {
    // Implement logic for rendering based on authentication and selected items
    // Example: navigate('/render', { state: { selectedItems } });
  };

  const handleCheckboxChange = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <div className="data-display-container">
      <h2 className="data-display-header">Data Display</h2>
      <div className="data-items-container">
        {data.map((item) => (
          <div key={item.id} className="data-item">
            <input
              type="checkbox"
              className="data-item-checkbox"
              checked={selectedItems.includes(item.id)}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <span>{item.name} - {item.details} (Replace with actual details)</span>
          </div>
        ))}
      </div>
      <button className="render-button" onClick={handleRender}>
        Render
      </button>
    </div>
  );
};

export default DataDisplay;
