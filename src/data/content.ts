import { Service } from '../types';

export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '51989479954';

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
