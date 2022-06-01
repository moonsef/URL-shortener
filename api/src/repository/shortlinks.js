const database = require("../configs/database");

const findUserShortlinksQuery = `
    SELECT * FROM short_links WHERE user_id=(SELECT id FROM users WHERE uid=$1 LIMIT 1) AND id > $2
    ORDER BY id
    LIMIT 10;
`;

const findUserShortlinks = async (userUid, offset) => {
    const result = await database.query(findUserShortlinksQuery, [userUid, offset]);
    return result.rows;
}

module.exports = {
    findUserShortlinks,
};