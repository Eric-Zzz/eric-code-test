require('dotenv').config();

var config = {
    tw_consumer_key:process.env.TWITTER_API_KEY,
    tw_consumer_secret:process.env.TWITTER_API_KEY_SECRET,
    tw_access_token_key:process.env.TWITTER_ACCESS_TOKEN,
    tw_access_token_secret:process.env.TWITTER_ACCESS_TOKEN_SECRET,
    tw_bearer_token: process.env.TWITTER_BEARER_TOKEN,
};

module.exports = config;
