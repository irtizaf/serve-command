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
}

const initialContext: ContextProps = {
  submit: false,
  setSubmit: () => {}, // Provide a default value for setSubmit
  step: 0,
  setStep:() => {},
  pre: "",
  setPre:() => {},
  fileName: null,
  setFileName: () => {null}

  
};

export const ValueContext = createContext(initialContext);

export default function Context({ children }: { children: ReactNode }) {
  const [submit, setSubmit] = useState(false);
  const [step,setStep] = useState(0)
  const [pre,setPre] = useState("")
  const [fileName, setFileName] = useState<File | null| String | undefined >(null);
  //const [fileone,setFileone] = useState<File | null>(null)


  //const safeSetFileone = setFileone!;

  return (
    <ValueContext.Provider value={{ submit, setSubmit,step,setStep,pre,setPre,fileName, setFileName}}>
      {children}
    </ValueContext.Provider>
  );
}

export const Valueone = () => useContext(ValueContext);

