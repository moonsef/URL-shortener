const Joi = require("joi");

const shortlinksIndexRequest = Joi.object({
  offset: Joi.number().min(0).default(0),
});
const shortlinksCreateRequest = Joi.object({
  original_url: Joi.string()
    .uri()
    .required(),
});

module.exports = {
  shortlinksIndexRequest,
  shortlinksCreateRequest,
};
