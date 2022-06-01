const {
  shortlinksIndexRequest,
  shortlinksCreateRequest,
} = require("../dtos/shortlinks");
const shortLinksRepo = require("../repositories/shortlinks");
const userRepo = require("../repositories/user");
var shortid = require("shortid");

const index = async (req, res, next) => {
  const { error, value } = shortlinksIndexRequest.validate(req.query);

  if (error) {
    res.status(400).json({ message: "validation_error" });
    return;
  }

  try {
    const result = await shortLinksRepo.findUserShortlinks(
      req.user.uid,
      value.offset
    );
    res.json(result);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

const create = async (req, res, next) => {
  const { error, value } = shortlinksCreateRequest.validate(req.body);

  if (error) {
    res.status(400).json({ message: "validation_error" });
    return;
  }

  try {
    const shortUrl = `${process.env.APP_URL}/${shortid.generate()}`;
    const shortStringExists = await shortLinksRepo.findShortLinkUrl(shortUrl);

    if (shortStringExists) {
      res.status(400).json({ message: "short_id_already_exists" });
      return;
    }
    const user = await userRepo.findUserByUid(req.user.uid);

    if (!user) {
      res.sendStatus(400);
      return;
    }
    const result = await shortLinksRepo.createShortLinks(
      value.original_url,
      shortUrl,
      user.id
    );

    res.json(result);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

module.exports = {
  index,
  create,
};
