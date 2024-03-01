import React from 'react';

const ResultDisplay = ({ result, uploadedImage }) => {
  // Handle undefined case
  const predictedClass = result || 'Failed to get result';

  return (
    <div>
      <h2>Result: {predictedClass}</h2>
      {uploadedImage && (
        <img
          src={`http://localhost:5000/static/uploads/${uploadedImage}`}
          alt="Uploaded Image"
          style={{ maxWidth: '100%', maxHeight: '300px', marginTop: '20px' }}
        />
      )}
    </div>
  );
};

export default ResultDisplay;







