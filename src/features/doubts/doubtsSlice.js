import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import doubtService from "./doubtService";

const initialState = {
    doubts: [],
    isLoading: false,
    doubt: {},
};

export const createDoubt = createAsyncThunk("doubts/createDoubt", async (doubtData) => {
    try {
        return await doubtService.createDoubt(doubtData);
    } catch (error) {
        console.error(error);
    }
});

export const createAnswer = createAsyncThunk("answer/createAnswer", async (answerData) => {
    try {
        return await doubtService.createAnswer(answerData);
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
export const getById = createAsyncThunk("doubts/getById", async (_id) => {
    try {
        return await doubtService.getById(_id);
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

export const getDoubtByName = createAsyncThunk("doubts/getDoubtByName", async (doubtName) => {
    try {
        return await doubtService.getDoubtByName(doubtName);
    } catch (error) {
        console.error(error);
    }
});

export const getAnswerById = createAsyncThunk("answers/getAnswerById", async (_id) => {
    try {
        return await doubtService.getAnswerById(_id);
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
                state.doubts = [...state.doubts, action.payload.doubt];
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
                state.doubt = action.payload.doubt;
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
            })
            .addCase(getDoubtByName.fulfilled, (state, action) => {
                if (action.payload) {
                    state.doubts = action.payload.doubts;
                }
            });
    },
});

export default doubtsSlice.reducer;
