var d = document.getElementById('dibujo10')
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0 ;
var yi, xf;
var color = "blue ";

for(l=0 ; l < lineas ; l ++)
{
	yi = 10 * l;
	xf = 10 * ( l + 1 );
	drawLine("red", 0, yi, xf,300)
	console.log("lineas " + l);
	l++;
}

function drawLine(color, x_ini, y_ini, x_final, y_final )
{
	lienzo.beginPath();
	lienzo.strokeStlye = color;
	lienzo.moveTo(x_ini,y_ini);
	lienzo.lineTo(x_final,y_final);
	lienzo.stroke();
	lienzo.closePath();

}

drawLine(color, 1, 1, 1, 299);
drawLine(color, 1, 299, 299, 299);

console.log(lienzo);
