const express = require('express');
const router = express.Router();

const adminRouter = require('../modules/Admin/adminRouter');
const userRouter = require('../modules/User/userRouter');

router.use('/admin', adminRouter);
router.use('/user', userRouter);    

module.exports = router;