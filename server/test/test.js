const chai      = require('chai')
const chaiHttp  = require('chai-http')
const mongoose  = require('mongoose')
const app       = require('../app')

chai.use(chaiHttp)
chai.should()

var token = null

before(function(done) {
  if (mongoose.connection.db) return done()
  mongoose.connect('mongodb://localhost:27017/blog', done)
})

describe('USER RESET/SIGNUP /api/users/signup', function() {
  it('delete all user', function(done) {
    chai.request(app)
    .delete('/api/users/reset')
    .end(function(err, res) {
      res.status.should.equal(200)
      done()
    })
  })


  it('create new user', function(done) {
    // this.timeout(10000)
    var retype_pass = 'password'
    chai.request(app)
    .post('/api/users/signup')
    .send({
      'username'    : 'admin',
      'password'    : 'password'
    })
    .end(function(err, res) {
      res.status.should.equal(200)
      res.body.user.username.should.be.a('string')
      res.body.user.password.should.equal(retype_pass)
      // res.body.user.password.should.have.lengthOf(60)
      done()
    })
  })
})

describe('SIGNIN /api/users/signin', function() {
  it('signin user', function(done) {
    chai.request(app)
    .post('/api/users/signin')
    .send({
      'username'    : 'admin',  
      'password'    : 'password'
    })
    .end(function(err, res) {
      res.status.should.equal(200)
      token = res.body.token
      // console.log(token)
      res.body.token.should.exist
      done()
    })
  })
})

describe('ARTICLES /api/articles', function() {
  it('create new article', function(done) {
    chai.request(app)
    .post('/api/articles')
    .set('token', token)
    .send({
      'title'   : 'Breaking New Post',
      'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    })
    .end(function(err, res) {
      // console.log('res body ====> ', res.body);
      articleId = res.body.article._id
      res.status.should.equal(200)
      res.body.article._id.should.be.a('string')
      res.body.article.title.should.equal('Breaking New Post')
      done()
    })
  })

  it('get all article', function(done) {
    chai.request(app)
    .get('/api/articles')
    .set('token', token)
    .end(function(err, res) {
      // console.log(res.body.articles[0])
      res.status.should.equal(200)
      res.body.articles[0].title.should.equal('Breaking New Post')
      done()
    })
  })

  it('update article', function(done) {
    chai.request(app)
    .put(`/api/articles/${articleId}`)
    .set('token', token)
    .send({
      'title'   : 'Breaking Updating Post',
    })
    .end(function(err, res) {
      // console.log('res body ====> ', res.body);
      res.status.should.equal(200)
      res.body.article._id.should.be.a('string')
      res.body.article.title.should.equal('Breaking Updating Post')
      done()
    })
  })

  it('delete article', function(done) {
    chai.request(app)
    .delete(`/api/articles/${articleId}`)
    .set('token', token)
    .end(function(err, res) {
      // console.log('res body ====> ', res.body);
      res.status.should.equal(200)
      done()
    })
  })
})
