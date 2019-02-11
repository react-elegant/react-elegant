const Koa = require('koa');

const app = new Koa();
const Router = require('koa-router');
const serve = require('koa-static');
const path = require('path');
const fs = require('fs');

const router = new Router();
const html = fs.readFileSync(`${__dirname}/index.html`);

app.use(serve(path.join(__dirname, '../dist')));

const pathList = [
  '/',
  '/about',
  '/home',
];


for (let i = 0; i < pathList.length; i++) {
  router.get(pathList[i], (ctx) => {
    ctx.set({
      'Content-Type': 'text/html',
    });

    ctx.body = html;
  });
}

app
  .use(router.routes())
  .use(router.allowedMethods());

const port = process.argv[2] || 3000;

app.listen(port, () => {
  console.log(`server at  ${port}`);
});
