const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const shortid = require("shortid");
const UrlSchema = require("./schema/UrlSchema");
const utils = require("./utils/validateUrl");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => {
    console.log(err.message);
  });

//get all saved URLs
app.get("/all", async (req, res, next) => {
  UrlSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//URL shortener endpoint
app.post("/short", async (req, res) => {
  console.log("HERE", req.body.url);
  const { originalUrl } = req.body;
  const base = `http://localhost:3333`;

  const urlId = shortid.generate();
  if (utils.validateUrl(originalUrl)) {
    try {
      let url = await UrlSchema.findOne({ originalUrl });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = `${base}/${urlId}`;

        url = new UrlSchema({
          originalUrl,
          shortUrl,
          urlId,
          date: new Date(),
        });
        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(400).json("Invalid Original Url");
  }
});

//redirect endpoint
app.get("/:urlId", async (req, res) => {
  try {
    const url = await UrlSchema.findOne({ urlId: req.params.urlId });
    console.log(url);
    if (url) {
      url.clicks++;
      url.save();
      return res.redirect(url.originalUrl);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json("Server Error");
  }
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

//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
