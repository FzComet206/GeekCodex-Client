import { Box, Input , Image as CImage} from "@chakra-ui/react";
import React, { useState } from "react";

export const ImgaeUploader = ({setError, imagePreview, setImagePreview, setImage, setNsfwCheck} : any) => {


    const handleImageChange = async (e: any) => {
        const file = e.target.files? e.target.files[0] : null;
        if (file){

            setError("Checking image...")

            // check for file size
            const sizeLimit = 2 * 1024 * 1024;
            if (file.size > sizeLimit) {
                setError('Image size should not exceed 2MB. Your image size: ' + (file.size / 1024 / 1024).toFixed(2) + 'MB');
                setImagePreview(null);
                setImage(null);
                return;
            }

            // check for file type
            if (file.type.match(/image.(jpeg|jpg|png)$/)) {


                import ('nsfwjs').then(async (nsfwjs) => {
                    const loadedModel = await nsfwjs.load();
                    const img = new Image();
                    img.src = URL.createObjectURL(file);
                    img.onload = async () => {
                        const predictions = await loadedModel.classify(img);
                        console.log(predictions)
                        URL.revokeObjectURL(img.src);
                        if (
                            predictions[0].className === 'Hentai' && predictions[0].probability > 0.85 ||
                            predictions[0].className === 'Porn' && predictions[0].probability > 0.85
                            ) {
                            setError('NSFW content detected. Please upload a different image.');
                            setNsfwCheck(false)
                            return;
                        } else {
                            setNsfwCheck(true);
                            setError(null);
                        }
                    }
                    img.onerror = () => {
                        console.log('error loading image');
                        URL.revokeObjectURL(img.src);
                    }
                })

                // set files
                console.log('file', file.name);

                setImage(file);

                // preview image
                const reader = new FileReader();
                reader.onload = () => {
                    setImagePreview(reader.result);

                }
                reader.readAsDataURL(file);
                setError(null);
            } else {
                setImagePreview(null);
                setImage(null);
                setError('Please select an valid image file (png, jpg, jpeg)');
            }
        }
         
    }

    return (
        <Box margin="auto">
            <Input outlineColor="white" h="50px" paddingTop="10px" paddingBottom="10px" type="file" accept="image/png, image/jpeg, image/jpg" onChange={handleImageChange} />
            {imagePreview && <CImage marginTop="10px" maxW="1100px" maxH="1100px" src={imagePreview.toString()} alt="preview" />}
        </Box>
    )
}