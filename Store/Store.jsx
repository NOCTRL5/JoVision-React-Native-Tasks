import { configureStore, createSlice } from "@reduxjs/toolkit";

function reducer(state, action) {
    state.text = action.payload;
}

const textSlice = createSlice({
    name: 'text',
    initialState: { text: "Task39", },
    reducers: {
        setText: reducer,
    },
})

export const { setText } = textSlice.actions;

export const store = configureStore({
    reducer: {
        text: textSlice.reducer
    }
});