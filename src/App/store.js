import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "../slice/searchBarSlice";

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
  },
});
