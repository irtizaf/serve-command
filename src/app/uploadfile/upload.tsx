"use client"

import axios, { AxiosResponse, AxiosProgressEvent } from 'axios';
import { Box, Button, FormControl, FormLabel, Input,Text,Image, Progress } from '@chakra-ui/react';
import { useRef, useState, ChangeEvent } from 'react';
import {Valueone} from "../context/context"
interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const {setSubmit,pre} = Valueone()
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setSelectedFile(files?.[0] || null);
    onFileSelect(files?.[0] || null);
    setFile(files?.[0] || null)
    
    //setPresignedUrl(pre)
  };

  const resetFileInput = () => {
    setSelectedFile(null);
    onFileSelect(null);
  };
  const isSubmitDisabled = !selectedFile;
  setSubmit(isSubmitDisabled)
  
  
  
  const uploadFile = async () => {
    console.log(pre)
    console.log(file)
    if (!pre || !file) {
      console.error('Presigned URL or file not available.');
      return;
    }

    try {
      await axios.put(pre, file, {
        headers: {
          'Content-Type': 'text/plain', // Adjust the content type accordingly
        },
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          const { loaded, total } : any = progressEvent;
          const percentCompleted = Math.round((loaded * 100) / total);
          setUploadProgress(percentCompleted);
        },
      });

      console.log('File uploaded successfully!');
      setUploadProgress(0);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  

 if (uploadProgress > 0) {
  uploadFile()

 }

  
  return (
    <Box>
      <FormControl>
        <Input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          display="none"
        />
        {!selectedFile ? (
          <Button onClick={() => fileInputRef.current?.click()}
          
          display={"flex"}
                        height={{"2xl":"40px",sm:"auto"}}
                        px={{"2xl":"16px",sm:"6px"}}
                        justifyContent={"center"}
                        gap={{"2xl":"8px",sm:"4px"}}
                        flexShrink={0}
                        border={"1px solid"}
                        borderColor={"#11190C"}
                        background={"white"}
                        borderRadius={"6px"}
                        alignItems={"center"}
                        
          >


                            <Text
                            height={{"2xl":"24px",sm:"auto"}}
                            w={{"2xl":"148px",sm:"auto"}}
                            textColor={"#11190C"}
                            fontFamily={"Inter"}
                            fontSize={{"2xl":"16px",sm:"10px"}}
                            fontStyle={"normal"}
                            fontWeight={600}
                            lineHeight={{"2xl":"24px",sm:"auto"}}
                            
                            >
                            Upload Backup File
                            </Text>
                            <Image src='/right-icon.svg' 
                            w={{"2xl":"16px",sm:"12px"}} 
                            h={{"2xl":"16px",sm:"12px"}} />
                        

          </Button>
        ) : (
          <Box 
          gap={{"2xl":"10px",sm:"5px"}}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"auto"}
          >
            
            
            <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        gap={{"2xl":"8px",sm:"4px"}}
                        >
                        <Box
                        h={{"2xl":"40px",sm:"auto"}}
                        w={{"2xl":"40px",sm:"auto"}}
                        borderRadius={"100px"} 
                        background={"green.600"}
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        >
                            <Image src='/check-circle.svg' 
                            h={{"2xl":"24px",sm:"18px"}} 
                            w={{"2xl":"24px",sm:"18px"}}/>
                        </Box>
                        <Text
                        textColor={"rgba(0, 0, 0, 0.87)"}
                        fontFamily={"Inter"}
                        fontSize={{"2xl":"18px",sm:"10px"}}
                        fontStyle={"normal"}
                        fontWeight={500}
                        lineHeight={{"2xl":"28px",sm:"auto"}}
                        
                        >
                        File Successfully Uploaded
                        </Text>
                        </Box>
                        <Box>
                        <Button 
                        display={"flex"}
                        h={{"2xl":"24px",sm:"auto"}}
                        px={{"2xl":"8px",sm:"auto"}}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={{"2xl":"6px",sm:"3px"}}
                        borderRadius={"39px"}
                        border={"1px solid var(--green-500, #38A169)"}
                        background={"white"}
                        w={{"2xl":"auto",sm:"auto"}}
                        >
                            <Text
                            textColor={"#38A169"}
                            fontFamily={"Inter"}
                            fontSize={{"2xl":"12px",sm:"8px"}}
                            fontStyle={"normal"}
                            fontWeight={600}
                            lineHeight={{"2xl":"16px",sm:"auto"}}
                            >
                            {selectedFile.name}{' '}
                            
                            </Text>
                            <Image src='/right-icon (1).svg' 
                            height={{"2xl":"12px"}} 
                            w={{"2xl":"12px"}} 
                            onClick={resetFileInput}/>
                        </Button>
                        {uploadProgress > 0 && <Progress value={uploadProgress} mb={4} />}
      {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
                        </Box>



          </Box>
        )}
      </FormControl>
    </Box>
  );
};

export default FileUpload;