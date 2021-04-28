const Koa = require('koa');

const port = 3000;
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'BATTLE!11';
});

app.listen(port, () => {
  console.log(`battle listens at port ${port}`);
});
