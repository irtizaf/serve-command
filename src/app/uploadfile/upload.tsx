// components/FileUpload.tsx

import { Box, Button, FormControl, FormLabel, Input,Text,Image, } from '@chakra-ui/react';
import { useRef, useState, ChangeEvent } from 'react';
import {Valueone} from "../context/context"
interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const {setSubmit} = Valueone()

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setSelectedFile(files?.[0] || null);
    onFileSelect(files?.[0] || null);
  };

  const resetFileInput = () => {
    setSelectedFile(null);
    onFileSelect(null);
  };
  const isSubmitDisabled = !selectedFile;
  setSubmit(isSubmitDisabled)
  
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
          
          display={{"2xl":"flex"}}
                        height={{"2xl":"40px"}}
                        px={{"2xl":"16px"}}
                        justifyContent={{"2xl":"center"}}
                        gap={{"2xl":"8px"}}
                        flexShrink={0}
                        border={"1px solid"}
                        borderColor={"#11190C"}
                        background={"white"}
                        borderRadius={{"2xl":"6px"}}
                        alignItems={{"2xl":"center"}}
          >


                            <Text
                            height={{"2xl":"24px"}}
                            w={{"2xl":"148px"}}
                            textColor={"#11190C"}
                            fontFamily={"Inter"}
                            fontSize={{"2xl":"16px"}}
                            fontStyle={"normal"}
                            fontWeight={600}
                            lineHeight={{"2xl":"24px"}}
                            
                            >
                            Upload Backup File
                            </Text>
                            <Image src='/right-icon.svg' w={{"2xl":"16px"}} h={{"2xl":"16px"}} />
                        

          </Button>
        ) : (
          <Box 
          gap={{"2xl":"10px"}}
          display={{"2xl":"flex"}}
          flexDirection={{"2xl":"column"}}
          justifyContent={{"2xl":"center"}}
          alignItems={{"2xl":"center"}}
          >
            
            
            <Box
                        display={{"2xl":"flex"}}
                        flexDirection={{"2xl":"column"}}
                        alignItems={{"2xl":"center"}}
                        gap={{"2xl":"8px"}}
                        >
                        <Box
                        h={{"2xl":"40px"}}
                        w={{"2xl":"40px"}}
                        borderRadius={"100px"} 
                        background={"green.600"}
                        display={{"2xl":"flex"}}
                        flexDirection={{"2xl":"column"}}
                        justifyContent={{"2xl":"center"}}
                        alignItems={{"2xl":"center"}}
                        >
                            <Image src='/check-circle.svg' h={{"2xl":"24px"}} w={{"2xl":"24px"}}/>
                        </Box>
                        <Text
                        textColor={"rgba(0, 0, 0, 0.87)"}
                        fontFamily={"Inter"}
                        fontSize={{"2xl":"18px"}}
                        fontStyle={"normal"}
                        fontWeight={500}
                        lineHeight={{"2xl":"28px"}}
                        >
                        File Successfully Uploaded
                        </Text>
                        </Box>
                        <Box>
                        <Button 
                        display={{"2xl":"flex"}}
                        h={{"2xl":"24px"}}
                        px={{"2xl":"8px"}}
                        justifyContent={{ "2xl":"center"}}
                        alignItems={{"2xl" :"center"}}
                        gap={{"2xl":"6px"}}
                        borderRadius={{"2xl":"39px"}}
                        border={"1px solid var(--green-500, #38A169)"}
                        background={"white"}
                        w={{"2xl":"auto"}}
                        >
                            <Text
                            textColor={"#38A169"}
                            fontFamily={"Inter"}
                            fontSize={{"2xl":"12px"}}
                            fontStyle={"normal"}
                            fontWeight={600}
                            lineHeight={{"2xl":"16px"}}
                            >
                            {selectedFile.name}{' '}
                            
                            </Text>
                            <Image src='/right-icon (1).svg' height={{"2xl":"12px"}} w={{"2xl":"12px"}} onClick={resetFileInput}/>
                        </Button>
                        </Box>



          </Box>
        )}
      </FormControl>
    </Box>
  );
};

export default FileUpload;
