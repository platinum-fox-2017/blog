const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const app = require('../app')
chai.use(chaiHttp)



describe('API /articles' , () => {
    describe('GET /articles', () => {
        it('retrieve articles', done => {
            chai.request(app)
            .get('/articles')
            .end((err, res) => {
                expect(res).to.have.status(200)
            })
        })
    }),
    describe('POST /articles', () => {
        it('add new article', done => {
            chai.request(app)
            .post('/articles')
            .end((err, res) => {
                expect(res).to.have.status(200)
            })
        })
    }),
    describe('UPDATE /articles', () => {
        it('updates article', done => {
            chai.request(app)
            .update('/articles')
            .end((err, res) => {
                expect(res).to.have.status(200)
            })
        })
    }),
    describe('DELETE /articles', () => {
        it('deletes article', done => {
            chai.request(app)
            .delete('/articles')
            .end((err, res) => {
                expect(res).to.have.status(200)
            })
        })
    })
})