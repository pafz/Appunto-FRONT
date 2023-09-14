import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";

import doubts from "../features/doubts/doubtsSlice";

export const store = configureStore({
    reducer: {
        auth,

        doubts,
    },
});
