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
        pregunta: '¿Qué cualidad valoras más en ti mismo/a?',
        respuestas: [
          { opcion: 'a', texto: 'Valentía y determinación.' },
          { opcion: 'b', texto: 'Ambición y astucia.' },
          { opcion: 'c', texto: 'Inteligencia y creatividad.' },
          { opcion: 'd', texto: 'Lealtad y generosidad.' },
        ],
      },
      {
        pregunta: '¿Qué cualidad valoras más en ti mismo/a??????',
        respuestas: [
          { opcion: 'a', texto: 'Valentía y determinación.' },
          { opcion: 'b', texto: 'Ambición y astucia.' },
          { opcion: 'c', texto: 'Inteligencia y creatividad.' },
          { opcion: 'd', texto: 'Lealtad y generosidad.' },
        ],
      },
      {
        pregunta: '¿Qué cualidad valoras más en ti mismo/a?',
        respuestas: [
          { opcion: 'a', texto: 'Valentía y determinación.' },
          { opcion: 'b', texto: 'Ambición y astucia.' },
          { opcion: 'c', texto: 'Inteligencia y creatividad.' },
          { opcion: 'd', texto: 'Lealtad y generosidad.' },
        ],
      },
      {
        pregunta: '¿Qué cualidad valoras más en ti mismo/a??????',
        respuestas: [
          { opcion: 'a', texto: 'Valentía y determinación.' },
          { opcion: 'b', texto: 'Ambición y astucia.' },
          { opcion: 'c', texto: 'Inteligencia y creatividad.' },
          { opcion: 'd', texto: 'Lealtad y generosidad.' },
        ],
      },
      {
        pregunta: '¿Qué cualidad valoras más en ti mismo/a?',
        respuestas: [
          { opcion: 'a', texto: 'Valentía y determinación.' },
          { opcion: 'b', texto: 'Ambición y astucia.' },
          { opcion: 'c', texto: 'Inteligencia y creatividad.' },
          { opcion: 'd', texto: 'Lealtad y generosidad.' },
        ],
      },
      // Resto de preguntas...
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
          this.contenedorPregunta.appendChild(botonRespuesta);
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
      this.contenedorResultados.innerHTML = `<h2>Resultado del Cuestionario:</h2>`;
      const opcionMaxima = this.calcularOpcionMaxima();
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






