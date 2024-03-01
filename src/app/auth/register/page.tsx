"use client"
import { Box, Button, Center, Input} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AppContext } from "../../../../context/appContext";
import NavigationPlain from "@/app/components/navigationPlain";
import { register, RegisterResponse } from "@/lib/api/register";

export default function RegisterPage() {

    const { darkTheme } = useContext(AppContext) || {};
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [alert, setAlert] = useState(false);
    const [msg, setMsg] = useState("");
    const [loading, setIsLoading] = useState(false);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value); }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value); }
    const handleConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => { setConfirm(e.target.value); }

    const _register = async () => {
        // valudate inputs
        // setName("");
        // setEmail("");
        // setPassword("");
        // setConfirm("");

        await register(name, email, password).then((response: RegisterResponse) => {
            setIsLoading(false);
            console.log(response)
        }).catch((error) => {
            setIsLoading(false);
            setAlert(true);
            setMsg("An connection error occured")
            console.log(error);
        })
    } 

    const validate = () : string => {
        if (name.length < 3 || name.length > 12) return "name must be within 3 and 12 characters";
        if (email.length < 4 || email.length > 50 || email.indexOf('@') === -1 || email.indexOf('.') === -1) return "Invalid email address";
        if (password.length < 8 || password.length > 20) return "Password must be within 8 and 20 characters"; 
        if (password !== confirm) return "Passwords do not match";
        return "valid";
    }


    const submit = async (): Promise<string> => {
        const msg = validate();
        if (msg !== "valid") {
            return msg;
        }
        _register();
        return "ok";
    }

    const handleSubmit = async () => {
        const msg = await submit();
        if (msg !== "ok"){
            setAlert(true);
            setMsg(msg);
        } else {
            setIsLoading(true);
            setAlert(false);
            setMsg("");
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

                            <Box>
                                <Input pr="4.5rem" placeholder="Confirm Password" size="lg" w="20vw" type="password" value={confirm} onChange={handleConfirmChange}/>

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