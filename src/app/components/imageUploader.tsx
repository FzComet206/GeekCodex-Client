import { Box, Input, Image } from "@chakra-ui/react";
import { useState } from "react";


export const ImgaeUploader = ({setError, image, setImage} : any) => {


    const handleImageChange = (e: any) => {
        const file = e.target.files? e.target.files[0] : null;
        if (file){

            const sizeLimit = 2 * 1024 * 1024;
            if (file.size > sizeLimit) {
                setError('Image size should not exceed 2MB. Your image size: ' + (file.size / 1024 / 1024).toFixed(2) + 'MB');
                setImage(null);
                return;
            }

            if (file.type.match(/image.(jpeg|jpg|png)$/)) {
                const reader = new FileReader();
                reader.onload = () => {
                    setImage(reader.result);
                }
                reader.readAsDataURL(file);
                setError(null);
            } else {
                setImage(null);
                setError('Please select an valid image file (png, jpg, jpeg)');
            }
        }
         
    }

    return (
        <Box margin="auto">
            <Input outlineColor="white" h="50px" paddingTop="10px" paddingBottom="10px" type="file" accept="image/png, image/jpeg, image/jpg" onChange={handleImageChange} />
            {image && <Image marginTop="10px" maxW="1100px"src={image.toString()} alt="preview" />}
        </Box>
    )
}