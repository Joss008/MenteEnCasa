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
    <section id="hero" className="relative pt-8 pb-16 lg:py-24 overflow-hidden bg-[#FAF7F2]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7 space-y-5 text-left"
          >

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif-editorial font-normal text-[#1F2421] tracking-tight leading-[1.18]">
                Tu bienestar emocional comienza en tu hogar
              </h1>
              <p className="text-base sm:text-lg text-[#525B54] font-normal leading-relaxed max-w-xl">
                Sesiones de psicología a domicilio para niños, adolescentes, adultos y familias. Sin traslados, sin estrés, con total confidencialidad y un enfoque basado en evidencia.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onOpenWhatsapp('Hola, me gustaría agendar una sesión de psicología a domicilio.')}
                className="btn-press px-7 py-4 rounded-full bg-[#3B5242] hover:bg-[#2C3E33] text-white font-bold text-base transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-3"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Agendar por WhatsApp</span>
              </button>

              <button
                onClick={() => onScrollToSection('servicios')}
                className="btn-press px-6 py-4 rounded-full bg-[#F3EFE6] border border-[#E2DACB] hover:border-[#3B5242] text-[#2C3E33] font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 hover:bg-[#EBE4D8]"
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
            <div className="absolute -inset-2 bg-[#EBE4D8] arch-top max-w-[380px] sm:max-w-[420px] w-full h-[460px] sm:h-[500px] transform rotate-2 pointer-events-none" />

            <div className="relative arch-top max-w-[380px] sm:max-w-[420px] w-full overflow-hidden bg-white border-4 border-[#FAF7F2] group">
              <img
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&q=80&w=1200"
                alt="Familia feliz en un hogar acogedor"
                width={600}
                height={480}
                className="w-full h-[440px] sm:h-[480px] object-cover img-hover-zoom-subtle"
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
            { icon: Home, title: 'Atención a domicilio', sub: 'En la comodidad de tu hogar' },
            { icon: Shield, title: 'Psicóloga CPsP', sub: 'Profesional colegiada' },
            { icon: Users, title: 'Todas las edades', sub: 'Niños, adolescentes y adultos' },
            { icon: MapPin, title: 'Cobertura amplia', sub: 'Según disponibilidad de agenda' },
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
