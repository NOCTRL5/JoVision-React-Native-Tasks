import { configureStore, createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
    name: 'text',
    initialState: { text: "Task39", },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        }
        }
    });

export const { setText } = textSlice.actions;

export const Store = configureStore({
    reducer: {
        text: textSlice.reducer
    }
});