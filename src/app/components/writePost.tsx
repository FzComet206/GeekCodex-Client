import { Box, Button, Text, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Textarea, Input, Flex } from "@chakra-ui/react";
import { ImgaeUploader } from "./imageUploader";
import { useContext, useState } from "react";
import { AppContext } from "../../../context/appContext";
import { post } from "@/lib/api/post";
import axios, { AxiosResponse } from "axios";

export default function WritePost({isOpen, onClose, overlay} : any){

    const { darkTheme } = useContext(AppContext) || {};

    // message alert 
    const [error, setError] = useState<string | null>(null);
    // image preview state 
    const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);

    // handle input change
    const handleTitleChange = (e: any) => { let inputValue = e.target.value; setTitle(inputValue)}
    const handleSummaryChange = (e: any) => { let inputValue = e.target.value; setSummary(inputValue)}
    const handleLinkChange = (e: any) => { let inputValue = e.target.value; setLink(inputValue)}

    // four state date for storage
    const [image, setImage] = useState<string | ArrayBuffer | null>(null);
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [link, setLink] = useState('')

    const onSubmit = async () => {
        // submit post to backend with data
        if (!image) {setError('Please upload an image'); return;}
        if (title.length < 1 || title.length > 30) {setError('Title should be between 1 and 30 characters'); return;}
        if (summary.length < 1 || summary.length > 5000) {setError('Summary should be between 1 and 5000 characters'); return;}
        if (link.length > 200) {setError('Link should be less than 200 characters'); return;}

        // await send request to backend
        const formData = new FormData();
        formData.append('image', image as string | Blob); 
        formData.append('title', title);
        formData.append('summary', summary);
        formData.append('link', link);

        const res: AxiosResponse = await axios.post('/api/post', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        setError(null);
        setImage(null);
        setImagePreview(null);
        setTitle('');
        setSummary('');
        setLink('');
        onClose();
    }

    return (
            <>
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalOverlay />
                    <ModalContent minW="1200px" minH="85vh" bg={darkTheme? "#171A21": "#344055"} textColor={darkTheme? "white" : "white"}> 
                        <ModalHeader fontSize="40px" alignSelf="center">Create your Post</ModalHeader>
                        <ModalCloseButton size="lg"/>

                        <Box h="30px"/>
                        <ImgaeUploader setImage={setImage} setError={setError} imagePreview={imagePreview} setImagePreview={setImagePreview}/>

                        <ModalBody pb={6}>
                            <Box margin="auto" maxW="1100px">
                                <Flex>
                                    <Text marginTop="10px" fontSize="30px">
                                        Title: 
                                    </Text>
                                    <Text position="absolute" left="92%" marginTop="20px" fontSize="20px">
                                        {title.length}/30
                                    </Text>
                                </Flex>
                                <Input 
                                    value={title}
                                    onChange={handleTitleChange}
                                    marginTop="10px" 
                                    outlineColor="white" 
                                    fontSize="20px" 
                                    placeholder="Write your title here"
                                    >
                                </Input>

                                <Flex>
                                    <Text marginTop="10px" fontSize="30px">
                                        Summary: 
                                    </Text>
                                    <Text position="absolute" left="90%" marginTop="20px" fontSize="20px">
                                        {summary.length}/5000
                                    </Text>
                                </Flex>
                                <Textarea
                                    value={summary}
                                    onChange={handleSummaryChange}
                                    marginTop="10px"
                                    outlineColor= "white"
                                    minH="500px"
                                    fontSize="20px"
                                    placeholder='Here is a sample placeholder'
                                />
                                <Flex>
                                    <Text marginTop="10px" fontSize="30px">
                                        Link:
                                    </Text>
                                    <Text position="absolute" left="91%" marginTop="20px" fontSize="20px">
                                        {link.length}/200
                                    </Text>

                                </Flex>
                                <Input 
                                    value={link}
                                    onChange={handleLinkChange}
                                    outlineColor="white" 
                                    fontSize="20px" 
                                    placeholder="Paste your link here">
                                </Input>

                                <Text marginTop="10px" fontSize="15px">
                                    For more than one link, please separate them with a comma
                                </Text>
                            </Box>
                        </ModalBody>

                        {error? <Box h="50px" color="orange" fontSize="20px" textAlign="center">{error}</Box> : null}

                        <ModalFooter margin="auto">
                            <Button h="50px" w="100px" fontSize="25px" colorScheme="pink" onClick={onSubmit}>
                                Submit
                            </Button>
                        </ModalFooter>
                        <Box h="20px">
                        </Box>
                    </ModalContent>
            </Modal>
            </>
    )
}