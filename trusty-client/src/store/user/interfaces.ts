export interface IUser {
  firstName?: string,
  lastName?: string,
  email?: string,
  phone?: number,
  avatarUrl?: string,
  updatedAt?: Date,
}

export interface IState {
  firstName: string,
  lastName: string,
  email: string,
  phone: number | null,
  avatarUrl: string,
  loading: boolean,
  updatedAt: Date,
}
