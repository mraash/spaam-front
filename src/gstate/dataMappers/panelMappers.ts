import { SpamPanelInfo } from '~/api';
import { PanelEntity } from '~/types/entities/PanelEntity';

export const getPanelEntity = (apiInfo: SpamPanelInfo): PanelEntity => {
    return {
        id: apiInfo.id,
        senderId: apiInfo.sender.id,
        recipient: apiInfo.recipient,
        texts: apiInfo.texts,
        timers: apiInfo.timers,
    };
};

export const getPanelEntityList = (apiInfoList: SpamPanelInfo[]): PanelEntity[] => {
    const list: PanelEntity[] = [];

    apiInfoList.forEach((item) => {
        list.push(getPanelEntity(item));
    });

    return list;
};
