export interface Service {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  category: 'infantil-juvenil' | 'adultos-parejas' | 'evaluaciones';
  description: string;
  targetAudience: string;
  commonReasons: string[];
  benefits: string[];
  duration: string;
  defaultWhatsappMessage: string;
}

export interface OrientationQuestion {
  id: number;
  title: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    suggestedServiceId: string;
  }[];
}

export interface TrujilloDistrict {
  name: string;
  zone: 'Norte' | 'Centro' | 'Sur' | 'Este' | 'Oeste';
  coverageStatus: 'Disponible' | 'Sujeto a confirmación de agenda';
  popularPlaces: string;
}

export interface FaqItem {
  id: string;
  category: 'domicilio' | 'servicios' | 'pagos' | 'seguridad';
  question: string;
  answer: string;
}

export interface AuditSection {
  num: number;
  title: string;
  subtitle: string;
  icon: string;
  highlights: string[];
  content: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}
