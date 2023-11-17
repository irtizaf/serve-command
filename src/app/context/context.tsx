"use client"


import React, { useState, createContext, useContext, ReactNode, Dispatch, SetStateAction } from "react";

interface ContextProps {
  submit: boolean;
  setSubmit: Dispatch<SetStateAction<boolean>>;
  step: number
  setStep:Dispatch<SetStateAction<number>>
  pre: string
  setPre:Dispatch<SetStateAction<string>>
  fileName:File | null | String |undefined
  setFileName: Dispatch<SetStateAction<File | null | String |undefined >> 
  username:string
  setUsername:Dispatch<SetStateAction<string>>
  verificationCode:string
  setVerificationCode:Dispatch<SetStateAction<string>>
  uploadProgress:number
  setUploadProgress:Dispatch<SetStateAction<number>>
  open:boolean
  setOpen:Dispatch<SetStateAction<boolean>>
  isOpen1:boolean
  setIsOpen1:Dispatch<SetStateAction<boolean>>
}

const initialContext: ContextProps = {
  submit: false,
  setSubmit: () => {}, // Provide a default value for setSubmit
  step: 0,
  setStep:() => {},
  pre: "",
  setPre:() => {},
  fileName: null,
  setFileName: () => {null},
  username:"",
  setUsername:() => {null},
  verificationCode:"",
  setVerificationCode:() => {null},
  uploadProgress:0,
  setUploadProgress:() => {null},
  open:true,
  setOpen:() => {null},
  isOpen1: false,
  setIsOpen1:() => {null}



  
};

export const ValueContext = createContext(initialContext);

export default function Context({ children }: { children: ReactNode }) {
  const [submit, setSubmit] = useState(false);
  const [step,setStep] = useState(0)
  const [pre,setPre] = useState("")
  const [fileName, setFileName] = useState<File | null| String | undefined >(null);
  const [username, setUsername] = useState('')
  const [verificationCode, setVerificationCode] = useState('');
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [open, setOpen] = useState(true);
  const [isOpen1, setIsOpen1] = useState(false)
  //const [fileone,setFileone] = useState<File | null>(null)


  //const safeSetFileone = setFileone!;

  return (
    <ValueContext.Provider value={{ submit, setSubmit,step,setStep,pre,setPre,fileName, setFileName,username, setUsername,verificationCode, setVerificationCode,uploadProgress, setUploadProgress,open, setOpen,isOpen1, setIsOpen1 }}>
      {children}
    </ValueContext.Provider>
  );
}

export const Valueone = () => useContext(ValueContext);

