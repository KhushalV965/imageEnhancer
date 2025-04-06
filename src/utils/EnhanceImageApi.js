

export const EnhanceImageApi = async (file) => {

  const API_KEY = import.meta.env.PICKWISH_API_KEY;
  const BASE_URL = 'https://techhk.aoscdn.com/'

  try {
    const taskId = await uploadImage(file);
    console.log("Image Uploaded Successfully, Task ID: ", taskId);

    const enhancedImageData = await fetchEnhanceImage(taskId);
    console.log("Enhanced Image Data: ", enhancedImageData);
  } catch (error) {
    console.log("Error enhancing Image", error.message);

  }
}

const uploadImage = async (file) => {

  return taskId;
}

const fetchEnhanceImage = async (taskId) => {

}