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
    const minWidth = window.screen.width * 0.14;


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
                minW={`${minWidth}px`}
                >
                    <Card className="card" bg={darkTheme? "brand.cardDark" : "brand.cardLight"} minW={`${minWidth}px`}>
                        <CardBody>
                            <Box
                            h="300px"
                            >
                                <Image
                                src = 'img/Planet.png'
                                alt='World'
                                borderRadius='lg'
                                />
                            </Box>
                            <Stack mt='6' spacing='3'>
                                <Heading color={txtColor} size='md'>
                                    Procedurally Generated Planet
                                </Heading>
                                <Flex>
                                    <Box w = '150px'>
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