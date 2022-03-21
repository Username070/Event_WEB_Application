import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import eventService from "./eventService";

const initialState = {
    events: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createEvent = createAsyncThunk("events/create", async (eventData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token

        return await eventService.createEvent(eventData, token)
    } catch (error) {
        const message =
        (error.response &&
            error.response.data &&
            error.response.data.message)
            || error.message || error.toString()
            return thunkAPI.rejectWithValue(message);
    }
})

export const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createEvent.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createEvent.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.events.push(action.payload)
            })
            .addCase(createEvent.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = eventSlice.actions;
export default eventSlice.reducer;