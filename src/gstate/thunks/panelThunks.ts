import { createAsyncThunk } from '@reduxjs/toolkit';
import { SpamPanelAPI } from '~/api';
import { PanelEntity } from '~/types/entities/PanelEntity';
import { getPanelEntityList } from '../dataMappers/panelMappers';
import { store } from '../store';

const fetchAll = createAsyncThunk(
    'panels/async/fetchAll',
    async (): Promise<PanelEntity[]> => {
        try {
            const vkAccountList = await SpamPanelAPI.getAll();

            return getPanelEntityList(vkAccountList);
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    },
);

const synchronize = createAsyncThunk(
    'panels/async/synchronize',
    async (): Promise<PanelEntity[]> => {
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
            console.error(err);
            throw err;
        }
    },
);

export const panelThunks = {
    fetchAll,
    synchronize,
};
