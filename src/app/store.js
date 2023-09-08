import { configureStore } from '@reduxjs/toolkit';
import auth from '../features/auth/authSlice';
import answer from '../features/answers/answerSlice';

export const store = configureStore({
  reducer: {
    auth,
    answer,
  },
});
