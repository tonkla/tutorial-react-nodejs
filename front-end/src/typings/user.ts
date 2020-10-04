import { Role } from './role'

export interface User {
  email: string
  password: string
}

export interface UserLogin {
  email: string
  token: string
}

export interface UserRole {
  email: string
  roles: Role[]
}
