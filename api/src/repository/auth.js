const database = require("../configs/database");


const findUserByEmailQuery = `
    SELECT * FROM users WHERE lower(email)=lower($1) LIMIT 1;
`;

const findUserByEmail = async (email) => {
    const result = await database.query(findUserByEmailQuery, [email]);
    return result.rows[0];
}

module.exports = {
    findUserByEmail,
};