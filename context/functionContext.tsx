import React, {FC, createContext, useState} from "react";

interface FunctionContextType{
}

const FunctionContext = createContext<FunctionContextType| null>(null);

const FunctionProvider:FC<{children:React.ReactNode}> = ({children}) => {

    const ExecuteFunc = (fn:any) => {
        console.log("executing function")
        return (...args: any) => fn(...args);
    }

    return (
        <FunctionContext.Provider value={ExecuteFunc}>
            {children}
        </FunctionContext.Provider>
    );
}

export {FunctionContext, FunctionProvider};