import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, ScaleFade, Stack, Image, Text, Flex, Center, DarkMode} from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../../../context/appContext";

export const Preview = ( {id, title, body, link, image, created_at, likes, author} : any ) => {

    const {darkTheme} = useContext(AppContext) || {};
    const txtColor = darkTheme? "white" : "black";

    return (
        <Box padding="19px">
            <Box
            padding="19px"
            className="preview"
            p='5px'
            color='white'
            mt='4'
            rounded='md'
            shadow='md'
            >
                <Card 
                    className="card" 
                    bg={darkTheme? "brand.cardDark" : "brand.cardLight"}
                    transition="transform 0.2s"
                    cursor="pointer"
                    _hover={{
                        transform: 'scale(1.05)', 
                        bg: darkTheme? "brand.cardDarkT" : "brand.cardLightT"
                    }}
                    >
                    <CardBody>
                        <Flex justifyContent="center">
                            <Box h="240px" maxW="350px" minW="350px" overflow="hidden">
                                    <Image
                                    src = {image}
                                    borderRadius='lg'
                                    />
                            </Box>
                        </Flex>

                        <Stack mt='6' spacing='3'>

                            <Heading color={txtColor} size='md' h="20px" isTruncated={true}>
                                {title}
                            </Heading>

                            <Box
                                h="100px"
                                sx={{
                                        display: '-webkit-box',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 5,
                                    }}
                            >
                                <Text color={txtColor}>
                                    {body}
                                </Text>
                            </Box>

                            <Flex marginTop="10px">
                                <Box mr="auto">
                                    <Text h="15px" fontSize="20px" color={txtColor}>Posted by: {author}</Text>
                                </Box>
                                <Box>
                                    <Button w="65px" h="25px" bg="rgba(255,255,255,0.7)">Follow</Button>
                                </Box>

                            </Flex>
                            <Flex>
                                <Box mr="auto">
                                    <Text h="15px" fontSize="17px" color={txtColor}> {created_at}</Text>
                                </Box>
                                <Box ml="auto" >
                                    <Text fontSize="17px" color={txtColor}>Likes: {likes}</Text>
                                </Box>
                            </Flex>

                        </Stack>


                    </CardBody>
                    <Divider />
                </Card>
            </Box>
        </Box>
    )
}