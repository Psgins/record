import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./authentication/reducer";

const store = configureStore({
    reducer: {
        authentication: authenticationReducer,
    },
});
export default store;
