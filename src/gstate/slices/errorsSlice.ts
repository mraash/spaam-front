import { PayloadAction, SliceCaseReducers, createSlice } from '@reduxjs/toolkit';

type ErrorState = {
    messages: string[],
};

const errorSlice = createSlice<ErrorState, SliceCaseReducers<ErrorState>>({
    name: 'errors',
    initialState: {
        messages: [],
    },
    reducers: {
        push(state, { payload: message }: PayloadAction<string>) {
            state.messages.push(message);
        },
        removeFirst(state) {
            state.messages.shift();
        },
    },
});

export const errorActions = errorSlice.actions;
export const errorReducer = errorSlice.reducer;
