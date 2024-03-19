import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";

export function Confirmation({onOpen, onClose, isOpen, handleDelete} : any) {

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Action</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            You sure you want to delete this post?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="orange" onClick={() => {
                handleDelete();
                onClose();
            }
            }>
                Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}