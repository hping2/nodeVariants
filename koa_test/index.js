'use strict';
const koa = require('koa')
const path = require('path')
const render = require('koa-ejs')
const koaRouter = require('koa-router')

const app = new koa()
const router = new koaRouter()

// Root directory for view files etc.
render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'index',
  viewExt: 'html',
  cache: false,
  debug: true
})

router.get('koala', '/', (ctx) => {
  let koala_attributes = [];
  koala_attributes.push({
    meta_name: 'Color',
    meta_value: 'Black and white'
  })
  koala_attributes.push({
    meta_name: 'Native Country',
    meta_value: 'Australia'
  })
  koala_attributes.push({
    meta_name: 'Animal Classification',
    meta_value: 'Mammal'
  })
  koala_attributes.push({
    meta_name: 'Life Span',
    meta_value: '13 - 18 years'
  })
  koala_attributes.push({
    meta_name: 'Are they bears?',
    meta_value: 'no!'
  })
  return ctx.render('index', {
    attributes: koala_attributes
  })
})

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(1234, () => console.log('running on port 1234'))
