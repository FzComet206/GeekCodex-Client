'use client'
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { AppProvider } from "../../context/appContext";

export default function ThemeProvider({children} : {children: React.ReactNode}) {

  return (
    <AppProvider>
      <ChakraProvider theme={theme}>
          {children}
      </ChakraProvider>
    </AppProvider>
  )
}
