const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
  let page = req.query.page;
  console.log("[QUERY]");
  console.log(page);

  res.send({"key":"value"});
})

router.get("/about", function (req, res){
  res.send("This is about page");
})

router.post("/postapi", function (req, res){
  let body = req.body;
  console.log(body);
  res.send("This is post API page");
})

module.exports = router;