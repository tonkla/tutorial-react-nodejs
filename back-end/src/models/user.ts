import { prisma } from '.'
import { User } from '../typings'

export async function findByEmail(email: string) {
  return await prisma.user.findOne({ where: { email } })
}

export async function create(user: User) {
  return await prisma.user.create({ data: user })
}

export default {
  findByEmail,
  create,
}
