

var text = document.getElementById('text_lineas');
var botoncito = document.getElementById('boton');
botoncito.addEventListener("click", dibujoPorClick);


var d = document.getElementById('dibujo10')
var ancho =d.with;
var lienzo = d.getContext("2d");
var color = "blue";


function drawLine(color, x_ini, y_ini, x_final, y_final )
{
	lienzo.beginPath();
	lienzo.strokeStlye = color;
	lienzo.moveTo(x_ini,y_ini);
	lienzo.lineTo(x_final,y_final);
	lienzo.stroke();
	lienzo.closePath();

}
function dibujoPorClick()
{
	var vik = parseInt(text.value)
	var lineas = vik;
	var l = 0 ;
	var yi, xf;;
	var espacio = ancho / lineas;

console.log(vik);;
for(l=0 ; l < lineas ; l ++)
{
	yi = 10 * l;
	xf = 10 * ( l + 1 );
	drawLine(color, 0, yi, xf,300)
	console.log("lineas " );
	l++;
}

drawLine(color, 1, 1, 1, 299);
drawLine(color, 1, 299, 299, 299);
}

console.log(lienzo);
