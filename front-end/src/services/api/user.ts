import axios from 'axios'
import { User } from '../../typings'

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080'

export async function create(user: User) {
  //
}

export async function findAll() {
  await axios.get(`${apiUrl}/users`)
}

export default {
  create,
  findAll,
}
