const chai = require('chai');
const chaiHttp = require('chai-http');

/**
 * create token middleware
 */
const token = require('../middlewares/token.middleware');


chai.use(chaiHttp);

const expect = chai.expect;
const app = process.env.BASE_URL;

describe('API /users', () => {
    let id = null;
    const user = {
        name: 'user test',
        password: '1213',
        email: 'user@mail.com'
    };

    describe('POST /users', () => {
        it('#SUCCESS Post New User', done => {
            chai.request(app)
                .post('/users')
                .type('form')
                .send(user)
                .end((err, res) => {
                    id = res.body.data._id;

                    expect(err).to.be.null;
                    expect(res).to.have.status(201);
                    expect(res.body).haveOwnProperty('message').to.be.a('string').equal('Insert new user success');
                    expect(res.body).haveOwnProperty('data').to.be.an('object').contains({
                        _id: user._id,
                        name: user.name,
                        password: user.password,
                        email: user.email
                    });
                    done();
                });
        });
    });

    describe('POST /login', () => {
        it('#SUCCESS Login user', done => {
            chai.request(app)
                .post('/login')
                .type('form')
                .send({
                    email: user.email,
                    password: user.password
                })
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).haveOwnProperty('message').to.be.a('string').equal('Login success');
                    expect(res.body).haveOwnProperty('headers').to.be.an('object').contains({
                        token: token.generate({
                            id: id,
                            ...user
                        })
                    });
                    done();
                });
        });

        it('#ERROR Login user', done => {
            chai.request(app)
                .post('/login')
                .type('form')
                .send({
                    email: '',
                    password: ''
                })
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(401);
                    expect(res.body).haveOwnProperty('message').to.be.a('string').equal('Login gagal');
                    done();
                });
        });
    });
});