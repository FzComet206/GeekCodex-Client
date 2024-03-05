// import React, { createContext, useState, useEffect } from 'react';

// interface User {
    // name: string;
    // email: string;
// }

// interface AuthContextType {
    // isLoggedIn: boolean;
    // user: User | null;
    // login: (email: string, password: string) => void;
    // logout: () => void;
// }

// const AuthContext = createContext<AuthContextType>({
    // isLoggedIn: false,
    // user: null,
    // login: () => {},
    // logout: () => {},
// });

// // global state management for login 
// const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); 
  // const [user, setUser] = useState<User | null>(null);

  // useEffect(() => {
    // const storedUser = localStorage.getItem('user');
    // if (storedUser) {
      // setIsLoggedIn(true);
      // setUser(JSON.parse(storedUser));
    // }
  // }, []);


  // const register = (name: string, email: string, password: string) => {

  // }


  // const login = (email: string, password: string) => {
      // // ... your authentication logic (API call, etc.)
      // // On Success:
      // console.log("Logging in");
      // setIsLoggedIn(true);
      // setUser({ name: '', email }); // Assume only storing email for simplicity
      // localStorage.setItem('user', JSON.stringify({ email })); 
  // };

  // const logout = () => {
      // setIsLoggedIn(false);
      // setUser(null);
      // localStorage.removeItem('user');
  // };

  // return (
    // <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      // {children}
    // </AuthContext.Provider>
  // );
// };

// export { AuthContext, AuthProvider };