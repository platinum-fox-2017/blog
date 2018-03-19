'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');

const app = 'http://localhost:3000/api';

chai.use(chaiHttp);
const expect = chai.expect;

describe('API /users', () => {
  describe('SIGNIN /users', () => {
    it('sign in for user', done => {
      chai.request(app)
        .post('/users/signin')
        .send({
          username: 'fadhilmch',
          password: '1234'
        })
        .end((err, res) => {
          if(!err){
            // console.log(res.body);
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message').to.include('succeed to sign in');
            expect(res.body).to.have.property('token').to.be.a('string');
            expect(res.body).to.have.property('data').to.be.an('object').to.include.keys('_id','username','password','name','email');
          }
          done();
        })
    })
  })

  describe('SIGNUP /users', () => {
    it('sign up for user', done => {
      chai.request(app)
        .post('/users/signup')
        .send({
          username: 'fadhilmch23d3',
          password: '1234',
          name: 'Fadhil Mochammad',
          email: 'fadhilmch103d@gmail.com'
        })
        .end((err, res) => {
          if(!err){
            console.log(res.body);
            expect(res).to.have.status(201);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('message').to.include('succeed create new account');
            expect(res.body).to.have.property('token').to.be.a('string');
            expect(res.body).to.have.property('data').to.be.an('object').to.include.keys('_id','username','password','name','email');
          }
          done();
        })
    })
  })
})
