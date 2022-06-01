const database = require("../configs/database");

const findUserByEmailQuery = `
    SELECT * FROM users WHERE lower(email)=lower($1) LIMIT 1;
`;

const findUserByEmail = async (email) => {
  const result = await database.query(findUserByEmailQuery, [email]);
  return result.rows[0];
};

const createUserQuery = `
    INSERT INTO users(name,email,password, created_at, updated_at)
    VALUES ($1, $2, $3, $4, $4) RETURNING *;
`;

const createUser = async (name, email, password) => {
  const result = await database.query(createUserQuery, [
    name,
    email,
    password,
    new Date(),
  ]);
  return result.rows[0];
};

module.exports = {
  findUserByEmail,
  createUser,
};
