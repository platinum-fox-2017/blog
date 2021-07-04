const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const app = require('../app')

chai.use(chaiHttp)
const baseURL = 'http//localhost:3000/api'

describe('API Article', () => {
  const sample = {
    title: 'belajar programming',
    description: 'javascript dkk'
  }

  const forUpdate = {
    title: 'belajar Coding',
    description: 'Vuex dkk'
  }
 
  let idArticle = '5ab357193876662321f05151';
  let idArticleDelete = '5ab34a251cf37512c663e957';

  describe('GET / Article', () => {
    it('Get All Article Data', (done) => {
      chai.request(app)
      .get('/api/article')
      .end((req, res) => {
        expect(res).to.have.status(200)
        expect(res).to.be.an('object')
        done()
      })
    })
  })

  describe('POST / Article', () => {
    it('Create Article', (done) => {
      chai.request(app)
      .post('/api/article')
      .send(sample)
      .end((req, res) => {
        expect(res).to.have.status(201);
        expect(res.body.message).to.be.a('string')
        done()
      })
    })
  })

  describe('PUT / Article', () => {
    it('Update Article', (done) => {
      chai.request(app)
      .put(`/api/article/${idArticle}`)
      .send(forUpdate)
      .end((req, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.be.a('string')
        done()
      })
    })
  })

  describe('DELETE / Article', () => {
    it('Delete Article', (done) => {
      chai.request(app)
      .delete(`/api/article/${idArticleDelete}`)
      .end((req, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.an('object')
        expect(res.body).to.have.own.property('message').to.include('article deleted')
        done()
      })
    })
  })
})
