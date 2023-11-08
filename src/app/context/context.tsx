"use client"


import React, { useState, createContext, useContext, ReactNode, Dispatch, SetStateAction } from "react";

interface ContextProps {
  submit: boolean;
  setSubmit: Dispatch<SetStateAction<boolean>>;
  step: number
  setStep:Dispatch<SetStateAction<number>>
  pre: string
  setPre:Dispatch<SetStateAction<string>>
  

}

const initialContext: ContextProps = {
  submit: false,
  setSubmit: () => {}, // Provide a default value for setSubmit
  step: 0,
  setStep:() => {},
  pre: "",
  setPre:() => {},
  
};

export const ValueContext = createContext(initialContext);

export default function Context({ children }: { children: ReactNode }) {
  const [submit, setSubmit] = useState(false);
  const [step,setStep] = useState(0)
  const [pre,setPre] = useState("")
  //const [fileone,setFileone] = useState<File | null>(null)


  //const safeSetFileone = setFileone!;

  return (
    <ValueContext.Provider value={{ submit, setSubmit,step,setStep,pre,setPre}}>
      {children}
    </ValueContext.Provider>
  );
}

export const Valueone = () => useContext(ValueContext);

