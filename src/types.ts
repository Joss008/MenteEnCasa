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

