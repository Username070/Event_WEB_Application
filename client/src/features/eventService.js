import axios from "axios";

const API_URL = "http://localhost:9000/api/events/";

const createEvent = async (eventData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL + "create", eventData, config)

    return response.data
}

const eventService = {
    createEvent,
}

export default eventService