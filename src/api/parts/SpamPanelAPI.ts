import { getPayload } from '../support/resolvers';
import { authAxios } from '../support/axios';
import { SpamPanelInfo } from '../infos/SpamPanelInfo';
import { PanelEntity } from '~/types/entities/PanelEntity';

export const getAll = async (): Promise<SpamPanelInfo[]> => {
    const response = await authAxios().get('/spam-panels');

    return getPayload(response);
};

export const createList = async (panelList: PanelEntity[]): Promise<SpamPanelInfo[]> => {
    if (panelList.length === 0) {
        return [];
    }

    console.log('create list');

    const validPanelList = panelList.map((panel) => {
        return {
            senderId: panel.senderId,
            recipient: panel.recipient,
            texts: panel.texts,
            timers: panel.timers,
        };
    });

    const response = await authAxios().post('/spam-panels/list', {
        items: validPanelList,
    });

    return getPayload(response);
};

export const updateList = async (panelList: PanelEntity[]): Promise<SpamPanelInfo[]> => {
    if (panelList.length === 0) {
        return [];
    }

    console.log('update list');

    const validPanelList = panelList.map((panel) => {
        return {
            id: panel.id,
            item: {
                senderId: panel.senderId,
                recipient: panel.recipient,
                texts: panel.texts,
                timers: panel.timers,
            },
        };
    });

    const response = await authAxios().put('/spam-panels', {
        items: validPanelList,
    });

    return getPayload(response);
};

export const removeList = async (idList: number[]): Promise<number[]> => {
    if (idList.length === 0) {
        return [];
    }

    console.log('delete list');

    const response = await authAxios().delete('/spam-panels', { data: {
        ids: idList,
    } });

    return getPayload(response);
};
