//const Menu  = require("../src/menu");

function getPlatos(tipoPlato){
   //Creamos un menu y devolvemos los platos del tipo indicado
/*    var menu = new Menu()
    if(tipoPlato == "entrantes")
	platos= menu.mostrarEntrantes()
    else if (tipoPlato == "principales")
	platos= menu.mostrarEntrantes()
    else if (tipoPlato == "postres")
	platos= menu.mostrarEntrantes()

    return platos*/

     if(tipoPlato == "entrantes")
	result = "Entrantes bonitos"
    else if (tipoPlato == "principales")
	result = "Principales bonitos"
    else if (tipoPlato == "postres")
	result = "postres bonitos"
    return result
}


module.exports = async (req,res) =>{
    if(req.body != undefined){
        var IDchat = req.body.message.chat.id
        var text = req.body.message.text
        var result = ""

        if(text == "/cfEntrantes"){
            result="Los entrantes son:\n";
            result+=getPlatos("entrantes")
            
        }
        else if(text == "/cfPrincipales"){
            result = "Los platos principales son:\n"
            result+=getPlatos("principales")
        }
        else if(text == "/cfPostres"){
            result="Los postres son \n"
            result+=getPlatos("postres")
        }

        else if(text == "/muestraBody"){
            result+=JSON.stringify(req.body)
        }
        else{
            result="Las consultas disponibles son:\n/cfEntrantes\n/cfPrincipales\n/cfPostres\n"
        }
        
        var objetoJSON ={text : result,method : "sendMessage",chat_id : IDchat}
        res.setHeader("Content-Type","application/json");
        res.status(200).json(objetoJSON)
    }
    else{
        res.status(200).send("Iniciando la consulta de platos")
    }
    
}
