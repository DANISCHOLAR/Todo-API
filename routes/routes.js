const router = require("express").Router();

//sets up routes

router.get("/", (req, res) => {
  res.send("Shortening URLs for ya");
});

router.get("/:id", (req, res) => {


});

router.post("/url", (req, res) => {


});

module.exports = router
