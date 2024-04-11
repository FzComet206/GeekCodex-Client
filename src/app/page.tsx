"use client"
import { Box, Link, Text } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';

export default function Page() {
    console.log(process.env.API_URL)
    const router = useRouter();
    return (
        <Box h="100vh" w="100vw" bg="#070707">
            <Box>
                <Text fontSize={[45, 90]} color="white" textAlign="center" paddingTop="3vh" paddingBottom="2vh">
                    Welcome to Geek Codex!
                </Text>
            </Box>
            <Box fontSize="30px" textColor="wheat" w="400px" margin="auto" textAlign="center" marginBottom="20px"> 
                <Link isExternal href="https://github.com/FzComet206/GeekCodex-Client/tree/main">Link to Github Repository</Link>
            </Box>

            <Box fontSize="20px" textColor="wheat" w="400px" margin="auto" textAlign="center" marginBottom="40px"> 
                Click on the below image to enter the website
            </Box>
            <Box 
                w={["500px", "1600px"]}
                h={["300px", "900px"]}
                overflow={['hidden', 'visible']}
                margin="auto" bgImage="img/background.png" bgPosition="center" backgroundSize="cover"
                transition="transform 0.2s"
                cursor="pointer"
                _hover={{
                    transform: 'scale(1.03)', 
                }}
                onClick={() => router.push('/homepage')}
            >
            </Box>
        </Box>
    );
}