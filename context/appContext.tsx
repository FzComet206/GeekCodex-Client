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
    op: boolean;
    setOp: (pinged: true | false) => void;
    setpinged: (pinged: true | false) => void;
    seed: number;
    setSeed: (seed: number) => void;
    flip: boolean;
    setFlip: (flip: true | false) => void;
    followUpdate: boolean;
    setFollowUpdate: (flip1: true | false) => void;
    currFollowId: number;
    setCurrFollowId: (id: number) => void;
    currTitle: string;
    setCurrTitle: (title: string) => void;
    currSearchId: number;
    setCurrSearchId: (id: number) => void;
    currQuery: string;
    setCurrQuery: (query: string) => void;
    currSort: string;
    setCurrSort: (sort: string) => void;
}

const AppContext = createContext<AppContextType>({
    darkTheme: true,
    setTheme: () => {},
    isLoggedIn: false,
    setIsLoggedIn: () => {},
    user: "",
    setUser: () => {},
    op: false,
    setOp: () => {},
    pinged: false,
    setpinged: () => {},
    seed: 0,
    setSeed: () => {},
    flip: false,
    setFlip: () => {},
    followUpdate: false,
    setFollowUpdate: () => {},
    currFollowId: 0,
    setCurrFollowId: () => {},
    currTitle: "",
    setCurrTitle: () => {},
    currSearchId: 0,
    setCurrSearchId: () => {},
    currQuery: "",
    setCurrQuery: () => {},
    currSort: "",
    setCurrSort: () => {},
});


// use context to provide global state, however, component re-renders when any state in context change
// therefore only use major state changes in here
const AppProvider:FC<{children:React.ReactNode}> = ({children}) => {
    const [darkTheme, setTheme] = useState<true | false>(true);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<string>("");
    const [op, setOp] = useState<boolean>(false);
    const [pinged, setpinged] = useState<boolean>(false);
    const [seed, setSeed] = useState<number>(Math.random() * 2 - 1);
    // provide higher level function to change state
    const [flip, setFlip] = useState<boolean>(false);
    const [followUpdate, setFollowUpdate] = useState<boolean>(false);
    const [currFollowId, setCurrFollowId] = useState<number>(0);
    const [currTitle, setCurrTitle] = useState<string>("");
    const [currSearchId, setCurrSearchId] = useState<number>(0);
    const [currQuery, setCurrQuery] = useState<string>("");
    const [currSort, setCurrSort] = useState<string>("");

    return (
        <AppContext.Provider value={
            {
                darkTheme, setTheme, 
                isLoggedIn, setIsLoggedIn,
                user, setUser,
                op, setOp,
                pinged, setpinged,
                seed, setSeed,
                flip, setFlip,
                followUpdate, setFollowUpdate,
                currFollowId, setCurrFollowId,
                currTitle, setCurrTitle,
                currSearchId, setCurrSearchId,
                currQuery, setCurrQuery,
                currSort, setCurrSort
            }
        }
            >
            {children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};