const request = require('supertest')
const app = require('../ej2.js')

describe("PUT /menu/:plat", function() {
  it('debe incluir un plato', function (done) {
    request(app)
      .put('/menu/sopa')
      .expect('Content-Type', /json/)
      .expect(200,done)
  });
});

describe('GET /', function() {
  it('mostrar pagina principal', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)

  });
});

describe('GET /hola', function() {
  it('mostrar saludo', function(done) {
    request(app)
      .get('/bienvenida')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err,res) {
        if(err){
          return done(err);
        }
        expect(res.body.mensaje).to.be.equal('Hola Fran');
        return done();
       });
  });
});

describe('GET /menu', function() {
  it('mostrar platos del menu', function(done) {
    request(app)
      .get('/menu')
      .expect('Content-Type', /json/)
      .expect(200)
  });
});

