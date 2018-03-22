const chai      = require('chai')
const chaiHttp  = require('chai-http')
const mongoose  = require('mongoose')
const app       = require('../app')

chai.use(chaiHttp)
chai.should()

// before(function(done) {
//   if (mongoose.connection.db) return done()
//   mongoose.connect('mongodb://localhost:27017/blog', done)
// })

describe('RESET/SIGNUP /api/users/signup', function() {
  // it('clear all user'), function(done) {
  //   chai.request(app) 
  //   .delete('/api/users/reset')
  //   .end(function(err, res) {
  //     res.status.should.equal(200)
  //     done()
  //   })
  // }

  // it('create new user', function(done) {
  //   // this.timeout(10000)
  //   var retype_pass = 'password'
  //   chai.request(app)
  //   .post('/api/users/signup')
  //   .send({
  //     'username'    : 'admin2',
  //     'password'    : 'password'
  //   })
  //   .end(function(err, res) {
  //     // console.log('Test Res ====> ', res);

  //     // res.status.should.equal(400)
  //     // res.body.error.should.equal('User validation failed: username: Username admin already register !!')

  //     res.status.should.equal(200)
  //     // res.body.user.username.should.be.a('string')
  //     // res.body.user.password.should.equal(retype_pass)
  //     // res.body.user.password.should.have.lengthOf(60)
  //     done()
  //   })
  // })
})

// describe('SIGNIN /api/users/signin', function() {
//   it('signin user', function(done) {
//     chai.request(app)
//     .post('/api/users/signin')
//     .send({
//       'username'    : 'admin',
//       'password'    : 'password'
//     })
//     .end(function(err, res) {
//       res.status.should.equal(200)
//       // console.log('JWT Token ==> ', res.body.token);
//       res.body.token.should.exist
//       done()
//     })
//   })
// })
