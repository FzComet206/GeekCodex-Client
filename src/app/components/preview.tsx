import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, ScaleFade, Stack, Image, Text, Flex, Center, DarkMode} from "@chakra-ui/react";
import { FC, useContext } from "react";
import { AppContext } from "../../../context/appContext";

interface PreviewProps {
    fade: boolean
    darkMode?: boolean
}

export const Preview: FC<PreviewProps> = ({fade}) => {

    const {darkTheme} = useContext(AppContext) || {};
    const txtColor = darkTheme? "white" : "black";

    return (
        <Box padding="19px">
            <ScaleFade initialScale={0.9} in={fade}>
                <Box
                className="preview"
                p='5px'
                color='white'
                mt='4'
                rounded='md'
                shadow='md'
                >
                    <Card className="card" bg={darkTheme? "brand.cardDark" : "brand.cardLight"}>
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

                                <Flex>
                                    <Box w='150px' paddingTop="10px">
                                            <Button bg={darkTheme? "white" : "#8383B1"}>
                                                View Details
                                            </Button>
                                    </Box>
                                </Flex>

                            </Stack>


                        </CardBody>
                        <Divider />
                    </Card>
                </Box>
            </ScaleFade>
        </Box>
    )
}