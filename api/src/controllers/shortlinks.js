const {
  shortlinksIndexRequest,
  shortlinksCreateRequest,
} = require("../dtos/shortlinks");
const shortLinksRepo = require("../repository/shortlinks");
var shortid = require("shortid");

const index = async (req, res, next) => {
  const { error, value } = shortlinksIndexRequest.validate(req.query);

  if (error) {
    res.status(400).json({ message: "validation_error" });
    return;
  }

  try {
    // TODO: change userUid to be dynamic (from JWT)
    const result = await shortLinksRepo.findUserShortlinks(
      "4fa44569-aa36-4f28-801c-2cbf3a93ba7b",
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

    // TODO: change userUid to be dynamic (from JWT)
    const result = await shortLinksRepo.createShortLinks(
      value.original_url,
      shortUrl,
      1
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
