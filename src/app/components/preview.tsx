import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, ScaleFade, Stack, Image, Text, Flex, Center, DarkMode, useDisclosure} from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../../../context/appContext";
import axios from "axios";
import { on } from "events";
import { Confirmation } from "./deleteConfirm";

export const Preview = ( {id, title, body, link, image, created_at, likes, author} : any ) => {

    const {darkTheme, user} = useContext(AppContext) || {};
    const txtColor = darkTheme? "white" : "black";
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleDelete = async () => {
        console.log("client side delete call")
        try {
            const res = await axios.get(`/api/delete?id=${id}`)
            console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    const handleFollow = async () => {
        console.log("client side follow call")
    }

    const handleLike = async () => {
        console.log("client side like call")
    }

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
                <Confirmation onOpen={onOpen} onClose={onClose} isOpen={isOpen} handleDelete={handleDelete}></Confirmation>
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
                                    margin="auto"
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

                                {
                                    user === author?
                                    <Box>
                                        <Button 
                                            onClick={onOpen}
                                            w="65px" h="25px" bg="#F08080">Delete</Button>
                                    </Box>
                                    :
                                    <Box>
                                        <Button 
                                            onClick={handleFollow}
                                            w="65px" h="25px" bg="#EAC435">Follow</Button>
                                    </Box>
                                }

                            </Flex>
                            <Flex>
                                <Box mr="auto">
                                    <Text h="15px" fontSize="17px" color={txtColor}> {created_at}</Text>
                                </Box>

                                {
                                    user === author?
                                    <Box>
                                        <Text fontSize="17px" color={txtColor}>Likes: {likes}</Text>
                                    </Box>
                                    :
                                    <Box>
                                        <Button 
                                            onClick={handleLike}
                                            w="65px" h="25px" bg="#D3FFE9">Like: {likes}</Button>
                                    </Box>
                                }
                            </Flex>

                        </Stack>


                    </CardBody>
                    <Divider />
                </Card>
            </Box>
        </Box>
    )
}