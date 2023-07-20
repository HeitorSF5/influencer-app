const { Router } = require('express')
const userLogin = require('../controller/userController')
const userRouter = Router();

userRouter.post('/login', userLogin);

module.exports = userRouter;