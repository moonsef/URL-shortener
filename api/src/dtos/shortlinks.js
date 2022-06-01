const Joi = require("joi");

const shortlinksIndexRequest = Joi.object({
  offset: Joi.number().min(0).default(0),
});

module.exports = {
  shortlinksIndexRequest,
};
