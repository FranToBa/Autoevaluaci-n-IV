
function getPlatos(tipoPlato){

    var result = ""
    if(tipoPlato == "entrantes"){
	result = "Entrantes bonitos";  
    }else if (tipoPlato == "principales"){
	result = "Principales bonitos";
    }else if (tipoPlato == "postres"){
	result = "postres bonitos";
    }
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
            result = "Los platos principales son:\n";
            result+=getPlatos("principales")
        }
        else if(text == "/cfPostres"){
            result="Los postres son \n";
            result+=getPlatos("postres")
        }

        else if(text == "/muestraBody"){
            result+=JSON.stringify(req.body)
        }
        else{
            result="Las consultas disponibles son:\n/cfEntrantes\n/cfPrincipales\n/cfPostres\n"
        }

  return {
    statusCode: 200,
    body: JSON.stringify({text:result, method:'sendMessage', chat_id:chat.id}),
    headers:{
        'Content-Type': 'application/json; charset=utf-8'
    }
    }
    else{
        res.status(200).send("Iniciando la consulta de platos")
    }
    
}
