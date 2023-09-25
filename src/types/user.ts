export type TUserInfo = {
    email: string;
    name: string;
};

export type TUserCredentials = TUserInfo & {
    password: string;
};