"use client"
import { Box, Text } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();
    return (
        <Box h="100vh" w="100vw" bg="#070707">
            <Box>
                <Text fontSize="90px" color="white" textAlign="center" paddingTop="5vh" paddingBottom="5vh">
                    Welcome to Geek Codex!
                </Text>
            </Box>
            <Box 
                h="70vh" w="70vw" margin="auto" bgImage="img/background.png" bgPosition="center" backgroundSize="cover"
                transition="transform 0.2s"
                cursor="pointer"
                _hover={{
                    transform: 'scale(1.05)', 
                }}
                onClick={() => router.push('/homepage')}
            >
                hello
            </Box>
        </Box>
    );
}