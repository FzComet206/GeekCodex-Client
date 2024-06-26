"use client"
import { Box, Button, Center, Input} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AppContext } from "../../../../context/appContext";
import NavigationPlain from "../../utils/navigationPlain"
import { useRouter } from "next/navigation";
import axios, { AxiosResponse } from "axios";

export default function RegisterPage() {

    const { darkTheme } = useContext(AppContext) || {};
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setIsLoading] = useState(false);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value); }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value); }
    const handleConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => { setConfirm(e.target.value); }


    const validate = () : string => {
        if (name.length < 3 || name.length > 10) return "name must be within 3 and 10 characters";
        if (email.length < 4 || email.length > 50 || email.indexOf('@') === -1 || email.indexOf('.') === -1) return "Invalid email address";
        if (password.length < 8 || password.length > 20) return "Password must be within 8 and 20 characters"; 
        if (password !== confirm) return "Passwords do not match";
        return "valid";
    }

    const handleSubmit = async () => {

        const msg = validate();
        if (msg !== "valid") {
            setMsg(msg);
            return;
        }

        setIsLoading(true);
        setMsg("");

        try {
            const response: AxiosResponse = await axios.post(
                "../api/register",
                { name, email, password }, 
                { headers: { 'Content-Type': 'application/json' }, withCredentials: true} 
            );
            setIsLoading(false);
            setMsg("Verfication email sent")
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setMsg(error.response?.data || "Network Error. Please try again later.");
            }
            setIsLoading(false);
        }
    }

    return (
        <Box bg={darkTheme? "brand.pageDark" : "brand.pageLight"}>
                <NavigationPlain/>
                <Box margin="auto" w={["450px", "1800px"]} bg={darkTheme? "brand.bodyDark" : "brand.bodyLight"}>
                    <Box maxW={["300px", "400px"]} h="91vh" margin="auto" fontSize="60px" textColor="white" textAlign="center">

                            <Box marginBottom="2vh" paddingTop="10vh">
                                Register
                            </Box>

                            <Box>
                                {
                                    (
                                        <Box textColor="orange" fontSize="20px">
                                            {msg}
                                        </Box>
                                    )
                                }

                            </Box>

                            <Box>
                                <Input _placeholder={{color:"white"}} placeholder="Enter Nickname" size="lg" value={name} onChange={handleNameChange} />
                            </Box>
                            <Box>
                                <Input _placeholder={{color:"white"}} type="email" placeholder="Enter Email Address" size="lg" value={email} onChange={handleEmailChange}/>
                            </Box>

                            <Box>
                                <Input _placeholder={{color:"white"}} pr="4.5rem" placeholder="Enter Password" size="lg" type="password" value={password} onChange={handlePasswordChange}/>
                            </Box>

                            <Box>
                                <Input _placeholder={{color:"white"}} pr="4.5rem" placeholder="Confirm Password" size="lg" type="password" value={confirm} onChange={handleConfirmChange}/>

                            </Box>

                            <Button bgColor="wheat" fontSize="22px" isLoading={loading} size="lg" marginTop="5vh" onClick={() => handleSubmit()}>
                                Sumbit
                            </Button>

                        </Box>
                </Box>
        </Box>
    );
}