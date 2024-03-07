import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, ScaleFade, Stack, Image, Text, Flex, Center, DarkMode} from "@chakra-ui/react";
import { FC, useContext } from "react";
import { AppContext } from "../../../context/appContext";

export const Preview = () => {

    const {darkTheme} = useContext(AppContext) || {};
    const txtColor = darkTheme? "white" : "black";

    return (
        <Box padding="19px">
            <Box
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
                            <Box maxH="220px" maxW="350px" overflow="hidden">
                                    <Image
                                    src = 'img/Planet.png'
                                    borderRadius='lg'
                                    />
                            </Box>
                        </Flex>

                        <Stack mt='6' spacing='3'>

                            <Heading color={txtColor} size='md' h="20px" isTruncated={true}>
                                Procedurally Generated Planet
                            </Heading>

                            <Box
                                h="120px"
                                sx={{
                                        display: '-webkit-box',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 5,
                                    }}
                            >
                                <Text color={txtColor}>
                                    A procedurally generated planet with a variety of biomes and ecosystems.
                                    A procedurally generated planet with a variety of biomes and ecosystems.
                                    A procedurally generated planet with a variety of biomes and ecosystems.
                                    A procedurally generated planet with a variety of biomes and ecosystems.
                                </Text>
                            </Box>

                            <Flex marginTop="10px">
                                <Box mr="auto">
                                    <Text h="15px" fontSize="20px" color={txtColor}>Posted by: Antares</Text>
                                </Box>
                                <Box>
                                    <Button w="65px" h="25px" bg="rgba(255,255,255,0.7)">Follow</Button>
                                </Box>

                            </Flex>
                            <Flex>
                                <Box mr="auto">
                                    <Text h="15px" fontSize="17px" color={txtColor}>--- 03/05/2024</Text>
                                </Box>
                                <Box ml="auto" >
                                    <Text fontSize="17px" color={txtColor}>Likes: 10</Text>
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