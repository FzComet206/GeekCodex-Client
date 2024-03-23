import { List, WrapItem, Box, Flex, Button, Text } from "@chakra-ui/react"

export function User({name, userid}: any){
    
    return (
        <>
        {
            userid?
            <Box paddingY="10px" paddingX="20px" className="dash">
                <Box borderColor="rgba(255,255,255,0.3)" borderWidth="1px" borderRadius="10px" w="100%" paddingX="10px">
                    <Flex>

                        <Box minW="100px" h="60px" mr="auto" paddingTop="5px">
                            <Text fontSize="30px" textColor="white">
                                {name}
                            </Text>
                        </Box>
                        <Box minW="100px" h="60px" position="relative" left="15%" mr="auto" paddingTop="10px">
                            <Button fontSize="20px">
                                View Posts
                            </Button>
                        </Box>

                    </Flex>
                </Box>
            </Box>
            :
            <></>
        }
        </>
    )
}

export function Activity({name, userid, title, timestamp} : any){

    return (
        <>
        {
            userid?
                <Box paddingY="10px" paddingX="20px" className="activities">
                    <Box borderColor="rgba(255,255,255,0.3)" borderWidth="1px" borderRadius="10px" w="100%" paddingX="10px">
                        <Flex>

                            <Box minW="300px" h="60px" mr="auto" paddingTop="5px">
                                <Text fontSize="30px" textColor="white">
                                    {`${name} liked your post <${title}> at ${timestamp}`}
                                </Text>
                            </Box>

                        </Flex>
                    </Box>
                </Box>
                :
                <>
                </>
        }
        </>
    )

}