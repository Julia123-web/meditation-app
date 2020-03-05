const { Router } = require("express");
const Videos = require("./model");
const auth = require("../auth/middleWare");

const router = new Router();

router.get("/videos", auth, async function(request, response, next) {
  try {
    const videos = await Videos.findAll();
    response.send(videos);
  } catch (error) {
    next(error);
  }
});

// router.post("/user/:id", auth, async function(request, response, next) {
//   try {
//     console.log("TEST2", request);
//     const videos = await Videos.create({
//       title: request.body.title,
//       video: request.body.video,
//       userId: request.body.userId
//     });

//     response.send(videos);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
