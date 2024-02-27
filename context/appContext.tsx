import React, {FC, createContext, useState} from "react";

interface AppContextType {
    darkTheme: boolean;
    setTheme: (darkTheme: true | false) => void;
}

const AppContext = createContext<AppContextType | null>(null);

const AppProvider:FC<{children:React.ReactNode}> = ({children}) => {
    const [darkTheme, setTheme] = useState<true | false>(true);
    return (
        <AppContext.Provider value={{darkTheme, setTheme}}>
            {children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};