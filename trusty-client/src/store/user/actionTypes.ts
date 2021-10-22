import { IUser } from './interfaces';

export enum UserActionType {
  SET_USER = 'SET_USER',
  SET_LOADING = 'SET_LOADING',
  SET_FIRSTNAME = 'SET_FIRSTNAME',
  SET_LASTNAME = 'SET_LASTNAME',
  SET_EMAIL = 'SET_EMAIL',
  SET_PHONE = 'SET_PHONE',
  SET_AVATAR_URL = 'SET_AVATAR_URL',
};

export interface SetUserActionType {
  type: UserActionType.SET_USER;
  payload: IUser;
};

export interface SetLoadingActionType {
  type: UserActionType.SET_LOADING;
  payload: boolean;
};

export interface SetFirstNameActionType {
  type: UserActionType.SET_FIRSTNAME,
  payload: string;
};

export interface SetLastNameActionType {
  type: UserActionType.SET_LASTNAME,
  payload: string;
};

export interface SetEmailActionType {
  type: UserActionType.SET_EMAIL,
  payload: string;
};

export interface SetPhoneActionType {
  type: UserActionType.SET_PHONE,
  payload: number | null,
};

export interface SetAvatarUrlActionType {
  type: UserActionType.SET_AVATAR_URL,
  payload: string,
}

export type UserAction =
  SetUserActionType |
  SetLoadingActionType |
  SetFirstNameActionType |
  SetLastNameActionType |
  SetEmailActionType |
  SetPhoneActionType |
  SetAvatarUrlActionType;
