const koa = require("koa");
const userRouter = require("./routers");
const cors = require("koa2-cors");
const path = require('path');
const logger = require('koa-logs-middleware');

const app = new koa();
const port = process.env.PORT || 5000;

app.use(cors({
    origin: function (ctx) {
        if (ctx.url === '/test') {
            return "*"; // allow all request
        }
        return 'http://localhost:3000';
        // only allow request from http://localhost:3000
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

app.use(logger({
    defaultPath: path.resolve(__dirname, 'logs'),
    applicationName: 'app',
    auto: true
}));


app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    ctx.logger.info(`${ctx.method} ${ctx.url} - ${ms}ms`);
});


app.use(userRouter.routes()).use(userRouter.allowedMethods({throw: true}));
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
