import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';

import { getUser, postUser } from '../../api';
import {
  SetAvatarUrlActionType,
  SetEmailActionType,
  SetFirstNameActionType,
  SetLastNameActionType,
  SetLoadingActionType,
  SetPhoneActionType,
  SetUserActionType,
  UserAction,
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

export const setLoadingAction = (value: boolean): SetLoadingActionType => ({
  type: UserActionType.SET_LOADING,
  payload: value,
});

export const getUserAction = () => async (dispatch: Dispatch<UserAction>) => {
  dispatch(setLoadingAction(true));
  const res: AxiosResponse = await getUser();
  dispatch(setLoadingAction(false));
  dispatch(setUserAction(res.data as IUser));
};

export const updateUserAction = (user: IUser) => async (dispatch: Dispatch<UserAction>) => {
  dispatch(setLoadingAction(true));
  try {
    await postUser(user);
    dispatch(setLoadingAction(false));
  }
  catch(error) {
    console.log(error);
    dispatch(setLoadingAction(false));
  }
};
