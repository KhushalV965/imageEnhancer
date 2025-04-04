import { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'

function Home() {
    const [uploadedImage,setUploadedImage] = useState(null);
    const [enhancedImage,setEnhancedImage] = useState(null);
    const [loading,setLoading] = useState(false);
    return (
        <>
            <ImageUpload />
            <ImagePreview />
        </>
    )
}

export default Home 