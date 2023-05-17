const express = require("express")
const { loginAccount, checkToken } = require("../controller/userAccount")
const { authorizarion, authorization } = require("../controller/admin")

const adminRouter = express.Router()


// adminRouter.get('getUser' ,loginAccount,checkToken,authorization,authorization )

module.exports = {adminRouter}