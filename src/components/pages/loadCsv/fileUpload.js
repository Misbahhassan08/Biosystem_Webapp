import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    // Here, you can implement the logic to send the file to the database
    // using APIs or other methods. For example, you can use the FormData
    // object to send the file via an HTTP POST request.
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      // Example API call using fetch
    //   fetch('/upload', {
    //     method: 'POST',
    //     body: formData,
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log('File uploaded successfully!', data);
    //       // Perform any additional actions after successful file upload
    //     })
    //     .catch((error) => {
    //       console.error('Error uploading file:', error);
    //       // Handle error scenarios
    //     });
    }
  };

  return (
    <div>
      <TextField
        type="file"
        label="Select File"
        onChange={handleFileChange}
        accept=".csv"
        InputLabelProps={{ shrink: true }}
      />

    </div>
  );
};

export default FileUploader;
