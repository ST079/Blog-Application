const express = require('express');
const router = express.Router();



router.post("/register", (req, res,next) => {
    try {
        console.log("Register route");
        res.json({ message: "User registered successfully" });
    } catch (error) {
        next(error);
    }
 
});

router.post("/login", (req, res) => {
  console.log("Login route");
});




module.exports = router;