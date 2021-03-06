const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// const db = require("./db");
// console.log("SEE THIS", db);

const cors = require("cors");
const corsMiddleWare = cors();
app.use(corsMiddleWare);

const parserMiddleWare = express.json();
app.use(parserMiddleWare);

const userRouter = require("./User/router");
app.use(userRouter);

const videosRouter = require("./Videos/router");
app.use(videosRouter);

const quotesRouter = require("./Quotes/router");
app.use(quotesRouter);

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`);
});
