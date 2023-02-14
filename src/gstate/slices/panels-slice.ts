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
            const panelIndex = state.panels.findIndex((panel) => panel.id === payload);
            state.panels.splice(panelIndex, 1);
        },

        addEmptyText(state, { payload }: PayloadAction<number>) {
            state.panels
                .find((panel) => panel.id === payload)
                ?.texts.push('');
        },

        removeText(state, { payload }: PayloadAction<{
            id: number,
            textIndex: number,
        }>) {
            state.panels
                .find((panel) => panel.id === payload.id)
                ?.texts.splice(payload.textIndex, 1);
        },

        addEmptyTimer(state, { payload }: PayloadAction<number>) {
            state.panels
                .find((panel) => panel.id === payload)
                ?.timers.push({
                    seconds: 0,
                    repeat: 0,
                });
        },

        removeTimer(state, { payload }: PayloadAction<{
            id: number,
            timerIndex: number,
        }>) {
            state.panels
                .find((panel) => panel.id === payload.id)
                ?.timers.splice(payload.timerIndex, 1);
        },
    },
});

export const panelsReducer = panelsSlice.reducer;
export const panelsActions = panelsSlice.actions;
