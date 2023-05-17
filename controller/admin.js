const { use } = require('bcrypt/promises')
const express = require('express')

const authorization = async (req,res,next) => {
    const userRole = req.checkUser.role
    if(userRole.includes('admin')){
        next()
    }else{
        res.send('User khong co quyen')
    }

}

const admin = async (req,res,next) => {
    const users = await userModel.find({})
    res.send(users)

}

module.exports ={authorization}

