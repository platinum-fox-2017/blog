const Article = require('../models/article.model');

module.exports = {
    findAll: (req, res) => {
        Article.find((err, article) => {
            if(err) res.status(500).send({ message: err });

            res.status(200).send({
                message: 'Get all article success',
                data: article
            });
        });
    },

    findById: (req, res) => {
        Article.findById(req.params.id, (err, article) => {
            if(err) res.status(500).send({ message: err });

            res.status(200).send({
                message: 'Get article success',
                data: article
            });
        });
    },

    insert: (req, res) => {
        let article = new Article({
            title: req.body.title,
            description: req.body.description
        });
        
        article.save(err => {
            if(err) res.status(500).send({ message: err });

            res.status(201).send({
                message: 'Insert new article success',
                data: article
            });
        });
    },

    update: (req, res) => {
        Article.findByIdAndUpdate(req.params.id, {
            title: req.body.title
        }, (err, article) => {
            if(err) res.status(500).send({ message: err });

            res.status(200).send({
                message: 'Update article success',
                data: article
            });
        })
    },

    drop: (req, res) => {
        Article.findByIdAndRemove(req.params.id, (err, article) => {
            if(err) res.status(500).send({ message: err });

            res.status(200).send({
                message: 'Delete article success'
            });
        })
    }
}