import cors from '@koa/cors'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import Router from 'koa-tree-router'

const app = new Koa()
const r = new Router()
// r.get(`/ping`, (ctx) => {
//   ctx.body = 'pong'
// })

const port = 8080
app
  .use(cors())
  .use(bodyParser())
  .use(r.routes())
  .listen({ port }, async () => console.log(`🚀 API launched on port ${port}`))
