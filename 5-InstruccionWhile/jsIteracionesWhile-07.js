/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador = 0;
    let numero;
    let acumulador = 0;
    let respuesta; 
    let promedio;


    do{

        numero = parseInt(prompt("Ingrese un numero: "));
        acumulador = acumulador + numero;
        contador++;
        respuesta = prompt("quiere seguir ingresando numeros? (s/n)");

    } while( respuesta == 's');

    promedio = acumulador / contador;

    document.getElementById("txtIdSuma").value = acumulador;
    document.getElementById("txtIdPromedio").value = promedio;
    




















}