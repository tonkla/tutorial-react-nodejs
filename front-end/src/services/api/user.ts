import axios from 'axios'
import { User } from '../../typings'

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080'

export async function logIn(email: string, password: string) {
  const { data } = await axios.post(`${apiUrl}/login`, { email, password })
  return data
}

export async function create(user: User) {
  const { data } = await axios.post(`${apiUrl}/users`, { user })
  return data
}

export async function findAll() {
  await axios.get(`${apiUrl}/users`)
}

export default {
  logIn,
  create,
  findAll,
}
