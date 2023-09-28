// let word = "Hello World";
// let number0 = 4;

/*1. Escribe una función llamada longitud que reciba como parámetro de entrada una cadena de texto y 
devuelva el número de letras que tiene.*/

function longitud(word="Hello World") {
    return word.length;
}

console.log(longitud());

/*2. Escribe una función llamada devuelvePrimeraLetra que reciba como parámetro de entrada una cadena de 
texto y devuelva la primera letra.*/

function returnFirtsLetter(word="Hello World"){
    return word.charAt(0);
}

console.log(returnFirtsLetter());

/*3.Escribe una función llamada devuelveUltimaLetra que reciba como parámetro de entrada una cadena de texto 
y devuelva la última letra.*/

function returnLastLetter(word="Hello World"){
    return word.charAt(word.length-1);
}

console.log(returnLastLetter());


/*4. Escribe una función llamada devuelveEnesimaLetra que reciba como parámetro de entrada una cadena de texto 
y un número y devuelva la letra que ocupe la posición indicada por el número.*/

function returnLetterForNumber(cadena, number){
    return cadena.charAt(number);
}

console.log(returnLetterForNumber(word, number0));


/*5. Utilizando el método substring imprimir las letras que van desde la posición 3 a la 7 
de la cadena «wonderful day», es decir “derf”.*/

// let exampleWord = "wonderful day";

function returnStringDetermine(cadena){
    return cadena.substring(3, 7);
}

console.log(returnStringDetermine(exampleWord));


/*6. Hacer una función devuelveMasLarga que reciba como parámetro de entrada dos cadenas de texto y devuelva la mayor.
En caso de que ambas cadenas sean iguales, devolveremos la correspondiente al primer parámetro de la función.*/

// let cadena1 = "Hola mundo";
// let cadena2 = "HolA mundo";
// let resultado;


function returnStringLonger(firstWord, SecondWord){
    if(firstWord.length>SecondWord.length || firstWord.length === SecondWord.length){
        resultado = cadena1;
    }else{
        resultado = cadena2
    }

    return resultado;
}

console.log(returnStringLonger(cadena1, cadena2));

/*7.Hacer una función devuelveMasLarga2 que reciba como parámetro de entrada tres cadenas de texto y devuelva 
la mayor. En caso de que al menos dos cadenas tengan igual longitud, devolveremos el texto 
Hay al menos dos cadenas iguales.*/

// let cadena1 = "Hola mun";
// let cadena2 = "Hola mund";
// let cadena3 = "Hello World";
// let resultado;

function returnStringLonger2(firstWord, secondWord, thirdWord){
    if(firstWord.length === secondWord.length || firstWord.length === thirdWord.length || thirdWord.length === secondWord.length){
        resultado = "Hay almenos dos cadenas de igual tamaño.";
    }else if(firstWord.length>secondWord.length && firstWord.length>thirdWord.length){
        resultado = firstWord;
    }else if (secondWord.length>firstWord.length && secondWord.length>thirdWord.length){
        resultado=secondWord
    }else{
        resultado=thirdWord;
    }
    return resultado;
}

console.log(returnStringLonger2(cadena1, cadena2, cadena3));


/*8. Hacer una función generarNombre que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena cadena 
es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando 
las tres primeras letras de cada palabra.*/
// let resultado;

function generateWord(name="Manuel", surname1="Sánchez", surname2="Sánchez"){
    if(name.length<5 || surname1.length<5 || surname2.length<5){
        resultado = "error";
    }else{
        resultado = name.substring(0, 3) + surname1.substring(0, 3) +surname2.substring(0, 3);
    }

    return resultado;
}
console.log(generateWord());

/*9. Hacer una función generarNombre2 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor 
que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando la última 
letra de cada palabra.*/

// let resultado;

function generateWord2(name="Manuel", surname1="Sánchez", surname2 = "Sánchez"){
    if(name.length<5 || surname1.length<5 || surname2.length<5){
        resultado = "error";
    }else{
        resultado = name.substring(name.length-1) 
        + surname1.substring(surname1.length-1) 
        + surname2.substring(surname2.length-1);
    }
    return resultado;
}

console.log(generateWord2());



/*10. Hacer una función generarNombre3 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena cadena es 
menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando 
las tres últimas letras de cada palabra.*/

// let resultado;

function generateWord2(name="Manuel", surname1="Sánchez", surname2 = "Sánchez"){
    if(name.length<5 || surname1.length<5 || surname2.length<5){
        resultado = "error";
    }else{
        resultado = name.substring(name.length, name.length-3) 
        + surname1.substring(surname1.length, surname1.length-3) 
        + surname2.substring(surname2.length, surname2.length-3);
    }
    return resultado;
}

console.log(generateWord2());

/*11. Hacer una función tieneLetra que reciba como parámetro de entrada una cadena de texto y una letra y devuelva true si la letra 
esta presente en la palabra y false si no lo esta. Utilizar para ello el método indexOf.*/

// let resultado;

function constainsLetter(word="Hola", letter="a"){

    return word.includes(letter);
}

console.log(constainsLetter());


/*12.  Realizar la evaluación del ejercicio anterior sin tener en cuenta si la letra 
pasada como parámetro esta en mayúsculas o minúsculas*/

// let resultado;
function constainsLetter(word="HOLA", letter="a"){

    return word.includes(letter);
}
console.log(constainsLetter());


/*13. Hacer una función crearPalabra que reciba como parámetro de entrada una letra 
y un número y genere una nueva palabra que tenga la letra introducida repetida tantas 
veces como indique el número.*/

// let resultado="";

function createWord(word="Hola", number=2){
   for(let i =1; i<=number; i++){
        resultado+=word;
     }
    return resultado;
}
console.log(createWord());

/*14. Completar el ejercicio anterior haciendo que en la nueva palabra generada 
las letras esten en mayúsculas.*/

console.log(createWord().toLocaleUpperCase());

/*15. Hacer una función addGuiones que reciba como parámetro de entrada una cadena 
texto y devuelva una nueva cadena que tendrá un guion medio detrás de cada letra. 
Utilizar para ello un bucle for.*/

// let resultado="";

function addScript(word="HOLA"){
    for(let i = 0; i<word.length; i++){
        resultado+=word[i]+"-";
    }
    return resultado;
}
console.log(addScript());

/*16. Hacer una función contadorDeLetras que reciba como parámetro de entrada una 
cadena de texto y una letra y devuelva el número de veces que esa letra esta presente 
en la palabra. Utilizar para ello un bucle for.*/

// let resultado=0;

function letterCounter(word="Hello World", letter="l"){

    for(let i = 0; i<word.length; i++){
        if(word[i]==letter){
            resultado+=1;
        }
    }
    return resultado;
}

console.log(letterCounter());

/*17.  Realizar la evolución del ejercicio anterior sin tener en cuenta si la letra 
pasada como parámetro esta en mayúsculas o minúsculas Hacer una función 
contadorDeLetras2 que reciba como parámetro de entrada dos cadenas de texto y 
una letra y devuelva la cadena de texto en la que dicha letra esta más presente.
Utilizar para ello un bucle for. No tener en cuenta si la letra pasada como parámetro
esta en mayúsculas o minúsculas.*/

//let contador=0;
//let contador2=0;
//let resultado;

function letterCounter2(word="hello world", word2="hello world lady", letter="l"){

    for(let i = 0; i<word.length; i++){
        if(word[i]==letter){
            contador+=1;
        }
    }
    for(let j = 0; j<word.length; j++){
        if(word[j]==letter){
            contador2+=1;
        }
    }
    if(contador>contador2){
        resultado=word;
    }else{
        resultado=word2;
    }

    return resultado;
}

console.log(letterCounter2());

/*18. Escribe una función llamada toCase que reciba como parámetro de entrada una 
cadena de texto y devuelva esa misma cadena de texto en minúsculas, un guión medio 
y de nuevo esa misma cadena de texto en mayúsculas. */

//let palabra="";
//let palabra2="";

function toCase(word="ivan"){
    for(let i = 0; i < word.length; i++){
        palabra+=word[i];
    }
    for(let j = 0; j < word.length; j++){
        if(j==0){
            palabra2+=word[j].toUpperCase();
        }else{
            palabra2+=word[j];
        }
    }
    return palabra+"-"+palabra2;
}
console.log(toCase());

/*19. Escribe una función llamada shortcut que tome dos cadenas de texto 
y devuelva la inicial de cada una de las dos cadenas.*/

function shortCut(word="Iván", word2="Sánchez"){
    return word.charAt(0)+word2.charAt(0);
}

console.log(shortCut());

/*20. Escribe una función llamada firstChar, que devuelva la primera letra 
que no sea un espacio cuando una cadena de texto es pasada.*/

function firstChar(word="  Hello World  "){
    return word.trim().charAt(0);
}

console.log(firstChar());

/* 21. Escribe una función llamada indexOfIgnoreCase que reciba dos cadenas de texto 
y devuelva la posición de la primera ocurrencia de la segunda cadena de texto en la
primera. La función no debería tener en cuenta mayúsculas y minúsculas.*/
//let primeraCoincidencia=0;
//let contador=0;

function indexOfIgnoreCase(word="Hello".toLowerCase(), word2="lo".toLowerCase()){
    for(let i = 0; i < word2.length; i++){
        for(let j = 0; j < word.length; j++){
            if(word2[i]==word[j]){
                while(contador<1){
                    primeraCoincidencia=word.indexOf(word[j]);
                    contador++;
                }
            }
        }
    }
    return primeraCoincidencia;
}
console.log(indexOfIgnoreCase());

/*22. Escribe una función llamada firstWord que reciba como parámetro de entrada 
una cadena de texto y devuelva la primera palabra de esa cadena. La primera palaba 
de la cadena serán todos los caracteres que hay hasta el primer espacio.*/

let firstWord="";

function firstWorld(word="Hello World Boy"){
    for(let i = 0; i < word.length; i++){
        if(word[i]==" "){
            i=word.length;
        }else{
            firstWord+=word[i];
        }
    }
    return firstWord;
}

console.log(firstWorld());


//Template Literals

/*1. Crea una función llamada saludoPersonalizado que tome un nombre y 
una edad como argumentos y utilice un template literal para devolver un 
saludo personalizado que incluya el nombre y la edad.*/

function saludoPersonalizado(name="Iván", age=21){
    return `El usuario se llama: ${name} y tiene ${age} año/s.`
}

