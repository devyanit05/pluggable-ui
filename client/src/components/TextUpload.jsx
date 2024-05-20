import React, { useState } from 'react';
import '../styles/textUpload.css';

const TextUpload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="text-upload-container">
      <label htmlFor="textFile">Upload Text File:</label>
      <input type="file" id="textFile" accept=".txt" onChange={handleFileChange} className="file-input" />
      {/* Display file name if selected */}
      {file && <p>Selected File: {file.name}</p>}
      
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={handleDescriptionChange}></textarea>
      </div>
    </div>
  );
};

export default TextUpload;
