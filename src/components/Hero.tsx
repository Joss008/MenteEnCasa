import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { MapPin, Shield, Home, Users } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeroProps {
  onOpenWhatsapp: (msg?: string) => void;
  onScrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenWhatsapp,
  onScrollToSection,
}) => {
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trustRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="relative pt-7 pb-12 sm:pt-8 sm:pb-16 lg:py-24 overflow-hidden bg-[#FAF7F2]">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 sm:gap-12 lg:gap-10 items-center">

          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7 space-y-5 text-center sm:text-left"
          >

            <div className="space-y-4 mx-auto sm:mx-0 max-w-[34rem] lg:max-w-none">
              <h1 className="text-[2rem] sm:text-4xl lg:text-[2.75rem] font-serif-editorial font-normal text-[#1F2421] tracking-tight leading-[1.08] sm:leading-[1.18] text-balance">
                Tu bienestar emocional, estés donde estés
              </h1>
              <p className="text-[0.98rem] sm:text-lg text-[#525B54] font-normal leading-relaxed max-w-xl mx-auto sm:mx-0">
                Acompañamiento psicológico para niños, adolescentes, adultos y familias en su bienestar emocional, ofreciendo atención personalizada, sin estrés y con total confidencialidad.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md mx-auto sm:mx-0 sm:max-w-none">
              <button
                onClick={() => onOpenWhatsapp('Hola, me gustaría agendar una sesión de psicología a domicilio.')}
                className="btn-press min-h-14 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#90A4AE] hover:bg-[#78909C] text-white font-bold text-[0.95rem] sm:text-base transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-3"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Agendar por WhatsApp</span>
              </button>

              <button
                onClick={() => onScrollToSection('servicios')}
                className="btn-press min-h-[52px] px-6 py-3.5 sm:py-4 rounded-full bg-[#F3EFE6] border border-[#E2DACB] hover:border-[#78909C] text-[#607D8B] font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 hover:bg-[#EBE4D8]"
              >
                <span>Ver servicios</span>
              </button>
            </div>
          </motion.div>

          {/* Right Hero Column: Arch Photo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="absolute -inset-2 bg-[#EBE4D8] arch-top max-w-[320px] sm:max-w-[420px] w-full h-[372px] sm:h-[500px] transform rotate-2 pointer-events-none" />

            <div className="relative arch-top max-w-[320px] sm:max-w-[420px] w-full overflow-hidden bg-white border-[3px] sm:border-4 border-[#FAF7F2] group">
              <img
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&q=80&w=1200"
                alt="Familia feliz en un hogar acogedor"
                width={600}
                height={480}
                className="w-full h-[352px] sm:h-[480px] object-cover img-hover-zoom-subtle"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>

        {/* Bottom Trust Strip */}
        <div
          ref={trustRef}
          className="mt-16 pt-8 border-t border-[#E2DACB] grid grid-cols-2 md:grid-cols-4 gap-4 reveal-on-scroll"
        >
          {[
            { icon: Home, title: 'Atención 100% online', sub: 'Conéctate desde donde estés' },
            { icon: Shield, title: 'Psicóloga colegiada CPsP', sub: 'Atención profesional y personalizada' },
            { icon: Users, title: 'Para toda la familia', sub: 'Niños, adolescentes y adultos' },
            { icon: MapPin, title: 'Horarios coordinados', sub: 'Agenda según tu disponibilidad' },
          ].map((item) => (
            <div
              key={item.title}
              className="card-hover bg-[#F3EFE6] p-4 rounded-2xl border border-[#E2DACB] flex items-center gap-3 cursor-default"
            >
              <div className="p-2.5 rounded-xl bg-[#3B5242]/10 text-[#3B5242]">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#1F2421]">{item.title}</p>
                <p className="text-[11px] text-[#615C47]">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
