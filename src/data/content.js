const img = (name) => `/assets/images/${name}`

export const WHATSAPP_URL = 'https://wa.me/50378616000?text=Hola,%20necesito%20m%C3%A1s%20informaci%C3%B3n!'
export const WHATSAPP_LABEL = '+503 7861 6000'
export const EMAIL = 'Info@playwaylearning.com'
export const LOCATION = 'Santa Tecla, El Salvador'

export const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/playwaylearning/' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/playwaylearning/' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@playway.learning' },
]

export const services = [
  {
    slug: 'playground',
    title: ['Capacitaciones', '"Playground"'],
    text: 'Seis módulos para pulir las habilidades humanas que todo líder necesita.',
    image: img('Copia_de_IMG_3293-9337107.JPG'),
    alt: 'Equipo levanta las manos durante un reto Playground al aire libre',
  },
  {
    slug: 'coaching',
    title: ['Paquetes de', 'Coaching'],
    text: 'Sesiones diseñadas para alcanzar metas concretas y obtener resultados.',
    image: img('Copia_de_IMG_3257-9337106.JPG'),
    alt: 'Facilitador conversa con un equipo durante una sesión',
  },
  {
    slug: 'metaconferencias',
    title: ['MetaConferencias'],
    text: 'Conferencias donde la metáfora convierte ideas en aprendizaje memorable.',
    image: img('Copia_de_1J6A0333-8311442.JPG'),
    alt: 'Conferencista frente al banner BOOM durante una MetaConferencia',
  },
]

export const levelUp = [
  { name: 'Reconocer tus objetivos', text: 'Como todo maestro del juego, es importante conocer cual es objetivo o misión del juego.' },
  { name: 'Fortalecer habilidades', text: 'Todos los jugadores ya tienen todas las habilidades y vienen desarrolladas en diferentes niveles, se requiere fortalecer las necesarias para cumplir con el objetivo.' },
  { name: 'Accionar hacia un legado', text: 'Toman acciones que los acercan a completar los objetivos del juego mientras dejan su propio legado con un enfoque hacia el futuro.' },
]

export const strengths = [
  'Trabajo en equipo e inteligencia emocional',
  'Comunicación Asertiva y Escucha Activa.',
  'Gestión del Tiempo y Productividad.',
  'Gestión del cambio y Adaptabilidad.',
  'Resolución de Conflictos y Toma de Decisiones.',
  'Establecimiento de Objetivos y Automotivación.',
]

export const testimonials = [
  {
    name: 'Iris Lizeth Flores Alvarado',
    portrait: img('PlayWay-_Fondo_blanco_3-9504680.jpg'),
    quote: 'He aprendido muchísimo, valorar a mis compañeros, saber quién soy en realidad, saber qué es lo que me está afectando, cuáles son mis debilidades y en qué debo de mejorar. El saber que tengo un poder interno no descubierto ha sido una experiencia muy bonita',
  },
  {
    name: 'Herbert Alexander Armas Guerrero',
    portrait: img('PlayWay-_Fondo_blanco_2-9504144.jpg'),
    quote: 'La experiencia de este día fue muy emotiva para todos, fue una dinámica que rompió nuestra rutina y vino a renacer las relaciones interpersonales no solo del trabajo sino como compañeros, como personas',
  },
  {
    name: 'Amílcar Alexander Ardón',
    portrait: img('PlayWay-_PlayWay-_Sin_fondo_4-9504680.png'),
    quote: 'Uno de los provechos que he tenido con este taller ha sido el poder escuchar a los demás, creo que para poder tener un buen ambiente laboral lo primero es saber escuchar a los demás porque de esa manera podemos tener una mejor percepción de sus ideas, y así poder conectar',
  },
  {
    name: 'Ada Hueso de Vega',
    portrait: img('PlayWay-_Fondo_blanco_1-9510254.jpg'),
    quote: 'Lo que mas disfrute del taller fue la posibilidad de colaborar en equipo, de saber apreciar las capacidades de los demás y que todos tenemos algo que aportar, hacernos a un lado para quien tenga la capacidad avance, y luego nosotros también avanzar para todos lograr la meta',
  },
]

export const values = [
  { name: 'Autodeterminación y libertad', text: 'Todos somos líderes y nuestro impacto individual puede influir en la sociedad.' },
  { name: 'Liderazgo personal', text: 'Cada persona tiene el poder y la responsabilidad de definir su propio futuro y decidir quién quiere ser.' },
  { name: 'Actitud positiva y resiliencia', text: 'La alegría, el positivismo y la resiliencia son esenciales para superar obstáculos y encontrar oportunidades de crecimiento en los errores' },
]

// ponytail: flags hotlinked from flagcdn; self-host if the site must work offline
export const countries = [
  ['Bolivia', 'bo'], ['Chile', 'cl'], ['España', 'es'],
  ['México', 'mx'], ['Perú', 'pe'], ['Colombia', 'co'],
  ['Ecuador', 'ec'], ['Guatemala', 'gt'], ['Panamá', 'pa'],
  ['República Dominicana', 'do'], ['Costa Rica', 'cr'], ['EE.UU', 'us'],
  ['Honduras', 'hn'], ['Paraguay', 'py'],
]

export const stats = [
  { value: '6', label: 'módulos en el programa Playground' },
  { value: String(countries.length), label: 'países con facilitadores certificados' },
  { value: '+10', label: 'naciones respaldan MetaTraining®' },
  { value: String(levelUp.length), label: 'etapas del acompañamiento Level-Up' },
]

const photo = (name, alt) => ({ src: img(name), alt })

// Same mosaic as the original gallery: 3-column rows (2 | 1 | 2) then 2-column rows (1 | 2).
export const galleryRows = [
  [
    [photo('IMG_3831-9337115.jpg', 'Grupo conversa durante una sesión en un auditorio'), photo('Copia_de_1J6A0338-9678933.JPG', 'Participantes con capas realizan un reto con conos')],
    [photo('1J6A0094-8311442.jpg', 'Facilitador con capa naranja celebra con las manos en alto')],
    [photo('IMG_3757-9337112.JPG', 'Participantes bailan durante una dinámica'), photo('Copia_de_1J6A0305-9678933.JPG', 'Dos participantes con capas frente al banner My Power')],
  ],
  [
    [photo('Copia_de_IMG_3293-9337107.JPG', 'Equipo levanta las manos durante un reto al aire libre'), photo('Copia_de_IMG_3257-9337106.JPG', 'Facilitador conversa con un equipo al aire libre')],
    [photo('IMG_3737-9337111.JPG', 'Facilitador levanta la mano frente al grupo')],
    [photo('Copia_de_IMG_3552-9337108.JPG', 'Equipo muestra sus reconocimientos'), photo('Copia_de_IMG_3289-9337106.JPG', 'Participantes colaboran en una dinámica de movimiento')],
  ],
  [
    [photo('IMG_3992-9337122.JPG', 'Grupo completo celebra al finalizar la experiencia'), photo('IMG_3819-9337114.JPG', 'Participantes atienden una explicación')],
    [photo('Copia_de_1J6A0333-8311442.JPG', 'Facilitador dirige una experiencia frente al banner BOOM')],
    [photo('IMG_3969-9337121.JPG', 'Facilitadores dirigen una actividad frente a un grupo'), photo('IMG_3963-9337121.JPG', 'Vista amplia del grupo en el auditorio')],
  ],
  [
    [photo('IMG_3693-9337109.JPG', 'Participantes observan una explicación')],
    [photo('IMG_3707-9337110.JPG', 'Participantes con capas en fila'), photo('IMG_3697-9337109.JPG', 'Grupo con capas naranjas durante una dinámica')],
  ],
  [
    [photo('IMG_3775-9337114.JPG', 'Participantes con capas se mueven por la sala')],
    [photo('Copia_de_IMG_3454-8223442.JPG', 'Participante sonríe frente al banner My Power'), photo('Copia_de_IMG_3460-8223443.JPG', 'Participante levanta el puño durante el taller')],
  ],
]
