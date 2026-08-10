import { Service } from '../types';

export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '51989479954';

export const SERVICES: Service[] = [
  {
    id: 'infantil',
    title: 'Terapia Infantil',
    subtitle: 'Acompañamiento para comprender y expresar sus emociones',
    iconName: 'Baby',
    category: 'infantil-juvenil',
    description: 'Un espacio de acompañamiento psicológico para ayudar a tu hijo a comprender lo que siente, expresar sus emociones y desarrollar herramientas para afrontar distintas situaciones de su día a día.',
    targetAudience: 'Niños de 3 a 11 años',
    commonReasons: [
      'Rabietas frecuentes o cambios de comportamiento',
      'Miedos o dificultad para separarse de sus padres',
      'Dificultades emocionales en casa o en el colegio',
      'Problemas de atención, adaptación o aprendizaje'
    ],
    benefits: [
      'Un espacio donde puede expresarse con confianza',
      'Herramientas para comprender y manejar sus emociones',
      'Orientación para que la familia pueda acompañarlo mejor'
    ],
    duration: '45 - 50 min',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre la terapia infantil.'
  },
  {
    id: 'padres',
    title: 'Orientación para Padres',
    subtitle: 'Herramientas para acompañar mejor a tus hijos',
    iconName: 'Users',
    category: 'infantil-juvenil',
    description: 'Un espacio para resolver dudas sobre crianza, comunicación y límites, y encontrar estrategias que te ayuden a acompañar mejor a tus hijos en cada etapa de su desarrollo.',
    targetAudience: 'Padres y cuidadores',
    commonReasons: [
      'Dificultad para establecer límites',
      'Desacuerdos en la forma de criar',
      'Cambios propios de la adolescencia',
      'Conflictos relacionados con rutinas, estudios o uso de pantallas'
    ],
    benefits: [
      'Estrategias que puedes aplicar en casa',
      'Mayor claridad para afrontar situaciones difíciles',
      'Mejor comprensión de las necesidades de tus hijos'
    ],
    duration: '50 - 60 min',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre la orientación para padres.'
  },
  {
    id: 'adolescentes',
    title: 'Acompañamiento para Adolescentes',
    subtitle: 'Un espacio para hablar, comprenderse y sentirse escuchado',
    iconName: 'Sparkles',
    category: 'infantil-juvenil',
    description: 'Un espacio de confianza donde el adolescente pueda expresar lo que siente, hablar de sus preocupaciones y trabajar diferentes situaciones propias de esta etapa, con acompañamiento profesional.',
    targetAudience: 'Adolescentes de 12 a 17 años',
    commonReasons: [
      'Ansiedad relacionada con estudios o relaciones sociales',
      'Baja autoestima o inseguridad',
      'Dificultades para comunicarse con la familia',
      'Dudas sobre decisiones personales, estudios o futuro'
    ],
    benefits: [
      'Un espacio donde puede sentirse escuchado',
      'Herramientas para comprender y manejar sus emociones',
      'Acompañamiento para afrontar decisiones y cambios'
    ],
    duration: '50 min',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre el acompañamiento para adolescentes.'
  },
  {
    id: 'adultos',
    title: 'Terapia para Adultos',
    subtitle: 'Un espacio para tu bienestar emocional',
    iconName: 'User',
    category: 'adultos-parejas',
    description: 'Acompañamiento psicológico para comprender lo que estás viviendo, trabajar aquello que hoy te preocupa y desarrollar herramientas que puedas aplicar en tu vida cotidiana.',
    targetAudience: 'Adultos',
    commonReasons: [
      'Ansiedad o preocupación constante',
      'Tristeza, duelo o cambios importantes',
      'Estrés laboral o personal',
      'Dificultad para tomar decisiones o afrontar determinadas situaciones'
    ],
    benefits: [
      'Un espacio privado para hablar de lo que estás viviendo',
      'Mayor comprensión de tus emociones y necesidades',
      'Herramientas para afrontar situaciones del día a día'
    ],
    duration: '50 - 60 min',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre la terapia para adultos.'
  },
  {
    id: 'pareja',
    title: 'Terapia de Pareja',
    subtitle: 'Un espacio para escucharse y comprenderse mejor',
    iconName: 'HeartHandshake',
    category: 'adultos-parejas',
    description: 'Un espacio de acompañamiento para trabajar dificultades en la relación, mejorar la comunicación y comprender las necesidades de ambos desde una mirada profesional y neutral.',
    targetAudience: 'Parejas',
    commonReasons: [
      'Discusiones frecuentes',
      'Dificultades en la comunicación',
      'Distanciamiento emocional',
      'Problemas de confianza o cambios importantes en la relación'
    ],
    benefits: [
      'Un espacio donde ambos puedan expresarse',
      'Herramientas para mejorar la comunicación',
      'Mayor claridad sobre las necesidades y dinámica de la relación'
    ],
    duration: '60 - 75 min',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre la terapia de pareja.'
  },
  {
    id: 'familiar',
    title: 'Terapia Familiar',
    subtitle: 'Acompañamiento para mejorar la convivencia familiar',
    iconName: 'Home',
    category: 'adultos-parejas',
    description: 'Acompañamiento psicológico orientado a mejorar la comunicación, comprender los conflictos y trabajar en conjunto las situaciones que están afectando la convivencia familiar.',
    targetAudience: 'Familias',
    commonReasons: [
      'Conflictos frecuentes entre miembros de la familia',
      'Dificultades en la comunicación',
      'Duelo o cambios importantes dentro de la familia',
      'Problemas de convivencia'
    ],
    benefits: [
      'Un espacio donde cada integrante pueda expresarse',
      'Herramientas para mejorar la comunicación',
      'Mayor comprensión de las dinámicas familiares'
    ],
    duration: '60 - 75 min',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre la terapia familiar.'
  },
  {
    id: 'evaluaciones',
    title: 'Evaluaciones Psicológicas',
    subtitle: 'Conoce mejor diferentes aspectos del desarrollo y bienestar',
    iconName: 'ClipboardCheck',
    category: 'evaluaciones',
    description: 'Proceso de evaluación psicológica orientado a conocer diferentes aspectos emocionales, conductuales, cognitivos o del desarrollo. Al finalizar, se explican los resultados y las recomendaciones correspondientes.',
    targetAudience: 'Niños, adolescentes y adultos',
    commonReasons: [
      'Dudas relacionadas con el desarrollo o aprendizaje',
      'Dificultades de atención o comportamiento',
      'Preocupaciones sobre el bienestar emocional',
      'Necesidad de una evaluación psicológica específica'
    ],
    benefits: [
      'Mayor claridad sobre la situación evaluada',
      'Explicación comprensible de los resultados',
      'Recomendaciones según las necesidades identificadas'
    ],
    duration: 'Según el tipo de evaluación',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre las evaluaciones psicológicas.'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Nos escribes y te escuchamos',
    description: 'Cuéntanos por WhatsApp qué está pasando. Te escuchamos sin compromiso y te orientamos sobre cuál es el mejor acompañamiento para tu caso.',
    icon: 'MessageCircle'
  },
  {
    step: '02',
    title: 'Coordinamos tu primera cita',
    description: 'Acordamos la fecha y hora. Antes de la sesión recibes los datos de la psicóloga para tu total seguridad y confianza.',
    icon: 'CalendarCheck'
  },
  {
    step: '03',
    title: 'La sesión, en tu espacio',
    description: 'La psicóloga llega tu casa y te acompaña en un ambiente cómodo, respetando siempre tu privacidad.',
    icon: 'Home'
  },
  {
    step: '04',
    title: 'Te vas con un plan claro',
    description: 'Al finalizar, recibes recomendaciones prácticas para la semana y acordamos los siguientes pasos según tu evolución.',
    icon: 'ShieldCheck'
  }
];

export const TRUST_POINTS = [
  {
    title: 'La comodidad de tu zona de confianza',
    description: 'Hablar donde uno se siente seguro hace toda la diferencia: los niños se relajan antes y la familia se abre con más facilidad.',
    icon: 'HomeHeart'
  },
  {
    title: 'Psicóloga colegiada y con experiencia',
    description: 'Te acompaña una profesional titulada, colegiada en el CPsP y con experiencia real acompañando a familias.',
    icon: 'Award'
  },
  {
    title: 'Confidencialidad total',
    description: 'Todo lo que se hable en las sesiones queda entre nosotros. Tu privacidad y la de tu familia están protegidas.',
    icon: 'Lock'
  },
  {
    title: 'Horarios que se adaptan a ti',
    description: 'Nada de alterar toda la rutina familiar: coordinamos horarios que funcionen para ti y los tuyos.',
    icon: 'Clock'
  }
];
