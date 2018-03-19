const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

// const app = require('../app');
const app = 'localhost:3000';

let login = {
    email: 'email@gmail.com',
    password: '12345'
}

var articleid;

describe('Index API', () => {
    it('Login', (done) => {
        chai.request(app)
        .post('/login')
        .send(login)
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.ownProperty('apptoken')
                .to.be.a('string');
            done()
        })
    })
})