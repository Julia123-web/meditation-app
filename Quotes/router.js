const { Router } = require("express");
const Quotes = require("./model");
const auth = require("../auth/middleWare");

const router = new Router();

router.get("/quotes", auth, async function(request, response, next) {
  try {
    const videos = await Quotes.findAll();
    response.send(videos);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
