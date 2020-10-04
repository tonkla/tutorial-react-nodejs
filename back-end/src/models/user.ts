import bcrypt from 'bcrypt'
import { prisma } from '.'
import { User } from '../typings'

export async function create(user: User) {
  const password = await bcrypt.hash(user.password, 10)
  return await prisma.user.create({ data: { ...user, password } })
}

export default {
  create,
}
