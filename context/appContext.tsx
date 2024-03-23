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

    followUpdate: boolean;
    setFollowUpdate: (flip1: true | false) => void;
    currFollowId: number;
    setCurrFollowId: (id: number) => void;
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
    followUpdate: false,
    setFollowUpdate: () => {},
    currFollowId: 0,
    setCurrFollowId: () => {}
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
    const [followUpdate, setFollowUpdate] = useState<boolean>(false);
    const [currFollowId, setCurrFollowId] = useState<number>(0);

    return (
        <AppContext.Provider value={
            {
                darkTheme, setTheme, 
                isLoggedIn, setIsLoggedIn,
                user, setUser,
                pinged, setpinged,
                seed, setSeed,
                flip, setFlip,
                followUpdate, setFollowUpdate,
                currFollowId, setCurrFollowId
            }
        }
            >
            {children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};