const Joi = require('@hapi/joi');

export const twitterSearchValidation = Joi.object({
  id: Joi.number().integer().required().error(new Error('invalid parameters: id')),
  id_str:Joi.string().required().error(new Error('invalid parameters: id_str')),
  name: Joi.string().required().error(new Error('invalid parameters: name')),
  screen_name: Joi.string().required().error(new Error('invalid parameters: screen_name')),
  location:Joi.string().required().error(new Error('invalid parameters: location')),
  description: Joi.string().required().error(new Error('invalid parameters: description')),
  followers_count:Joi.number().integer().required().error(new Error('invalid parameters: followers_count')),
  friends_count:Joi.number().integer().required().error(new Error('invalid parameters: friends_count')),
  profile_image_url_https:Joi.string().required().error(new Error('invalid parameters: profile_image_url_https')),
});
