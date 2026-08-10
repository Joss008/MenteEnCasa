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


            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal text-[#1F2421] tracking-tight leading-[1.2]">
              Soy Luciana Cerdeña,psicóloga titulada y colegiada..
            </h2>

            <p className="text-base text-[#525B54] leading-relaxed">
              Creo firmemente que sanar y crecer funciona mejor en un espacio seguro. Por eso, mi forma de trabajar es cercana, respetuosa y 100% adaptada a ti, a tu familia o al desarrollo de tus hijos.
            </p>
            <p className="text-base text-[#525B54] leading-relaxed">
              Mi objetivo es simple: que salgas de cada sesión con más claridad, con herramientas prácticas y con la tranquilidad de saber que no estás solo o sola en esto.
            </p>

            {/* Quality Standards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { icon: CheckCircle2, title: 'Colegiatura vigente', desc: 'Titulada y habilitada en el CPsP para ejercer en el Perú.' },
                { icon: UserCheck, title: 'Datos verificados', desc: 'Recibes mis datos y credenciales antes de la primera sesión.' },
                { icon: Shield, title: 'Profesionalismo en cada visita', desc: 'Puntualidad, respeto y cuidado en cada detalle.' },
                { icon: FileText, title: 'Secreto profesional', desc: 'Lo que se habla en sesión, se queda en sesión. Tu privacidad está protegida.' },
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
                <span>Escucho tu caso por WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
