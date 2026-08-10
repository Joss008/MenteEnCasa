import React, { useEffect, useRef } from 'react';
import { Shield, Award, CheckCircle2, UserCheck, FileText } from 'lucide-react';
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
    <section id="quienes" className="py-20 bg-[#FAF7F2] border-t border-[#E2DACB] overflow-hidden">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Column: Photo */}
          <div className="lg:col-span-5 relative flex justify-center reveal-on-scroll">
            <div className="absolute -inset-3 bg-[#EBE4D8] arch-top max-w-[380px] sm:max-w-[400px] w-full h-[480px] transform -rotate-2 pointer-events-none" />
            <div className="relative arch-top max-w-[380px] sm:max-w-[400px] w-full overflow-hidden bg-white shadow-xl border-4 border-[#FAF7F2] group">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200"
                alt="Psicóloga profesional en su consulta"
                className="w-full h-[460px] object-cover img-hover-zoom-subtle"
                loading="lazy"
                width="1200"
                height="900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left reveal-on-scroll" style={{ transitionDelay: '100ms' }}>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3EFE6] border border-[#E2DACB] text-[#3B5242] text-xs font-semibold tracking-wider">
              <Award className="w-3.5 h-3.5 text-[#3B5242]" />
              <span>Psicóloga Clínica Certificada</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal text-[#1F2421] tracking-tight leading-[1.2]">
              Soy la psicóloga que va a tu hogar
            </h2>

            <p className="text-base text-[#525B54] leading-relaxed">
              Soy psicóloga clínica titulada y colegiada en el CPsP. Creo firmemente que la terapia funciona mejor en un espacio donde te sientas seguro y cómodo: tu hogar. Mi enfoque es empático, basado en evidencia y adaptado a las necesidades reales de cada persona, incluyendo niños con habilidades especiales.
            </p>

            <p className="text-base text-[#525B54] leading-relaxed">
              No necesitas desplazarte, esperar en salas de espera o adaptar tu horario. Llego a tu domicilio con toda la confidencialidad, profesionalismo y calidez que mereces.
            </p>

            {/* Quality Standards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { icon: CheckCircle2, title: 'Colegiatura Vigente', desc: 'CPsP con habilitación activa para ejercer legalmente en el Perú.' },
                { icon: UserCheck, title: 'Identificación Previa', desc: 'Recibes mis datos y credenciales antes de la sesión para tu total confianza.' },
                { icon: Shield, title: 'Protocolos Profesionales', desc: 'Puntualidad, presentación formal e higiene estricta en cada visita.' },
                { icon: FileText, title: 'Secreto Profesional', desc: 'Toda la información se resguarda bajo el código de ética del psicólogo peruano.' },
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
            <div className="pt-3">
              <button
                onClick={() => onOpenWhatsapp('Hola, me gustaría conocerte y agendar una sesión a domicilio.')}
                className="btn-press px-7 py-3.5 rounded-full bg-[#3B5242] text-white font-bold text-xs sm:text-sm hover:bg-[#2C3E33] transition-colors duration-200 inline-flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Conocer más por WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
