import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type SelectChord = {
  chord: string;
};
const initialState: SelectChord = {
  chord: "",
};

export const selectChordSlice = createSlice({
  name: "selectChord",
  initialState,
  reducers: {
    setChord: (state, action: PayloadAction<string>) => {
      state.chord = action.payload;
    },
  },
});

export const { setChord } = selectChordSlice.actions;
export const selectChord = (state: RootState) => state.selectChord.chord;
export const selectChordReducer = selectChordSlice.reducer;
