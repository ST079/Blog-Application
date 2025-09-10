const userSchema = require("./user.model");

const register = (req, res, next) => {
  try {
    console.log("Register route");
    res.json({ message: "User registered successfully" });
  } catch (error) {
    next(error);
  }
};
const login = () => {};
const getAllUsers = () => {};
const getUserById = () => {};
const deleteUser = () => {};

module.exports = {
  register,
  login,
  getAllUsers,
  getUserById,
  deleteUser,
};
