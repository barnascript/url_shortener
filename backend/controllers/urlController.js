const UrlSchema = require("../schema/UrlSchema");
const shortid = require("shortid");
const validUrl = require("valid-url");

const postUrl = async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = req.protocol + "://" + req.headers.host;

  console.log(baseUrl);

  // if (!validUrl.isUri(baseUrl)) {
  //   return res.status(401).json("Invalid base url");
  // }

  //create url code
  const urlCode = shortid.generate();

  //validate long url
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await UrlSchema.findOne({ longUrl: longUrl });

      if (url) {
        res.json(url);
      } else {
        const shortUrl = baseUrl + "/" + urlCode;

        url = new UrlSchema({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });
        await url.save();
        res.json(url);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(401).json("Invalid long url");
  }
};

const getUrl = async (req, res) => {
  try {
    const url = await UrlSchema.findOne({ urlCode: req.params.code });

    if (!url) {
      res.status(400).json("Url does not exist");
    } else {
      return res.redirect(url.longUrl);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Server Error");
  }
};

module.exports = { postUrl, getUrl };
