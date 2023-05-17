const express = require('express')
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
const { usermodel } = require('../model/user')





// create account
    const createAccount = async(req,res,next) =>{
        const {username,password} = req.body
        const checkUserExist = await usermodel.findOne({username :username})
     
        if(checkUserExist) {
            res.send('user da ton tai')
            next()
        }else {
            const salt = bcrypt.genSaltSync(9)
            const hassPassword = bcrypt.hashSync(password,salt)
            const user = await usermodel.create({username:username, password:hassPassword , role: 'user'})
            res.send('create success')
        }
    
    }

    //authentication login
    const authentication = async(req,res,next) => {
        
        const {username , password} = req.body
        const checkUserExist = await usermodel.findOne({username:username})
        if(checkUserExist && bcrypt.compareSync(password,checkUserExist.password) ) {
            const token = jwt.sign({username:username },'long123')
            res.send({token:token})
            
        }else{
            res.send("user k ton tai")
        }
    }


    //check token 
    const checkToken = async (req,res,next) => {
        const token = req.headers.authorization.split("")[1]
        const decoded = jwt.verify(token,'long123')
        const {username} = decoded
        const checkUser = await usermodel.findOne({username:username})
        if(user) {
            req.user = checkUser
            next()
            
        }else{
            res.send('user not exit ')
        }
    }

    const getUser = (req,res,next) => {
        res.send(req.user)
    }

    
   

    // const getProfile = async (req,res,next) => {
    //     res.send(user)
    // }

    
    
    
    

module.exports = {createAccount,authentication,checkToken,getUser}
