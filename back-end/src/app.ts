import cors from '@koa/cors'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import Router from 'koa-tree-router'
import user from './controllers/user'

const r = new Router()
r.get(`/users`, user.findAll)
r.post(`/users`, user.create)

const app = new Koa().use(cors()).use(bodyParser()).use(r.routes())

export default app
