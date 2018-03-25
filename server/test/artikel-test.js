const chai = require('chai')
const chaihttp = require('chai-http')

chai.use(chaihttp)
const expect = chai.expect;
const server = 'http://localhost:3000'

describe('Api Artikel',() => {
  const dummy = {
    title:'pelajaran untuk anak hacktiv',
    content :'belajar test drive development dengan mokacai'
  }
  //
  const deleteid = '5ab06593511d3849da2da944'
  describe('GET /artikel',() => {
    it('untuk cek artikel yang ditampilkan ke daftar',done => {
      chai.request(server)
      .get('/artikel')
      .end((err,res) => {
        // console.log(res);
        expect(res).to.have.status(200)
        expect(res.body.message).to.be.a('string').equal('data ditampilkan')
        expect(res.body.articles).to.be.an('array')
        done()
      })
    })
  }),

  describe('POST /artikel',() => {
    it('untuk menambah artikel ke daftar',(done) => {
      chai.request(server)
      .post('/artikel')
      .send(dummy)
      .end((err,res) => {
        expect(res).to.have.status(200)
        expect(res.body.message).to.be.a('string').equal('data berhasil di input')
        expect(res.body).to.have.own.property('articles').to.include.a('object')
        expect(res.body.articles).to.include.keys('_id','title','content')
        done()
      })
    })
  }),

  describe('PUT /artikel',() => {
    it('untuk update artikel berdasarkan id', (done) => {
      chai.request(server)
      .put(`/artikel/${deleteid}`)
      .send({
        title:'mampus lu gue update',
        content : 'gue lagi update content please jangan di ganggu'
      })
      .end((err,res) => {
        console.log(res);
        expect(res).to.have.status(200)
        expect(res.body.message).to.be.a('string').equal('data berhasil di update')
        done()
      })
    })
  }),

  describe('DELETE /artikel',() => {
    it('untuk delete artikel berdasarkan id', (done) => {
      chai.request(server)
      .delete(`/artikel/${deleteid}`)
      .end((err,res)=>{
        expect(res).to.have.status(200)
        done()
        expect(res.body.message).to.be.a('string').equal('data berhasil di delete')
      })
    })
  })

})
