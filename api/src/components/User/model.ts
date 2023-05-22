export interface IUserRequest {
  _id: string;
  email: string;
}

export interface IUserModel {
  _id: string;
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
