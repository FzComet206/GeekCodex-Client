import { PostData } from "@/app/api/feed/route";
import React, {FC, createContext, use, useState} from "react";

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
    flip: boolean;
    setFlip: (flip: true | false) => void;
}

const AppContext = createContext<AppContextType>({
    darkTheme: true,
    setTheme: () => {},
    isLoggedIn: false,
    setIsLoggedIn: () => {},
    user: "",
    setUser: () => {},
    pinged: false,
    setpinged: () => {},
    seed: 0,
    setSeed: () => {},
    flip: false,
    setFlip: () => {},
});


// use context to provide global state, however, component re-renders when any state in context change
// therefore only use major state changes in here
const AppProvider:FC<{children:React.ReactNode}> = ({children}) => {
    const [darkTheme, setTheme] = useState<true | false>(true);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<string>("");
    const [pinged, setpinged] = useState<boolean>(false);
    const [seed, setSeed] = useState<number>(Math.random() * 2 - 1);
    // provide higher level function to change state
    const [flip, setFlip] = useState<boolean>(false);

    return (
        <AppContext.Provider value={
            {
                darkTheme, setTheme, 
                isLoggedIn, setIsLoggedIn,
                user, setUser,
                pinged, setpinged,
                seed, setSeed,
                flip, setFlip
            }
        }
            >
            {children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};