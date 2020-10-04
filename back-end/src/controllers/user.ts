import { Context } from 'koa'
import { User } from '../typings'

export async function findAll(ctx: Context) {
  const users: User[] = [{ email: 'admin@mail.com' }]
  ctx.body = users
}

export default {
  findAll,
}
