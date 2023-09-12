import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import doubtService from './doubtService';

const initialState = {
  doubts: [],
  isLoading: false,
  doubt: {},
};

export const createDoubt = createAsyncThunk(
  'doubts/createDoubt',
  async doubtData => {
    try {
<<<<<<< HEAD
      console.log(createDoubt);
      return await doubtService.createDoubt(doubtData);
=======
        console.log(createDoubt);
        return await doubtService.createDoubt(doubtData);
>>>>>>> 301d589da1806c2d00e0ae1c5480b4e38947e376
    } catch (error) {
      console.error(error);
    }
  }
);

export const getAll = createAsyncThunk('doubts/getAll', async () => {
  try {
    return await doubtService.getAll();
  } catch (error) {
    console.error(error);
  }
});
<<<<<<< HEAD
export const getById = createAsyncThunk('doubts/getById', async _id => {
  try {
    return await doubtService.getById(_id);
  } catch (error) {
    console.error(error);
  }
=======
export const getById = createAsyncThunk("doubts/getById", async (_id) => {
    try {
        return await doubtService.getById(_id);
    } catch (error) {
        console.error(error);
    }
>>>>>>> 301d589da1806c2d00e0ae1c5480b4e38947e376
});

export const getByTopic = createAsyncThunk('doubts/getByTopic', async topic => {
  try {
    return await doubtService.getByTopic(topic);
  } catch (error) {
    console.error(error);
  }
});

export const deleteDoubt = createAsyncThunk('doubts/deleteDoubt', async id => {
  try {
    return await doubtService.deleteDoubt(id);
  } catch (error) {
    console.error(error);
  }
});

export const doubtsSlice = createSlice({
<<<<<<< HEAD
  name: 'doubts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(createDoubt.fulfilled, (state, action) => {
        state.doubts = action.payload.doubts;
        state.isLoading = false;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.doubts = action.payload.doubts;
        state.isLoading = false;
      })
      .addCase(getAll.pending, state => {
        state.isLoading = true;
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.doubt = action.payload.doubt;
        state.isLoading = false;
      })
      .addCase(getById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getByTopic.fulfilled, (state, action) => {
        state.doubts = action.payload;
      })
      .addCase(deleteDoubt.fulfilled, (state, action) => {
        state.doubts = state.doubts.filter(doubt => doubt.id != action.payload);
      });
  },
=======
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
            });
    },
>>>>>>> 301d589da1806c2d00e0ae1c5480b4e38947e376
});

export default doubtsSlice.reducer;
