const userSchema = require("./user.model");
const { hashedPassword, comparePassword } = require("../../utils/bcrypt");
const { signJwt } = require("../../utils/token");

// Register Controller
const register = async (req, res, next) => {
  try {
    const payload = req.body;
    const { username, email, password, role } = payload;
    delete payload.role; // Prevent role assignment from request body
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let userExist = await userSchema.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hash = await hashedPassword(password);
    if (!hashedPassword) {
      return res.status(500).json({ message: "Password hashing failed" });
    }
    const newUser = await userSchema.create({
      username,
      email,
      password: hash,
    });

    if (!newUser) {
      return res.status(500).json({ message: "User creation failed" });
    }

    const userPyload = {
      id: newUser._id,
      username,
      email,
    };

    let token = signJwt({
      userPyload,
    });
    return res.status(201).json({
      message: "User created successfully",
      user: newUser.username,
      token: token,
    });
  } catch (error) {
    next(error);
  }
};

// Login Controller
const login = async (req, res, next) => {
  try {
    const payload = req.body;
    console.log(req.body);
    const { email, password } = payload;
    const user = await userSchema.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User Not Found, Please Register First" });
    }
    if (user && (await comparePassword(password, user.password))) {
      const userPyload = {
        id: user._id,
        username: user.username,
        email: user.email,
      };
      let token = signJwt({
        userPyload,
      });
      return res.status(200).json({
        message: "User logged in successfully",
        user: user.username,
        token: token,
      });
    } else {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    next(error);
  }
};

// Get All Users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await userSchema.find();
    res.status(200).json({ users: users });
  } catch (error) {
    next(error);
  }
};

// Get User by ID
const getUserById = async (req, res, next) => {
  try {
    const user = await userSchema.findById(req.params.id);
    res.status(200).json({ user: user });
  } catch (error) {
    next(error);
  }
};

// Delete User (Placeholder)
const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    console.log(userId);
    const user = await userSchema.findById(userId);
    const username = user.username;
    if(user){
      // Placeholder for delete logic
      await userSchema.findByIdAndDelete(userId);
      res
        .status(200)
        .json({ message: `User ${username}, Deleted successfully` });
    }else{
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  getAllUsers,
  getUserById,
  deleteUser,
};
