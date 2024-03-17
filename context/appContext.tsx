import React, {FC, createContext, useState} from "react";

interface AppContextType {
    darkTheme: boolean;
    setTheme: (darkTheme: true | false) => void;
    isLoggedIn: boolean;
    setIsLoggedIn: (darkTheme: true | false) => void;
    user: string;
    setUser: (user: string) => void;
    pinged: boolean;
    setpinged: (pinged: true | false) => void;
    seed: number;
    setSeed: (seed: number) => void;
}

const AppContext = createContext<AppContextType | null>(null);

// use context to provide global state, however, component re-renders when any state in context change
// therefore only use major state changes in here
const AppProvider:FC<{children:React.ReactNode}> = ({children}) => {
    const [darkTheme, setTheme] = useState<true | false>(true);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<string>("");
    const [pinged, setpinged] = useState<boolean>(false);
    const [seed, setSeed] = useState<number>(Math.random() * 2 - 1);

    return (
        <AppContext.Provider value={
            {
                darkTheme, setTheme, 
                isLoggedIn, setIsLoggedIn,
                user, setUser,
                pinged, setpinged,
                seed, setSeed
            }
        }
            >
            {children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};