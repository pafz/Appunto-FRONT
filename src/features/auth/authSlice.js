import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const user = JSON.parse(localStorage.getItem('user')) || null;
const token = JSON.parse(localStorage.getItem('token')) || null;

const initialState = {
  user: user,
  token: token,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        //action.payload = res.data (authService)
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logout.fulfilled, state => {
        state.user = null;
        state.token = null;
      });
  },
});

export const register = createAsyncThunk('auth/register', async user => {
  try {
    return await authService.register(user);
  } catch (error) {
    console.error(error);
  }
});

export const login = createAsyncThunk('auth/register', async user => {
  try {
    return await authService.login(user);
  } catch (error) {
    console.error(error);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    return await authService.logout();
  } catch (error) {
    console.error(error);
  }
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;
