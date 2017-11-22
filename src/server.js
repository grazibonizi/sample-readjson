const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))

const app = new Koa()
const router = new Router()
const port = process.env.PORT || 4000

router.get('/get/:fileName', async (ctx, next) => {
  const path = `./files/${ctx.params.fileName}.json`  
  try {
    await fs.accessAsync(path)
    const data = require(path)
    ctx.body = data
  } catch(err) {
    ctx.status = 404
  }
})

app.use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(port, 
    () => console.info(`Server listening on port ${port}`))