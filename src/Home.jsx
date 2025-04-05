import { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'

function Home() {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setLoading] = useState(false);


    const uploadImageHandler = (file) => {
        setUploadedImage(URL.createObjectURL(file));
        setLoading(true);
        // call the api to enhance the image
     }
    return (
        <>
            <ImageUpload uploadImageHandler={uploadImageHandler} />
            <ImagePreview loading={loading} uploaded={uploadedImage} enhanced={enhancedImage} />
        </>
    )
}

export default Home 