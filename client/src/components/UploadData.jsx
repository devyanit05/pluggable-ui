import React, { useState } from 'react';
import TextUpload from './TextUpload';
import ImageUpload from './ImageUpload';
import AudioUpload from './AudioUpload';
import TableUpload from './TableUpload';
import '../styles/uploadData.css';

const uploadComponents = {
  text: <TextUpload />,
  image: <ImageUpload />,
  audio: <AudioUpload />,
  table: <TableUpload />,
};

const DataUpload = () => {
  const [dataType, setDataType] = useState('');

  const handleDataTypeChange = (e) => {
    setDataType(e.target.value);
  };

  const getSelectedUploadComponent = () => {
    return uploadComponents[dataType] || null;
  };

  const handleUpload = () => {
    // Implement upload functionality here
    console.log('Upload button clicked');
  };

  return (
    <div className="data-upload-container">
      <h3>Upload Data</h3>
      <div className="data-type-selector">
        <label htmlFor="data-type">Data Type: </label>
        <select id="data-type" value={dataType} onChange={handleDataTypeChange}>
          <option value="">Select Data Type</option>
          <option value="text">Text</option>
          <option value="image">Image</option>
          <option value="audio">Audio</option>
          <option value="table">Table</option>
        </select>
      </div>
      <div className="selected-upload-component">
        {getSelectedUploadComponent()}
      </div>
      {dataType && (
        <div className="data-upload-component">
          <button onClick={handleUpload} className="upload-button">Upload</button>
        </div>
      )}
    </div>
  );
};

export default DataUpload;
