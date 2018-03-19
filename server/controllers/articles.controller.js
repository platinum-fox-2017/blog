'use strict'

const Article = require('../models/article');

module.exports = {
    articleReadAll: (req, res) => {
        Article
            .find()
            .exec()
            .then((response) => {
                res.status(200).json({
                    articles:response
                });
            })
            .catch((err) => {
                res.status(500).send(err);
            })
    },

    articleCreate: (req, res) => {
        let newArticle = new Article({
            title: req.body.title,
            description: req.body.description,
            author: req.body.author
        });
        newArticle
            .save()
            .then((response) => {
                res.status(201).json({
                    message: 'Article Successfully Created',
                    articles: response                    
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: 'Error Creating Article!!',
                    err
                });
            })
        
    },

    articleUpdate: (req, res) => {
        Article
            .findById(req.headers.articleid)
            .then((article) => {
                let updateValue = {
                    title: req.body.title || article.title,
                    description: req.body.description || article.description,
                    author: req.body.author || article.author
                }
                Article
                    .update(
                        { _id: article._id},
                        {$set: updateValue}
                    )
                    .then((response) => {
                        return res.status(200).json({
                            message: "Article Successfully Updated",
                            articles: response
                        })
                    })
                    .catch((err) => {reject()})
            })
            .catch((err) => {
                res.status(500).json({
                    message: 'Error!!',
                    err
                });
            })
    },

    articleDelete: (req, res) => {
        Article
            .remove({_id: req.headers.articleid})
            .then((response) => {
                res.status(200).json({
                    message: 'Article deleted',
                    response
                })
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    }
}