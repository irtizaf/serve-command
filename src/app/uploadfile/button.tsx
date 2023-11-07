// // components/FileUpload.tsx

// import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
// import { useRef, useState, ChangeEvent } from 'react';
// import axios from 'axios';
// import fs from 'fs';
// import {value} from "../context/context"
// interface FileUploadProps {
//   onFileSelect: (file: File | null) => void;
// }

// const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const fileInputRef = useRef<HTMLInputElement | null>(null);
//   const {setSubmit} = value()

//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const files = event.target.files;
//     setSelectedFile(files?.[0] || null);
//     onFileSelect(files?.[0] || null);
//   };

//   const resetFileInput = () => {
//     setSelectedFile(null);
//     onFileSelect(null);
    
//   };


//   const isSubmitDisabled = !selectedFile;
//   setSubmit(isSubmitDisabled)
  

//   const handleSubmit = () => {
//     // Add your logic here for handling the submission
//     //console.log('File submitted:', selectedFile);
//   };

//   return (
//     <Box>
//       <FormControl>
//         <Input
//           type="file"
//           ref={fileInputRef}
//           onChange={handleFileChange}
//           display="none"
//         />
//         {!selectedFile ? (
//           <Button onClick={() => fileInputRef.current?.click()}>Upload File</Button>
//         ) : (
//           <Box display="inline-block">
//             {selectedFile.name}{' '}
//             <Button size="xs" variant="ghost" onClick={resetFileInput}>
//               ❌
//             </Button>
//           </Box>
//         )}
//         <Button
//           onClick={handleSubmit}
//           colorScheme={isSubmitDisabled ? 'gray' : 'teal'}
//           ml={2}
//           disabled={isSubmitDisabled}
//         >
//           Submit
//         </Button>
//       </FormControl>
//     </Box>
//   );
// };

// export default FileUpload;

// FileUploadForm.tsx
// FileUploadForm.tsx
import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { Box, Button, VStack } from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';

const FileUploadForm: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = async () => {
    if (!uploadedFile) {
      console.error('No file selected');
      return;
    }

    try {
      const presignedUrlResponse = await axios.get(
        `https://zp2dhmgwaa.execute-api.us-east-1.amazonaws.com/generatepresignedurl?fileName=${uploadedFile.name}&contentType=${uploadedFile.type}`
      );

      const presignedUrl = presignedUrlResponse.data.presignedUrl;

      await axios.put(presignedUrl, uploadedFile, {
        headers: {
          'Content-Type': uploadedFile.type,
        },
      });

      console.log('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:');
    }
  };

  return (
    <VStack spacing={4}>
      <Box
        {...getRootProps()}
        p={4}
        borderWidth={2}
        borderColor={isDragActive ? 'teal' : 'gray.300'}
        borderStyle="dashed"
        borderRadius="md"
        textAlign="center"
        cursor="pointer"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here ...</p>
        ) : (
          <p>Drag 'n' drop a file here, or click to select a file</p>
        )}
      </Box>
      {uploadedFile && (
        <Button colorScheme="teal" background={"black"} onClick={handleSubmit}>
          Upload File
        </Button>
      )}
    </VStack>
  );
};

export default FileUploadForm;
