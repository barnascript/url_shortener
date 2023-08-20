const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");
const router = require("./routes/index");

//simple_shell_token = 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

connectDb();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", router);
app.use("/api/url", router);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

//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
