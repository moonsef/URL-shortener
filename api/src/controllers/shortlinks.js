const { shortlinksIndexRequest } = require("../dtos/shortlinks");
const shortLinksRepo = require("../repository/shortlinks");

const index = async (req, res, next) => {
  const { error, value } = shortlinksIndexRequest.validate(req.query);

  if (error) {
    res.status(400).json({ message: "validation_error" });
    return;
  }
  console.log(value.offset);

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

module.exports = {
  index,
};
