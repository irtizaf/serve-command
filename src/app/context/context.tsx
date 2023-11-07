// "use client"
// import { useState, createContext, useContext,ReactNode } from "react";
// import { useEffect } from "react"
// const initialcontext = {
//     submit:"",
    
    
// }

// export const ValueContext:any = createContext<any>(null);




// export default function Context ({children}:any) {
//     const [submit, setSubmit] = useState(false)
//     //const [step,setStep] = useState(1)
//     console.log(submit)

//   return (
//     <ValueContext.Provider value={{submit,setSubmit}}>

//         {children}

//     </ValueContext.Provider>
//   )
// }



// export const valueone = () => useContext(ValueContext)
"use client"


import React, { useState, createContext, useContext, ReactNode, Dispatch, SetStateAction } from "react";

interface ContextProps {
  submit: boolean;
  setSubmit: Dispatch<SetStateAction<boolean>>;
}

const initialContext: ContextProps = {
  submit: false,
  setSubmit: () => {}, // Provide a default value for setSubmit
};

export const ValueContext = createContext(initialContext);

export default function Context({ children }: { children: ReactNode }) {
  const [submit, setSubmit] = useState(false);

  return (
    <ValueContext.Provider value={{ submit, setSubmit }}>
      {children}
    </ValueContext.Provider>
  );
}

export const valueone = () => useContext(ValueContext);

