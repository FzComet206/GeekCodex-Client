"use client"
import { Box, Button, Center, Input, useRadioGroup} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../../context/appContext";
import NavigationPlain from "../../../utils/navigationPlain"
import { usePathname, useRouter } from "next/navigation";
import axios, { AxiosResponse } from "axios";

export default function RegisterPage() {

    const { darkTheme, setUser, setIsLoggedIn } = useContext(AppContext) || {};
    const [ success, setSuccess ] = useState(true);

    const path = usePathname();
    const router = useRouter();

    useEffect(() => {
        const token = path.split("/").pop();

        const verify = async () => {
            try {
                const response = await axios.post(
                    "../../api/verify",
                    { token }, 
                    { headers: { 'Content-Type': 'application/json' }, withCredentials: true} 
                );
                setUser(response.data.username);
                setIsLoggedIn(true);
                setTimeout(() => {
                    router.push("/homepage")
                }, 2000);
            } catch (error) {
                setSuccess(false)
            }
        }
        verify();
    }, [])


    return (
        <Box bg={darkTheme? "brand.pageDark" : "brand.pageLight"}>
            <Center>
                <NavigationPlain/>
            </Center>
            <Center>
                <Box className="body" bg={darkTheme? "brand.bodyDark" : "brand.bodyLight"}>

                    <Center>
                        <Box className="form" fontSize="60px" textColor="white" textAlign="center">

                            {
                                success?
                                <Box marginBottom="2vh" marginTop="10vh">
                                    Your email is verified!
                                </Box>
                                :
                                <Box marginBottom="2vh" marginTop="10vh" textColor="orange">
                                    Error verifying email
                                </Box>
                            }
                        </Box>
                    </Center>
                </Box>
            </Center>
        </Box>
    );
}