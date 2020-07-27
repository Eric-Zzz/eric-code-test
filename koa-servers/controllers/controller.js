const {searchUser, searchTweets} = require('../utilis/twitterAPI');


class controller {

    async search(ctx) {
        try {
            console.log('search twitter');
            const {name, location} = ctx.request.query;
            if (!name) {
                ctx.throw(400, 'invalid parameters');
            }
            const result = await searchUser(name, location);
            ctx.response.status = 200;
            ctx.body = {
                status: 200,
                data: result
            };
        } catch (error) {
            throw error;
        }
    }

    async show(ctx) {
        try {
            console.log('show user last five tweets');
            const {user_id, screen_name} = ctx.request.query;
            if (!user_id && !screen_name) {
                ctx.throw(400, 'invalid parameters');
            }
            const result = await searchTweets(user_id, screen_name);
            ctx.response.status = 200;
            ctx.body = {
                status: 200,
                data: result
            };
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new controller();
