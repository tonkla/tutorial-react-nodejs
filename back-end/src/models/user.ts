import { prisma } from '.'
import { User } from '../typings'

export async function create(user: User) {
  await prisma.user.create({ data: user })
}

export default {
  create,
}
