// Bienvenida
let nombre = prompt("¿Cómo te llamas?");

while (nombre === null || nombre === "") {
  nombre = prompt("Ingresá tu nombre por favor");
}

//Transformar primera letra del nombre a mayúscula
let nombreMayus = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

//Descripción del Test
alert("Hola " + nombreMayus + "\n\n" + "Te presentamos un Simulador Interactivo Oficial de Warney Bros de Harry Potter. Hoy vas a conocer, según tu personalidad, a qué personaje de Harry Potter te pareces." + "\n\n" + "¿Empezamos?");


//TEST
//Pregunta1
while (true) { //while(true): repite la pregunta indefinidamente
  pregunta1 = (prompt(
    "¿Cómo te describirían tus amigos? Por favor ingresá 1, 2 o 3:" + "\n\n" + "1. Aventurero/a y valiente" + "\n\n" + "2. Confiable y Leal" + "\n\n" + "3. Inteligente y estratégico/a"));
  console.log(pregunta1)

  if (pregunta1 === "1" || pregunta1 === "2" || pregunta1 === "3") {
    break;
  } else {
    alert("Respondé por favor 1, 2 o 3.");
  }
}

pregunta1 = parseInt(pregunta1);

//Pregunta2
while (true) {
    pregunta2 = (prompt(
      "¿Cuál de estas frases te representa mejor? Por favor ingresá 1, 2 o 3:" + "\n\n" + "1. 'La fuerza de tus convicciones determina tu éxito, no el número de tus seguidores'" + "\n\n" + "2. 'La amistad es una de las cosas más valiosas que existen en el mundo.'" + "\n\n" + "3. 'Las palabras son, en mi no tan humilde opinión, nuestra más inagotable fuente de magia.'"));
    console.log(pregunta2)
  
    if (pregunta2 === "1" || pregunta2 === "2" || pregunta2 === "3") {
      break;
    } else {
      alert("Respondé por favor 1, 2 o 3.");
    }
}
  
pregunta2 = parseInt(pregunta2);

//Pregunta3
while (true) { 
    pregunta3 = (prompt(
      "¿Cómo solés reaccionar ante situaciones de peligro? Por favor ingresá 1, 2 o 3:" + "\n\n" + "1. Actúo de manera impulsiva" + "\n\n" + "2. Me preocupo por la seguridad de los demás antes que la mía" + "\n\n" + "3. Evalúo la situación y busco una solución lógica"));
    console.log(pregunta3)
  
    if (pregunta3 === "1" || pregunta3 === "2" || pregunta3 === "3") {
      break;
    } else {
      alert("Respondé por favor 1, 2 o 3.");
    }
}
  
pregunta3 = parseInt(pregunta3);

//Pregunta4
while (true) { 
    pregunta4 = (prompt(
      "¿Cómo encarás las dificultades escolares? Por favor ingresá 1, 2 o 3:" + "\n\n" + "1. Busco soluciones estratégicas para resolver los problemas" + "\n\n" + "2. Pido ayuda y trabajo en equipo" + "\n\n" + "3. Me esfuerzo y estudio mucho para obtener buenos resultados"));
    console.log(pregunta4)
  
    if (pregunta4 === "1" || pregunta4 === "2" || pregunta4 === "3") {
      break;
    } else {
      alert("Respondé por favor 1, 2 o 3.");
    }
}
  
pregunta4 = parseInt(pregunta4);

//Pregunta5
while (true) { 
    pregunta5 = (prompt(
      "¿Qué te motiva en la vida? Por favor ingresá 1, 2 o 3:" + "\n\n" + "1. La búsqueda de aventuras y emociones fuertes" + "\n\n" + "2. El amor y la amistad" + "\n\n" + "3. El conocimiento y el crecimiento intelectual"));
    console.log(pregunta5)
  
    if (pregunta5 === "1" || pregunta5 === "2" || pregunta5 === "3") {
      break;
    } else {
      alert("Respondé por favor 1, 2 o 3.");
    }
}
  
pregunta5 = parseInt(pregunta5);

//Suma
let suma = pregunta1 + pregunta2 + pregunta3 + pregunta4 + pregunta5;

//Condiciones
function resultado(suma) {
  if (suma <= 5) {
    alert(nombreMayus + ", ¡te pareces a Harry!" + "\n\n" + "Al igual que Harry Potter, tenés una valentía innata y un espíritu de liderazgo. Te enfrentás a los desafíos con coraje y determinación, y no tenés miedo de enfrentarte a las dificultades que se te presentan. Tu sentido de la justicia y tu voluntad de proteger a los demás te asemejan al valiente protagonista de la saga, Harry Potter.");  
  } else if ((suma > 5) && (suma <= 10)) {
    alert(nombreMayus + ", ¡te pareces a Ron!" + "\n\n" + "Compartís con Ron Weasley una naturaleza espontánea y un sentido del humor contagioso. Tu personalidad cálida y amigable te hace destacar en situaciones sociales, y valorás la lealtad y el compañerismo en tus amistades. Al igual que Ron, enfrentás los desafíos con valentía y, aunque a veces podés dudar, siempre estás dispuesto a luchar por lo que crees. Tu carácter auténtico y tu capacidad para encontrar alegría en las pequeñas cosas te asemejan a nuestro querido Ron Weasley.");
  } else if (suma > 10) {
    alert(nombreMayus + ", ¡te pareces a Hermione!" + "\n\n" + "Además de tu enfoque académico, compartís con Hermione una naturaleza curiosa y un espíritu inquisitivo. Te destacás por tu capacidad analítica y tu habilidad para resolver problemas de manera lógica. Al igual que Hermione, valorás la importancia del conocimiento y buscás constantemente expandir tus horizontes intelectuales. Tu determinación y pasión se acercan aún más al carácter valiente y perseverante de Hermione Granger.");
  }
}

resultado(suma);




