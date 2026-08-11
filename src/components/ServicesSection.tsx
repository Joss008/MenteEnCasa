import React, { useEffect, useRef } from 'react';
import {
  Baby,
  User,
  Users,
  Clock,
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SERVICES } from '../data/content';

interface ServicesSectionProps {
  onOpenWhatsapp: (msg: string, serviceTitle?: string) => void;
}

const FEATURED_IDS = ['consultoria-psicologica', 'asistencia-psicologica', 'consultoria-personalizada'];

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Baby': return <Baby className="w-5 h-5" />;
    case 'Users': return <Users className="w-5 h-5" />;
    case 'User': return <User className="w-5 h-5" />;
    default: return <User className="w-5 h-5" />;
  }
};

const getServiceImage = (serviceId: string) => {
  switch (serviceId) {
    case 'consultoria-psicologica':
      return 'https://sanzapsicologia.com/wp-content/uploads/2024/06/woman-with-hands-together-talking-with-counselor-scaled.jpg';
    case 'asistencia-psicologica':
      return 'https://psiconecta.org/wp-content/uploads/2024/05/psychological-help-2023-11-27-05-13-08-utc-768x512.jpg';
    case 'consultoria-personalizada':
      return 'https://www.mujeresenstem.pe/wp-content/uploads/2023/05/consultorio-de-terapia-psicologica-e1683431655268.jpg';
    default:
      return 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800';
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenWhatsapp }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featured = SERVICES.filter(s => FEATURED_IDS.includes(s.id));

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const targets = el.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    targets.forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" className="py-12 sm:py-20 bg-[#FAF7F2]">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 reveal-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal text-[#1F2421] tracking-tight">
            Encuentra el acompañamiento que necesitas
          </h2>
          <p className="text-base sm:text-lg text-[#525B54] leading-relaxed max-w-2xl mx-auto">
           Cada etapa trae retos distintos. Elige el tipo de acompañamiento psicológico que mejor se adapte a ti o a tu familia.
          </p>
        </div>

        {/* Featured Service Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((service, idx) => (
            <div
              key={service.id}
              className="bg-[#F3EFE6] rounded-3xl border border-[#E2DACB] overflow-hidden flex flex-col group hover:border-[#78909C]/40 transition-all duration-300 reveal-on-scroll"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={getServiceImage(service.id)}
                  alt={service.title}
                  className="w-full h-full object-cover img-hover-zoom"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-10 h-10 arch-top bg-[#78909C] text-[#FAF7F2] flex items-center justify-center shadow-md">
                  {getServiceIcon(service.iconName)}
                </div>
                <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-white bg-black/40 backdrop-blur-xs px-3 py-1 rounded-full">
                  <Clock className="w-3.5 h-3.5" />
                  {service.duration}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-serif-editorial font-normal text-[#1F2421] group-hover:text-[#78909C] transition-colors duration-200 min-h-[56px] flex items-center">
                  {service.title}
                </h3>
                <p className="text-xs text-[#615C47] mt-1 italic min-h-[32px]">
                  {service.subtitle}
                </p>
                <p className="text-sm text-[#525B54] leading-relaxed mt-3 flex-1">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="pt-4 mt-4 border-t border-[#E2DACB]">
                  <button
                    onClick={() => onOpenWhatsapp(service.defaultWhatsappMessage, service.title)}
                    className="btn-press w-full py-3 rounded-full bg-[#90A4AE] hover:bg-[#78909C] text-white font-bold text-sm transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Quiero información</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};