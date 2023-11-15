"use client"

// import { useState } from 'react';
// import axios, { AxiosProgressEvent } from 'axios';
// import { Button, Container, Input } from '@chakra-ui/react';
// import { Progress } from '@chakra-ui/react'

// const FileUpload = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const [presignedUrl, setPresignedUrl] = useState<string | null>(null);

//   const getPresignedUrl = async () => {
//     try {
//       const response = await axios.get(
//         'https://zp2dhmgwaa.execute-api.us-east-1.amazonaws.com/generatepresignedurl?fileName=dummydata.txt&contentType=text/plain',
//         // {
//         //   params: {
//         //     fileName: 'dummydata.txt',
//         //     contentType: 'text/plain',
//         //   },
//         // }
//       );
//         console.log(response.data.uploadUrl)
//       setPresignedUrl(response.data.uploadUrl);
//     } catch (error) {
//       console.error('Error fetching presigned URL:', error);
//     }
//   };

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = event.target.files && event.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//     }
//   };

//   const uploadFile = async () => {
//     if (!presignedUrl || !file) {
//       console.error('Presigned URL or file not available.');
//       return;
//     }

//     try {
//       const response = await axios.put(presignedUrl, file, {
//         headers: {
//           'Content-Type': 'text/plain', // Adjust the content type accordingly
//         },
        
//       }
//       );

//       console.log('File uploaded successfully!');
//       console.log('Response from PUT request:', response);
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

//   return (
//     <Container>
//       <h1>File Upload</h1>
//       <Button onClick={getPresignedUrl} colorScheme="teal" mb={4}>
//         Get Presigned URL
//       </Button>
//       <Input type="file" onChange={handleFileChange} mb={4} />
//       <Button onClick={uploadFile} disabled={!presignedUrl || !file} colorScheme="teal">
//         Upload File
//       </Button>
//     </Container>
//   );
// };

// export default FileUpload;




// import { useState } from 'react';
// import axios, { AxiosResponse, AxiosProgressEvent } from 'axios';
// import { Button, Container, Input, Progress } from '@chakra-ui/react';

// const FileUpload = (filename:string) => {
//   const [file, setFile] = useState<File | null>(null);
//   const [presignedUrl, setPresignedUrl] = useState<string | null>(null);
//   const [uploadProgress, setUploadProgress] = useState<number>(0);

//   const getPresignedUrl = async (filename) => {
//     try {
//       const response = await axios.get(
//         `https://zp2dhmgwaa.execute-api.us-east-1.amazonaws.com/generatepresignedurl?fileName=${filename}&contentType=text/plain`
//       );
//       console.log(response.data.uploadUrl);
//       setPresignedUrl(response.data.uploadUrl);
//     } catch (error) {
//       console.error('Error fetching presigned URL:', error);
//     }
//   };

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = event.target.files && event.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//     }
//   };

//   const uploadFile = async () => {
//     if (!presignedUrl || !file) {
//       console.error('Presigned URL or file not available.');
//       return;
//     }

//     try {
//       await axios.put(presignedUrl, file, {
//         headers: {
//           'Content-Type': 'text/plain',
//         },
//         onUploadProgress: (progressEvent: AxiosProgressEvent) => {
//           const { loaded, total } : any = progressEvent;
//           const percentCompleted = Math.round((loaded * 100) / total);
//           setUploadProgress(percentCompleted);
//         },
//       });

//       console.log('File uploaded successfully!');
//       setUploadProgress(0); // Reset progress after successful upload
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

//   return (
//     <Container>
//       <h1>File Upload</h1>
//       <Button onClick={ () => getPresignedUrl()} colorScheme="teal" mb={4}>
//         Get Presigned URL {file.name}
//       </Button>
//       <Input type="file" onChange={handleFileChange} mb={4} />
//       <Button onClick={uploadFile} disabled={!presignedUrl || !file} colorScheme="teal">
//         Upload File
//       </Button>
//       {uploadProgress > 0 && <Progress value={uploadProgress} mb={4} />}
//       {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
//     </Container>
//   );
// };

// export default FileUpload;


import React, { useState } from 'react';
import axios, { AxiosProgressEvent } from 'axios';
import { Button, Container, Input, Progress } from '@chakra-ui/react';
import {Valueone} from "../context/context"

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [presignedUrl, setPresignedUrl] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const {fileName ,setFileName} = Valueone()

  const getPresignedUrl = async () => {
    try {
      if (!file) {
        console.error('File not selected.');
        return;
      }

      const response = await axios.get(
        `https://zp2dhmgwaa.execute-api.us-east-1.amazonaws.com/generatepresignedurl?fileName=${fileName}&contentType=text/plain`
      );

      console.log(response.data.uploadUrl);
      setPresignedUrl(response.data.uploadUrl);
    } catch (error) {
      console.error('Error fetching presigned URL:', error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
    setFileName(selectedFile?.name)
  };

  const uploadFile = async () => {
    if (!presignedUrl || !file) {
      console.error('Presigned URL or file not available.');
      return;
    }

    try {
      await axios.put(presignedUrl, file, {
        headers: {
          'Content-Type': 'text/plain',
        },
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          const { loaded, total }:any = progressEvent;
          const percentCompleted = Math.round((loaded * 100) / total);
          setUploadProgress(percentCompleted);
        },
      });

      console.log('File uploaded successfully!');
      setUploadProgress(0); // Reset progress after successful upload
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  console.log(file ? `for ${file.name}` : '')
  return (
    <Container>
      <h1>File Upload</h1>
      <Button onClick={getPresignedUrl} colorScheme="teal" mb={4}>
        Get Presigned URL {file ? `for ${ file.name}` : ''}
      </Button>
      <Input type="file" onChange={handleFileChange} mb={4} />
      <Button onClick={uploadFile} disabled={!presignedUrl || !file} colorScheme="teal">
        Upload File
      </Button>
      {uploadProgress > 0 && <Progress value={uploadProgress} mb={4} />}
      {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
    </Container>
  );
};

export default FileUpload;
