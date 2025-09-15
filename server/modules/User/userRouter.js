const express = require("express");
const { register, login , getAllUsers,deleteUser,getUserById,updateUser } = require("./user.controller");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/:id", getUserById);
router.get("/", getAllUsers);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;

