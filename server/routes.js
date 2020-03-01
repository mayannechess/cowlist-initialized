const router = require("express").Router();
const controller = require("./controllers");

router.get("/cows", controller.cows.get);

router.post("/cows", controller.cows.post);

module.exports = router;