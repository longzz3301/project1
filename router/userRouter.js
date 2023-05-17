const express = require('express')
const { createAccount, checkToken, authentication, getUser, } = require('../controller/userAccount')


const userRouter = express.Router()

userRouter.post('/registers', createAccount)

userRouter.post('/login',authentication)

userRouter.get('/get',checkToken,getUser)




module.exports ={userRouter}
