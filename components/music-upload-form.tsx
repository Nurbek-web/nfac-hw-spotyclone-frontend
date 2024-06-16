"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

const MusicUploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState<string>("");
  const [artist, setArtist] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    if (!file || !name || !artist || !duration || !date) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("artist", artist);
    formData.append("duration", duration);
    formData.append("date", date);

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
    <form onSubmit={handleUpload}>
      <div>
        <label htmlFor="file">File</label>
        <input type="file" id="file" onChange={handleFileChange} />
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="artist">Artist</label>
        <input
          type="text"
          id="artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="duration">Duration</label>
        <input
          type="text"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={!file}>
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
    </form>
  );
};

export default MusicUploadForm;
