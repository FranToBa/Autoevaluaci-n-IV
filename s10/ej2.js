const express = require('express')
const app = express()
const port = process.env.port || 8080

var usuario = 'Fran'
var menu = []

app.get('/', function(req, res) {
  res.send({ mensaje: 'Página de inicio'})
});

app.get('/hola', function(req, res) {
  res.send({ mensaje: 'Hola ' + usuario})
});

app.put('/menu/:plat', function(req, res) {
  var plato = req.params.plat
  menu.push(plato)
  res.send({ mensaje: 'Se ha añadido al menu el plato ' + plato})
});

app.get('/menu', function(request, response) {
    response.send( {menu} );
});


app.listen(port, function() {
  console.log('Escuchando el puerto ' + port);
});

module.exports = app
