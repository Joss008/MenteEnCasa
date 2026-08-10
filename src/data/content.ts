import { Service } from '../types';

export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '51989479954';

export const SERVICES: Service[] = [
  {
    id: 'infantil',
    title: 'Terapia Infantil',
    subtitle: 'Para que tu hijo se sienta mejor en casa',
    iconName: 'Baby',
    category: 'infantil-juvenil',
    description: 'Ayudamos a tu hijo a sentirse mejor en el lugar donde ya se siente seguro: su casa. A través del juego y conversaciones sencillas, entendemos qué le pasa y le damos herramientas para manejar sus emociones.',
    targetAudience: 'Niños de 3 a 11 años',
    commonReasons: [
      'Rabietas frecuentes o berrinches que te preocupan',
      'Miedos o dificultad para separarse de ti',
      'Cambios de comportamiento que notan en el colegio o en casa',
      'Dificultades de atención o aprendizaje'
    ],
    benefits: [
      'Tu hijo se siente en confianza desde el primer día',
      'Aprendes, como familia, cómo ayudarlo mejor',
      'Ves cambios reales en el día a día'
    ],
    duration: '45 - 50 min',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre la terapia para mi hijo o hija.'
  },
  {
    id: 'padres',
    title: 'Orientación para Padres',
    subtitle: 'Estrategias sencillas para criar con calma',
    iconName: 'Users',
    category: 'infantil-juvenil',
    description: 'Criar no es fácil y no tienes que hacerlo a ciegas. Aprendemos juntos formas sencillas de poner límites con amor, comunicarte mejor con tus hijos y manejar las etapas difíciles con más tranquilidad.',
    targetAudience: 'Padres y cuidadores',
    commonReasons: [
      'No sabes cómo poner límites sin gritar ni pelear',
      'Tú y tu pareja no se ponen de acuerdo en la crianza',
      'La adolescencia está siendo un reto',
      'Las pantallas y las rutinas se volvieron una pelea diaria'
    ],
    benefits: [
      'Herramientas que puedes usar desde la primera semana',
      'Más paz y menos discusiones en casa',
      'Entiendes mejor qué le pasa a tu hijo'
    ],
    duration: '50 - 60 min',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre la orientación para padres.'
  },
  {
    id: 'adolescentes',
    title: 'Consejería para Adolescentes',
    subtitle: 'Un espacio seguro para tu hijo',
    iconName: 'Sparkles',
    category: 'infantil-juvenil',
    description: 'La adolescencia puede sentirse como un torbellino. Le ofrecemos a tu hijo un espacio sin juicios donde hablar de lo que le preocupa, con total confidencialidad, y te acompañamos para que la comunicación en casa mejore.',
    targetAudience: 'Jóvenes de 12 a 17 años',
    commonReasons: [
      'Ansiedad por los estudios o miedo a socializar',
      'Se aísla o siente que no vale lo suficiente',
      'Ya no sabes cómo comunicarte con él o ella',
      'Dudas sobre su futuro o qué estudiar'
    ],
    benefits: [
      'Un lugar donde se siente escuchado, sin miedo a ser juzgado',
      'Recuperas la comunicación con tu hijo',
      'Aprende a manejar sus emociones y decisiones'
    ],
    duration: '50 min',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre el acompañamiento para adolescentes.'
  },
  {
    id: 'adultos',
    title: 'Terapia para Adultos',
    subtitle: 'Bienestar y equilibrio para tu día a día',
    iconName: 'User',
    category: 'adultos-parejas',
    description: 'Si sientes que el peso del día a día te está ganando, este espacio es para ti. Trabajamos juntos para entender lo que sientes y recuperar tu bienestar, en la comodidad de tu casa y en horarios que se adaptan a tu vida.',
    targetAudience: 'Adultos de cualquier edad',
    commonReasons: [
      'Ansiedad o la sensación de que no puedes más',
      'Tristeza que no se va o un duelo pendiente',
      'Estrés por el trabajo o la rutina',
      'Te cuesta tomar decisiones importantes'
    ],
    benefits: [
      'Un espacio solo para ti, sin prisas y en casa',
      'Horarios flexibles que se adaptan a tu rutina',
      'Herramientas para sentirte mejor cada semana'
    ],
    duration: '50 - 60 min',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre la terapia para adultos.'
  },
  {
    id: 'pareja',
    title: 'Terapia de Pareja',
    subtitle: 'Vuelvan a escucharse y conectar',
    iconName: 'HeartHandshake',
    category: 'adultos-parejas',
    description: 'Toda pareja atraviesa momentos difíciles. Este espacio les ayuda a escucharse de nuevo, comunicarse mejor y decidir juntos qué quieren para su relación, con la guía de una profesional neutral.',
    targetAudience: 'Parejas en cualquier etapa',
    commonReasons: [
      'Discusiones que no llevan a nada',
      'Sienten que se están distanciando',
      'Problemas de confianza',
      'Cambios grandes (hijos, mudanzas) que los desbordan'
    ],
    benefits: [
      'Aprenden a conversar en lugar de discutir',
      'Recuperan la conexión y la cercanía',
      'Un espacio neutral donde ambos se sienten escuchados'
    ],
    duration: '60 - 75 min',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre la terapia de pareja.'
  },
  {
    id: 'familiar',
    title: 'Terapia Familiar',
    subtitle: 'Que el hogar vuelva a ser un lugar de paz',
    iconName: 'Home',
    category: 'adultos-parejas',
    description: 'Cuando la convivencia se vuelve difícil, toda la familia lo siente. Trabajamos juntos para mejorar la comunicación, resolver conflictos y que el hogar vuelva a ser un espacio de calma y apoyo.',
    targetAudience: 'Familias convivientes',
    commonReasons: [
      'Peleas frecuentes entre hermanos o con los padres',
      'Duelo por la pérdida de un ser querido',
      'Adaptación a una nueva familia',
      'Una convivencia cada vez más tensa'
    ],
    benefits: [
      'Todos se sienten escuchados',
      'Menos conflictos y más armonía en casa',
      'Herramientas para comunicarse mejor en familia'
    ],
    duration: '60 - 75 min',
    defaultWhatsappMessage: 'Hola, me gustaría información sobre la terapia familiar.'
  },
  {
    id: 'evaluaciones',
    title: 'Evaluaciones Psicológicas',
    subtitle: 'Respuestas claras sobre desarrollo y aprendizaje',
    iconName: 'ClipboardCheck',
    category: 'evaluaciones',
    description: 'Si tienes dudas sobre el desarrollo, el aprendizaje o el estado emocional de tu hijo (o el tuyo), una evaluación da respuestas claras. Recibes un informe fácil de entender y recomendaciones prácticas para el colegio, el médico o la familia.',
    targetAudience: 'Niños, adolescentes y adultos',
    commonReasons: [
      'Dudas sobre el desarrollo o la madurez escolar de tu hijo',
      'Sospecha de déficit de atención o alguna condición como el autismo',
      'Preocupación por su estado emocional',
      'Necesitan un informe para el colegio u otra institución'
    ],
    benefits: [
      'Respuestas claras sobre qué le pasa y cómo ayudarlo',
      'Un informe que entiendes y que sirve para el colegio o el médico',
      'Recomendaciones prácticas para el día a día'
    ],
    duration: '3 a 4 sesiones + Informe',
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
