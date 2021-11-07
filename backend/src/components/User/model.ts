export interface IUserRequest {
    id: string;
    email: string;
}

export interface IUserModel{
    id: string;
    email: string;
    password: string;
    passwordResetToken?: string;
    passwordResetExpires?: Date;

    tokens?: AuthToken[];
}

export type AuthToken = {
    accessToken: string;
    kind: string;
};


export default IUserModel;
