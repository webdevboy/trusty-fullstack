import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from './user/reducers';

const userPersistConfig = {
  key: "user",
  whitelist: [
    'firstName',
    'lastName',
    'email',
    'phone',
    'avatarUrl',
  ],
  storage,
};

const reducers = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
});

export default reducers;
//This RootState is required to use useSelector later on 
export type RootState = ReturnType<typeof reducers>;