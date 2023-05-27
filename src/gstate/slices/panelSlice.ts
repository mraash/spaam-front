import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { PanelEntity } from '~/types/entities/PanelEntity';
import { panelThunks } from '../thunks/panelThunks';
import { PanelSpammer } from '~/packages/spam';

type PanelState = {
    serverList: PanelEntity[],
    list: PanelEntity[],
};

const panelSlice = createSlice<PanelState, SliceCaseReducers<PanelState>>({
    name: 'panels',
    initialState: {
        serverList: [],
        list: [],
    },
    reducers: {
        // Panel
        addEmpty(state, action: PayloadAction<undefined>) {
            const id = Date.now() * -1;

            state.list.push({
                id,
                spammer: new PanelSpammer(id),
                isActive: false,
                error: null,
                senderId: null,
                recipient: '',
                texts: [
                    '',
                ],
                timers: [
                    {
                        seconds: null,
                        repeat: null,
                    },
                ],
            });
        },

        remove(state, { payload: id }: PayloadAction<number>) {
            const index = state.list.findIndex((panel) => panel.id === id);
            state.list.splice(index, 1);
        },

        // Is active
        setIsActive(state, { payload }: PayloadAction<{
            id: number,
            isActive: boolean,
        }>) {
            state.list
                .find((panel) => panel.id === payload.id)!
                .isActive = payload.isActive;
        },

        // Error
        setError(state, { payload }: PayloadAction<{
            id: number,
            error: string|null,
        }>) {
            state.list
                .find((panel) => panel.id === payload.id)!
                .error = payload.error;
        },

        // Sender
        setSenderId(state, { payload }: PayloadAction<{
            id: number,
            senderId: number,
        }>) {
            state.list
                .find((panel) => panel.id === payload.id)!
                .senderId = payload.senderId;
        },

        // Recipient
        setRecipient(state, { payload }: PayloadAction<{
            id: number,
            value: string,
        }>) {
            state.list
                .find((panel) => panel.id === payload.id)!
                .recipient = payload.value;
        },

        // Text
        addEmptyText(state, { payload: id }: PayloadAction<number>) {
            state.list
                .find((panel) => panel.id === id)!
                .texts.push('');
        },

        setText(state, { payload }: PayloadAction<{
            id: number,
            textIndex: number,
            value: string,
        }>) {
            state.list
                .find((panel) => panel.id === payload.id)!
                .texts[payload.textIndex] = payload.value;
        },

        removeText(state, { payload }: PayloadAction<{
            id: number,
            textIndex: number,
        }>) {
            state.list
                .find((panel) => panel.id === payload.id)!
                .texts.splice(payload.textIndex, 1);
        },

        // Timer
        addEmptyTimer(state, { payload }: PayloadAction<number>) {
            state.list
                .find((panel) => panel.id === payload)!
                .timers.push({
                    seconds: null,
                    repeat: null,
                });
        },

        setTimerSeconds(state, { payload }: PayloadAction<{
            id: number,
            timerIndex: number,
            seconds: number|null,
        }>) {
            state.list
                .find((panel) => panel.id === payload.id)!
                .timers[payload.timerIndex]
                .seconds = payload.seconds;
        },

        setTimerRepeat(state, { payload }: PayloadAction<{
            id: number,
            timerIndex: number,
            repeat: number|null,
        }>) {
            state.list
                .find((panel) => panel.id === payload.id)!
                .timers[payload.timerIndex]
                .repeat = payload.repeat;
        },

        removeTimer(state, { payload }: PayloadAction<{
            id: number,
            timerIndex: number,
        }>) {
            state.list
                .find((panel) => panel.id === payload.id)!
                .timers.splice(payload.timerIndex, 1);
        },
    },
    extraReducers(builder) {
        builder.addCase(panelThunks.fetchAll.fulfilled, (state, { payload: panelList }) => {
            state.list = panelList;
            state.serverList = panelList;
        });

        builder.addCase(panelThunks.synchronize.fulfilled, (state, { payload: createdIds }) => {
            // todo: change created panels id normally.
            createdIds.reverse().forEach((id, index) => {
                const panel = state.list[state.list.length - 1 - index];

                panel.id = id;
                panel.spammer.setRealPanelId(id);
            });

            state.serverList = state.list.map((panel) => {
                return {
                    id: panel.id,
                    isActive: panel.isActive,
                    error: panel.error,
                    spammer: new PanelSpammer(panel.id),
                    senderId: panel.senderId,
                    recipient: panel.recipient,
                    texts: panel.texts,
                    timers: panel.timers,
                };
            });
        });
    },
});

export const panelReducer = panelSlice.reducer;
export const panelActions = panelSlice.actions;
