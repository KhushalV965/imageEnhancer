import { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { EnhanceImageApi } from './utils/EnhanceImageApi';

function Home() {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setLoading] = useState(false);


    const uploadImageHandler = async (file) => {
        setUploadedImage(URL.createObjectURL(file));
        setLoading(true);

        try {
            const enhancedURL = await EnhanceImageApi(file)
        }
        catch (error) {
            console.log(error.message);
        }


    }
    return (
        <>
            <ImageUpload uploadImageHandler={uploadImageHandler} />
            <ImagePreview loading={loading} uploaded={uploadedImage} enhanced={enhancedImage} />
        </>
    )
}

export default Home 