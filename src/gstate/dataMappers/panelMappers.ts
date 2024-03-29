import { SpamPanelInfo } from '~/api';
import { PanelSpammer } from '~/packages/spam';
import { PanelEntity } from '~/types/entities/PanelEntity';

export const getPanelEntity = (apiInfo: SpamPanelInfo): PanelEntity => {
    return {
        id: apiInfo.id,
        spammer: new PanelSpammer(apiInfo.id),
        isActive: false,
        error: null,
        senderId: apiInfo.sender?.id ?? null,
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
