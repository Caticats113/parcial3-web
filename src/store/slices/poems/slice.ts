import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Poem } from "../../../types/poems";

interface PoemsState {
  data: Array<Poem>;
}

const initialState: PoemsState = {
  data: [],
};

export const PoemsSlice = createSlice({
  name: "poems",
  initialState,
  reducers: {
    addPoem: (state, action: PayloadAction<Poem | Poem[]>) => {
      const payload = action.payload;

      if (Array.isArray(payload)) state.data.push(...payload);
      else state.data.push(payload);
    },
  },
});

export const { addPoem } = PoemsSlice.actions;

export default PoemsSlice.reducer;
