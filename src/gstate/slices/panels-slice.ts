import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PanelEntity } from '~/types/api-entity/PanelEntity';

type PanelsState = {
    panels: PanelEntity[],
};

const initialState: PanelsState = {
    panels: [
        {
            id: 1,
            sender: {
                id: 1,
                vid: 124123,
                name: 'Sender 1',
            },
            recipient: 'Recipient 1',
            texts: [
                'text 1',
                'text 2',
            ],
            timers: [
                {
                    seconds: 15,
                    repeat: 3,
                },
            ],
        },
    ],
};

const panelsSlice = createSlice({
    name: 'panel',
    initialState,
    reducers: {
        add(state, { payload }: PayloadAction<PanelEntity>) {
            state.panels.push(payload);
        },
        remove(state, { payload }: PayloadAction<number>) {
            const panel = state.panels.findIndex((panel) => panel.id === payload);
            state.panels.splice(panel, 1);
        },
    },
});

export const panelsReducer = panelsSlice.reducer;
export const panelsActions = panelsSlice.actions;
