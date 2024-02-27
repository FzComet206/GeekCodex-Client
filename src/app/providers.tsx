'use client'
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { AuthProvider } from "../../context/authContext";
import { AppProvider } from "../../context/appContext";

export default function ThemeProvider({children} : {children: React.ReactNode}) {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </AppProvider>
    </ChakraProvider>
  )
}
