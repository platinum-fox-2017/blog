const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const app = require('../app')
chai.use(chaiHttp)

const baseUrl = 'http://localhost:3000'

describe('API /articles' , () => {

    const dummy = {
        title: 'Crescendo 101',
        body: "It's a new dawn, it's a new day, I'm feeling good",
        user: 'bcaepoih3515'
    }
    const dummyId = '5aaf7bb8124b011359b37bb6'
    const deleteId= '5aaf82c8ce8db314e244db40'

    describe('GET /articles', () => {
        it('retrieve articles', done => {
            chai.request(app)
            .get('/articles')
            .end((err, res) => {
                // console.log(res)
                expect(res).to.have.status(200)
                expect(res).to.be.an('object')
                expect(res.body).to.have.own.property('message').to.include('Retrieved articles successfully')
                expect(res.body.articles).to.be.an('array')
                done()
            })
        })
    }),
    describe('POST /articles', () => {
        it('add new article', done => {
            chai.request(app)
            .post('/articles')
            .send(dummy)
            .end((err, res) => {
                // console.log(res)
                expect(res).to.have.status(200)
                expect(res).to.be.an('object')
                expect(res.body).to.have.own.property('message').to.include('Article created')
                expect(res.body).to.have.own.property('articles').to.include.an('object')
                expect(res.body.articles).to.include.keys('_id','title', 'body', 'created_date')
                done()
            })
        })
    }),
    describe('PUT /articles/:id', () => {
        it('updates article', done => {
            chai.request(app)
            .put(`/articles/${dummyId}`)
            .send({
                title: 'bisa gaol aja for teens',
                body: 'belajar ya nak'
            })
            .end((err, res) => {
                // console.log(res)
                expect(res).to.have.status(200)
                expect(res).to.be.an('object')
                expect(res.body).to.have.own.property('message').to.include('Article successfully updated')
                expect(res.body).to.have.own.property('data').to.include.an('object')
                expect(res.body.data).to.include.keys('_id','title', 'body', 'created_date')
                done()
            })
        })
    })
    describe('DELETE /articles/:id', () => {
        it('deletes article', done => {
            chai.request(app)
            .delete(`/articles/${deleteId}`)
            .end((err, res) => {
                // console.log(res)
                expect(res).to.have.status(200) 
                expect(res).to.be.an('object')
                expect(res.body).to.have.own.property('message').to.include('Record sucessfully deleted')
                expect(res.body).to.have.own.property('data').to.include.an('object')
                expect(res.body.data).to.include.keys('_id','title', 'body', 'created_date')
                done()
            })
        })
    })
})