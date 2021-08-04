function mostrar()
{
	
 let nombre;
 let edad;
 let sexo;
 let estado;
 let temperatura;
 let nombreMaxTemp;
 let maxTemp;
 let contJovatosViudos = 0;
 let contHombresFelices = 0;
 let contJovatosFiebre = 0;
 let contSolteros = 0;
 let acumEdadHSolteros = 0;
 let flag = 1;
 let seguir;
 let promedio = 0;


 do{
    nombre = prompt("Ingrese nombre: ")

    sexo = prompt("Ingrese sexo f/m: ").toLowerCase();
    while(!(sexo == 'f' || sexo == 'm')){
		sexo = prompt("sexo invalido. reingrese sexo: ");
	}

	estado = prompt("Ingrese estado s/c: ").toLowerCase();
    while(!(sexo == 's' || estado == 'c')) {
		sexo = prompt("estado invalido. reingrese estado: ");
	}

	temperatura = parseInt(prompt("Ingrese temperatura (30/45): "));
	while(!(temperatura >= 30 && temperatura <= 45)){
		temperatura = parseFloat(prompt("Temperatura invalida. reingrese temperatura (30/45): "));
	}

	edad = parseInt(prompt("Ingrese edad: "));
	while(!(edad > 0)){
     edad = parseInt(prompt("edad invalida. reingrese edad: "));
	}

	if(flag || temperatura > maxTemp){
     maxTemp =temperatura;
	 nombreMaxTemp = nombre;
	 flag = 0;
	}

	if(estado == "viudo" && edad >= 18){
		contJovatosViudos++;
	}
	
	if(sexo == "m" && estado != "casado"){
		contHombresFelices++;
	}

	if(edad > '60' && temperatura > 38){
		contJovatosFiebre++;
	}

	if(sexo == 'm' && estado == " soltero "){
		acumEdadHSolteros++;
		contHombresFelices += edad;
	}
  
    


   seguir = prompt("quiere ingresar otro pasajero?: ");
   }   while( seguir == 's');

   document.write("a) la persona con mas temperatura se llama " + nombreMaxTemp + " y tiene " + maxTemp + " grados <br>");
   document.write("b) mayores de edad viudos: " + contJovatosViudos + "<br>");  
   document.write("c) hombres felices: " + contHombresFelices + "<br>");
   document.write("d) personas de 3ra edad con fiebre: " + contJovatosFiebre + "<br>");
   
   if(contHombresFelices == 0){
	   document.write("d) no hay pasajeros hombres y solteros <br>");
   } else{
	   promedio = acumEdadHSolteros / contHombresFelices;
	   document.write("d) promedio de edad de hombres solteros: " + promedio + "<br>");
   }






















}
