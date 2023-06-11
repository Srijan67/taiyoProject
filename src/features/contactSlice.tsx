import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../utils/types";
const initialState: RootState[] = [];
const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContactDetail: (state, action) => {
      let data = state;
      data.push(action.payload);
      return (state = data);
    },
    delContactDetail: (state, action) => {
      let data: any[] = [];
      state.map((item, index) => {
        if (index !== action.payload) {
          return data.push(item);
        }
      });
      return (state = data);
    },
    editContact: (state, action) => {
      let data: any[] = [];
      state.map((item, index) => {
        if (JSON.stringify(index) === action.payload.index) {
          return data.push(action.payload);
        } else {
          return data.push(item);
        }
      });

      return (state = data);
    },
  },
});
export const { setContactDetail, delContactDetail, editContact } =
  contactSlice.actions;

export default contactSlice.reducer;
