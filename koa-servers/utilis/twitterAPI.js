const Twitter =require("twitter") ;const config =require("../config/config") ;const {twitterSearchValidation} = require('./validation');const client = new Twitter({    consumer_key: config.tw_consumer_key,    consumer_secret: config.tw_consumer_secret,    access_token_key: config.tw_access_token_key,    access_token_secret: config.tw_access_token_secret,    // bearer_token: config.tw_bearer_token,});//search user by name or locationconst searchUser=async (name,location)=>{    return await client.get('users/search', {q: name,count:20})        .then(async (tweets)=>{          //validation data from third party          await tweets.map(tweet =>{            try{  twitterSearchValidation.validate(tweet)}            catch (e) {throw e}});          //filter by location            if (!location){                return tweets            }else {                return tweets.filter(item => item.location.toLowerCase().includes(location.toLowerCase()));            }    }).catch( (error) => {throw error})};// search user tweets by user_id or screen_nameconst searchTweets=async (id_str,screen_name)=>{     return await client.get('statuses/user_timeline',      {user_id:id_str,screen_name:screen_name,count: 5})         .then(             tweets => tweets         )         .catch(             (error) => {                 throw error;             }         )};module.exports = {searchUser,searchTweets};