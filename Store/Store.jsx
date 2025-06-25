import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialState = {
    text: "Task39",
    text2: "Task40"
};

const textSlice = createSlice({
    name: 'text',
    initialState,
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
        setText2: (state, action) => {
            state.text2 = action.payload;
        }
        }
    });

export const { setText,setText2 } = textSlice.actions;
export const Store = configureStore({
    reducer: {
        text: textSlice.reducer
    }
});