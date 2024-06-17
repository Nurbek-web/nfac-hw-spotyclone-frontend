"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";

export default function Component() {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState<string>("");
  const [artist, setArtist] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!file || !name || !artist || !duration) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("artist", artist);
    formData.append("duration", duration); // Include duration in form data

    try {
      const response: AxiosResponse<{ fileUrl: string }> = await axios.post(
        "https://nfac-hw-spotyclone-backend-production.up.railway.app/api/v5/upload",
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
      router.push("/");
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadError("Error uploading file. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-950">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-50">
          Create a New Song
        </h1>
        <form className="space-y-4" onSubmit={handleUpload}>
          <div>
            <Label htmlFor="title">Song Title</Label>
            <Input
              id="title"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter song title"
              required
            />
          </div>
          <div>
            <Label htmlFor="artist">Artist</Label>
            <Input
              id="artist"
              type="text"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              placeholder="Enter artist name"
              required
            />
          </div>
          <div>
            <Label htmlFor="file">Upload Music File</Label>
            <Input id="file" type="file" onChange={handleFileChange} required />
          </div>
          <div>
            <Label htmlFor="duration">Duration (mm:ss)</Label>
            <Input
              id="duration"
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Enter duration"
              required
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            Create Song
          </Button>
          {progress > 0 && (
            <div className="mt-4 w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: `${progress}%` }}
              >
                {progress}%
              </div>
            </div>
          )}
          {uploadError && (
            <div className="mt-4">
              <p className="text-red-600">{uploadError}</p>
            </div>
          )}
          {uploadedFileUrl && (
            <div className="mt-4">
              <p className="text-green-600">File uploaded successfully!</p>
              <a
                href={uploadedFileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View File
              </a>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
