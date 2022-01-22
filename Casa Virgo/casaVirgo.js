
	
function totalArticulos(){
    let payasos =112;
    let muñeca= 75;
    let payasosTotal = parseInt(prompt("Cual fue el numero de payasos vendidos?"));
    let muñecasTotal = parseInt(prompt("Cual fue el numero de muñecas vendidas?"));
    let resultadoPayasos = payasosTotal*payasos;
    let resultadoMuñecas = muñecasTotal*muñeca;
    let resultado = resultadoMuñecas+resultadoPayasos;
    alert("El peso total de payasos es: "+" "+resultadoPayasos);
    alert("El peso total de muñecas es: "+" "+resultadoMuñecas);
        alert("El peso total del pedido es: "+" "+resultado);

       if(resultado>1000){
           let division = resultado/1000;
           let entero = division.toFixed();
           alert("Tu pedido es mayor a un kilo, se te enviaran:"+" "+entero+" "+"paquetes.");
       } else{
           alert("Tu pedido llegara pronto!");
       }
}

totalArticulos();