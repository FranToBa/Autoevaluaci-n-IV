const request = require('supertest')
const app = require('./ej2.js')

describe("PUT /menu/:plato", function() {
  it('should show the subject', function (done) {
    request(app)
      .put('/menu/sopa')
      .expect('Content-Type', /json/)
      .expect(200,done)
      .end(function(err,res) {
        if(err){
          return done(err);
        }
        expect(res.body.mensaje).to.be('Se ha añadido al menu el plato sopa');
        return done();
      });

  });
});

describe('GET /', function() {
  it('should shows a json', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err,res) {
        if(err){
          return done(err);
        }
        expect(res.body.mensaje).to.be('Página de inicio');
        return done();
      });
  });
});

describe('GET /hola', function() {
  it('should shows a json', function(done) {
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
  it('should shows a json', function(done) {
    request(app)
      .get('/menu')
      .expect('Content-Type', /json/)
      .expect(200)
  });
});
