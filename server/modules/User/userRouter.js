const express = require("express");
const { register, login , getAllUsers,deleteUser,getUserById } = require("./user.controller");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/:id", getUserById);
router.get("/", getAllUsers);
router.delete("/:id", deleteUser);

module.exports = router;

