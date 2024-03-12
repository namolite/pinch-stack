
export interface IMenu {
  id: string
  path: string
  ico: string
}

export interface IOption {
  id: string
  label: string
  ico: string
}

export interface IHost {
  domain: string
  port: number
}

export interface IUser {
  id: string
  email: string
  username: string
  passwordHash: string
}

export interface ILogin {
  email?: string
  username?: string
  passwordHash: string
}