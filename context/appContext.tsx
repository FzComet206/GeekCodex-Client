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
    posts: PostData[];
    setPosts: React.Dispatch<React.SetStateAction<PostData[]>>;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    selfPosts: PostData[];
    setSelfPosts: React.Dispatch<React.SetStateAction<PostData[]>>;
    selfPage: number;
    setSelfPage: React.Dispatch<React.SetStateAction<number>>;
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
    posts: [],
    setPosts: () => {},
    page: 1,
    setPage: () => {},
    selfPosts: [],
    setSelfPosts: () => {},
    selfPage: 1,
    setSelfPage: () => {}
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
    const [posts, setPosts] = useState<PostData[]>([]);
    const [page, setPage] = useState(1);
    const [selfPosts, setSelfPosts] = useState<PostData[]>([]);
    const [selfPage, setSelfPage] = useState(1);


    return (
        <AppContext.Provider value={
            {
                darkTheme, setTheme, 
                isLoggedIn, setIsLoggedIn,
                user, setUser,
                pinged, setpinged,
                seed, setSeed,
                posts, setPosts,
                page, setPage,
                selfPosts, setSelfPosts,
                selfPage, setSelfPage
            }
        }
            >
            {children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};