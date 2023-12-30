import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth"
import transactionReducer from "./transaction"
import merchantReducer from "./merchant"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    transaction: transactionReducer,
    merchant: merchantReducer
  },
});

// export type of store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
