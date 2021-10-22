import { RootState } from '../reducers';

export const getFirstName = (state: RootState): string => state.user.firstName;
export const getLastName = (state: RootState): string => state.user.lastName;
export const getPhone = (state: RootState): number | null => state.user.phone;
export const getEmail = (state: RootState): string => state.user.email;
export const getAvatarUrl = (state: RootState): string => state.user.avatarUrl;
export const getLoading = (state: RootState): boolean => state.user.loading;
