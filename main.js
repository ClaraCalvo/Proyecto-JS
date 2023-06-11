//Bienvenida
let nombre = prompt("¡REPELLO MUGGLETUM! Ingresa por favor tu nombre mágico:");

while (nombre === null || nombre === "") {
  nombre = prompt("Ingresá tu nombre por favor");
}

let nombreMayus = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

alert("¡" + nombreMayus + ", bienvenido/a al Colegio Hogwarts de Magia y Hechicería!\n\nEl día de hoy serás asignado/a a una de nuestras Casas: Gryffindor, Hufflepuff, Ravenclaw o Slytherin.\n\nEl Sombrero Seleccionador evaluará tu personalidad, tus valores y tus fortalezas para determinar cuál de las Casas de Hogwarts es la adecuada para vos, ya que cada una de ellas tiene características únicas y representa diferentes cualidades.\n\nUna vez que seas seleccionado/a, te explicaremos por qué fuiste elegido/a en tu Casa y los valores que compartís con tus compañeros, así podrás sentirte parte de esta comunidad mágica.\n\n¿Empezamos?");

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
    respuesta = prompt(pregunta);;

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

  respuestas.push(preguntas("¿Qué cualidad valoras más en vos mismo/a? \n\nA) Valentía y determinación. \n\nB) Ambición y astucia. \n\nC) Inteligencia y creatividad. \n\nD) Lealtad y generosidad."));
  respuestas.push(preguntas("¿Cómo te enfrentas a los desafíos? \n\nA) Me lanzo de cabeza a los desafíos, sin miedo y dispuesto/a a enfrentar lo que venga. \n\nB) Abordo los desafíos de manera estratégica, buscando oportunidades para alcanzar mis objetivos. \n\nC) Analizo los desafíos cuidadosamente, aplicando mi conocimiento para encontrar soluciones ingeniosas. \n\nD) Afronto los desafíos con persistencia y trabajo en equipo, confiando en el apoyo de mis seres queridos."));
  respuestas.push(preguntas("¿Qué tipo de ambiente te hace sentir más cómodo/a? \n\nA) Me siento más cómodo/a en un ambiente lleno de emoción y aventura. \n\nB) Prefiero un ambiente en el que pueda ejercer mi influencia y tener oportunidades para destacarme. \n\nC) En un entorno intelectualmente estimulante y rodeado de debates profundos. \n\nD) Disfruto de un ambiente cálido y acogedor."));
  respuestas.push(preguntas("¿Qué valoras más en un amigo/a? \n\nA) Valoraría en un amigo/a que sea alguien en quien pueda confiar plenamente. \n\nB) Valoraría en un amigo/a su lealtad y su determinación. \n\nC) En un amigo/a, aprecio su sabiduría y su mente aguda, alguien con quien pueda tener conversaciones profundas. \n\nD) Lo que valoro en un amigo/a es su amabilidad y su generosidad, alguien que esté dispuesto/a a ayudar y a ser un apoyo incondicional."));
  respuestas.push(preguntas("Si te encontraras con una criatura mágica desconocida, ¿qué harías? \n\nA) Me acercaría con valentía y curiosidad. \n\nB) Evaluaría si representa alguna amenaza o beneficio personal. \n\nC) Observaría y analizaría su comportamiento para ampliar mi conocimiento. \n\nD) Me acercaría con compasión y respeto, buscando su seguridad y comodidad."));
  respuestas.push(preguntas("¿Qué objeto mágico te gustaría poseer? \n\nA) Me gustaría poseer una Capa de Invisibilidad para moverme sin ser detectado/a. \n\nB) Me gustaría poseer una Varita de Sauco para ejercer un gran control sobre la magia. \n\nC) Me gustaría poseer un Pensadero para analizar mis pensamientos de forma clara y profunda. \n\nD) Me gustaría poseer una Piedra de la Resurrección, que me brindaría la posibilidad de traer de vuelta a seres queridos."));
  respuestas.push(preguntas("¿Qué tipo de hechizo te gustaría dominar a la perfección? \n\nA) Me encantaría dominar el hechizo Expecto Patronum, para conjurar un poderoso guardián. \n\nB) Me gustaría dominar el hechizo Imperio, que me permita ejercer un control absoluto sobre los demás. \n\nC) Me fascinaría dominar el hechizo Accio, para poder convocar objetos a mi lado de manera instantánea. \n\nD) Me gustaría dominar el hechizo Curatio, que me permita sanar heridas y enfermedades."));


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
  alert("¡GRYFFINDOR! \n\n¡Felicidades! Tu valentía y coraje te han llevado a la casa de Gryffindor. Sos valiente, decidido/a y siempre estás dispuesto/a a luchar por lo que crees justo. Tu espíritu audaz te llevará a grandes aventuras y a defender a los más débiles.");
} else if  (contador.b === maximo) {
  alert("¡SLYTHERIN! \n\nTu astucia y determinación te han llevado a la casa de Slytherin. Sos ambicioso/a, ingenioso/a y estás dispuesto/a a hacer lo necesario para alcanzar tus metas. Tu determinación te permitirá destacarte y lograr grandes cosas.");
} else if (contador.c === maximo) {
  alert("¡RAVENCLAW! \n\n¡Enhorabuena! Tu inteligencia y sed de conocimiento te han llevado a la casa de Ravenclaw. Eres creativo/a, curioso/a y siempre buscas aprender más. Tu mente aguda y tu amor por el saber te guiarán hacia grandes descubrimientos y logros académicos.");
} else if (contador.d === maximo) {
  alert("¡HUFFLEPUFF! \n\n¡Maravilloso! Tu lealtad y generosidad te han llevado a la casa de Hufflepuff. Sos amable, paciente y siempre estás dispuesto/a a ayudar a los demás. Tu espíritu solidario te llevará a construir relaciones fuertes y a encontrar la felicidad en la compañía de tus amigos.");
} else {
  console.log("No se han registrado respuestas.");
}

