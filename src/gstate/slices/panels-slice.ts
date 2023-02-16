import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PanelApi } from '~/types/api-entity/PanelApi';

type PanelsState = {
    panels: PanelApi[],
};

const initialState: PanelsState = {
    panels: [
        {
            id: 1,
            sender: {
                id: 1,
                vk: {
                    id: 124123,
                    slug: 'abc',
                },
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
        add(state, { payload }: PayloadAction<PanelApi>) {
            state.panels.push(payload);
        },

        remove(state, { payload }: PayloadAction<number>) {
            const index = state.panels.findIndex((panel) => panel.id === payload);
            state.panels.splice(index, 1);
        },

        addEmptyText(state, { payload }: PayloadAction<number>) {
            state.panels
                .find((panel) => panel.id === payload)!
                .texts.push('');
        },

        setText(state, { payload }: PayloadAction<{
            id: number,
            textIndex: number,
            value: string,
        }>) {
            state.panels
                .find((panel) => panel.id === payload.id)!
                .texts[payload.textIndex] = payload.value;
        },

        removeText(state, { payload }: PayloadAction<{
            id: number,
            textIndex: number,
        }>) {
            state.panels
                .find((panel) => panel.id === payload.id)!
                .texts.splice(payload.textIndex, 1);
        },

        addEmptyTimer(state, { payload }: PayloadAction<number>) {
            state.panels
                .find((panel) => panel.id === payload)!
                .timers.push({
                    seconds: 0,
                    repeat: 0,
                });
        },

        setTimerSeconds(state, { payload }: PayloadAction<{
            id: number,
            timerIndex: number,
            seconds: number|null,
        }>) {
            state.panels
                .find((panel) => panel.id === payload.id)!
                .timers[payload.timerIndex]
                .seconds = payload.seconds;
        },

        setTimerRepeat(state, { payload }: PayloadAction<{
            id: number,
            timerIndex: number,
            repeat: number|null,
        }>) {
            state.panels
                .find((panel) => panel.id === payload.id)!
                .timers[payload.timerIndex]
                .repeat = payload.repeat;
        },

        removeTimer(state, { payload }: PayloadAction<{
            id: number,
            timerIndex: number,
        }>) {
            state.panels
                .find((panel) => panel.id === payload.id)!
                .timers.splice(payload.timerIndex, 1);
        },
    },
});

export const panelsReducer = panelsSlice.reducer;
export const panelsActions = panelsSlice.actions;
