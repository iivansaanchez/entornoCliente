//DNI

/* Implementa una función llamada validarDNI que tome un número de DNI (con o sin letra) como 
argumento y determine si es un DNI válido. La función debe calcular la letra correspondiente al 
número y compararla con la letra proporcionada (si se proporciona). Devuelve true si es válido y 
false si no lo es.*/

let letra = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
let numero = "1234567890";
let dni = "44786847P";
let numeroDNI="";
let letraDNI=dni[dni.length-1];
let res=false;

function validarDNI(dni){
    if(dni.length==8 || dni.length==9){
        for(let i = 0; i < dni.length; i++){
            for(let j = 0; j < numero.length; j++){
                if(dni[i]==numero[j] & numeroDNI.length<8){
                    numeroDNI+=dni[i];
                }
            }
        }
    numeroDNI=parseInt(numeroDNI);
    if(letra[numeroDNI%23]==letraDNI){
        res=true;
    }
}

    return res;
}

console.log(validarDNI(dni));