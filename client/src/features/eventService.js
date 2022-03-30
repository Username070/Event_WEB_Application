import axios from "axios";

const API_URL = "http://localhost:9000/api/events/";

const globalEvents = async () => {
    const response = await axios.get(API_URL + "globalEvents")
    
    return response.data
}

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
    globalEvents,
    createEvent,
}

export default eventService