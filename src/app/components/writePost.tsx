import { Box, Button, Text, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Textarea, Input, Flex } from "@chakra-ui/react";
import { ImgaeUploader } from "./imageUploader";
import { useState } from "react";

export default function WritePost({isOpen, onClose, overlay} : any){

    // message alert 
    const [error, setError] = useState<string | null>(null);
    // states
    const [image, setImage] = useState<string | ArrayBuffer | null>(null);
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [link, setLink] = useState('')

    const handleTitleChange = (e: any) => { let inputValue = e.target.value; setTitle(inputValue)}
    const handleSummaryChange = (e: any) => { let inputValue = e.target.value; setSummary(inputValue)}
    const handleLinkChange = (e: any) => { let inputValue = e.target.value; setLink(inputValue)}

    const onSubmit = async () => {
        // submit post to backend with data
        if (!image) {setError('Please upload an image'); return;}
        if (title.length < 1 || title.length > 30) {setError('Title should be between 1 and 30 characters'); return;}
        if (summary.length < 1 || summary.length > 2000) {setError('Summary should be between 1 and 2000 characters'); return;}
        if (link.length > 200) {setError('Link should be less than 200 characters'); return;}

        // await send request to backend
        console.log('Image: ', image);
        console.log('Title: ', title);
        console.log('Summary: ', summary);
        console.log('Link: ', link);

        setError(null);
        setImage(null);
        setTitle('');
        setSummary('');
        setLink('');

        onClose();
    }

    return (
            <>
            <Modal  closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalOverlay />
                    <ModalContent minW="1200px" minH="85vh" bg="#AFC1D6">
                        <ModalHeader fontSize="40px" alignSelf="center">Create your Post</ModalHeader>
                        <ModalCloseButton />

                        <Box h="30px"/>
                        <ImgaeUploader setError={setError} image={image} setImage={setImage}/>

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
                                    placeholder="Write your title here">
                                </Input>

                                <Flex>
                                    <Text marginTop="10px" fontSize="30px">
                                        Summary: 
                                    </Text>
                                    <Text position="absolute" left="90%" marginTop="20px" fontSize="20px">
                                        {summary.length}/2000
                                    </Text>
                                </Flex>
                                <Textarea
                                    value={summary}
                                    onChange={handleSummaryChange}
                                    marginTop="10px"
                                    outlineColor= "white"
                                    minH="300px"
                                    fontSize="20px"
                                    placeholder='Here is a sample placeholder'
                                    size='sm'
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

                        {error? <Box h="50px" color="red" fontSize="20px" textAlign="center">{error}</Box> : null}

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