import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, ScaleFade, Stack, Image, Text, Flex, Center, DarkMode} from "@chakra-ui/react";
import { FC } from "react";

interface PreviewProps {
    fade: boolean
    darkMode?: boolean
}

export const Preview: FC<PreviewProps> = ({fade, darkMode}) => {

    const txtColor = darkMode? "white" : "black"

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
                    <Card className="Card" bg={darkMode? "brand.cardDark" : "brand.cardLight"}>
                        <CardBody>
                            <Image
                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                            <Heading color={txtColor} size='md'>Living room Sofa</Heading>
                                <Flex>
                                <Text color={txtColor} fontSize='2xl'>
                                    $450
                                </Text>
                                    <Box w = '120px'>
                                        <Center>
                                            <Button>
                                                Purchase
                                            </Button>
                                        </Center>
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