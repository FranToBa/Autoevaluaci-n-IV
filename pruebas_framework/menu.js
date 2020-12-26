//Simulamos enums sobre los tipos de platos
const ENTRANTES = ['Sopa','Pasta','Ensalada']
ENTRANTES['Sopa'] = 2.5;
ENTRANTES['Pasta'] = 3.0;
ENTRANTES['Ensalada'] = 2.0;
Object.freeze(ENTRANTES);

const PLATOS = ['Pescado','Carne','Arroz']
PLATOS['Pescado'] = 4.5;
PLATOS['Carne'] = 5.0;
PLATOS['Arroz'] = 4.0;
Object.freeze(PLATOS);


const POSTRES = ['Tarta','Brownie','Fruta']
POSTRES['Tarta'] = 1.5;
POSTRES['Brownie'] = 2.0;
POSTRES['Fruta'] = 1.0;
Object.freeze(POSTRES);

class Menu {

    /*Constructor en el que comprobamos que se seleccionan platos disponibles*/
    constructor(){
	this.entrante = null;
	this.plato = null;
	this.postre = null;

    }

    setEntrante(entrante){
	if(ENTRANTES.includes(entrante)){
		this.entrante = entrante;
	}else{	
		throw new Error("Entrante no disponible");
	}
    }
    setPrincipal(plato){
	if(PLATOS.includes(plato)){
		this.plato = plato;
	}else{	
		throw new Error("Plato principal no disponible");
	}
    }
    setPostre(postre){
	if(POSTRES.includes(postre)){
		this.postre = postre;
	}else{	
		throw new Error("Postre no disponible");
	}
    }

    setPlatos(entrante, plato, postre){
	if(ENTRANTES.includes(entrante)){
		this.entrante = entrante;
	}else{	
		this.entrante = null;
		this.plato = null;
		this.postre = null;
		throw new Error("Entrante no disponible");
	}

	if(PLATOS.includes(plato)){
		this.plato = plato;
	}else{	
		this.entrante = null;
		this.plato = null;
		this.postre = null;
		throw new Error("Plato principal no disponible");
	}

	if(POSTRES.includes(postre)){
		this.postre = postre;
	}else{	
		this.entrante = null;
		this.plato = null;
		this.postre = null;
		throw new Error("Postre no disponible");
	}
    }

    

    
    /* Get de los entrantes disponibles */
    mostrarEntrantes(){
	var entrantes = new Array();
	for(var i=0;i<ENTRANTES.length;i++){
		entrantes.push(ENTRANTES[i]);
	}
	return entrantes;
    }

    /* Get de los platos disponibles */
    mostrarPlatos(){
	var platos = new Array();
	for(var i=0;i<PLATOS.length;i++){
		platos.push(PLATOS[i]);
	}
	return platos;
    }

   /* Get de los postres disponibles */
    mostrarPostres(){
	var postres = new Array();
	for(var i=0;i<POSTRES.length;i++){
		postres.push(POSTRES[i]);
	}
	return postres;
    }

   //Modificar platos comprobando si están disponibles
    modificarEntrante(entrante){
	if(ENTRANTES.includes(entrante)){
		this.entrante = entrante;
	}else{
		throw new Error("Entrante no disponible");
	}
    }

    modificarPlato(plato){
	if(PLATOS.includes(plato)){
		this.plato = plato;
	}else{
		throw new Error("Plato principal no disponible");
	}
    }

    modificarPostre(postre){
	if(POSTRES.includes(postre)){
		this.postre = postre;
	}else{
		throw new Error("Postre no disponible");
	}
    }

    //Mostrar el menu completo
    mostrarMenuSeleccionado(){
	var menuSeleccionado = new Array();
	if(this.entrante!=null && this.plato!=null && this.postre!=null){		
		menuSeleccionado.push("ENTRANTE: "+this.entrante+" PLATO PRINCIPAL: "+this.plato+" POSTRE: "+this.postre);
	}else{
		throw new Error("El menu no esta completo");
		
	}

	return menuSeleccionado;
		
    }

    realizarPedido(direccion){
	var pedido = new Array();
	if(this.entrante!=null && this.plato!=null && this.postre!=null){		
		pedido.push("ENTRANTE: "+this.entrante+"\n"+"PLATO PRINCIPAL: "+this.plato+"\n"+"POSTRE: "+this.postre +"\n"+"DIRECCION: "+ direccion);
	}else{
		throw new Error("El menu no esta completo o la dirección no ha sido introducida");
		
	}

	return pedido;
     }


     consultarPrecioEntrantes(){
	var preciosE = new Array();
	for(var i=0;i<ENTRANTES.length;i++){
		preciosE.push(ENTRANTES[i] + ": "+ENTRANTES[ENTRANTES[i]]);
	}
	
	return preciosE;
     }

     consultarPrecioPlatos(){
	var preciosP = new Array();
	for(var i=0;i<PLATOS.length;i++){
		preciosP.push(PLATOS[i] + ": "+PLATOS[PLATOS[i]]);
	}
	
	return preciosP;
     }

     consultarPrecioPostres(){
	var preciosPo = new Array();
	for(var i=0;i<POSTRES.length;i++){
		preciosPo.push(POSTRES[i] + ": "+POSTRES[POSTRES[i]]);
	}
	
	return preciosPo;
     }

     consultarPrecioMenu(){
	var precioR = new Array();
	var precio = ENTRANTES[this.entrante]+ PLATOS[this.plato]+POSTRES[this.postre]
	precioR.push("Precio del menú: " + precio);
	
	return precioR;
     }

     consultarTipoPlato(plato){
	if(ENTRANTES.includes(plato)){
		return 'Entrante'
	}else if(PLATOS.includes(plato)){
		return 'Principal'
	}else if(POSTRES.includes(plato)){
		return 'Postre'
	}else{
		throw new Error("Plato no disponible");
	}
	
     }
	
     consultarPrecioPlato(plato){
	if( this.consultarTipoPlato(plato) == 'Entrante' ){
		return ENTRANTES[plato]
	}else if( this.consultarTipoPlato(plato) == 'Principal' ){
		return PLATOS[plato]
	}else if( this.consultarTipoPlato(plato) == 'Postre' ){
		return POSTRES[plato];
	}else{
		throw new Error("Plato no disponible");
	
	}
     }	
}

module.exports = Menu;
