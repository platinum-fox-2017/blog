'use strict'

const jwt = require('jsonwebtoken');
const User = require('../models/User')

module.exports = {
    verify: (req, res, next) => {
        try {
            let decoded = jwt.verify(req.headers.apptoken, process.env.JWT);
            User
                .findById(decoded.id)
                .then((user) => {
                    if(user) {
                        next()
                    } else {
                        throw new Error('Bad Authentication')
                    }
                })
        } catch(err) {
            res.status(500).json({
                message: 'Bad Authentication',
                err
            })
        }
    }
}