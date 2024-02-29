"use client"
import { Box, Button, Center, Input} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AppContext } from "../../../../context/appContext";
import NavigationPlain from "@/app/components/navigationPlain";
import { register, RegisterResponse } from "@/lib/api/register";

export default function RegisterPage() {

    const width = window.screen.width * 0.7;
    const minWidth = window.screen.width * 0.5;

    const { darkTheme } = useContext(AppContext) || {};

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState(false);
    const [msg, setMsg] = useState("");

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value); }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value); }


    const submit = async (): Promise<string> => {
        return "";
    }

    const handleSubmit = async () => {
        const msg = await submit();
        if (msg === "ok") {
          setMsg("");
        } else {
          setAlert(true);
          setMsg("Incorrect Credentials");
        }
    }

    return (
        <Box bg={darkTheme? "brand.pageDark" : "brand.pageLight"}>
            <Center>
                <NavigationPlain/>
            </Center>
            <Center>
                <Box className="body" bg={darkTheme? "brand.bodyDark" : "brand.bodyLight"} w={`${width}px`} minWidth={`${minWidth}px`}>

                    <Center>
                        <Box className="form" fontSize="60px" textColor="white" textAlign="center">
                            <Box marginBottom="2vh" marginTop="10vh">
                                Register
                            </Box>

                            <Box>
                                {
                                    alert && (
                                        <Box textColor="orange" fontSize="20px">
                                            {msg}
                                        </Box>
                                    )
                                }

                            </Box>

                            <Box>
                                <Input placeholder="Enter Nickname" size="lg" w="20vw" value={name} onChange={handleNameChange} />
                            </Box>
                            <Box>
                                <Input type="email" placeholder="Enter Email Address" size="lg" w="20vw" value={email} onChange={handleEmailChange}/>
                            </Box>

                            <Box>
                                <Input pr="4.5rem" placeholder="Enter Password" size="lg" w="20vw" type="password" value={password} onChange={handlePasswordChange}/>
                            </Box>

                            <Button isLoading={loading} size="lg" marginTop="5vh" onClick={() => handleSubmit()}>
                                Sumbit
                            </Button>

                        </Box>
                    </Center>
                </Box>
            </Center>
        </Box>
    );
}
