const express = require('express');
const router = express.Router();



router.post("/blog-manager", (req, res) => {
  console.log("Blogs route");
});

router.post("/user-manager", (req, res) => {
  console.log("user manager route");
});




module.exports = router;