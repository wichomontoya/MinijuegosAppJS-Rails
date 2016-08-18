$(document).ready(function(){

	var alfabeto = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var letrasPc = [];
	var letrasUsuario = [];
	var puntos = 0;
	var stop=false;
	var contadorSegundos =20;

	// Ejecucion inicial del codigo
	cronometro();	
	generarLetra();
	
	// Boton llama Funciones 
			

	$("#botonCapturaLetraUsuario").click(function(){
		capturarLetra();
		comparaLetras();
		if (stop===false){
			generarLetra();
		}
	});


	// Funcion Captura y divide las letras


	function capturarLetra(){
		
		var letra = $("#letraUsuario").val();
		letrasUsuario = letra.split("");
		$("#letraUsuario").val("");
		
	}


	//Funcion que genera la letra al azar


	function generarLetra() {
		
			var aleatorio = Math.round(Math.random()* 26);
			var miLetra = alfabeto[aleatorio]
			letras = document.getElementById("letras");
			letras.innerHTML = miLetra;
			letrasPc.push(miLetra);
			$("#comentarios").hide();
	}

	// Funcion que compara arreglos

	function comparaLetras(){

		for (var i = 0 ; i < letrasPc.length; i++){
							
			if (letrasPc[i]===letrasUsuario[i]){
				puntos=puntos +2;		
				stop=false;
				$("#comentarios").hide();
			}

			else if (letrasPc[i]!==letrasUsuario[i]){ 
				puntos=puntos-1;
				$("#comentarios").show();
				letrasUsuario=[];
				$('#letrausuario').val();
				i=letrasPc.length;
				stop=true;
				$("#comentarios").show();
			}
		}

		letrasUsuario=[];
	}

	//Funcion que contabiliza el tiempo para que acabe el juego

	function cronometro(){
			
		 s = document.getElementById("segundos");

		var myVar= setInterval(

			function(){
				contadorSegundos=contadorSegundos-1;
				s.innerHTML = contadorSegundos;
				if (contadorSegundos<=0){
					stop=true;
					clearInterval(myVar);
					$("#comentarios").replaceWith("<p>El juego ha terminado, tus puntos son: </p>");
					document.getElementById("puntos").innerHTML=puntos ;
					terminarJuego();
				} 

			},1000
		);	

	}

	function terminarJuego(){
			$.ajax({
    		type: "POST",
    		url: "/games/1/score",
    		data:  {score:$("#puntos").text()},
    		});
	};
});	





