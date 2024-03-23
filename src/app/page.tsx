import { Box, Text } from "@chakra-ui/react";

export default function Page() {
    return (
        <Box h="100vh" w="100vw" bg="black">
            <Text fontSize="60px" color="white" textAlign="center" paddingTop="40vh">
                Welcome to Geek Codex!
            </Text>
        </Box>
    );
}