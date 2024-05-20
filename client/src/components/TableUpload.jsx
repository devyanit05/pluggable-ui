// TableUpload.jsx
import React, { useState } from 'react';
import '../styles/tableUpload.css'

const TableUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div>
      <label htmlFor="tableFile">Upload Table File:</label>
      <input type="file" id="textFile" accept=".csv, .xlsx, .json, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, text/csv, application/json" onChange={handleFileChange} className="file-input" />
      {/* Display file name if selected */}
      {file && <p>Selected File: {file.name}</p>}
    </div>
  );
};

export default TableUpload;
