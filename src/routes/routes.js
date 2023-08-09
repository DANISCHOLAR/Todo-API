const router = require("express").Router();


const ShortUrlController = require("../controller/ShortUrlController")

//sets up routes

router.get("/", (req, res) => {
  res.send("Shortening URLs for ya");
});



router.get("/:id", (req, res) => {


});

router.post("/url", (req, res) => {


});

module.exports = router
