import { authAxios } from '../support/axios';

export const send = async (senderId: number, recipient: string, text: string): Promise<void> => {
    await authAxios().post('/vk/send', { senderId, recipient, text });
};
