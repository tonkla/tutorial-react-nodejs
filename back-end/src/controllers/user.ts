import bcrypt from 'bcrypt'
import { Context } from 'koa'
import userRepo from '../models/user'

export async function findByEmail(ctx: Context) {
  const { email } = ctx.query
  await userRepo.findByEmail(email)
}

export async function logIn(ctx: Context) {
  const { email, password } = ctx.request.body
  const user = await userRepo.findByEmail(email)
  if (user && (await bcrypt.compare(password, user.password))) {
    ctx.body = user
  } else {
    ctx.status = 401
  }
}

export async function create(ctx: Context) {
  try {
    const { user } = ctx.request.body
    const password = await bcrypt.hash(user.password, 10)
    ctx.body = await userRepo.create({ ...user, password })
  } catch (e) {
    ctx.status = 403
  }
}

export default {
  logIn,
  create,
  findByEmail,
}
