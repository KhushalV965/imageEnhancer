import { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'

function Home() {
    const [uploadedImage,setUploadedImage] = useState(null);
    const [enhancedImage,setEnhancedImage] = useState(null);
    return (
        <>
            <ImageUpload />
            <ImagePreview />
        </>
    )
}

export default Home 