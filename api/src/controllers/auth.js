const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authRepo = require("../repository/auth");
const {loginRequest,registerRequest} = require("../dtos/auth");

const login = async (req, res, next) => {
 
  const { error, value } = loginRequest.validate(req.body);

  if (error) {
    res.status(400).json({ message: "validation_error" });
    return;
  }

  try {
    const user = await authRepo.findUserByEmail(value.email);

    if (!user) {
      res.status(400).json({ message: "invalid_credential" });
      return;
    }
    const validPassword = await bcrypt.compare(value.password, user.password);

    if (!validPassword) {
      res.status(400).json({ message: "invalid_credential" });
      return;
    }

    const accessToken = jwt.sign({ uid: user.uid }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ access_token: accessToken });
  } catch (err) {
    res.status(500);
    next(err);
  }
};

const register = async (req, res, next) => {
 
  const { error, value } = registerRequest.validate(req.body);

  if (error) {
    res.status(400).json({ message: "validation_error" });
    return;
  }

  try {
    
  } catch (err) {
    res.status(500);
    next(err);
  }
}

module.exports = {
  login,
  register,
};
