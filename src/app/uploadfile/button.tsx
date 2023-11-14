"use client"

import { useState } from 'react';
import axios, { AxiosProgressEvent } from 'axios';
import { Button, Container, Input } from '@chakra-ui/react';
import { Progress } from '@chakra-ui/react'

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
//       await axios.put(presignedUrl, file, {
//         headers: {
//           'Content-Type': 'text/plain', // Adjust the content type accordingly
//         },
//       });

//       console.log('File uploaded successfully!');
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
// ... (your imports remain the same)



// ... (your imports remain the same)



// ... (your imports remain the same)

// ... (your imports remain the same)

interface CustomAxiosProgressEvent extends ProgressEvent {
  lengthComputable: boolean;
}

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [presignedUrl, setPresignedUrl] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const getPresignedUrl = async () => {
    try {
      const response = await axios.get(
        'https://zp2dhmgwaa.execute-api.us-east-1.amazonaws.com/generatepresignedurl?fileName=dummydata.txt&contentType=text/plain'
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
  };

  const uploadFile = async () => {
    if (!presignedUrl || !file) {
      console.error('Presigned URL or file not available.');
      return;
    }

    try {
      await axios.put(presignedUrl, file, {
        headers: {
          'Content-Type': 'text/plain', // Adjust the content type accordingly
        },
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          const customProgressEvent = progressEvent as unknown as CustomAxiosProgressEvent;
          if (customProgressEvent.lengthComputable) {
            const percentCompleted = Math.round((customProgressEvent.loaded * 100) / customProgressEvent.total!);
            setUploadProgress(percentCompleted);
          }
        },
      });

      console.log('File uploaded successfully!');
      setUploadProgress(0); // Reset progress after successful upload
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <Container>
      <h1>File Upload</h1>
      <Button onClick={getPresignedUrl} colorScheme="teal" mb={4}>
        Get Presigned URL
      </Button>
      <Input type="file" onChange={handleFileChange} mb={4} />
      <Button onClick={uploadFile} disabled={!presignedUrl || !file} colorScheme="teal">
        Upload File
      </Button>
      {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
      <Progress value={uploadProgress} />
    </Container>
  );
};

export default FileUpload;
