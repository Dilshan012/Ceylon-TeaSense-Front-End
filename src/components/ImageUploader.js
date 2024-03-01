import React, { useState } from 'react';

const ImageUploader = ({ onResult }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://localhost:5000/', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();
        onResult(result);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <form>
      <input type="file" onChange={handleFileChange} accept=".jpg, .jpeg, .png" required />

      {/* {<button type="button" onClick={handleSubmit}>
        Upload
      </button> } */}
      <button type="button" class="btn btn-success" onClick={handleSubmit}>
      Upload
      </button>

    </form>
  );
};

export default ImageUploader;

