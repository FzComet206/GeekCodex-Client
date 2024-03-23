import { Box, Skeleton, WrapItem } from "@chakra-ui/react";

export function BlankPreview() {
    return (
            <Box padding="15px">
                <Box
                className="preview"
                p='5px'
                color='white'
                mt='4'
                rounded='md'
                shadow='md'
                >
                    <Skeleton h="520px" w="400px" />
                </Box>
            </Box>
    )
}
    