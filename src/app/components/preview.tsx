import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, ScaleFade, Stack, Image, Text, Flex, Center, DarkMode, useDisclosure, useStatStyles, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Link} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AppContext } from "../../../context/appContext";
import axios from "axios";
import { Confirmation } from "./deleteConfirm";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export const Preview = ( {id, title, body, link, image, created_at, likes, author} : any ) => {

    const {darkTheme, user, setFlip} = useContext(AppContext) || {};
    const txtColor = darkTheme? "white" : "black";
    // this one is for delete confirmation
    const { isOpen: isOpen_0, onOpen: onOpen_0, onClose: onClose_0 } = useDisclosure()
    // this one is for opening the full view
    const { isOpen: isOpen_1, onOpen: onOpen_1, onClose: onClose_1 } = useDisclosure()

    const handleDelete = async () => {
        console.log("client side delete call")
        try {
            const res = await axios.get(`/api/delete?id=${id}`)
            console.log(res.data)
            setFlip(true)
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

    const handleOpen = () => {
        console.log("client side open call")
        onOpen_1()
    }


    const Overview = () => {
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
                    <Confirmation onOpen={onOpen_0} onClose={onClose_0} isOpen={isOpen_0} handleDelete={handleDelete}></Confirmation>
                    <Card 
                        onClick={handleOpen}
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

                                <Box>
                                    <Flex marginTop="10px">
                                        <Box mr="auto">
                                            <Text h="15px" fontSize="20px" color={txtColor}>Posted by: {author}</Text>
                                        </Box>

                                        {
                                            user === author?
                                            <Box>
                                                <Button 
                                                    onClick={onOpen_0}
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
                                    <Flex paddingTop="10px">
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
                                </Box>
                            </Stack>
                        </CardBody>
                        <Divider />
                    </Card>
                </Box>
            </Box>
        )
    }

    const FullView = () => {
        return (
            <>
            <Modal onClose={onClose_1} size="xl" isOpen={isOpen_1} >
                <ModalOverlay
                bg='none'
                backdropFilter='auto'
                backdropBlur='4px'
                />
                <ModalContent minW="1000px" minH="85vh" bg="#2C363F" textColor="white"> 
                    <Box h="30px"/>
                    <ModalHeader margin="auto" paddingX="60px" fontSize="40px" alignSelf="center">
                        <Text textAlign="center">
                            {title}
                        </Text>
                    </ModalHeader>
                    <ModalCloseButton />

                        <ModalBody pb={6} fontSize="20px">
                            <Box margin="auto" maxW="1000px" paddingX="30px">
                                <Image margin="auto" src={image}></Image>
                            </Box>
                            <Box margin="auto" maxW="1000px" padding="30px">
                                Description: {body}
                            </Box>
                            <Box margin="auto" maxW="1000px" padding="30px">
                                <Link href={link} isExternal>
                                    {link}
                                    {
                                        link?
                                        <ExternalLinkIcon ml="5px" fontSize="30px" />
                                        :
                                        <></>
                                    }
                                </Link>
                            </Box>
                        </ModalBody>
                        <Box maxW="1000px" padding="60px">
                            <Flex marginTop="10px" >
                                <Box mr="auto">
                                    <Text h="20px" fontSize="25px" color={txtColor}>Posted by: {author}</Text>
                                </Box>

                                {
                                    user === author?
                                    <Box>
                                        <Button 
                                            fontSize="20px"
                                            onClick={onOpen_0}
                                            w="85px" h="35px" bg="#F08080">Delete</Button>
                                    </Box>
                                    :
                                    <Box>
                                        <Button 
                                            fontSize="20px"
                                            onClick={handleFollow}
                                            w="85px" h="35px" bg="#EAC435">Follow</Button>
                                    </Box>
                                }

                            </Flex>
                            <Flex paddingTop="10px">
                                <Box mr="auto">
                                    <Text h="18px" fontSize="20px" color={txtColor}> {created_at}</Text>
                                </Box>

                                {
                                    user === author?
                                    <Box>
                                        <Text fontSize="20px" color={txtColor}>Likes: {likes}</Text>
                                    </Box>
                                    :
                                    <Box>
                                        <Button 
                                            onClick={handleLike}
                                            fontSize="20px"
                                            w="85px" h="35px" bg="#D3FFE9">Like: {likes}</Button>
                                    </Box>
                                }
                            </Flex>
                        </Box>
                </ModalContent>
            </Modal>
            </>
        )
    }

    return (
        <>
            <FullView></FullView>
            <Overview></Overview>
        </>
    )
}