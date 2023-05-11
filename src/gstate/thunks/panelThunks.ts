import { createAsyncThunk } from '@reduxjs/toolkit';
import { SpamPanelAPI } from '~/api';
import { PanelEntity } from '~/types/entities/PanelEntity';
import { getPanelEntityList } from '../dataMappers/panelMappers';
import { store } from '../store';
import { ApiError } from '~/api/errors';

const fetchAll = createAsyncThunk<PanelEntity[], undefined, { rejectValue: string }>(
    'panels/async/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const vkAccountList = await SpamPanelAPI.getAll();

            return getPanelEntityList(vkAccountList);
        }
        catch (err) {
            return rejectWithValue((err as ApiError).message);
        }
    },
);

const sendOnce = createAsyncThunk<true, number, { rejectValue: string }>(
    'panels/async/sendOnce',
    async (id, { rejectWithValue }) => {
        try {
            await SpamPanelAPI.sendOnce(id);

            return true;
        }
        catch (err) {
            return rejectWithValue((err as ApiError).message);
        }
    },
);

const synchronize = createAsyncThunk<PanelEntity[], undefined, { rejectValue: string }>(
    'panels/async/synchronize',
    async (_, { rejectWithValue }) => {
        const { list, serverList } = store.getState().panels;

        const deleted: number[] = [];
        const created: PanelEntity[] = [];
        const changed: PanelEntity[] = [];

        serverList.forEach((serverPanel) => {
            const localPanel = list.find((localPanel) => localPanel.id === serverPanel.id);

            if (localPanel === undefined) {
                deleted.push(serverPanel.id);
            }
        });

        list.forEach((localPanel) => {
            const serverPanel = serverList.find((serverPanel) => serverPanel.id === localPanel.id);

            if (serverPanel === undefined) {
                created.push(localPanel);

                return;
            }

            if (localPanel.senderId !== serverPanel.senderId) {
                changed.push(localPanel);

                return;
            }

            if (localPanel.recipient !== serverPanel.recipient) {
                changed.push(localPanel);

                return;
            }

            if (localPanel.texts.length !== serverPanel.texts.length) {
                changed.push(localPanel);

                return;
            }

            for (let i = 0; i < localPanel.texts.length; i++) {
                if (localPanel.texts[i] !== serverPanel.texts[i]) {
                    changed.push(localPanel);

                    return;
                }
            }

            if (localPanel.timers.length !== serverPanel.timers.length) {
                changed.push(localPanel);

                return;
            }

            for (let i = 0; i < localPanel.timers.length; i++) {
                if (localPanel.timers[i].repeat !== serverPanel.timers[i].repeat) {
                    changed.push(localPanel);

                    return;
                }

                if (localPanel.timers[i].seconds !== serverPanel.timers[i].seconds) {
                    changed.push(localPanel);

                    return;
                }
            }
        });

        try {
            await Promise.all([
                SpamPanelAPI.createList(created),
                SpamPanelAPI.updateList(changed),
                SpamPanelAPI.removeList(deleted),
            ]);

            return list;
        }
        catch (err) {
            return rejectWithValue((err as ApiError).message);
        }
    },
);

export const panelThunks = {
    fetchAll,
    sendOnce,
    synchronize,
};
