"use client";

import React, { useState, ChangeEvent } from "react";
import axios from "axios";

const UploadComponent: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v5/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent: any) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentCompleted);
          },
        }
      );
      setUploadedFileUrl(response.data.fileUrl);
      console.log("File URL:", response.data.fileUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file}>
        Upload
      </button>
      <div>Upload Progress: {progress}%</div>
      {uploadedFileUrl && (
        <div>
          <h3>Uploaded File:</h3>
          <a href={uploadedFileUrl} target="_blank" rel="noopener noreferrer">
            {uploadedFileUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default UploadComponent;
