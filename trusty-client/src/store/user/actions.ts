import {
  SetAvatarUrlActionType,
  SetEmailActionType,
  SetFirstNameActionType,
  SetLastNameActionType,
  SetPhoneActionType,
  SetUserActionType,
  UserActionType,
 } from './actionTypes';
import { IUser } from './interfaces';

export const setUserAction = (user: IUser): SetUserActionType => ({
  type: UserActionType.SET_USER,
  payload: user,
});

export const setFirstNameAction = (value: string): SetFirstNameActionType => ({
  type: UserActionType.SET_FIRSTNAME,
  payload: value,
});

export const setLastNameAction = (value: string): SetLastNameActionType => ({
  type: UserActionType.SET_LASTNAME,
  payload: value,
});

export const setEmailAction = (value: string): SetEmailActionType => ({
  type: UserActionType.SET_EMAIL,
  payload: value,
});

export const setPhoneAction = (value: number | null): SetPhoneActionType => ({
  type: UserActionType.SET_PHONE,
  payload: value,
});

export const setAvatarUrlAction = (value: string): SetAvatarUrlActionType => ({
  type: UserActionType.SET_AVATAR_URL,
  payload: value,
});
