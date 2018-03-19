const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs');

const should = chai.should();
chai.use(chaiHttp);

const app = 'http://localhost:3000'
const userId = 'placeholder'
const articleId = 'placeholder'

describe('API /article', () => {

  describe('GET /article/user/:userId', () => {
    it('should return all users recent articles, limit 10', (done) => {
      chai.request(app)
        .get(`/article/user/${userId}`)
        .end(function (err, res) {
           should.not.exist(err);
           res.should.have.status(200);
           should.exist(res);
           res.should.be.an('object');
           res.should.have.property('message');
           res.should.have.property('articles');
           res.message.should.be.a('string');
           res.articles.should.have.lengthOf.below(11);
           done()

           // status should be 200
           // data should be an object
           // data should have property message
           // data.message should be a string
           // data should have property articles
           // data.articles should have lengthof below 11
        });
    })
  })

  describe('POST /article/post/:userId', () => {
    it('should send article data as users, data should match, default should exist', (done) => {
      let send = {
        title : 'PH Title',
        text : 'lorem ipsum stuff over here',
      };
      chai.request(app)
        .post(`/article/post/${userId}`)
        .type('form')
        .attach('field', fs.readFileSync('test.png'), 'test.png')
        .send(send)
        .end(function (err, res) {
           should.not.exist(err);
           res.should.have.status(201);
           should.exist(res);
           res.should.be.an('object');
           res.should.have.property('message');
           res.should.have.property('newArticle');
           res.message.should.be.a('string');
           res.newArticle.should.be.an('object');
           res.newArticle.should.have.property('title');
           res.newArticle.should.have.property('text');
           res.newArticle.should.have.property('imgUrl');
           res.newArticle.title.should.be.equal(send.title)
           res.newArticle.text.should.be.equal(send.text)
           done()
        });

      // status should be 201
      // data should be an object
    })
  })

  describe('PUT /article/edit/:articleId', () => {
    it('data send should match output sent by server', (done) => {
      let update = {
        title : 'PH Title',
        text : 'lorem ipsum stuff over here',
      };
      chai.request(app)
        .put(`/article/edit/${userId}`)
        .type('form')
        .attach('field', fs.readFileSync('test.png'), 'test.png')
        .send(update)
        .end(function (err, res) {
           should.not.exist(err);
           res.should.have.status(200);
           should.exist(res);
           res.should.be.an('object');
           res.should.have.property('message');
           res.should.have.property('updatedArticle');
           res.message.should.be.a('string');
           res.updatedArticle.should.be.an('object');
           res.updatedArticle.should.have.property('title');
           res.updatedArticle.should.have.property('text');
           res.updatedArticle.should.have.property('imgUrl');
           res.updatedArticle.title.should.be.equal(send.title)
           res.updatedArticle.text.should.be.equal(send.text)
           done()
        });
    })
  })

  describe('DELETE /article/delete/:articleId', () => {
    it('data send should match output sent by server', (done) => {
      chai.request(app)
        .put(`/article/delete/${articleId}`)
        .end(function (err, res) {
           should.not.exist(err);
           res.should.have.status(200);
           should.exist(res);
           res.should.be.an('object');
           res.should.have.property('message');
           res.message.should.be.a('string');
           done()
        });
    })
  })

})


describe('API /user', () => {

  describe('GET /user', () => {

  })

  describe('POST /user/post', () => {
    
  })

  describe('PUT /user/edit', () => {

  })

  describe('DELETE /user/delete', () => {

  })

})
