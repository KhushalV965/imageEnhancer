import axios from "axios";

const API_KEY = import.meta.env.VITE_PICKWISH_API_KEY;
const BASE_URL = 'https://techhk.aoscdn.com/';

export const EnhanceImageApi = async (file) => {

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
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'X-API-KEY': API_KEY
    }
  });
  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image! Task ID not found")
  }

  console.log(data);

  return data.data.task_id;
}

const fetchEnhanceImage = async (taskId) => {
  const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
    headers: {
      'X-API-KEY': API_KEY,
    }
  });

  const imageUrl = data?.data?.image || data?.data?.output_url;

  if (!imageUrl) {
    throw new Error("Enhanced image not found in response!");
  }

  return imageUrl;
};

const PollForEnhancedImage= async (taskId)=>{

}