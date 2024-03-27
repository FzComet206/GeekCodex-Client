"use client"
import { Box, Button, Center, Input} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AppContext } from "../../../../context/appContext";
import NavigationPlain from "../../utils/navigationPlain"
import { useRouter } from "next/navigation";
import axios, { AxiosResponse } from "axios";

export default function RegisterPage() {

    const { darkTheme, setUser, setIsLoggedIn } = useContext(AppContext) || {};
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [alert, setAlert] = useState(false);
    const [msg, setMsg] = useState("");
    const [loading, setIsLoading] = useState(false);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value); }
    const handleConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => { setConfirm(e.target.value); }


    const router = useRouter();
    const validate = () : string => {
        if (password.length < 8 || password.length > 20) return "Password must be within 8 and 20 characters"; 
        if (password !== confirm) return "Passwords do not match";
        return "valid";
    }

    const handleSubmit = async () => {

        const msg = validate();
        if (msg !== "valid") {
            setAlert(true);
            setMsg(msg);
            return;
        }

        setIsLoading(true);
        setAlert(false);
        setMsg("");

        const token = ""

        try {
            const response: AxiosResponse = await axios.post(
                "../api/resetpassword",
                { token, password }, 
                { headers: { 'Content-Type': 'application/json' }, withCredentials: true} 
            );
            setIsLoading(false);

        router.push("/login");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setAlert(true);
                setMsg(error.response?.data || "Network Error. Please try again later.");
            }
            setIsLoading(false);
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
                            <Box marginBottom="2vh" marginTop="10vh">
                                Password Reset
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
                                <Input _placeholder={{color:"white"}} pr="4.5rem" placeholder="Enter New Password" size="lg" type="password" value={password} onChange={handlePasswordChange}/>
                            </Box>

                            <Box>
                                <Input _placeholder={{color:"white"}} pr="4.5rem" placeholder="Confirm New Password" size="lg" type="password" value={confirm} onChange={handleConfirmChange}/>

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