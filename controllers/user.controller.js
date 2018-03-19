const User = require('../models/user.model');
const hash = require('../middlewares/hash.middleware');
const token = require('../middlewares/token.middleware');

module.exports = {
    insert: (req, res) => {
        let user = new User({
            name: req.body.name,
            password: hash.generate(req.body.password),
            email: req.body.email
        });

        user.save(err => {
            if(err) return res.status(500).send({ message: err });

            return res.status(201).send({
                message: 'Insert new user success',
                data: user
            });
        });
    },

    login: (req, res) => {
        User.findOne({ email: req.body.email }, (err, user) => {
            if(err) return res.status(500).send({ message: err });
            
            if (user && hash.compare(req.body.password, user.password)) 
                return res.status(200).send({
                    message: 'Login success',
                    token: token.generate({
                        id: user._id,
                        name: user.name,
                        email: user.email
                    })
                });
            else return res.status(401).send({
                message: 'Login gagal'
            })
        })
    }
};