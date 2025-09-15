const blogModel = require("./blog.model");

const createBlog = async(req,res,next) => {
  try {
    const playload = req.body;
    await blogModel.create(playload);
    res.json({msg:"Blog created successfully"});
  } catch (error) {
    next(error);
  }
};

const getAllBlogs = async(req,res,next) => {
  try {
    const blogs = await blogModel.find();
    res.json({publishedblogs:blogs});
  } catch (error) {
    next(error);
  }
};  
const getBlogById = () => {};
const updateBlog = () => {};
const deleteBlog = () => {};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};