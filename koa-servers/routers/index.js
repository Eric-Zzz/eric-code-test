const router = require("koa-router");
const Controller = require("../controllers/controller");

const Routers = new router({
    prefix: '/api'
});

// search user by name and location
Routers.get('/users/search', Controller.search);

// search user show
Routers.get('/tweets/show', Controller.show);


module.exports = Routers;
