"use client"
import { Box, Button, Center, Input} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AppContext } from "../../../../context/appContext";
import NavigationPlain from "@/app/components/navigationPlain";

export default function RegisterPage() {
    const { darkTheme } = useContext(AppContext) || {};

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value); }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value); }
    const handleConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => { setConfirm(e.target.value); }

    return (
        <Box bg={darkTheme? "brand.pageDark" : "brand.pageLight"}>
            <Center>
                <NavigationPlain/>
            </Center>
            <Center>
                <Box className="body" bg={darkTheme? "brand.bodyDark" : "brand.bodyLight"}>

                    <Center>
                        <Box className="form" fontSize="60px" textColor="white" textAlign="center">
                            <Box marginBottom="2vh" marginTop="10vh">
                                Register
                            </Box>

                            <Box>
                                <Input placeholder="Enter Nickname" size="lg" w="20vw" value={name} onChange={handleNameChange} />
                            </Box>
                            <Box>
                                <Input placeholder="Enter Email Address" size="lg" w="20vw" value={email} onChange={handleEmailChange}/>
                            </Box>

                            <Box>
                                <Input pr="4.5rem" placeholder="Enter Password" size="lg" w="20vw" type="password" value={password} onChange={handlePasswordChange}/>
                            </Box>

                            <Box>
                                <Input pr="4.5rem" placeholder="Confirm Password" size="lg" w="20vw" type="password" value={confirm} onChange={handleConfirmChange}/>

                            </Box>

                            <Button size="lg" marginTop="5vh" onClick={() => {
                                setName("");
                                setEmail("");
                                setPassword("");
                                setConfirm("");
                                console.log(name);
                                console.log(email);
                                console.log(password);
                                console.log(confirm);
                            }}>
                                Sumbit
                            </Button>

                        </Box>
                    </Center>
                </Box>
            </Center>
        </Box>
    );
}