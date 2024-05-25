import { createSlice } from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: "",
  reducers: {
    setSearchTerm: (state, action) => {
      console.log("State", state);
      console.log("Action", action);
      return action.payload;
    },
  },
});

export const { setSearchTerm } = searchBarSlice.actions;

export default searchBarSlice.reducer;
