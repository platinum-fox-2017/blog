'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

const app = 'http://localhost:3000/api';

chai.use(chaiHttp);
const expect = chai.expect;

const dummyData = {
  title: 'Mengejar cinta',
  author: 'Ardhiansya Putra',
  content: 'Aku jatuh bangun mencintamu'
}

const dummyId = '5aaf7cf62d27ac04c19ea76e';

describe('API /articles', () => {
  describe('GET /articles', () => {
    it('get all articles list', (done) => {
      chai.request(app)
          .get('/articles')
          .end((err, res) => {
            if(!err){
              expect(res.body).to.be.an('object');
              expect(res.body).to.have.property('message');
              expect(res.body).to.have.property('data');
              expect(res.body.data).to.be.an('array');
              done();
            }
          })
    })
  })

  describe('POST /articles', () => {
    it('post article', (done) => {
      chai.request(app)
          .post('/articles')
          .send(dummyData)
          .end((err, res) => {
            // console.log(res.body)
            if(!err){
              expect(res).to.have.status(201);
              expect(res.body).to.be.an('object');
              expect(res.body).to.have.property('message').to.include('succeed to create new article');
              expect(res.body).to.have.property('data').to.be.an('object');
              expect(res.body.data).to.include.keys('title','author','_id','createdAt','updatedAt','content')
              done();
            }
          })
    })
  })

  describe('PUT /articles', () => {
    it('update an article', (done) => {
      chai.request(app)
          .put(`/articles/${dummyId}`)
          .send(dummyData)
          .end((err, res) => {
            // console.log(res.body)
            if(!err){
              expect(res).to.have.status(200);
              expect(res.body).to.be.an('object');
              expect(res.body).to.have.property('message').to.include('succeed update article data');
              expect(res.body).to.have.property('data').to.be.an('object');
              expect(res.body.data).to.have.any.keys('title','author','_id','createdAt','updatedAt')
              done();
            }
          })
    })
  })

  describe('DELETE /articles', () => {
    it('delete an article', (done) => {
      chai.request(app)
          .put(`/articles/${dummyId}`)
          .end((err, res) => {
            // console.log(res.body)
            if(!err){
              expect(res).to.have.status(200);
              expect(res.body).to.be.an('object');
              expect(res.body).to.have.property('message').to.include('succeed update article data');
              expect(res.body).to.have.property('data').to.be.an('object');
              expect(res.body.data).to.include.keys('title','author','_id','createdAt','updatedAt')
              done();
            }
          })
    })
  })
})
