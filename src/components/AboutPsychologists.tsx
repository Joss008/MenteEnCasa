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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Left Column: Narrative */}
          <div className="space-y-6 text-left reveal-on-scroll">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal text-[#1F2421] tracking-tight leading-[1.2]">
              Somos un equipo de profesionales en salud mental
            </h2>

            <p className="text-base text-[#525B54] leading-relaxed">
              Nuestro propósito es acompañarte a comprender lo que estás viviendo y brindarte herramientas que te ayuden a afrontar las dificultades de tu día a día.
            </p>
            <p className="text-base text-[#525B54] leading-relaxed">
              Cada proceso es único, por eso las sesiones se adaptan a tus necesidades, a las de tu familia o a las de tus hijos, en un espacio de confianza, respeto y confidencialidad.
            </p>

            {/* Quality Standards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                {
                  icon: CheckCircle2,
                  title: 'Profesionales colegiados',
                  desc: 'Psicólogos licenciados, colegiados y habilitados para ejercer en el Perú.'
                },
                {
                  icon: UserCheck,
                  title: 'Atención personalizada',
                  desc: 'Cada sesión se adapta a tus necesidades y objetivos.'
                },
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
                onClick={() => onOpenWhatsapp('Hola, me gustaría conocer al equipo y agendar una sesión a domicilio.')}
                className="btn-press px-7 py-3.5 rounded-full bg-[#90A4AE] text-white font-bold text-xs sm:text-sm hover:bg-[#78909C] transition-colors duration-200 inline-flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Agendar una sesión</span>
              </button>
            </div>

          </div>

          {/* Right Column: Carl Jung Quotes */}
          <div className="flex flex-col gap-5 reveal-on-scroll" style={{ transitionDelay: '150ms' }}>
            <div className="flex-1 p-8 sm:p-10 bg-[#E8F0ED] rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4e4dd] rounded-bl-full opacity-50" />
              <span className="block text-7xl font-serif-editorial text-[#90A4AE] leading-none select-none mb-2 relative">"</span>
              <p className="text-lg sm:text-xl text-[#1F2421] leading-relaxed font-serif-editorial relative">
                Hasta que hagas <em className="italic">consciente</em> lo inconsciente, este dirigirá tu vida y tú lo llamarás <em className="italic">destino</em>.
              </p>
              <div className="mt-8 flex items-center gap-4 relative">
                <div className="h-px w-12 bg-[#90A4AE]" />
                <p className="text-sm text-[#525B54] font-serif-editorial">Carl G. Jung</p>
              </div>
            </div>
            <div className="flex-1 p-8 sm:p-10 bg-[#F3EFE6] rounded-3xl relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#E8DFD0] rounded-tr-full opacity-50" />
              <span className="block text-7xl font-serif-editorial text-[#C4B9A8] leading-none select-none mb-2 relative">"</span>
              <p className="text-lg sm:text-xl text-[#1F2421] leading-relaxed font-serif-editorial relative">
                No soy lo que me pasó, soy lo que <em className="italic">elijo</em> ser.
              </p>
              <div className="mt-8 flex items-center gap-4 relative">
                <div className="h-px w-12 bg-[#C4B9A8]" />
                <p className="text-sm text-[#525B54] font-serif-editorial">Carl G. Jung</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};