const express = require('express')
const app = express()
const Menu = require('./menu')
const port = 5000;


var pedidos = []
var carta = new Menu();


// Devuelve un mensaje de bienvenida
app.get('/', function(req, res) {
  res.send( JSON.stringify("Bienvenido a la paǵina de inicio de CloudFood") )
});

/* Permite la consulta de todos los platos o de platos según su tipo.*/
app.get('/carta', function(req, res) {
	res.send({'Entrantes': carta.mostrarEntrantes(), 'Principales': carta.mostrarPlatos(), 'Postres': carta.mostrarPostres()});
	
});


/* Permite la creacion de un menu */
app.put('/menu/:entrante/:plato/:postre', function(req, res) {
    var entrante = req.params.entrante
    var plato = req.params.plato
    var postre = req.params.postre
    try{
	  let menu = new Menu();
          menu.setPlatos(entrante, plato, postre)
	  pedidos.push(menu); 
          res.status(201).send( {'Menu añadido': menu.mostrarMenuSeleccionado(), 'ID': pedidos.indexOf(menu)  } );
    } catch (error){
            res.status(400).send( error.message )
    }
           
});

/* Permite consultar el menu seleccionado */
app.get('/menu/:id', function(req, res) {
    var id = req.params.id
    var menu = pedidos[id]
    if( menu && menu != "Borrado" ){
    	res.send( {'Menu seleccionado': menu.mostrarMenuSeleccionado() } );
    }else{
	res.status(400).send( "El id no corresponde a ningún menú." )	
    }
});


app.listen(port, () => {
    console.log('Escuchando el puerto ' + port);
})




module.exports = app
