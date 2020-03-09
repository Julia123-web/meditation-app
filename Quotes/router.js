const { Router } = require("express");
const Quotes = require("./model");
// const auth = require("../auth/middleWare");

const router = new Router();

router.get("/quotes", async function(request, response, next) {
  try {
    const quotes = await Quotes.findAll();
    response.send(quotes);
  } catch (error) {
    next(error);
  }

  router.post("/quotes", async function(request, response, next) {
    try {
      // console.log("TEST2", request.body);
      const newQuote = await Quotes.create({
        quotes: request.body.quotes
      });
      console.log("TEST2", newQuote);
      response.send(newQuote);
    } catch (error) {
      next(error);
    }
  });
});

module.exports = router;
