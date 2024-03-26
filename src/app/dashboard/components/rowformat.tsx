import { List, WrapItem, Box, Flex, Button, Text } from "@chakra-ui/react"

export function User({name, userid, handle}: any){

    const View = () => {
        return (
            <>
                {
                    userid?
                    <>
                    <Box borderColor="rgba(255,255,255,0.3)" borderWidth="1px" borderRadius="10px" w="100%" paddingX="10px">
                        <Flex>
                            <Box w="210px" h="60px" mr="auto" paddingTop="5px" overflow="hidden">
                                <Text fontSize="30px" textColor="white">
                                    {name}
                                </Text>
                            </Box>
                            <Box minW="100px" h="60px" position="relative" right="0%" mr="auto" paddingTop="10px">
                                <Button fontSize="20px" onClick={()=>{handle(userid, name)}}>
                                    View Posts
                                </Button>
                            </Box>
                        </Flex>
                    </Box>
                    </>
                    :
                    <>
                    <Box w="100%" paddingX="10px">
                        <Flex>
                            <Box minW="100px" h="60px" mr="auto" paddingTop="5px">
                            </Box>
                            <Box minW="100px" h="60px" position="relative" left="15%" mr="auto" paddingTop="10px">
                            </Box>
                        </Flex>
                    </Box>
                    </>
                }
            </>
        )
    }
    
    return (
        <Box paddingY="10px" paddingX="20px" className="dash">
                    <View></View>
        </Box>
    )
}

export function Activity({name, userid, title, timestamp, handle} : any){

    return (
        <>
        {
            userid?
                <Box paddingY="10px" paddingX="20px" className="activities">
                    <Box borderColor="rgba(255,255,255,0.3)" borderWidth="1px" borderRadius="10px" w="100%" paddingX="10px" minW="300px" h="60px">
                        <Flex>
                            <Text fontSize="25px" textColor="white" minW="180px" maxW="180px" 
                                padding="10px"
                                style={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                
                                }}
                            >
                                {`${name}`}
                            </Text>

                            <Box padding="10px">
                                <Button fontSize="20px" onClick={()=>{handle(userid, name)}}>
                                    View Post
                                </Button>
                            </Box>

                            <Text fontSize="25px" textColor="white" w="120px" overflow="hidden" 
                                padding="10px" textAlign="center"
                            >
                                liked
                            </Text>

                            <Text fontSize="25px" textColor="white" minW="300px" maxW="300px" 
                                padding="10px"
                                style={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                
                                }}
                            >
                                {`"${title}"`}
                            </Text>
                            <Text fontSize="25px" textColor="white" w="200px" overflow="hidden"
                                padding="10px"
                            >
                                {`${timestamp.slice(0, 16)}`}
                            </Text>

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