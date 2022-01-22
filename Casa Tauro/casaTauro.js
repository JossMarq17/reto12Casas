var carreritas = ["Lucia", "Roberto", "Maria", "Jesus", "Andrea", "Jose"];

console.log(carreritas);

carreritas.splice(0, 2, "Lucia", "Roberto", "Andrea"); //Andrea adelanta a Maria

console.log(carreritas);
carreritas.splice(5, 1);

carreritas.pop(); // Jose es descalificado
console.log(carreritas);

carreritas.shift();

carreritas.unshift("Lucia", "Cristobal", "Fernanda", "Armando"); //Detras de Lucia y antes de Roberto se clasifican tres nuevos corredores
console.log(carreritas);

carreritas.unshift("Federico");
console.log(carreritas);

carreritas.forEach(function(element,index,array){
    console.log(index+1, element);
});