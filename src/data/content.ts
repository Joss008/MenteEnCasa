import { Service } from '../types';

export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '51989479954';

export const SERVICES: Service[] = [
  {
    id: 'consultoria-psicologica',
    title: 'Consultoría Psicológica',
    subtitle: 'Orientación para comprender y afrontar lo que estás viviendo',
    iconName: 'Users',
    category: 'adultos-parejas',
    description: 'Un espacio de orientación psicológica para explorar una situación específica, aclarar tus dudas y encontrar herramientas que te ayuden a tomar decisiones y afrontar diferentes situaciones de tu vida.',
    targetAudience: 'Adultos',
    commonReasons: [
      'Dudas sobre una situación específica',
      'Necesidad de orientación para tomar decisiones',
      'Búsqueda de herramientas para afrontar situaciones'
    ],
    benefits: [
      'Mayor claridad sobre lo que estás viviendo',
      'Herramientas para tomar decisiones',
      'Acompañamiento para afrontar diferentes situaciones'
    ],
    duration: '50 min',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre la consultoría psicológica.'
  },
  {
    id: 'asistencia-psicologica',
    title: 'Asistencia Psicológica',
    subtitle: 'Un acompañamiento cercano para cuidar tu bienestar emocional',
    iconName: 'User',
    category: 'adultos-parejas',
    description: 'Acompañamiento psicológico para brindarte apoyo durante momentos de dificultad, ayudarte a comprender lo que estás experimentando y desarrollar recursos para afrontar los desafíos de tu día a día.',
    targetAudience: 'Adultos',
    commonReasons: [
      'Momentos de dificultad o malestar emocional',
      'Necesidad de apoyo para comprender lo que sientes',
      'Búsqueda de recursos para el día a día'
    ],
    benefits: [
      'Un acompañamiento cercano y continuo',
      'Mayor comprensión de lo que estás experimentando',
      'Recursos para afrontar los desafíos diarios'
    ],
    duration: '50 - 60 min',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre la asistencia psicológica.'
  },
  {
    id: 'consultoria-personalizada',
    title: 'Consultoría Personalizada',
    subtitle: 'Un espacio adaptado a tus necesidades y objetivos',
    iconName: 'Baby',
    category: 'infantil-juvenil',
    description: 'Atención personalizada según tu situación y necesidades. Trabajamos de manera enfocada en aquello que deseas comprender, mejorar o resolver, con estrategias pensadas especialmente para ti.',
    targetAudience: 'Personas y familias',
    commonReasons: [
      'Situaciones que requieren atención enfocada',
      'Objetivos personales que deseas trabajar',
      'Necesidad de estrategias a tu medida'
    ],
    benefits: [
      'Estrategias pensadas especialmente para ti',
      'Trabajo enfocado en tus objetivos',
      'Atención adaptada a tu situación'
    ],
    duration: '50 - 60 min',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre la consultoría personalizada.'
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
