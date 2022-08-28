import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./modules/home/slices/formSlice";

const store = configureStore({
  reducer: {
    form: formSlice,
  },
});

export default store;
