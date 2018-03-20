const User = require('../models/Users')
const bcrypt = require('bcrypt')
const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds)


class UserController{
    static viewAll(){
        User.find()
        .exec()
        .then(data=>{
            res.status(200).json({
                message:'this is your user list',
                data
            })
        })
        .catch(err=>{
            res.status(500).json({
                message:'something went wrong',
                err
            })
        })
    }

    static create(){
        let password = bcrypt.hashSync(req.body.password,salt)
        let obj = {
            name:req.body.name,
            password:password,
            email:req.body.email
        }
        User.create(obj)
        .then(data=>{
            res.status(200).json({
                message:'user has been created',
                data
            })
        })
        .catch(err=>{
            res.status(500).json({
                message:'something went wrong',
                err
            })
        })
    }

    static update(){
        let password = bcrypt.hashSync(req.body.password,salt)
        let target = {
            _id:req.params.id
        }
        let objUpdate = {
            name:req.body.name,
            password:password,
            email:req.body.email
        }
        User.findOneAndUpdate(obj,target)
        .exec()
        .then(data=>{
            message:'user successfully updated',
            data
        })
        .catch(err=>{
            message:'something went wrong',
            err
        })
    }

    static delete(){
        let target = {
            _id:req.params.id
        }
        User.findByIdAndRemove(target)
        .exec()
        .then(data=>{
            message:'user sucessfully deleted',
            data
        })
        .catch(err=>{
            message:'something went wrong',
            err
        })
    }
}

module.exports = UserController