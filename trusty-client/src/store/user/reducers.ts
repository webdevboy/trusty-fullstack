import { UserAction, UserActionType } from './actionTypes';
import { IState } from './interfaces';

const initialState: IState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: null,
  avatarUrl: 'https://i.pravatar.cc/300',
  loading: false,
  updatedAt: new Date(),
};

export const userReducer = (state = initialState, action: UserAction): IState => {
  switch(action.type) {
    case UserActionType.SET_USER: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case UserActionType.SET_FIRSTNAME: {
      return {
        ...state,
        firstName: action.payload,
        updatedAt: new Date(),
      }
    }
    case UserActionType.SET_LASTNAME: {
      return {
        ...state,
        lastName: action.payload,
        updatedAt: new Date(),
      }
    }
    case UserActionType.SET_EMAIL: {
      return {
        ...state,
        email: action.payload,
        updatedAt: new Date(),
      }
    }
    case UserActionType.SET_PHONE: {
      return {
        ...state,
        phone: action.payload,
        updatedAt: new Date(),
      }
    }
    case UserActionType.SET_AVATAR_URL: {
      return {
        ...state,
        avatarUrl: action.payload,
        updatedAt: new Date(),
      }
    }
    case UserActionType.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}