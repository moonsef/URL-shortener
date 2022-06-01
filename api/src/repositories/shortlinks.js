const database = require("../configs/database");

const findShortlinksQuery = `
    SELECT * FROM short_links WHERE user_id=(SELECT id FROM users WHERE uid=$1 LIMIT 1) AND id > $2
    ORDER BY id
    LIMIT 10;
`;

const findUserShortlinks = async (userUid, offset) => {
  const result = await database.query(findShortlinksQuery, [userUid, offset]);
  return result.rows;
};

const createShortLinksQuery = `
    INSERT INTO short_links(original_url, short_url, user_id, created_at, updated_at)
    VALUES ($1, $2, $3, $4, $4) RETURNING *;
`;
const createShortLinks = async (originalUrl, shortUrl, userId) => {
  const result = await database.query(createShortLinksQuery, [
    originalUrl,
    shortUrl,
    userId,
    new Date(),
  ]);
  return result.rows[0];
};

const findShortLinkUrlQuery = `
    SELECT id FROM short_links where short_url=$1;
`;
const findShortLinkUrl = async (shortUrl) => {
    const result = await database.query(findShortLinkUrlQuery, [shortUrl]);
    return result.rows[0];
}

module.exports = {
  findUserShortlinks,
  createShortLinks,
  findShortLinkUrl,
};
