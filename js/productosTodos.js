//Todos los Productos
const productos = [
    {id: 1, categoria: "Varitas", nombre: "Varita Hermione", precio: 1000, imagen: "./img/varita-hermione.png", descripcion: "Fabricada con corazón de dragón, esta varita es ideal para aquellos que valoran el conocimiento y la inteligencia. Te ayudará a dominar los hechizos más complejos y a brillar en tus estudios."},
    {id: 2, categoria: "Varitas", nombre: "Varita Harry Potter", precio: 1000, imagen: "./img/varita-harry.png", descripcion: "La icónica varita del elegido. Con su núcleo de pluma de fénix, esta varita te permitirá desatar todo tu poder y enfrentar grandes desafíos."},
    {id: 3, categoria: "Varitas", nombre: "Varita Ron", precio: 1000, imagen: "./img/varita-ron.png", descripcion: "Esta varita de madera de sauce es perfecta para aquellos que buscan un toque de lealtad y valentía. Te acompañará en tus travesuras y en la búsqueda de la amistad verdadera."},
    {id: 4, categoria: "Varitas", nombre: "Varita Draco Malfoy", precio: 1000, imagen: "./img/varita-draco.png", descripcion: "Esta varita de madera de espino blanco es el símbolo de la astucia y la determinación. Te permitirá desafiar tus límites y enfrentar cualquier obstáculo con elegancia y estilo."},
    {id: 5, categoria: "Varitas", nombre: "Varita de Sauco", precio: 1000, imagen: "./img/varita-sauco.png", descripcion: " La legendaria varita de las reliquias de la muerte. Con su núcleo de pelo de Thestral, esta varita posee una magia ancestral y misteriosa, capaz de conquistar incluso la muerte misma."},
    {id: 6, categoria: "Varitas", nombre: "Varita Voldemort", precio: 1000, imagen: "./img/varita-voldemort.png", descripcion: "La varita del poderoso mago oscuro. Forjada con madera de acebo y núcleo de pluma de cola de basilisco, esta varita es sinónimo de ambición y poder despiadado. Usala con precaución."},

    {id: 7, categoria: "Prendas", nombre: "Bufanda Hogwarts", precio: 1500, imagen: "./img/prenda-bufanda.png", descripcion: "Envolvete en el espíritu de Hogwarts con esta bufanda de colores vivos y el escudo de la famosa escuela de magia. Te mantendrá abrigado mientras muestras tu lealtad a tu casa favorita."},
    {id: 8, categoria: "Prendas", nombre: "Medias Hogwarts", precio: 700, imagen: "./img/prenda-medias.png", descripcion: "Completá tu atuendo con estas divertidas medias con estampados inspirados en el mundo mágico. Mantené tus pies cómodos y demostrá tu amor por la magia en cada paso que des."},
    {id: 9, categoria: "Prendas", nombre: "Gorro Hogwarts", precio: 1200, imagen: "./img/prenda-gorro.png", descripcion: "Protegé tu cabeza del frío con este gorro con el emblema de Hogwarts. Su diseño elegante y detalles meticulosos te harán destacar y te recordarán la magia que te rodea."},
    {id: 10, categoria: "Prendas", nombre: "Remera Privet Drive", precio: 2500, imagen: "./img/prenda-remeraCarta.png", descripcion: "Llevá con vos un pedacito del mundo mágico con esta remera inspirada en Privet Drive, el hogar de Harry Potter antes de su aventura en Hogwarts. Un diseño exclusivo."},
    {id: 11, categoria: "Prendas", nombre: "Remera Hogwarts", precio: 2500, imagen: "./img/prenda-remeraHogwarts.png", descripcion: "Mostrá tu orgullo por Hogwarts con esta remera emblemática. Su diseño elegante y clásico te hará sentir parte de la escuela de magia y hechicería más famosa."},
    {id: 12, categoria: "Prendas", nombre: "Vestido Hermione", precio: 5000, imagen: "./img/prenda-vestido.png", descripcion: "Si deseas lucir elegante y sofisticada, este vestido inspirado en Hermione Granger es perfecto para vos. Con su estilo único, te transportará al mundo de la magia con un toque de encanto."},

    {id: 13, categoria: "Accesorios", nombre: "Anteojos Harry Potter", precio: 1200, imagen: "./img/accesorios-anteojos.png", descripcion: "Sentite como el famoso mago con estos icónicos anteojos. El complemento perfecto para completar tu disfraz de mago y vivir tus propias aventuras mágicas."},
    {id: 14, categoria: "Accesorios", nombre: "Giratiempo", precio: 1000, imagen: "./img/accesorios-giratiempo.png", descripcion: "Un accesorio fascinante que te permitirá viajar en el tiempo. Este colgante encantador te recordará el poder del tiempo y su importancia en el mundo de la magia."},
    {id: 15, categoria: "Accesorios", nombre: "Horrocrux", precio: 1000, imagen: "./img/accesorios-horrocrux.png", descripcion: "Adentrate en el lado oscuro con este horrocrux, un objeto mágico relacionado con la inmortalidad. Un accesorio imprescindible para los seguidores de la magia más oscura."},
    {id: 16, categoria: "Accesorios", nombre: "Lentes Luna Lovegood", precio: 1200, imagen: "./img/accesorios-luna.png", descripcion: "Llevá con vos el estilo único de Luna Lovegood con estos lentes extravagantes. Destacá entre la multitud y mostrá tu amor por la peculiaridad y la magia."},
    {id: 17, categoria: "Accesorios", nombre: "Collar Reliquias", precio: 900, imagen: "./img/accesorios-reliquias.png", descripcion: "Este collar encantador representa las famosas Reliquias de la Muerte. Un símbolo místico que demuestra tu conocimiento y conexión con la historia mágica más antigua."},
    {id: 18, categoria: "Accesorios", nombre: "Vela Hogwarts", precio: 2000, imagen: "./img/accesorios-vela.png", descripcion: "Creá un ambiente mágico en tu hogar con esta vela inspirada en Hogwarts. Su suave luz te transportará al Gran Comedor y te hará sentir parte del mundo de la magia."},

    {id: 19, categoria: "Jugueteria", nombre: "Ajedrez Mágico", precio: 3200, imagen: "./img/jugueteria-ajedrez.png", descripcion: "Ponete a prueba con este ajedrez que cobra vida. Convertite en un verdadero estratega y desafiá a tus amigos/as en una partida llena de magia y emoción."},
    {id: 20, categoria: "Jugueteria", nombre: "Juguete Dobby", precio: 3400, imagen: "./img/jugueteria-dobby.png", descripcion: "Llevá a Dobby, el elfo doméstico, a casa con vos con este encantador juguete. Un compañero leal que te recordará la importancia de la amistad y el valor."},
    {id: 21, categoria: "Jugueteria", nombre: "Castillo de Hogwarts", precio: 5600, imagen: "./img/jugueteria-hogwarts.png", descripcion: "Construí y explorá el majestuoso Castillo de Hogwarts con este increíble set. Reviví las aventuras de Harry y sus amigos."},
    {id: 22, categoria: "Jugueteria", nombre: "Harry Potter Lego", precio: 4300, imagen: "./img/jugueteria-lego.png", descripcion: "Dale vida al mundo de Harry Potter con este set de Lego. Creá tus propias historias y construí escenas icónicas mientras te sumergís en la magia de la construcción."},
    {id: 23, categoria: "Jugueteria", nombre: "Paraguas Hagrid", precio: 3200, imagen: "./img/jugueteria-paraguasHagrid.png", descripcion: "El paraguas de Hagrid, un objeto mágico y práctico, ahora puede ser tuyo. Aventurate bajo la lluvia con este paraguas especial que te recordará al amigable y gigante guardabosques."},
    {id: 24, categoria: "Jugueteria", nombre: "Pelota Quaffle", precio: 4400, imagen: "./img/jugueteria-quaffle.png", descripcion: "Preparate para el Quidditch con esta pelota Quaffle. Practicá tus habilidades en el deporte más popular del mundo mágico y sé parte de la emoción del juego."}
];

//Productos en LS
function guardoProductosLS() {
    localStorage.setItem("productos", JSON.stringify(productos))
} 

function cargoProductosLS() {
    return JSON.parse(localStorage.getItem("productos"));
}

guardoProductosLS();
botonCarrito();


