const express = require("express"); 
const { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } = require("./blog.controller");
const router = express.Router();

router.post("/", createBlog);
router.get("/all-blogs", getAllBlogs);
router.get("/:id", getBlogById);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;