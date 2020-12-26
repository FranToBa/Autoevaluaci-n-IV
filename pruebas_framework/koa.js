const Koa = require('koa')
const Router = require('koa-router')
var Menu = require('./menu');
const app = new Koa();
const router = new Router();

var pedidos = []
var carta = new Menu();

router.get('/', (ctx) => {
  ctx.status = 200;
  ctx.body = {
    mensaje: 'Bienvenido a la paǵina de inicio de CloudFood'
  }
});

router.get('/carta', (ctx) => {
  ctx.status = 200;
  ctx.body = {
    'Entrantes': carta.mostrarEntrantes(), 'Principales': carta.mostrarPlatos(), 'Postres': carta.mostrarPostres()
  }
});

router.put('/menu/:entrante/:plato/:postre', (ctx) => {
  var entrante = ctx.params.entrante;
  var plato = ctx.params.plato;
  var postre = ctx.params.postre;
  var menu = new Menu();
  menu.setPlatos(entrante, plato, postre)
  pedidos.push(menu); 
  ctx.status = 201;
  ctx.body = {
  'Menu añadido': menu.mostrarMenuSeleccionado(), 'ID': pedidos.indexOf(menu)  
  }
});

//prueba para saber que todo funciona correctamente
router.get('/menu/:id', (ctx) => {
  var id = ctx.params.id;
  var menu = pedidos[id]
  ctx.status = 200;
  ctx.body = {
    'Menu seleccionado': menu.mostrarMenuSeleccionado() 
  }
});


app.use(router.allowedMethods());
app.use(router.routes());
app.listen(8080);
console.log('Server listening on port 8080');

module.exports = app;
