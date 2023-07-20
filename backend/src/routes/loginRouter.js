const { Router } = require('express')
const userLogin = require('../controller/userController')
const userRouter = Router();

userRouter.post('/api/login', userLogin);

module.exports = userRouter;