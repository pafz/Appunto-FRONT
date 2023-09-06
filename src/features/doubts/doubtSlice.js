import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import doubtService from "./doubtService";
import { selectAuthUser } from "../auth/authSlice";

const initialState = {
    error: null,
};

export const doubtSlice = createSlice({
    name: "doubt",
    initialState,
    reducers: {
        createDoubtSuccess: (state, action) => {
            state.error = null;
        },
        createDoubtFailure: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createDoubt.fulfilled, (state, action) => {
            state.error = null;
        });
        builder.addCase(createDoubt.rejected, (state, action) => {
            state.error = action.error.message;
        });
    },
});

export const { createDoubtSuccess, createDoubtFailure } = doubtSlice.actions;

export const createDoubt = createAsyncThunk("doubt/createDoubt", async (doubtData, { rejectWithValue, getState }) => {
    try {
        const user = selectAuthUser(getState());
        if (!user) {
            throw new Error("Usuario no autenticado");
        }
        await doubtService.createDoubt(doubtData);
        return doubtData;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export default doubtSlice.reducer;
