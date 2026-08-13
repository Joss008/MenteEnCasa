import React, { useEffect, useRef } from 'react';
import { Shield, CheckCircle2, UserCheck, FileText } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface AboutPsychologistsProps {
  onOpenWhatsapp: (msg: string) => void;
}

export const AboutPsychologists: React.FC<AboutPsychologistsProps> = ({ onOpenWhatsapp }) => {
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
    <section id="quienes" className="py-12 sm:py-20 bg-[#FAF7F2] border-t border-[#E2DACB] overflow-hidden">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Column: Photo */}
          <div className="lg:col-span-5 relative flex justify-center reveal-on-scroll">
            <div className="absolute -inset-3 bg-[#EBE4D8] arch-top max-w-[300px] sm:max-w-[400px] w-full h-[380px] sm:h-[480px] transform -rotate-2 pointer-events-none" />
            <div className="relative arch-top max-w-[300px] sm:max-w-[400px] w-full overflow-hidden bg-[#FAF7F2] shadow-xl border-4 border-[#FAF7F2] group">
              <img
                src="/clienta.png"
                alt="Psicóloga profesional en su consulta"
                className="w-full h-[360px] sm:h-[460px] object-contain img-hover-zoom-subtle"
                loading="lazy"
                width="1200"
                height="900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left reveal-on-scroll" style={{ transitionDelay: '100ms' }}>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal text-[#1F2421] tracking-tight leading-[1.2]">
              Hola, soy Luciana Cerdeña, psicóloga en conducta humana .
            </h2>

            <p className="text-base text-[#525B54] leading-relaxed">
              Mi propósito es acompañarte a comprender lo que estás viviendo y brindarte herramientas que te ayuden a afrontar las dificultades de tu día a día.
            </p>
            <p className="text-base text-[#525B54] leading-relaxed">
              Cada proceso es único, por eso las sesiones se adaptan a tus necesidades, a las de tu familia o a las de tus hijos, en un espacio de confianza, respeto y confidencialidad.
            </p>

            {/* Quality Standards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                {
                  icon: CheckCircle2,
                  title: 'Colegiatura vigente',
                  desc: 'Licenciada, colegiada y habilitada para ejercer en el Perú.'
                },
                {
                  icon: UserCheck,
                  title: 'Atención personalizada',
                  desc: 'Cada sesión se adapta a tus necesidades y objetivos.'
                },
                {
                  icon: Shield,
                  title: 'Sesiones 100% online',
                  desc: 'Recibe atención desde un espacio cómodo y privado.'
                },
                {
                  icon: FileText,
                  title: 'Confidencialidad',
                  desc: 'Tu información y lo conversado en sesión están protegidos.'
                }
              ].map((item) => (
                <div key={item.title} className="p-4 bg-[#F3EFE6] rounded-2xl border border-[#E2DACB] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1F2421]">
                    <item.icon className="w-4 h-4 text-[#3B5242]" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-[11px] text-[#525B54] leading-normal pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-3 flex justify-center sm:justify-start">
              <button
                onClick={() => onOpenWhatsapp('Hola, me gustaría conocerte y agendar una sesión a domicilio.')}
                className="btn-press px-7 py-3.5 rounded-full bg-[#90A4AE] text-white font-bold text-xs sm:text-sm hover:bg-[#78909C] transition-colors duration-200 inline-flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Agendar una sesión</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};