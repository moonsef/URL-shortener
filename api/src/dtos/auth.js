const Joi = require("joi");

const loginRequest = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const registerRequest = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirm_password: Joi.ref('password'),
  });

module.exports = {
    loginRequest,
    registerRequest,
};
