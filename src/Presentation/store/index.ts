import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth"
import transactionReducer from "./transaction"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    transaction: transactionReducer
  },
});

// export type of store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
