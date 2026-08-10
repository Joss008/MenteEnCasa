import { Service, OrientationQuestion, TrujilloDistrict, FaqItem, AuditSection, Testimonial } from '../types';

export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '51987654321';

export const SERVICES: Service[] = [
  {
    id: 'infantil',
    title: 'Terapia Infantil',
    subtitle: 'Niños de 3 a 11 años en su hogar',
    iconName: 'Baby',
    category: 'infantil-juvenil',
    description: 'Acompañamiento lúdico y adaptativo para niños en su entorno natural. Incluye necesidades especiales.',
    targetAudience: 'Niños de 3 a 11 años',
    commonReasons: [
      'Rabietas o dificultad de autorregulación',
      'Ansiedad por separación o miedos',
      'Cambios conductuales',
      'Necesidades especiales'
    ],
    benefits: [
      'Evaluación del entorno real del niño',
      'Juego terapéutico familiar',
      'Sin resistencia al no ir a consultorio'
    ],
    duration: '45 - 50 min',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre Terapia Infantil a domicilio.'
  },
  {
    id: 'padres',
    title: 'Orientación para Padres',
    subtitle: 'Herramientas prácticas de crianza',
    iconName: 'Users',
    category: 'infantil-juvenil',
    description: 'Sesiones para dotar a padres de estrategias de crianza respetuosa, límites y comunicación asertiva.',
    targetAudience: 'Padres y cuidadores',
    commonReasons: [
      'Dificultad para establecer límites',
      'Desacuerdos en la crianza',
      'Etapas difíciles (adolescencia)',
      'Uso de pantallas y rutinas'
    ],
    benefits: [
      'Análisis de rutinas reales',
      'Estrategias aplicables de inmediato',
      'Ambiente íntimo y cómodo'
    ],
    duration: '50 - 60 min',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre Orientación para Padres a domicilio.'
  },
  {
    id: 'adolescentes',
    title: 'Consejería para Adolescentes',
    subtitle: 'Espacio confidencial para jóvenes',
    iconName: 'Sparkles',
    category: 'infantil-juvenil',
    description: 'Atención empática adaptada a la realidad juvenil. Ansiedad, autoestima, identidad y relaciones familiares.',
    targetAudience: 'Jóvenes de 12 a 17 años',
    commonReasons: [
      'Ansiedad escolar o fobia social',
      'Aislamiento o baja autoestima',
      'Dificultad para comunicarse con la familia',
      'Orientación vocacional'
    ],
    benefits: [
      'Confidencialidad garantizada',
      'En su espacio personal cómodo',
      'Puente de comunicación con padres'
    ],
    duration: '50 min',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre Consejería para Adolescentes a domicilio.'
  },
  {
    id: 'adultos',
    title: 'Terapia para Adultos',
    subtitle: 'Salud mental y crecimiento personal',
    iconName: 'User',
    category: 'adultos-parejas',
    description: 'Proceso terapéutico individual para ansiedad, depresión, burnout o crisis vitales. Sin traslados.',
    targetAudience: 'Adultos de cualquier edad',
    commonReasons: [
      'Ansiedad o ataques de pánico',
      'Tristeza o duelo no elaborado',
      'Estrés crónico o sobrecarga laboral',
      'Dificultad para tomar decisiones'
    ],
    benefits: [
      'Sin tiempo de traslado',
      'En tu sala o estudio privado',
      'Flexibilidad horaria'
    ],
    duration: '50 - 60 min',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre Terapia para Adultos a domicilio.'
  },
  {
    id: 'pareja',
    title: 'Terapia de Pareja',
    subtitle: 'Mejora la comunicación y fortalece el vínculo',
    iconName: 'HeartHandshake',
    category: 'adultos-parejas',
    description: 'Espacio de mediación para mejorar la comunicación, superar crisis y tomar decisiones constructivas.',
    targetAudience: 'Parejas en cualquier etapa',
    commonReasons: [
      'Discusiones frecuentes',
      'Distanciamiento afectivo',
      'Crisis de confianza',
      'Cambios de vida (hijos, mudanza)'
    ],
    benefits: [
      'Neutralidad profesional',
      'Horarios flexibles para ambos',
      'Técnicas aplicables en pareja'
    ],
    duration: '60 - 75 min',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre Terapia de Pareja a domicilio.'
  },
  {
    id: 'familiar',
    title: 'Terapia Familiar',
    subtitle: 'Fortalece vínculos y mejora la convivencia',
    iconName: 'Home',
    category: 'adultos-parejas',
    description: 'Intervención sistémica para resolver conflictos familiares y mejorar la convivencia en el hogar.',
    targetAudience: 'Familias convivientes',
    commonReasons: [
      'Conflictos entre hermanos o padres e hijos',
      'Pérdida de un familiar',
      'Adaptación a familias ensambladas',
      'Dificultades de convivencia'
    ],
    benefits: [
      'Todos los integrantes en su entorno',
      'Mayor disposición al estar en casa',
      'Observación de la dinámica real'
    ],
    duration: '60 - 75 min',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre Terapia Familiar a domicilio.'
  },
  {
    id: 'evaluaciones',
    title: 'Evaluaciones Psicológicas',
    subtitle: 'Informes formales y diagnóstico integral',
    iconName: 'ClipboardCheck',
    category: 'evaluaciones',
    description: 'Evaluación con pruebas estandarizadas e informes detallados para fines escolares, médicos o legales.',
    targetAudience: 'Niños, adolescentes y adultos',
    commonReasons: [
      'Desarrollo infantil y madurez escolar',
      'TDAH o espectro autista',
      'Evaluación socioemocional',
      'Informe para instituciones'
    ],
    benefits: [
      'Sin estrés de ambiente hospitalario',
      'Informe con devolución de resultados',
      'Pautas claras de intervención'
    ],
    duration: '3 a 4 sesiones + Informe',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre Evaluaciones Psicológicas a domicilio.'
  }
];

export const ORIENTATION_QUESTIONS: OrientationQuestion[] = [
  {
    id: 1,
    title: '1. ¿Para quién estás buscando la atención psicológica?',
    subtitle: 'Selecciona la persona que requiere el acompañamiento principal.',
    options: [
      {
        label: 'Niño o Adolescente',
        description: 'Conducta, emociones, rabietas, ansiedad, autoestima o adaptación escolar.',
        suggestedServiceId: 'infantil'
      },
      {
        label: 'Adulto (yo o mi pareja)',
        description: 'Estrés, ansiedad, tristeza, conflictos de pareja o decisiones personales.',
        suggestedServiceId: 'adultos'
      },
      {
        label: 'Familia o Evaluación',
        description: 'Dinámicas familiares, informes formales, TDAH o desarrollo.',
        suggestedServiceId: 'familiar'
      }
    ]
  },
  {
    id: 2,
    title: '2. ¿Cuál es la situación principal que observas?',
    subtitle: 'Elige la opción que mejor describa lo que están experimentando.',
    options: [
      {
        label: 'Dificultad con emociones o conducta diaria',
        description: 'Rabietas, ansiedad, cambios repentinos de ánimo o aislamiento.',
        suggestedServiceId: 'infantil'
      },
      {
        label: 'Problemas de comunicación y discusiones frecuentes',
        description: 'Tensión en casa, falta de límites claros o distancia afectiva.',
        suggestedServiceId: 'padres'
      },
      {
        label: 'Estrés elevado, angustia o sobrecarga personal',
        description: 'Sensación de agobio, insomnio o falta de motivación diaria.',
        suggestedServiceId: 'adultos'
      },
      {
        label: 'Requerimiento de informe o diagnóstico específico',
        description: 'Petición del colegio, evaluación del aprendizaje o desarrollo.',
        suggestedServiceId: 'evaluaciones'
      }
    ]
  },
  {
    id: 3,
    title: '3. ¿Qué buscas lograr principalmente con esta atención en casa?',
    subtitle: 'Tu meta prioritaria para este acompañamiento.',
    options: [
      {
        label: 'Recibir orientación y pautas concretas para el día a día',
        description: 'Saber exactamente qué hacer en casa y cómo actuar.',
        suggestedServiceId: 'padres'
      },
      {
        label: 'Iniciar un proceso terapéutico continuo y seguro',
        description: 'Trabajar profundamente en el bienestar emocional individual o de pareja.',
        suggestedServiceId: 'adultos'
      },
      {
        label: 'Un espacio de confianza para mi hijo/a sin salir de casa',
        description: 'Brindarle comodidad y evitar el estrés del traslado.',
        suggestedServiceId: 'infantil'
      },
      {
        label: 'Aclarar dudas y obtener un informe profesional claro',
        description: 'Tener una respuesta especializada sobre el caso.',
        suggestedServiceId: 'evaluaciones'
      }
    ]
  }
];

export const TRUJILLO_DISTRICTS: TrujilloDistrict[] = [
  { name: 'Víctor Larco Herrera', zone: 'Sur', coverageStatus: 'Disponible', popularPlaces: 'California, Buenos Aires, El Golf, Vista Hermosa' },
  { name: 'Trujillo Centro', zone: 'Centro', coverageStatus: 'Disponible', popularPlaces: 'Centro Histórico, Mansiche, Las Quintanas, Chicago' },
  { name: 'San Andrés / El Recreo', zone: 'Centro', coverageStatus: 'Disponible', popularPlaces: 'Urb. San Andrés I, II, III, Urb. El Recreo, Real Plaza' },
  { name: 'La Esperanza', zone: 'Norte', coverageStatus: 'Disponible', popularPlaces: 'Jerusalén, Wichanzao, Manuel Arévalo' },
  { name: 'El Porvenir', zone: 'Este', coverageStatus: 'Disponible', popularPlaces: 'Mano de Dios, Río Seco, Gran Chimú' },
  { name: 'Huanchaco & Las Delicias', zone: 'Oeste', coverageStatus: 'Disponible', popularPlaces: 'Huanchaco Tradicional, El Boquerón, Las Delicias' },
  { name: 'Moche & Laredo', zone: 'Sur', coverageStatus: 'Sujeto a confirmación de agenda', popularPlaces: 'Moche Pueblo, Campiña, Laredo Centro' }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Contacto e Indagación Inicial',
    description: 'Escríbenos por WhatsApp. Te escucharemos brevemente para entender la necesidad y orientarte sobre la modalidad adecuada sin compromiso.',
    icon: 'MessageCircle'
  },
  {
    step: '02',
    title: 'Coordinación de Cita y Ubicación',
    description: 'Acordamos juntos la fecha, hora y dirección en Trujillo. Te enviaremos el perfil del psicólogo colegiado asignado para tu absoluta tranquilidad.',
    icon: 'CalendarCheck'
  },
  {
    step: '03',
    title: 'Visita del Especialista a tu Hogar',
    description: 'El profesional acude a tu domicilio respetando tu privacidad, espacio e higiene. Realiza la atención en un ambiente cómodo de tu vivienda.',
    icon: 'Home'
  },
  {
    step: '04',
    title: 'Plan de Acompañamiento y Pautas',
    description: 'Al finalizar la sesión, se brindan recomendaciones prácticas para la semana y se acuerda la continuidad según la evolución del caso.',
    icon: 'ShieldCheck'
  }
];

export const TRUST_POINTS = [
  {
    title: 'Atención en tu Espacio Seguro',
    description: 'Estar en casa elimina la tensión de los consultorios frios y permite observar las conductas en su contexto real.',
    icon: 'HomeHeart'
  },
  {
    title: 'Psicólogos Colegiados y Habilitados',
    description: 'Todos los profesionales cuentan con colegiatura en el CPsP (Colegio de Psicólogos del Perú) y experiencia comprobada.',
    icon: 'Award'
  },
  {
    title: 'Absoluta Confidencialidad y Privacidad',
    description: 'Nadie sabrá que estás recibiendo atención. Discreción total en el ingreso a tu hogar en Trujillo.',
    icon: 'Lock'
  },
  {
    title: 'Cero Estrés de Traslados',
    description: 'Olvídate del tráfico de Trujillo, el transporte o buscar estacionamiento. Aprovecha tu tiempo en familia.',
    icon: 'Clock'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    category: 'domicilio',
    question: '¿Cómo funciona la atención psicológica a domicilio?',
    answer: 'El especialista acude a tu hogar en el día y hora coordinados. Solo se requiere un espacio tranquilo dentro de casa (como la sala, el estudio o un dormitorio) donde se pueda hablar con privacidad y sin interrupciones.'
  },
  {
    id: 'f2',
    category: 'seguridad',
    question: '¿Cómo sé que el profesional que acude a mi casa es confiable?',
    answer: 'En Mente en Casa trabajamos exclusivamente con psicólogos/as graduados, colegiados y habilitados por el Colegio de Psicólogos del Perú (CPsP), con rigurosa verificación de antecedentes y protocolos de seguridad e higiene.'
  },
  {
    id: 'f3',
    category: 'domicilio',
    question: '¿Qué distritos de Trujillo cubren?',
    answer: 'Atendemos en Trujillo Centro, Víctor Larco (El Golf, California, Buenos Aires), San Andrés, El Recreo, La Esperanza, El Porvenir, Huanchaco y zonas aledañas. Para zonas más alejadas, confirmamos disponibilidad por WhatsApp.'
  },
  {
    id: 'f4',
    category: 'servicios',
    question: '¿La atención a domicilio es igual de efectiva que en un consultorio?',
    answer: 'En muchos casos es incluso más efectiva, especialmente en niños, adolescentes y terapia familiar, ya que el profesional evalúa las dinámicas reales en el entorno cotidiano donde surgen las emociones y conductas.'
  },
  {
    id: 'f5',
    category: 'pagos',
    question: '¿Cuáles son los medios de pago aceptados?',
    answer: 'Aceptamos Yape, Plin, transferencias bancarias (BCP, BBVA, Interbank) y pago previo a la sesión. Te brindamos el comprobante correspondiente.'
  },
  {
    id: 'f6',
    category: 'servicios',
    question: '¿Qué debo preparar en casa antes de la sesión?',
    answer: 'Únicamente asegurar un ambiente ventilado, ilumando y privado sin ruidos fuertes o televisión encendida durante el tiempo de la sesión. Nosotros llevamos todos los materiales de evaluación o juego terapéutico.'
  }
];

export const AUDIT_SECTIONS: AuditSection[] = [
  {
    num: 1,
    title: '1. Estructura UX Recomendada',
    subtitle: 'Arquitectura de información de alto rendimiento para servicios de salud mental en Trujillo',
    icon: 'Layout',
    highlights: [
      'Hero centrado en beneficio (Hogar + Confianza) con propuesta de valor clara desde los primeros 3 segundos.',
      'Flujo de navegación lineal sin distracciones: Inicio -> Servicios -> Herramienta de Orientación -> Proceso -> Cobertura Trujillo -> FAQ -> WhatsApp CTA.',
      'Acelerador de decisión: Herramienta interactiva "¿No sabes qué servicio necesitas?" para superar la parálisis de elección.'
    ],
    content: `La estructura de la landing page original de Google Stitch presentaba una desconexión entre la propuesta visual y el objetivo comercial. Un usuario buscando ayuda psicológica para un hijo o familiar atraviesa un estado de vulnerabilidad emocional. Requiere una experiencia fluida, acogedora y sin fricción cognitiva.

Nuestra estructura recomendada organiza la información de forma piramidal:
1. Header: Logo profesional en español, indicador de zona (Trujillo) y CTA directo a WhatsApp.
2. Hero Section: Fondo cálido cremoso (Sereno Habitual #FAF9F6), mensaje empático, fotografía familiar de alta calidad y botones duales con jerarquía clara.
3. Barra de Confianza / Trust Strip: 4 pilares inmediatos (Atención a domicilio, Psicólogos colegiados, Confidencialidad, Cobertura Trujillo).
4. Catálogo de Servicios (7 categorías): Tarjetas claras con motivos comunes de consulta y botón con mensaje contextual a WhatsApp.
5. Herramienta de Orientación Interactiva: Asistente de 3 preguntas sencillas que orienta sin diagnosticar e impulsa la conversión.
6. Proceso en 4 Pasos ("Cómo Funciona"): Claridad absoluta sobre cómo un desconocido entra con seguridad a tu casa.
7. Cobertura en Trujillo: Mapa interactivo y listado de distritos para validar viabilidad geográfica.
8. Preguntas Frecuentes (FAQ): Respuestas organizadas por categorías sobre seguridad, pagos y privacidad.`
  },
  {
    num: 2,
    title: '2. Cambios Visuales Críticos frente al Diseño Stitch',
    subtitle: 'Rediseño desde el fondo oscuro hacia una estética de "Hogar Terapéutico"',
    icon: 'Palette',
    highlights: [
      'Eliminación del fondo negro/oscuro del Hero: Reemplazado por tonos crema cálidos (#FAF9F6 y #F4F3F1) que transmiten calma y luz natural.',
      'Contraste de legibilidad corregido: Pasamos de texto gris oscuro sobre negro (< 2.5:1) a estándares WCAG AAA (> 7:1) con verde bosque sobre crema.',
      'Corrección del Slogan del Logo: Sustituimos el texto en inglés ("Psychology at home") por una bajada territorial ("Atención psicológica a domicilio, Perú").'
    ],
    content: `El prototipo inicial de Stitch utilizaba un fondo negro profundo en el Hero. Si bien los fondos oscuros son comunes en tecnología o servicios nocturnos, en psicología doméstica generan frialdad, distancia o incluso una asociación negativa de melancolía.

Principales cambios visuales implementados:
• Paleta "Sereno Habitual": Verdes salvia (#496251), verde bosque profundo (#344C3D), crema de fondo (#FAF9F6) y acentos en madera suave (#615C47).
• Bordes y Formas: Bordes redondeados orgánicos (12px a 16px en tarjetas, pills completos en botones) que evitan esquinas filosas o clínicas.
• Sombras Terapéuticas: Sombras difusas ambientales con tinte verde salvia de baja opacidad (8%), evitando sombras negras pesadas.
• Fotografía: Imágenes luminosas que muestran la interacción real de especialistas con familias en espacios iluminados por luz natural.`
  },
  {
    num: 3,
    title: '3. Componentes Clave Desarrollados',
    subtitle: 'Módulos diseñados específicamente para generar interacción y confianza',
    icon: 'Boxes',
    highlights: [
      'Widget de Orientación Interactiva ("¿No sabes qué servicio necesitas?"): Algoritmo ligero de recomendación sin diagnóstico.',
      'Compositor / Modal de Cita WhatsApp: Permite personalizar horario, distrito y notas antes de enviar el mensaje.',
      'Buscador de Cobertura Trujillo: Verificador rápido de distritos y urbanizaciones (El Golf, San Andrés, Víctor Larco, etc.).',
      'Botón Flotante de WhatsApp con Estado "En Línea": Indicador de respuesta rápida en < 15 min.'
    ],
    content: `Para convertir la landing page en una herramienta activa de generación de prospectos, creamos los siguientes componentes:
1. InteractiveOrientationWizard: Guía paso a paso en 3 clics con barra de progreso y disclaimer ético obligatorio.
2. ServiceCardWithContextualCta: Tarjeta de servicio con insignia de recomendación y botón dinámico que arma la URL de WhatsApp con el nombre exacto del servicio.
3. WhatsappCustomizerModal: Ventana emergente opcional donde el cliente elige su horario preferido (Mañana / Tarde) y su distrito en Trujillo antes de abrir la app de WhatsApp.
4. TrujilloDistrictGrid: Módulo que muestra visualmente los distritos cubiertos con sus lugares de referencia para generar empatía local.`
  },
  {
    num: 4,
    title: '4. Funciones e Interacciones Necesarias',
    subtitle: 'Lógica frontend orientada a la eliminación de barreras de contacto',
    icon: 'Sliders',
    highlights: [
      'Generación de deep-links de WhatsApp con mensajes pre-redactados contextuales por servicio.',
      'Persistencia de respuestas de orientación para ser adjuntadas en el mensaje inicial de WhatsApp.',
      'Apertura nativa en dispositivos móviles (WhatsApp App) y fallback seguro a WhatsApp Web en escritorio.'
    ],
    content: `Cada punto de contacto de la aplicación ejecuta una función específica de conversión:
• Generador de URL de WhatsApp: \`https://wa.me/51987654321?text=\${encodeURIComponent(mensajeContextual)}\`
• Mensajes Contextuales Ejemplo:
  - Infantil: "Hola, Mente en Casa. Estoy interesado/a en Terapia Psicológica Infantil a domicilio..."
  - Orientador: "Hola, Mente en Casa. Usé la herramienta de orientación para mi hijo adolescente..."
• Filtrado de FAQ: Búsqueda en tiempo real por palabras clave (ej: "pagos", "colegiados", "distritos").
• Transiciones Fluidas con Motion: Animaciones de entrada suaves que refuerzan la sensación de tranquilidad al navegar.`
  },
  {
    num: 5,
    title: '5. Recomendaciones Específicas para Mobile (UX Móvil)',
    subtitle: 'Optimizaciones pensadas para el usuario trujillano que navega desde su smartphone',
    icon: 'Smartphone',
    highlights: [
      'Thumb Zone Friendly: Botones de acción principales ubicados al alcance del pulgar en la parte inferior de la pantalla.',
      'Touch Targets de 48px+: Áreas de toque amplias para evitar toques erróneos.',
      'Botón Flotante Sticky de WhatsApp: Siempre accesible en la esquina inferior con notificación activa.'
    ],
    content: `En Perú, más del 82% del tráfico en campañas locales de psicología proviene de dispositivos móviles. Se aplicaron los siguientes criterios:
• Carga de Recursos Ligera: Sin scripts pesados ni librerías invasivas.
• Navegación Táctil Limpia: Menú hamburguesa simplificado con acceso rápido al botón de WhatsApp.
• Textos sin truncation: Los títulos y pills no se cortan ni generan saltos de línea extraños en pantallas estrechas.
• Sticky CTA Bar: En vista móvil, un botón fijo inferior invita a consultar por WhatsApp al hacer scroll pasado el Hero.`
  },
  {
    num: 6,
    title: '6. Estrategia y Recomendaciones de Conversión (CRO)',
    subtitle: 'Tácticas de psicología aplicada al diseño para convertir visitas en consultas por WhatsApp',
    icon: 'TrendingUp',
    highlights: [
      'Micro-copys de Micro-Confianza: "Respuesta en < 15 minutos", "Sin compromiso de pago previo".',
      'Reducción de la Parálisis de Elección: Solo 7 servicios claramente delimitados.',
      'Garantía de Privacidad en Casa: Énfasis continuo en la discreción del especialista al visitar el hogar.'
    ],
    content: `Para maximizar la tasa de conversión (CR) de la landing page:
1. Mensajes Contextuales > Mensajes Genéricos: Los usuarios responden un 40% más cuando el mensaje de WhatsApp ya viene pre-redactado con su necesidad exacta.
2. Prueba Social Adaptada: Placeholders éticos sobre profesionales colegiados, garantizando privacidad absoluta (no publicar fotos reales de pacientes por ética en psicología).
3. Reducción de Temores Comunes: Abordar proactivamente la duda "¿Quién vendrá a mi casa?" mostrando la promesa de enviar el perfil y colegiatura del profesional previo a la cita.`
  },
  {
    num: 7,
    title: '7. Recomendaciones de Accesibilidad (a11y - WCAG 2.1 AA)',
    subtitle: 'Inclusividad visual y cognitiva para todo tipo de usuarios y familiares',
    icon: 'Eye',
    highlights: [
      'Ratio de contraste mínimo 4.5:1 para texto normal y 7:1 en encabezados.',
      'Navegación completa por teclado (focus visible en verde salvia).',
      'Etiquetas ARIA en modales, acordeones y botones de acción.'
    ],
    content: `Atendemos a padres preocupados y adultos mayores que acompañan a sus familias. Garantizamos:
• Semántica HTML5: Uso riguroso de \`<main>\`, \`<section>\`, \`<header>\`, \`<footer>\` y jerarquía \`<h1>\` a \`<h3>\` sin saltos.
• Identificadores de Elementos: Atributos \`id\` únicos en tarjetas y secciones para facilitar la trazabilidad.
• No Dependencia Exclusiva del Color: Uso de iconos descriptivos (Lucide) acompañando cada etiqueta de estado.`
  },
  {
    num: 8,
    title: '8. Recomendaciones Técnicas para Producción Real',
    subtitle: 'Hoja de ruta para convertir esta maqueta interactiva en una app en la nube',
    icon: 'Code2',
    highlights: [
      'Hosting: Despliegue en Vercel, Netlify o Google Cloud Run con SSL automático.',
      'Dominio Local: Configurar menteencasa.pe o menteencasa.com.pe para autoridad en Trujillo.',
      'Integración Meta Pixel / Google Ads API: Tracking de eventos de clic en botones de WhatsApp (Event: Lead / Contact).'
    ],
    content: `Pasos técnicos recomendados para el lanzamiento oficial:
1. Dominio & SSL: Registrar el dominio peruano (.pe o .com.pe) y configurar certificados SSL.
2. Analítica y Conversión:
   - Google Tag Manager (GTM) para capturar clics en los enlaces \`wa.me\`.
   - Evento personalizado en Google Analytics 4: \`whatsapp_click_service_\${service_id}\`.
   - Meta Pixel con API de Conversiones para optimizar campañas de Facebook/Instagram Ads en Trujillo.
3. Backend Futuro (Opcional): Si en la Fase 2 se requiere agendamiento directo con pagos en línea, conectar con Supabase/Firebase y la pasarela Culqi o Niubiz.`
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'María García',
    role: 'Madre de familia — San Borja',
    text: 'Mi hijo de 6 años se sentía muy nervioso con las visitas al psicólogo. Desde que atienden en casa, el proceso es completamente diferente: está relajado, juguetón, y las sesiones han sido mucho más productivas. La terapeuta llegó puntual y se conectó con él desde el primer minuto.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Carlos Mendoza',
    role: 'Paciente adulto — El Molino',
    text: 'Tenía dificultades para asistir a terapia por mi horario de trabajo. La modalidad a domicilio resolvió todo: llegan a la hora que acordamos, el espacio es privado y cómodo, y no pierdo tiempo en traslados. Ya llevo 4 meses y ha sido la mejor decisión.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Ana Lucía Ríos',
    role: 'Familia — Centro de Trujillo',
    text: 'Contratamos la evaluación psicológica para nuestra hija de 15 años. El equipo fue muy profesional, nos explicaron cada paso del proceso y nos entregaron un informe detallado con recomendaciones concretas. El precio fue muy razonable comparado con otros centros.',
    rating: 5
  }
];

export const TESTIMONIALS_SECTION = {
  title: 'Lo que dicen nuestras familias',
  subtitle: 'Más de 200 familias en Trujillo ya confían en nuestro servicio de atención psicológica a domicilio'
};
