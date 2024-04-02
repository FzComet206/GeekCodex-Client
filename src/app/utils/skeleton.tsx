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
                minW={["0px", "400px"]}
                maxW={["0px", "400px"]}
                minH={["0px", "520px"]}
                maxH={["0px", "520px"]}
                overflow={["hidden", "hidden"]}
                >
                    <Skeleton h="520px" w="400px" />
                </Box>
            </Box>
    )
}
    