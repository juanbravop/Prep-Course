// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  let primElem = array[0];
  return primElem;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i= 0; i < array.length; i++ ) {
    array[i] = array[i] + 1;
  } return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var str = ""
  for (var i= 0; i<palabras.length; i++) {
    if (i==0) {
      str= str + palabras[i];} 
   else {
     str = str + " " + palabras[i];}
  } return str;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var resultado= false;
  for (var i=0; i< array.length; i++) {
if (array[i]==elemento) {
  resultado = true;
}
  } return resultado;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var resultado=0;
  for (var i=0;i<numeros.length;i++) {
    resultado = resultado + numeros[i];
  } return resultado;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var resultado=0;
  for (var i=0;i<resultadosTest.length;i++) {
    resultado = resultado + resultadosTest[i];
  } resultado = resultado / resultadosTest.length;
  return resultado;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var resultado=0;
  for (var i=0;i<numeros.length;i++) {
    if (resultado<numeros[i]) {
      resultado = numeros[i]; 
    }
  } return resultado;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments[0]==undefined) {
    return 0;
  } else if (arguments.length==1) {
    return arguments[0];
  } else {
    var res = 1;
    for (var i=0;i<arguments.length;i++) {
      res = res * arguments[i];
    }
  } return res;
}
 

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
var arr18 = [];
for (var i=0;i<arreglo.length;i++) {
  if (arreglo[i]>18) {
    arr18.push(arreglo[i]);
  }
}
return arr18.length;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia>=2 && numeroDeDia<=6) {
    return "Es dia Laboral";
  } else if (numeroDeDia===1||numeroDeDia===7) {
    return "Es fin de semana";
  } else {
    return undefined;
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var resultado = false;
  if (n.toString()[0] == 9) { 
    resultado= true;
  } return resultado;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var resul= true;
  for(var i=0;i<arreglo.length;i++) {
    var eleAnt = arreglo[0];
    if(eleAnt<arreglo[i]|| eleAnt>arreglo[i]) {
      resul = false;
    }
  }
return resul;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var arrMth = []
  for (var i=0;i<array.length;i++) {
    if (array[i]=="Enero"||array[i]=="Noviembre"||array[i]=="Marzo") {
arrMth.push(array[i]);
    } 
  }
  if (arrMth.length==3) {
    return arrMth;
  } else {
    return "No se encontraron los meses pedidos";
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var newArr= [];
  for (var i=0;i<array.length;i++) {
    if (array[i]>100) {
      newArr.push(array[i]);
    }
  } return newArr;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código: 
  var arr=[];
  for (var i=0;i<10;i++) {
    if(numero==i) {
      return "Se interrumpió la ejecución";
    } 
    numero += 2;
arr.push(numero);
  } return arr;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var arr=[];
  for (var i=0;i<10;i++) {
    if(i===5) {
      continue;
    } 
    numero += 2;
arr.push(numero);
  } return arr;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
