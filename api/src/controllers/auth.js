const Joi = require("joi");
const authRepo = require("../repository/auth");

const login = async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { error, value } = schema.validate(req.body);

  if (error) {
    res.status(400).json({ error: "validation_error" });
    return;
  }
};

module.exports = {
  login,
};
