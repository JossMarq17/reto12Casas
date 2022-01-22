       
            function adivinaAleatorio(){
				var numeroAleatorio = Math.floor((Math.random()*(101-1))+1);
				alert = ('Número aleatorio = ' + numeroAleatorio);
				var contador = 1;
				var respuesta = prompt('Introduzca un numero del 1 al 100');
				while(Number(respuesta)!==numeroAleatorio && contador<10){
					if(respuesta<numeroAleatorio){
						respuesta = prompt('El número es mayor que el introducido. Inténtelo de nuevo');
					}else{
						respuesta = prompt('El número es menor que el introducido. Inténtelo de nuevo');
					}
					contador ++ ;
					alert = ('Intentos = ' + contador);
				}
				if(contador == 10){
					alert('Has superado el número máximo de intentos. Se acabó');
				}else{
					alert('Enhorabuena. Ha acertado');
				}
				
			}
            adivinaAleatorio();