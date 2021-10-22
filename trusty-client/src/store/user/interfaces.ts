export interface IUser {
  firstName: string,
  lastName: string,
  email: string,
  phone: number,
  avatarUrl: string,
}

export interface IState {
  firstName: string,
  lastName: string,
  email: string,
  phone: number | null,
  avatarUrl: string,
  loading: boolean,
}
