/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let cantidad;
    let marca;
    let precio = 35;
    let descuento;
    let porcdesc;
    let preciodescuento;
    let importetotal;
    let IIBB;

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    
    switch( cantidad){
        case 1:
        case 2:
            porcdesc = 0;  
            break;
        case 3:
            if( marca = "ArgentinaLuz"){
                porcdesc = 0.15;
            }
            else if( marca = "FelipeLamparas"){
                porcdesc = 0.1;
            }
            else{
                porcdesc = 0.05;
            }
            break;
        case 4:
            if( marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                porcdesc = 0.25;
            }
            else{
                porcdesc = 0.2;
            }
            break;        
        case 5:
            if(marca = "ArgentinaLuz"){
                porcdesc = 0.4;
            }
            else{
                porcdesc = 0.3;
            }
            break;
        default:
            porcdesc = 0.5;

    }

    descuento = precio * porcdesc;

    preciodescuento = precio - descuento;

    document.getElementById("txtIdprecioDescuento").value = preciodescuento

    importetotal = cantidad * preciodescuento;

    if( importetotal >= 120 ) {
        IIBB = importetotal * .1;
        importetotal = importetotal + IIBB;
        alert("Importe total $ " + importetotal + " Usted pago IIBB $ " + IIBB);
    }
    else{
        alert("Importe total $ " + importetotal);
    }


     





















}
