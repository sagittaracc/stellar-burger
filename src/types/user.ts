export interface TUserInfo {
    email: string;
    name: string;
};

export interface TUserCredentials extends TUserInfo {
    password: string;
};