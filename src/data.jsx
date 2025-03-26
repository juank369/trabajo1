
import { BookOpen,Database,Camera,BriefcaseBusiness,DollarSign,
    Clipboard,Pen,Focus,ChevronsLeftRight,Speech,SquareChevronRight,
    SquareUserRound,TvMinimalPlay,Glasses } from "lucide-react";

import { LiaFacebookSquare } from "react-icons/lia";
import { PiYoutubeLogo } from "react-icons/pi";
import { HiOutlineMail,HiOutlineShare } from "react-icons/hi";
import { FaRegMessage } from "react-icons/fa6";
import { AiOutlineShopping } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { RiTwitterLine } from "react-icons/ri";




export const elementosPresentacion=[
    {
        id: 1,
        titulo: "Lenguaje natural",
        funcion: "Los ultimos modelos de generacion de texto a tu disposicion",
        logo: <BookOpen size={30} strokeWidth={1} />
    },
    {
        id: 2,
        titulo: "Analisis de datos",
        funcion: "Estadisticas precisas y concreetas, sin rodeos",
        logo: <Database size={30} strokeWidth={1} />
    },
    {
        id: 3,
        titulo: "Generacion de imagenes y videos",
        funcion: "apoya graficamente tu negocio!",
        logo: <Camera size={30} strokeWidth={1} />
    },
    {
        id: 4,
        titulo: "Inventario",
        funcion: "adios a los problemas de inventario, todo en su lugar en todo momento",
        logo: <BriefcaseBusiness size={30} strokeWidth={1} />
    },
    {
        id: 5,
        titulo: "Estudio de oportunidades",
        funcion: "No dejes que el barco se vaya sin ti, subete!",
        logo: <DollarSign size={30} strokeWidth={1} />
    },
    {
        id: 6,
        titulo: "Manejo de proyectos",
        funcion: "Nadie entiende mejor tus ideas que alguien entrenado para hacerlo!",
        logo: <Clipboard size={30} strokeWidth={1} />
    },
    
    
    
]

export const datosCarrusel1=[
    "Reseña",
    "Productos",
    "Texto",
    "Video",
    "Imagenes",
    "Codigo",
    "Voz"
]

export const elementostiposCuerpo3=[
    {
        id:1,
        titulo:"Escritura",
        logo: <Pen  strokeWidth={1} />
    },
    {
        id:2,
        titulo:"Imagen",
        logo: <Focus strokeWidth={1} />
    },
    {
        id:3,
        titulo:"Archivo",
        logo: <ChevronsLeftRight strokeWidth={1} />
    },
    {
        id:4,
        titulo:"Voz",
        logo: <Speech strokeWidth={1} />
    },
    {
        id:5,
        titulo:"Plagio",
        logo: <BookOpen strokeWidth={1} />
    },
    {
        id:6,
        titulo:"Codigo",
        logo: <SquareChevronRight strokeWidth={1} />
    },
    {
        id:7,
        titulo:"Avatar",
        logo: <SquareUserRound strokeWidth={1} />
    },
    {
        id:8,
        titulo:"Video",
        logo: <TvMinimalPlay strokeWidth={1} />
    },
    {
        id:9,
        titulo:"Vision",
        logo: <Glasses strokeWidth={1} />
    }
]

export const elementosCuerpo3=[
    {
        id:1,
        etiqueta:"Chatbot de IA",
        titulo:"Conversaciones humanas.",
        descripcion:"Obtén respuestas instantáneas a tus preguntas, sin importar el tema. Ya sea que quieras reservar, obtener recomendaciones de productos o simplemente charlar sobre el clima.",
        caracteristicas:["Biblioteca personal de indicaciones","Personalización y capacitación de chatbots","Personas de chatbot personalizadas"],
        imagen:"/c31.jpg.jpg",
        textoImg:""
    },
    {
        id:2,
        etiqueta:"Editor de IA avanzado",
        titulo:"Asistente de escritura inteligente.",
        descripcion:"Nuestro Escritor con IA está diseñado para ayudarte a generar textos de alta calidad al instante. Con nuestra interfaz intuitiva y potentes funciones, puedes editar, exportar o publicar fácilmente tus resultados generados por IA.",
        caracteristicas:["100 plantillas prediseñadas + plantillas personalizadas","https://modern.magicproject.ai/#:~:text=Integraci%C3%B3n%20de%20la%20voz%20de%20la%20marca","Generación masiva de publicaciones"],
        imagen:"/c32.jpg.jpg",
        textoImg:""
    },
    {
        id:3,
        etiqueta:"Estudio fotográfico con IA",
        titulo:"Crea imágenes impactantes.",
        descripcion:"Genere imágenes de alta calidad para una amplia gama de aplicaciones, incluido diseño web, publicidad y redes sociales, o simplemente edite sus imágenes existentes con herramientas de inteligencia artificial avanzadas.",
        caracteristicas:["Texto a imagen, boceto a imagen","Mejorar o reinventar","Quitar o reemplazar el fondo"],
        imagen:"/c33.jpg.jpg",
        textoImg:""
    },
    {
        id:4,
        etiqueta:"AI FileChat",
        titulo:"Analizar cualquier documento.",
        descripcion:"¿Necesita extraer información específica de un documento? Ahora puede navegar rápidamente por él, lo que le proporciona información instantánea, resúmenes o datos clave.",
        caracteristicas:["Compatibilidad con PDF, .doc y CSV","Conversación de exportación","Interfaz de arrastrar y soltar"],
        imagen:"/c34.jpg.jpg",
        textoImg:""
    },
    {
        id:5,
        etiqueta:"Voz en off con IA",
        titulo:"Dale vida a tus palabras",
        descripcion:"Con su fluidez, entonación natural y versatilidad inigualable, nuestra locución con IA es la opción perfecta para cualquier proyecto. Elige fácilmente entre una variedad de voces e idiomas y ajusta el ritmo a tus preferencias.",
        caracteristicas:["OpenAI, ElevenLabs, GCS","más de 30 idiomas",],
        imagen:"/c35.jpg.jpg",
        textoImg:""
    },
    {
        id:6,
        etiqueta:"Comprobador de plagio",
        titulo:"Detección instantánea de plagio.",
        descripcion:"Escanee millones de fuentes en línea en segundos para detectar casos de plagio o duplicación de contenido, proporcionando enlaces correspondientes al contenido plagiado que se encuentra en línea.",
        caracteristicas:["Detector de contenido de IA","Puntuación de plagio","Enlaces de origen"],
        imagen:"/c36.jpg.jpg",
        textoImg:""
    },
    {
        id:7,
        etiqueta:"Codificador de IA",
        titulo:"Codifique como un profesional.",
        descripcion:"Nuestra herramienta está diseñada para que la programación sea más rápida, sencilla y eficiente que nunca. Tanto si eres un desarrollador experimentado como si eres principiante en programación, te ayudará a optimizar tu proceso.",
        caracteristicas:["Crear aplicaciones de escritorio o móviles","Explicar el código","Corrección de errores"],
        imagen:"/c37.jpg.jpg",
        textoImg:""
    },
    {
        id:8,
        etiqueta:"Avatares de IA",
        titulo:"Crea avatares de IA con calidad de estudio.",
        descripcion:"Aprovecha los avatares de IA para crear fácilmente vídeos atractivos de información, ventas, atención al cliente o marketing. Produce contenido con calidad de estudio en más de 130 idiomas.",
        caracteristicas:["Más de 130 idiomas","Más de 15 fondos de vídeo","Voces en off"],
        imagen:"/c38.jpg.jpg",
        textoImg:""
    },
    {
        id:9,
        etiqueta:"Conversión de voz a texto con IA",
        titulo:"Transcripciones rápidas y precisas",
        descripcion:"Transcriba sus grabaciones con precisión en minutos. Con nuestra interfaz intuitiva, puede subir sus archivos y transcribirlos en cuestión de clics.",
        caracteristicas:["Transcripción instantánea","Copiar al portapapeles","Alta precisión"],
        imagen:"/c39.jpg.jpg",
        textoImg:""
    },
    {
        id:10,
        etiqueta:"Vídeo de IA",
        titulo:"Crea vídeos impresionantes sin esfuerzo",
        descripcion:"Dale vida a tus imágenes estáticas con transiciones fluidas y edición de calidad profesional. Simplemente sube tus fotos y nuestras herramientas de IA se encargarán del resto, creando un video dinámico.",
        caracteristicas:["Fidelidad","Intensidad del movimiento","Semilla"],
        imagen:"/c40.jpg.jpg",
        textoImg:""
    },
    {
        id:11,
        etiqueta:"Visión de IA",
        titulo:"Obtenga información a partir de elementos visuales.",
        descripcion:"Sube sin esfuerzo cualquier imagen que quieras explorar o discutir y sumérgete en conversaciones reveladoras que mejoren tu comprensión del elemento visual relacionado.",
        caracteristicas:["Explicar la imagen","Arrastrar y soltar","Conversación reveladora"],
        imagen:"/c41.jpg.jpg",
        textoImg:""
    },

]

export const iconoRedesCuerpo4=[
    {
        texto:`Facebook`,
        texto2:"facebook",
        icono:<LiaFacebookSquare/>
    },
    {
        texto:"youtube",
        texto2:"youtube",
        icono:<PiYoutubeLogo/>
    },
    {
        texto:"email",
        texto2:"email",
        icono:<HiOutlineMail/>
    },
    {
        texto:"Reseña",
        icono:<FaRegMessage/>
    },
    {
        texto:"Ventas",
        icono:<AiOutlineShopping/>
    },
    {
        texto:"Compartir",
        icono:<HiOutlineShare/>
    },
    {
        texto:"Analisis",
        icono:<GoGraph/>
    },
    {
        texto:"Post X",
        icono:<RiTwitterLine/>
    },
]

export const elementosCuerpo5=[
    "Acceso de por vida",
    "Multiples herramientas de IA",
    "Plantillas personalizadas",
    "Plataforma todo en uno",
    "Conoce tu marca",
    "Prepago",
    "Asistente inteligente IA"
]

export const datosCuerpo6=[
    {
        id:1,
        titulo:"Chatbot de",
        etiqueta:"Entrenamiento",
        texto:"Entrena fácilmente a la IA con sus propios datos (sitio web, PDF, texto o incluso preguntas y respuestas) y haz que tu contenido sea exclusivo de tu sitio web. Solo tienes que seleccionar la fuente y dejar que la magia suceda ante tus ojos."

    },
    {
        id:2,
        titulo:"Sistema de",
        etiqueta:"Afiliacion",
        texto:"Invita a amigos, establece reglas de afiliación y gana comisiones desde su primera compra."

    },
    {
        id:3,
        titulo:"Miembros del",
        etiqueta:"Equipo",
        texto:"nvite a sus colegas y colaboradores a unirse a un equipo y aprovechar al máximo las ventajas de la IA."

    },
    {
        id:4,
        titulo:"Construccion",
        etiqueta:"para Moviles",
        texto:"Nuestra herramienta de AI está diseñada para funcionar a la perfección en cualquier dispositivo. Un diseño totalmente adaptable y una experiencia similar a la nativa te permiten crear contenidos de IA en cualquier dispositivo, independientemente de su tamaño."

    },
    {
        id:5,
        titulo:"Integracion",
        etiqueta:"de WordPress",
        texto:"Envíe automáticamente contenido generado por IA a su sitio de WordPress."

    },
    {
        id:6,
        titulo:"Identidad",
        etiqueta:"de Marca",
        texto:"Sólo tiene que introducir los datos de su marca y sus productos una vez, y nuestra herramienta de inteligencia artificial los recordará en cada creación futura. Con identidad de marca, tu identidad única brilla sin esfuerzo, ahorrándote tiempo y garantizando la coherencia de todos tus contenidos."

    },
    {
        id:7,
        titulo:"Libreria",
        etiqueta:"Personal",
        texto:"Basta con echar un vistazo a la biblioteca, seleccionar una sugerencia que le resulte atractiva o crear su propia sugerencia en cuestión de segundos. Como se añaden nuevas sugerencias con regularidad, siempre hay inspiración fresca esperando a despertar tu creatividad."

    },
    {
        id:8,
        titulo:"Facil",
        etiqueta:"Exportacion",
        texto:"Exporte la copia generada como texto sin formato, PDF, Word o HTML."

    },
]