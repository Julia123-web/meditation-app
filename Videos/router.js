const { Router } = require("express");
const Videos = require("./model");
const auth = require("../auth/middleWare");

const router = new Router();

router.get("/videos", async function(request, response, next) {
  try {
    const videos = await Videos.findAll();
    response.send(videos);
  } catch (error) {
    next(error);
  }
});

router.post("/videos", auth, async function(request, response, next) {
  try {
    // console.log("TEST2", request.body);
    const videos = await Videos.create({
      title: request.body.title,
      videos: request.body.videos
    });
    console.log("TEST2", videos);
    response.send(videos);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
