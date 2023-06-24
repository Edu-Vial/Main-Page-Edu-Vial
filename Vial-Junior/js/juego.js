var contador = 1;
var contadorcorrecta = 0;
var respuestacorrecta = "12";
var respuestaincorrecta = "distingo";

document.getElementById("npregunta").innerHTML= contador;

function bien(id)
{
	document.getElementById("btnsiguiente").style.display = "block";
	
	document.getElementById("npregunta").innerHTML= contador;
	document.getElementById("btn1").disabled = true;
	document.getElementById("btn2").disabled = true;
	document.getElementById("btn3").disabled = true;
	document.getElementById("btn4").disabled = true;

	if (respuestacorrecta == document.getElementById(id).innerHTML)
	{
		contadorcorrecta = contadorcorrecta + 1;
		document.getElementById("contadorcorrecta").innerHTML=contadorcorrecta;

		localStorage.correctas = contadorcorrecta;
	}
} 
function campregunta()

{
/*Preguntas*/
		contador = contador + 1;
	if (contador == 2) {
		document.getElementById("imgpregunta").src="img/prohibido-estacionar.png",
		document.getElementById("btn1").innerHTML="Escuela en frete";
		document.getElementById("btn2").innerHTML="Prohibido estacionar";
		document.getElementById("btn3").innerHTML="Detenerse";
		document.getElementById("btn4").innerHTML="Tren";
		respuestacorrecta= "Prohibido estacionar";
	}

	if (contador == 3) {
		document.getElementById("imgpregunta").src="img/tren.png";
		document.getElementById("btn1").innerHTML="Tren en frente";
		document.getElementById("btn2").innerHTML="Prohibido estacionar y detenerse";
		document.getElementById("btn3").innerHTML="Detenerce";
		document.getElementById("btn4").innerHTML="Niños jugando";
		respuestacorrecta= "Tren en frente";
	}

		if (contador == 4) {
		document.getElementById("imgpregunta").src="img/contramano.png";
		document.getElementById("btn1").innerHTML="Tren";
		document.getElementById("btn2").innerHTML="Contra mano";
		document.getElementById("btn3").innerHTML="Prohibido estacionar y deneterne";
		document.getElementById("btn4").innerHTML="Escuela en frente";
		respuestacorrecta= "Contra mano";
	}

		if (contador == 5) {
		document.getElementById("imgpregunta").src="img/test5.jpg";
		document.getElementById("btn1").innerHTML="6";
		document.getElementById("btn2").innerHTML="8";
		document.getElementById("btn3").innerHTML="9";
		document.getElementById("btn4").innerHTML="No distingo ningún número";
		respuestacorrecta= "6";
	}
	if (contador == 6) {

		document.getElementById("btnres").style.display="block"
		
	}
	if (contador == 6)
	{
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn3").disabled = true;
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn5").disabled = true;
		document.getElementById("btnsiguiente").style.display = "none";
	}
	else
	{
		document.getElementById("btn1").disabled = false;
		document.getElementById("btn2").disabled = false;
		document.getElementById("btn3").disabled = false;
		document.getElementById("btn4").disabled = false;
		document.getElementById("btn5").disabled = false;

		document.getElementById("btnsiguiente").style.display = "none";

	}

	
	
	
}