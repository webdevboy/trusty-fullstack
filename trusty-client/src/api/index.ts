import axios, { AxiosResponse } from 'axios';
import { IUser } from '../store/user/interfaces';

const backendUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://localhost:3001';

export const getUser = (): Promise<AxiosResponse> =>
  axios.get(`${backendUrl}/api/user`);

export const postUser = (user: IUser): Promise<AxiosResponse> =>
  axios.post(`${backendUrl}/api/user`, { user });
