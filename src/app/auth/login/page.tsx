"use client"
import { Box, Button, Center, Input, Link} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AppContext } from "../../../../context/appContext";
import NavigationPlain from "../../utils/navigationPlain"
import { useRouter } from "next/navigation";
import axios, { AxiosResponse } from "axios";

export default function RegisterPage() {

    const { darkTheme, setUser, setIsLoggedIn, setOp} = useContext(AppContext) || {};
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState(false);
    const [msg, setMsg] = useState("");
    const router = useRouter();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value); }

    const handleSubmit = async () => {

        setIsLoading(true);
        setAlert(false);
        setMsg("");

        try {
            const response: AxiosResponse = await axios.post(
                "../api/login",
                { email, password }, 
                { headers: { 'Content-Type': 'application/json' }, withCredentials: true} 
            );
            setIsLoading(false);
            setIsLoggedIn?.(true);
            setUser(response.data.username);
            setOp(response.data.is_op);

        router.push("/homepage");
        } catch (error) {
            setIsLoading(false);
            if (axios.isAxiosError(error)) {
                setAlert(true);
                setMsg(error.response?.data || "Network Error. Please try again later.");
            }
            console.log(error)
        }
    }

    return (
        <Box bg={darkTheme? "brand.pageDark" : "brand.pageLight"}>
            <Center>
                <NavigationPlain/>
            </Center>
            <Center>
                <Box className="body" bg={darkTheme? "brand.bodyDark" : "brand.bodyLight"}>

                    <Center>
                        <Box className="form" fontSize="60px" textColor="white" textAlign="center">
                            <Box padding="2vh" marginTop="10vh">
                                Sign In
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
                                <Input _placeholder={{color:"white"}} type="email" placeholder="Enter Email Address" size="lg" value={email} onChange={handleEmailChange}/>
                            </Box>

                            <Box>
                                <Input _placeholder={{color:"white"}} pr="4.5rem" placeholder="Enter Password" size="lg" type="password" value={password} onChange={handlePasswordChange}/>
                            </Box>

                            <Box h="30px" fontSize="20px" paddingTop="20px">
                                <Link position="relative" left="34%" href="./changepassword">
                                    Reset Password
                                </Link>
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
