const blogModel = require("./blog.model");
const { slugGenerator } = require("../../utils/textPraser");

const createBlog = async(req,res,next) => {
  try {
    const playload = req.body;
    playload.slug = slugGenerator(playload.title);
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

const getBlogById = async (req,res,next) => {
  try {
    const blog  = await blogModel.findById(req.params.id);
    res.json({blog:blog});
  } catch (error) {
    next(error);
  }
};

const updateBlog = () => {};

const deleteBlog = async(req,res,next) => {
    try {
      const Id = req.params.id;
      const blog = await blogModel.findById(Id);
      if(blog){
        const blogname = blog.title;
        await blogModel.findByIdAndDelete(Id);
        res
          .status(200)
          .json({ message: `${blogname}, Deleted successfully` });
      }else{
        res.status(404).json({ message: "Blog Not Found" });
      }
    } catch (error) {
      next(error);
    }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};