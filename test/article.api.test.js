const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;
const app = process.env.BASE_URL;

describe('API /articles', () => {
    let id = null;
    const article = {
        title: 'Belajar Javascript',
        description: 'Belajar Javascript di Hactiv8'
    };

    describe('POST /articles', () => {
        it('#SUCCESS Post New Article', done => {
            chai.request(app)
                .post('/articles')
                .type('form')
                .send(article)
                .end((err, res) => {
                    id = res.body.data._id;

                    expect(err).to.be.null;
                    expect(res).to.have.status(201);
                    expect(res.body).haveOwnProperty('message').to.be.a('string').equal('Insert new article success');
                    expect(res.body).haveOwnProperty('data').to.be.an('object').contains({
                        _id: article._id,
                        title: article.title,
                        description: article.description
                    });
                    done();
                });
        });
    });

    describe('GET /articles', () => {
        it('#SUCCESS Get All Article', done => {
            chai.request(app)
                .get('/articles')
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).haveOwnProperty('message').to.be.a('string').equal('Get all article success')
                    expect(res.body).haveOwnProperty('data').to.be.an('array');
                    done();
                });
        });
    });

    describe('PUT /articles/:id', () => {
        it('#SUCCESS Edit Article', done => {
            chai.request(app)
                .put(`/articles/${ id }`)
                .type('form')
                .send({
                    title: 'Belajar jadi Fullstack engineer'
                })
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).haveOwnProperty('message').to.be.a('string').equal('Update article success');
                    expect(res.body).haveOwnProperty('data').to.be.an('object').contains({
                        _id: article._id,
                        title: article.title,
                        description: article.description
                    });
                    done();
                });
        });
    });

    describe('DELETE /articles/:id', () => {
        it('#SUCCESS Delete Article', done => {
            chai.request(app)
                .delete(`/articles/${ id }`)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body.message).to.be.a('string').equal('Delete article success');
                    done();
                });
        });
    });
});