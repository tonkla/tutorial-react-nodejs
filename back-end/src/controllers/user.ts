import { Context } from 'koa'
import userRepo from '../models/user'

export async function findAll(ctx: Context) {
  ctx.body = []
}

export async function create(ctx: Context) {
  try {
    const { user } = ctx.request.body
    ctx.body = await userRepo.create(user)
  } catch (e) {
    ctx.status = 403
  }
}

export default {
  findAll,
  create,
}
