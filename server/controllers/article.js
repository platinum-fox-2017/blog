const Article = require('../models/Article')

class ArticleController {
    static viewAll(){
        Article.find()
        .exec()
        .then(data=>{
            res.status(200).send({
                message:'this is list of article',
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
        let article = {
            title:req.body.title,
            body:req.body.body,
            userId:req.body.userId
        }
        Article.create(article)
        .then(data=>{
            res.status(200).json({
                message:'article has been created',
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

    static udpate(){
        let target = {
            _id:req.params.id
        }
        let objUpdate = {
            title:req.body.article,
            body:req.body.body
        }
        Article.findByIdAndUpdate(objUpdate,target)
        .exec()
        .then(data=>{
            res.status(200).json({
                message:'article updated successfully',
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

    static delete(){
        let target = {
            _id:req.params.id
        }
        Article.findOneAndRemove(target)
        .exec()
        .then(data=>{
            res.status(200).json({
                message:'article removed successfully',
                data
            })
        })
    }
}