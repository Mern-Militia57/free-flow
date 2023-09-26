"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const UploadFile = () => {
  const [getFiles, setFiles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getvalues")
      .then((response) => {
        setFiles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching files:", error);
      });
  }, []);

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("zips", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      alert("File uploaded successfully.");
    } catch (error) {
      console.error("Error uploading file:", error.response?.data);
      alert("Error uploading file: " + error.response?.data);
    }
  };

  const [zipData, setZipData] = useState(null);

  useEffect(() => {
    // Fetch the ZIP data from your server or API
    async function fetchZipData() {
      try {
        const response = await fetch("http://localhost:5000/getvalues"); // Replace with your server endpoint
        if (response.ok) {
          const jsonData = await response.json();
          if (Array.isArray(jsonData) && jsonData.length > 0) {
            const zipDataInBase64 = jsonData[0].data;
            const zipData = base64ToArrayBuffer(zipDataInBase64);
            setZipData(zipData);
          }
        } else {
          console.error("Failed to fetch ZIP data");
        }
      } catch (error) {
        console.error("Error fetching ZIP data:", error);
      }
    }

    fetchZipData();
  }, []);


  
  const base64ToArrayBuffer = (base64) => {
    const binaryString = atob(base64);
    const length = binaryString.length;
    const bytes = new Uint8Array(length);

    for (let i = 0; i < length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes.buffer;
  };



  const handleDownloadClick = () => {
    if (zipData) {
      const blob = new Blob([zipData], {
        type: "application/x-zip-compressed",
      });
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "downloaded.zip";
      document.body.appendChild(a);
      a.click();

      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }
  };

  return (
    <div>
      <h2>Upload a File</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" name="zips" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>

      <div className="border border-red-500">
        {getFiles?.map((p) => (
          <>
            <li>
              <button onClick={handleDownloadClick}>Download ZIP</button>
            </li>
          </>
        ))}
      </div>
    </div>
  );
};

export default UploadFile;
