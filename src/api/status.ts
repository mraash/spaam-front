type ApiStatus = {
    initialRefreshing: Promise<any>|false,
};

export const apiStatus: ApiStatus = {
    initialRefreshing: false,
};
