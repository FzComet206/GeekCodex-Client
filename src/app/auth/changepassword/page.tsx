"use client"
import { Box, Button, Center, Input, Link} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AppContext } from "../../../../context/appContext";
import NavigationPlain from "../../utils/navigationPlain"
import { useRouter } from "next/navigation";
import axios, { AxiosResponse } from "axios";

export default function RegisterPage() {

    const { darkTheme } = useContext(AppContext) || {};
    const [email, setEmail] = useState("");
    const [loading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState(false);
    const [msg, setMsg] = useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); }

    const handleSubmit = async () => {

        setIsLoading(true);
        setAlert(false);
        setMsg("");

        try {
            const response: AxiosResponse = await axios.post(
                "../api/changepassword",
                { email }, 
                { headers: { 'Content-Type': 'application/json' }, withCredentials: true} 
            );
            setIsLoading(false);
            setAlert(true)
            setMsg("Email Sent")

        } catch (error) {
            setIsLoading(false);
            if (axios.isAxiosError(error)) {
                setAlert(true);
                setMsg(error.response?.data || "Network Error. Please try again later.");
            }
        }
    }

    return (
        <Box bg={darkTheme? "brand.pageDark" : "brand.pageLight"}>
                <NavigationPlain/>
            <Box margin="auto" w={["450px", "1800px"]} bg={darkTheme? "brand.bodyDark" : "brand.bodyLight"}>

                    <Box maxW={["300px", "400px"]} h="91vh" margin="auto" fontSize="40px" textColor="white" textAlign="center">
                            <Box padding="2vh" paddingTop="10vh">
                                Enter your email address
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


                            <Button bg="wheat" fontSize="22px" isLoading={loading} size="lg" marginTop="5vh" onClick={() => handleSubmit()}>
                                Send
                            </Button>

                        </Box>
                </Box>
        </Box>
    );
}
