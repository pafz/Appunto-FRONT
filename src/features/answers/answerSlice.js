import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import answerService from './answerService';

const initialState = {
  doubts: [],
};

export const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {},
});

export const likeAnswer = createAsyncThunk(
  'answer/likeAnswer',
  async answerId => {
    try {
      return await answerService.likeAnswer(answerId);
    } catch (error) {
      console.error(error);
    }
  }
);

export default answerSlice.reducer;
