import axios from "axios";

const API_URL = "http://localhost:9000/api/events/";

const createEvent = async (eventData, token) => {
    
    // Could've been a single request but axios have problems with sending images
    // Gotta send the image to cloudinary first, get the image url and then send the url with
    // Other data to api endpoint trough axios
    eventData.image.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET)
    eventData.image.append("cloud_name", process.env.REACT_APP_CLOUD_NAME)

    const dataRes = await axios({
        method: "post",
        url: process.env.REACT_APP_CLOUDINARY_URL,
        data: eventData.image
    });
    
    delete eventData.image

    const response = await axios({
        method: "post",
        url: API_URL + "create",
        data: {eventData, imageUrl: dataRes.data.url},
        headers: {
            Authorization: `Bearer ${token}`
        }})

    return response.data
}

const eventService = {
    createEvent,
}

export default eventService