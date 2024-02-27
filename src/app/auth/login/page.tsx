"use client"
import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../../../context/authContext";


export default function LoginPage() {

  const { login } = useContext(AuthContext);

  return (
    <Box>
      <Button onClick={() => login("hi", "hi")}>
        Login
      </Button>
    </Box>
  );
}