import React, { useEffect, useRef } from 'react';
import { CalendarCheck, Home, ShieldCheck, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PROCESS_STEPS } from '../data/content';

interface ProcessSectionProps {
  onOpenWhatsapp: (msg?: string) => void;
}

const getStepIcon = (iconName: string) => {
  switch (iconName) {
    case 'MessageCircle': return <WhatsAppIcon className="w-6 h-6" />;
    case 'CalendarCheck': return <CalendarCheck className="w-6 h-6" />;
    case 'Home': return <Home className="w-6 h-6" />;
    case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
    default: return <Home className="w-6 h-6" />;
  }
};

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenWhatsapp }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="metodologia" className="py-24 bg-[#FAF7F2]">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal text-[#1F2421] tracking-tight">
            ¿Cómo empezar?
          </h2>
          <p className="text-base sm:text-lg text-[#525B54] leading-relaxed">
           Conoce los pasos para iniciar tu acompañamiento psicológico de forma sencilla y segura.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div 
              key={idx}
              id={`process-step-${idx}`}
              className="bg-[#F3EFE6] p-7 rounded-3xl border border-[#E2DACB] shadow-xs relative flex flex-col justify-between group hover:border-[#3B5242]/50 transition-all duration-300 reveal-on-scroll"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-serif-editorial text-[#3B5242]/40 group-hover:text-[#3B5242] transition-colors">
                    {step.step}
                  </span>
                  <div className="w-11 h-11 arch-top bg-[#3B5242] text-[#FAF7F2] flex items-center justify-center shadow-xs">
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                <h3 className="text-lg font-serif-editorial font-normal text-[#1F2421] mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-[#525B54] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#E2DACB]">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mid-page Trust Callout */}
        <div className="mt-14 bg-[#F3EFE6] rounded-3xl p-6 sm:p-8 border border-[#E2DACB] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <h4 className="text-lg font-serif-editorial text-[#1F2421]">
              ¿Tienes dudas? Te las resuelvo antes de empezar
            </h4>
            <p className="text-xs text-[#525B54]">
              Escríbeme lo que necesites saber. Antes de la primera sesión te comparto mis datos y credenciales para que estés tranquilo o tranquila.
            </p>
          </div>

          <button
            id="process-whatsapp-cta"
            onClick={() => onOpenWhatsapp('Hola, me gustaría coordinar una cita y conocer más sobre tu metodología de trabajo.')}
            className="shrink-0 px-7 py-3.5 rounded-full bg-[#3B5242] hover:bg-[#2C3E33] text-white font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center gap-2 btn-press cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Coordinar cita por WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
