function mostrar()
{
  
/* estrategia/pasos de resolucion

1- declaracion de variables
cosas que le pedimos al usuario= tipo, cantidad, precio y seguir
cosas que no le pedimos al usuario= descuento, importeTotal, importeNeto(importefinal sin descuento), 
importeBruto(importefinal con descuento), acumBolsas. f) mayorPrecio(tipo + caro), mayorTipo,
d) contadorBC(bolsacemento), contadorBA(bolsaArena), contadorBCal(bolsa de cal), maxBolsas, tipoMasBolsas

2-genero un bucle tipo mientras el usuario quiera (do-while) 

3- dentro del bucle(cosas que se repiten por cada producto comprado)
3.1- pido y valido tipo
3.2- pido y valido cantidad (que sea numero +)
3.3- pido y valido precio (num +)

3.4- acumular la cantidad de bolsas
3.5- acumular el importebruto
todo el 3 es para los descuentos y el a)

4- me fijo el tipo de producto y acumulo la cant de bolsas segun corresponda
el 4 para el d)

5- para el primer producto guardo tipo y precio(es mi unico productopor ende es el mas caro)
para los sig productos voya comparar sus precios con el producto + caro y si es mas caro actualizo precio y tipo

desp del bucle 
me fijo que desxcuento corresponde (de acuerdo al acumulador de bolsas)
calculo descuento
calculo el importe neto

me fijo cual es el mayor acumulador de bolsas para informar el tipo de producto que se compraron + bolsas -D)

mostrar los resultados

*/

let tipo;
let precio;
let cantidad;
let seguir;
let descuento;
let importe;
let importeNeto;
let importeBruto = 0;
let acumBolsas = 0;
let mayorPrecio;
let mayorTipo;
let acumBC = 0;
let acumBA = 0;
let acumBCal = 0;
let cantMaxBolsas;
let tipoMaxBolsas;
let flag = 1;


do{

  tipo = prompt("Ingrese tipo (cal-cemento-arena): ").toLowerCase();
   while( tipo != "cal" && tipo != "cemento" && tipo != "arena" ){
     tipo = prompt("Tipo invalido. Reingrese tipo (cal-cemento-arena): ").toLowerCase();
   }

   cantidad = parseInt(prompt("Ingrese cantidad: "));
   while( isNaN(cantidad) || cantidad < 1){
     cantidad = parseInt(prompt("Cantidad invalida. Reingrese cantidad: "));
   }

   precio = parseInt(prompt("Ingrese precio: "));
   while( isNaN(precio) || precio < 1 ){
     precio = parseInt(prompt("Precio Invalido. Reingrese precio: "));
   }
   
   acumBolsas += cantidad;

   importe = precio * cantidad;

   importeBruto =+ importe;

   if(tipo == "arena"){
     acumBA += cantidad;
   }
    else if( tipo == "cemento"){
      acumBC += cantidad;
    }
    else{
      acumBCal += cantidad;
    }
    
    if( flag == 1 || precio > mayorPrecio ){
      mayorPrecio = precio;
      mayorTipo = tipo;
      flag = 0;
    }

  seguir = prompt("Quiere ingresar otro producto?: ");
 
}while(seguir == 's')

if(acumBolsas > 30){
  descuento =importeBruto * .25;
}
else if(acumBolsas > 10){
  descuento = importeBruto * .15;
}

importeNeto = importeBruto - descuento;

if(acumBA > acumBC && acumBA > acumBCal ){
  tipoMaxBolsas = "arena";
  cantMaxBolsas = acumBA;
}
else if(acumBC >= acumBA && acumBC > acumBCal){
  tipoMaxBolsas = "cemento"
  cantMaxBolsas = acumBC
}
else{
  tipoMaxBolsas = "cal";
  cantMaxBolsas = acumBCal;
}

document.write("a) el importe a pagar es " + importeBruto + "<br>");
if(descuento > 0){
document.write(" el importe total a pagar con descuento " + importeNeto + "<br>");
}
document.write(" c) el tipo con mas cantidad de bolsas " + tipoMaxBolsas + " con " + cantMaxBolsas + " bolsas<br>");
document.write(" c) el tipo mas caro " + mayorTipo + " precio:  " + mayorPrecio + "<br>");









}
