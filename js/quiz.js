window.addEventListener('DOMContentLoaded', (event) => {
  const nombreInput = document.getElementById('nombre-input');
  const startQuizBtn = document.getElementById('start-quiz-btn');
  const questionContainer = document.getElementById('question-container');
  let quizRealizado = false;

  startQuizBtn.addEventListener('click', () => {
    cuestionario.comenzarQuiz();
  });

  const cuestionario = {
    nombre: '',
    respuestas: {},
    indicePreguntaActual: 0,
    contenedorPregunta: document.getElementById('question-container'),
    contenedorResultados: document.getElementById('results-container'),
    preguntas: [
      {
        pregunta: '¿Qué cualidad valoras más en vos mismo/a?',
        respuestas: [
          { opcion: 'a', texto: 'Valentía y determinación.' },
          { opcion: 'b', texto: 'Ambición y astucia.' },
          { opcion: 'c', texto: 'Inteligencia y creatividad.' },
          { opcion: 'd', texto: 'Lealtad y generosidad.' },
        ],
      },
      {
        pregunta: '¿Cómo te enfrentas a los desafíos?',
        respuestas: [
          { opcion: 'a', texto: 'Me lanzo de cabeza a los desafíos, sin miedo y dispuesto/a a enfrentar lo que venga.' },
          { opcion: 'b', texto: 'Abordo los desafíos de manera estratégica, buscando oportunidades para alcanzar mis objetivos.' },
          { opcion: 'c', texto: 'Analizo los desafíos cuidadosamente, aplicando mi conocimiento para encontrar soluciones ingeniosas.' },
          { opcion: 'd', texto: 'Afronto los desafíos con persistencia y trabajo en equipo, confiando en el apoyo de mis seres queridos.' },
        ],
      },
      {
        pregunta: '¿Qué tipo de ambiente te hace sentir más cómodo/a?',
        respuestas: [
          { opcion: 'a', texto: 'Me siento más cómodo/a en un ambiente lleno de emoción y aventura.' },
          { opcion: 'b', texto: 'Prefiero un ambiente en el que pueda ejercer mi influencia y tener oportunidades para destacarme.' },
          { opcion: 'c', texto: 'En un entorno intelectualmente estimulante y rodeado de debates profundos.' },
          { opcion: 'd', texto: 'Disfruto de un ambiente cálido y acogedor.' },
        ],
      },
      {
        pregunta: '¿Qué valoras más en un amigo/a?',
        respuestas: [
          { opcion: 'a', texto: 'Valoraría en un amigo/a que sea alguien en quien pueda confiar plenamente.' },
          { opcion: 'b', texto: 'Valoraría en un amigo/a su lealtad y su determinación.' },
          { opcion: 'c', texto: 'En un amigo/a, aprecio su sabiduría y su mente aguda, alguien con quien pueda tener conversaciones profundas.' },
          { opcion: 'd', texto: 'Lo que valoro en un amigo/a es su amabilidad y su generosidad, alguien que esté dispuesto/a a ayudar y a ser un apoyo incondicional.' },
        ],
      },
      {
        pregunta: 'Si te encontraras con una criatura mágica desconocida, ¿qué harías?',
        respuestas: [
          { opcion: 'a', texto: 'Me acercaría con valentía y curiosidad.' },
          { opcion: 'b', texto: 'Evaluaría si representa alguna amenaza o beneficio personal.' },
          { opcion: 'c', texto: 'Observaría y analizaría su comportamiento para ampliar mi conocimiento.' },
          { opcion: 'd', texto: 'Me acercaría con compasión y respeto, buscando su seguridad y comodidad.' },
        ],
      },
    ],

    comenzarQuiz() {
      const nombre = nombreInput.value.trim();
      if (nombre === '') {
        swal('Ingrese su nombre por favor', { buttons: false, timer: 2000 });
        return;
      }

      if (quizRealizado) {
        swal('El quiz ya ha sido realizado', { buttons: false, timer: 2000 });
        return;
      }

      this.nombre = nombre;
      nombreInput.style.display = 'none';
      startQuizBtn.style.display = 'none';
      questionContainer.style.display = 'block';
      this.mostrarSiguientePregunta();
    },

    mostrarSiguientePregunta() {
      if (this.indicePreguntaActual < this.preguntas.length) {
        const preguntaActual = this.preguntas[this.indicePreguntaActual];
        this.contenedorPregunta.innerHTML = `<h2>${preguntaActual.pregunta}</h2>`;

        preguntaActual.respuestas.forEach((respuesta) => {
          const botonRespuesta = document.createElement('button');
          botonRespuesta.textContent = respuesta.texto;
          botonRespuesta.addEventListener('click', () => {
            this.procesarRespuesta(respuesta.opcion);
          });
          //nuevo
          const contenedorRespuesta = document.createElement('div');
          contenedorRespuesta.classList.add('espaciado-botones');
          contenedorRespuesta.appendChild(botonRespuesta);
          //nuevo
          this.contenedorPregunta.appendChild(contenedorRespuesta);
        });
        this.indicePreguntaActual++;
      } else {
        this.mostrarResultados();
      }
    },

    procesarRespuesta(opcion) {
      this.respuestas[this.indicePreguntaActual - 1] = opcion;
      this.mostrarSiguientePregunta();
    },

    mostrarResultados() {
      this.contenedorPregunta.innerHTML = '';
      const opcionMaxima = this.calcularOpcionMaxima();
      this.contenedorResultados.innerHTML = `<h2>Resultado:</h2>`;
      const resultadoTexto = `¡Felicitaciones, ${this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1).toLowerCase()}! Tu personalidad refleja los valores de ${this.obtenerNombreCasa(opcionMaxima)}.`;

      const resultadoClase = `${this.obtenerClaseCasa(opcionMaxima)}-background`;
      const descripcionResultados = document.createElement('p');
      descripcionResultados.textContent = resultadoTexto;
      this.contenedorResultados.appendChild(descripcionResultados);
      document.body.classList.remove('gryffindor-background','slytherin-background','ravenclaw-background','hufflepuff-background');
      document.body.classList.add(resultadoClase);
      localStorage.setItem('resultadoCasa', JSON.stringify({ texto: resultadoTexto, clase: resultadoClase }));
      quizRealizado = true;
    },

    calcularOpcionMaxima() {
      const opciones = { a: 0, b: 0, c: 0, d: 0 };
      Object.values(this.respuestas).forEach((opcion) => {
        opciones[opcion]++;
      });
      return Object.keys(opciones).reduce((a, b) => (opciones[a] > opciones[b] ? a : b));
    },

    obtenerNombreCasa(opcion) {
      const nombresCasas = { a: 'Gryffindor', b: 'Slytherin', c: 'Ravenclaw', d: 'Hufflepuff' };
      return nombresCasas[opcion];
    },

    obtenerClaseCasa(opcion) {
      const clasesCasas = { a: 'gryffindor', b: 'slytherin', c: 'ravenclaw', d: 'hufflepuff' };
      return clasesCasas[opcion];
    },
  };

  const resultadoAlmacenado = localStorage.getItem('resultadoCasa');
  if (resultadoAlmacenado) {
    questionContainer.style.display = 'none';
    const { texto, clase } = JSON.parse(resultadoAlmacenado);
    document.getElementById('results-container').innerHTML = texto;
    if (clase) {
      document.body.classList.add(clase);
    }
    quizRealizado = true;
  }
});






