import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, ScaleFade, Stack, Image, Text, Flex, Center, DarkMode, useDisclosure, useStatStyles, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Link, Skeleton} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/appContext";
import axios from "axios";
import { Confirmation } from "./deleteConfirm";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { LikeButton } from "./likeButton";
import { BlankPreview } from "./skeleton";
import { FollowButton } from "./followButton";
import { PostData } from "../api/feed/route";

export const Preview = ( {id, title, body, link, image, created_at, likes, author, authorid, isLiked, authorFollowed} : PostData) => {

    {/* src = {`https://picsum.photos/seed/${id}/1000/600`} */}
    
    const {darkTheme, user, setFlip, followUpdate, setFollowUpdate, currFollowId} = useContext(AppContext) || {};
    const txtColor = darkTheme? "white" : "black";
    // this one is for delete confirmation
    const { isOpen: isOpen_0, onOpen: onOpen_0, onClose: onClose_0 } = useDisclosure()
    // this one is for opening the full view
    const { isOpen: isOpen_1, onOpen: onOpen_1, onClose: onClose_1 } = useDisclosure()

    const [followed, setFollowed] = useState(authorFollowed)
    const [liked, setLiked] = useState(isLiked)
    const [likesCount, setLikesCount] = useState(likes)

    const handleDeleteRequest = async () => {
        console.log("client side delete call")
        try {
            const res = await axios.get(`/api/delete?id=${id}`)
            console.log(res.data)
            setFlip(true)
        } catch (error) {
            console.error(error)
        }
    }

    const handleDelete = (e: any) => {
        onOpen_0()
        e.stopPropagation();
    }

    const handleOpen = () => {
        console.log("client side open call")
        onOpen_1()
    }

    useEffect(() => {
        if (followUpdate){
            if (currFollowId === authorid){
                setFollowed(!followed)
            }
            setFollowUpdate(false)
        }
    })

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
                                                    onClick={handleDelete}
                                                    w="65px" h="25px" bg="#F08080">Delete</Button>
                                            </Box>
                                            :
                                            <FollowButton followed={followed} id={authorid} p={true}></FollowButton>
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
                                            <LikeButton likesCount={likesCount} setLikesCount={setLikesCount} liked={liked} setLiked={setLiked} id={id} p={true}/>
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
            <Modal onClose={onClose_1} size="xl" isOpen={isOpen_1}>
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
                                <Image 
                                    margin="auto" 
                                    src = {image}>
                                </Image>
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
                                    <Text h="20px" fontSize="25px">Posted by: {author}</Text>
                                </Box>

                                {
                                    user === author?
                                    <Box>
                                        <Button 
                                            fontSize="20px"
                                            onClick={handleDelete}
                                            w="85px" h="35px" bg="#F08080">Delete</Button>
                                    </Box>
                                    :
                                    <FollowButton followed={followed} id={authorid} p={false}></FollowButton>
                                }

                            </Flex>
                            <Flex paddingTop="10px">
                                <Box mr="auto">
                                    <Text h="18px" fontSize="20px"> {created_at}</Text>
                                </Box>

                                {
                                    user === author?
                                    <Box>
                                        <Text fontSize="20px" color={txtColor}>Likes: {likes}</Text>
                                    </Box>
                                    :
                                    <LikeButton likesCount={likesCount} setLikesCount={setLikesCount} liked={liked} setLiked={setLiked} id={id} p={false}/>
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
            {
                isOpen_1?
                <>
                <FullView></FullView>
                <BlankPreview></BlankPreview>
                </>
                :
                <Overview></Overview>
            }

            <Confirmation onOpen={onOpen_0} onClose={onClose_0} isOpen={isOpen_0} handleDelete={handleDeleteRequest}></Confirmation>
        </>
    )
}