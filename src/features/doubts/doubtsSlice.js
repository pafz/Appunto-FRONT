import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import doubtService from "./doubtService";

const initialState = {
    doubts: [],
    isLoading: false,
    doubt: {},
};

export const createDoubt = createAsyncThunk("doubts/createDoubt", async (doubtData) => {
    try {
        console.log(createDoubt);
        return await doubtService.createDoubt(doubtData);
    } catch (error) {
        console.error(error);
    }
});

export const getAll = createAsyncThunk("doubts/getAll", async () => {
    try {
        return await doubtService.getAll();
    } catch (error) {
        console.error(error);
    }
});
export const getById = createAsyncThunk("doubts/getById", async (id) => {
    try {
        return await doubtService.getById(id);
    } catch (error) {
        console.error(error);
    }
});

export const getByTopic = createAsyncThunk("doubts/getByTopic", async (topic) => {
    try {
        return await doubtService.getByTopic(topic);
    } catch (error) {
        console.error(error);
    }
});

export const deleteDoubt = createAsyncThunk("doubts/deleteDoubt", async (id) => {
    try {
        return await doubtService.deleteDoubt(id);
    } catch (error) {
        console.error(error);
    }
});

export const doubtsSlice = createSlice({
    name: "doubts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(createDoubt.fulfilled, (state, action) => {
                state.doubts = action.payload.doubts;
                state.isLoading = false;
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.doubts = action.payload.doubts;
                state.isLoading = false;
            })
            .addCase(getAll.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.doubt = action.payload;
                state.isLoading = false;
            })
            .addCase(getById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getByTopic.fulfilled, (state, action) => {
                state.doubts = action.payload;
            })
            .addCase(deleteDoubt.fulfilled, (state, action) => {
                state.doubts = state.doubts.filter((doubt) => doubt.id != action.payload);
            });
    },
});

export default doubtsSlice.reducer;
