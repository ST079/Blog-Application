const express = require('express');
const router = express.Router();

const adminRouter = require('../modules/Admin/adminRouter');
const userRouter = require('../modules/User/userRouter');
const blogRouter = require('../modules/Blogs/blogRouter');

router.use('/admin', adminRouter);
router.use('/user', userRouter);    
router.use('/blogs',blogRouter);

module.exports = router;