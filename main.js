/* //Bienvenida
let nombre = prompt("¿Cómo te llamas?");

while (nombre === null || nombre === "") {
  nombre = prompt("Ingresá tu nombre por favor");
}

let nombreMayus = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

alert("Hola " + nombreMayus + "\n\n" + "Te presentamos un Simulador Interactivo Oficial de Warney Bros de Harry Potter. Hoy vas a conocer, según tu personalidad, a qué personaje de Harry Potter te pareces." + "\n\n" + "¿Empezamos?"); */

//Bienvenida
let muggles = prompt("PROTEGUM MUGGLETON! Responda por favor si es o no un Muggle:\n\n ")

//TEST
const contador = { //Contador de puntos
  a: 0, //gryffindor
  b: 0, //slytherin
  c: 0, //ravenclaw
  d: 0  //hufflepuf
};

//Preguntas
function preguntas(pregunta) {
  let respuesta;

  while (true) {
    respuesta = prompt(pregunta + "\n\nA. Opción A\nB. Opción B\nC. Opción C\nD. Opción D");;

    if (respuesta === null) {
      alert("Por favor, ingresa A, B, C o D como respuesta.");
      continue;
    }

    respuesta = respuesta.toLowerCase(); // Convierto a minúsculas

    if (respuesta === "a"|| respuesta === "b" || respuesta === "c" || respuesta === "d") {
      break;
    } else {
      alert("Por favor, ingresa A, B, C o D como respuesta.");
    }
  }
    
  return respuesta;
}

//Respuestas
function realizarTest() {
  let respuestas = []

  respuestas.push(preguntas("Pregunta 1: ¿Cómo te describirían tus amigos?")); //0
  respuestas.push(preguntas("Pregunta 2: ¿Cuál de estas frases te representa mejor?")); //1
  respuestas.push(preguntas("Pregunta 3: ¿Cómo solés reaccionar ante situaciones de peligro?")); //2
  respuestas.push(preguntas("Pregunta 4: ¿Cómo encarás las dificultades escolares?")); //3
  respuestas.push(preguntas("Pregunta 5: ¿Qué te motiva en la vida?")); //4

  //respuestas = [ahora va a contener las preguntas]
  console.log(respuestas);

  //Actualizar contador de acuerdo a las respuestas del usuario
  respuestas.forEach(function(respuesta) {
    contador[respuesta]++;
  });

  console.log(contador); //Ahora el contador queda así
}

//Ejecutar Test
realizarTest()

//Resultado máximo del objeto
const maximo = Math.max(...Object.values(contador));
console.log(maximo);

//Condiciones > Casa asignada
if (contador.a === maximo) {
  alert("Gryffindor"); console.log("Gryffindor");
} else if  (contador.b === maximo) {
  alert("Slytherin"); console.log("Slytherin");
} else if (contador.c === maximo) {
  alert("Ravenclaw"); console.log("Ravenclaw");
} else if (contador.d === maximo) {
  alert("Hufflepuf"); console.log("Hufflepuf");
} else {
  console.log("No se han registrado respuestas.");
}

