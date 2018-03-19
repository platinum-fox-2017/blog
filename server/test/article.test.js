const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

// const app = require('../app');
const app = 'localhost:3000';

let article = {
    title: 'Test Title',
    description: 'Lorem Ipsum',
    author: 'H8'
}

let articleUpdate = {
    title: 'Little Princess',
    description: 'The litle kid who try to protect his flower',
    author: 'Antoine de Saint-Exupéry'
}

var articleid;

describe('Article API', () => {
    it('POST /articles', (done) => {
        chai.request(app)
        .post('/articles')
        .type('form')
        .send(article)
        .end((err, res) => {
            expect(res).to.have.status(201);            
            expect(res.body).to.ownProperty('message')
                .to.be.a('string')
                .eql('Article Successfully Created');
            expect(res.body).to.ownProperty('articles')
                .to.be.a('object');
            expect(res.body.articles).to.ownProperty('title')
                .to.be.a('string')
                .eql(article.title);
            expect(res.body.articles).to.ownProperty('description')
                .to.be.a('string')
                .eql(article.description);
            expect(res.body.articles).to.ownProperty('author')
                .to.be.a('string')
                .eql(article.author);
            expect(res.body.articles).to.ownProperty('_id')
                .to.be.a('string');
            articleid=res.body.articles._id;
            done();
        })
    });
    
    it('Get /articles', (done) => {
        chai.request(app)
        .get('/articles')
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.ownProperty('articles')
                .to.be.an('array')
                .to.have.lengthOf(1);
            done();
        })
    });

    it('Put /articles', (done) => {
        chai.request(app)
        .put('/articles')
        .set('articleid', articleid)
        .send(articleUpdate)
        .end((err, res) => {
            expect(res).to.have.status(200);            
            expect(res.body).to.ownProperty('message')
                .to.be.a('string')
                .eql('Article Successfully Updated');
            done();
        })
    })

    it('Delete /articles', (done) => {
        chai.request(app)
        .delete('/articles')
        .set('articleid', articleid)
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body.message)
                .to.be.a('string')
                .eql('Article deleted');
            done();
        })
    })
})