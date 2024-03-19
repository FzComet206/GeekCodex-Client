'use client'
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { AppProvider } from "../../context/appContext";
import { FunctionProvider } from "../../context/functionContext";

export default function ThemeProvider({children} : {children: React.ReactNode}) {

  return (
    <AppProvider>
      <FunctionProvider>
      <ChakraProvider theme={theme}>
          {children}
      </ChakraProvider>
      </FunctionProvider>
    </AppProvider>
  )
}
