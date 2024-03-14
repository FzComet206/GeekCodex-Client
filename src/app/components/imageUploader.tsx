import { Box, Input, Image } from "@chakra-ui/react";

export const ImgaeUploader = ({setError, imagePreview, setImagePreview, setImage} : any) => {


    const handleImageChange = (e: any) => {
        const file = e.target.files? e.target.files[0] : null;
        if (file){

            const sizeLimit = 2 * 1024 * 1024;
            if (file.size > sizeLimit) {
                setError('Image size should not exceed 2MB. Your image size: ' + (file.size / 1024 / 1024).toFixed(2) + 'MB');
                setImagePreview(null);
                setImage(null);
                return;
            }

            if (file.type.match(/image.(jpeg|jpg|png)$/)) {
                // set files
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
            {imagePreview && <Image marginTop="10px" maxW="1100px" maxH="1100px" src={imagePreview.toString()} alt="preview" />}
        </Box>
    )
}