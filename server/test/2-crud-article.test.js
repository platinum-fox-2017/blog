const chai      = require('chai')
const chaiHttp  = require('chai-http')
const app       = require('../app.js')

chai.use(chaiHttp)
chai.should()

var articleId

describe('ARTICLES /api/articles', function() {
  it('create new article', function(done) {
    chai.request(app)
    .post('/api/articles')
    .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YThhY2VhYzdkMDNiODBmMmIxYzhlMDIiLCJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTE5MDQ2MzE2fQ.G3_ZMWrqC7TOYGkJIx2qrqCVi7Jasx4rlBHabz9tTCY')
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
    .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YThhY2VhYzdkMDNiODBmMmIxYzhlMDIiLCJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTE5MDQ2MzE2fQ.G3_ZMWrqC7TOYGkJIx2qrqCVi7Jasx4rlBHabz9tTCY')
    .end(function(err, res) {
      res.status.should.equal(200)
      res.body.article[0].title.should.equal('Breaking New Post')
      done()
    })
  })

  it('update article', function(done) {
    chai.request(app)
    .put(`/api/articles/${articleId}`)
    .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YThhY2VhYzdkMDNiODBmMmIxYzhlMDIiLCJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTE5MDQ2MzE2fQ.G3_ZMWrqC7TOYGkJIx2qrqCVi7Jasx4rlBHabz9tTCY')
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
    .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YThhY2VhYzdkMDNiODBmMmIxYzhlMDIiLCJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTE5MDQ2MzE2fQ.G3_ZMWrqC7TOYGkJIx2qrqCVi7Jasx4rlBHabz9tTCY')
    .end(function(err, res) {
      // console.log('res body ====> ', res.body);
      res.status.should.equal(200)
      done()
    })
  })
})
