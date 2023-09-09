import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import answerService from './answerService';

const initialState = {
  answers: [],
};

export const createAnswer = createAsyncThunk(
  'answers/createAnswer',
  async answerData => {
    try {
      return await answerService.createAnswer(answerData);
    } catch (error) {
      console.error(error);
    }
  }
);

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

export const deleteAnswer = createAsyncThunk(
  'answer/deleteAnswer',
  async answerId => {
    try {
      return await answerDelete.deleteAnswer(answerId);
    } catch (error) {
      console.error(error);
    }
  }
);

export const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {},
});

export default answerSlice.reducer;
