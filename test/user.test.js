const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const app = require('../app')
chai.use(chaiHttp)

const baseUrl = 'http://localhost:3000'

describe('API /users' , () => {

    const registerdummy = {
        username: 'chucknorris',
        email: 'google@norris.com',
        password: 'roundhousekick'
    }

    const logindummy = {
        username: 'herbyherado',
        password: 'herbyherby',
    }

    const dummyId = '5aaf91186bd619187365cfcf'

    describe('POST /users/register', () => {
        it('Register new user', done => {
            chai.request(app)
            .post('/users/register')
            .send(registerdummy)
            .end((err, res) => {
                // console.log(res)
                expect(res).to.have.status(200)
                expect(res).to.be.an('object')
                expect(res.body).to.have.own.property('message').to.include('User succesfully created')
                expect(res.body.data).to.include.keys('_id','username', 'email', 'password')
                expect(res.body.data.article).to.be.an('array')
                done()
            })
        })
    }),
    describe('POST /users/login', () => {
        it('Login user', done => {
            chai.request(app)
            .post('/users/login')
            .send(logindummy)
            .end((err, res) => {
                // console.log(res)
                expect(res).to.have.status(200)
                expect(res).to.be.an('object')
                expect(res.body).to.have.own.property('message').to.include('Login success')
                expect(res.body).to.have.own.property('token').to.be.a('string')
                done()
            })
        })
    })
})