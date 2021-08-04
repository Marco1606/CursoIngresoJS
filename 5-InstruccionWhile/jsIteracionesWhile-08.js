/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
  let respuesta;
  let numero;
  let acumPos = 0;
  let acumNeg = 1;
  let flag = 1;
  
  do{

    numero = parseInt(prompt("Ingrese un numero: "));
    if(numero >= 0 ){
     acumPos += numero;
     
    }
    else{
      acumNeg *= numero;
      flag = 0;
    }


    respuesta = prompt("quiere ingresar otro numero? (s/n) ");

  } while( respuesta == 's');
   
  if(flag){
    acumNeg = 0;
  } 

  document.getElementById("txtIdSuma").value = acumPos;
  document.getElementById("txtIdProducto").value = acumNeg;


 

}