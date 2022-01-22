var valor = parseInt(prompt("Ingrese una temperatura en ºCelsius"));


function calculadora (){

    let kelvin = valor + 273.15;
    let farenheit = (valor * (9/5))+32
    let celsius = valor;

    alert("La temperatura en grados Kelvin es: " + kelvin +'\n' + "La temperatura en grados Farenheit es: " + farenheit +'\n'+ "La temperatura en grados celsius es: " + celsius);

}
calculadora()