import React from 'react';

const ImageUpload = () => {
  return (
    <div>
      {/* Form elements for image upload */}
      <label htmlFor="imageFile">Upload Image File:</label>
      <input type="file" id="imageFile" accept="image/*" />
    </div>
  );
};

export default ImageUpload;
