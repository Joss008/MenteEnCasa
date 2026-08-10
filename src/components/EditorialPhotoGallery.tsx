import React, { useEffect, useRef } from 'react';
import { Heart, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

interface EditorialPhotoGalleryProps {
  onOpenWhatsapp: (msg: string) => void;
  onScrollToSection: (id: string) => void;
}

export const EditorialPhotoGallery: React.FC<EditorialPhotoGalleryProps> = ({
  onOpenWhatsapp,
  onScrollToSection
}) => {
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
    <section id="galeria" className="py-20 bg-[#FAF7F2] border-b border-[#E2DACB] overflow-hidden">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3EFE6] border border-[#E2DACB] text-[#3B5242] text-xs font-semibold tracking-wider">
            <Heart className="w-3.5 h-3.5 text-[#3B5242]" />
            <span>Atención Humana & Cercana</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal text-[#1F2421] tracking-tight">
            Un espacio de calma en el lugar donde te sientes más seguro
          </h2>
          
          <p className="text-base sm:text-lg text-[#525B54] leading-relaxed">
            La terapia a domicilio elimina las barreras del tráfico y la rigidez de los consultorios. Psicólogos capacitados se desplazan hasta tu hogar en Trujillo para acompañar a tu familia en su propio entorno.
          </p>
        </div>

        {/* Editorial Photo Bento Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Niños y Familias */}
          <div className="md:col-span-7 bg-[#F3EFE6] rounded-3xl p-6 sm:p-8 border border-[#E2DACB] flex flex-col justify-between relative overflow-hidden group hover:border-[#3B5242]/40 transition-all duration-300 reveal-on-scroll">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="space-y-4 text-left">
                <span className="px-3 py-1 rounded-full bg-[#EBE4D8] text-[#3B5242] text-[11px] font-bold uppercase tracking-wider inline-block">
                  Acompañamiento Infantil
                </span>
                <h3 className="text-2xl font-serif-editorial text-[#1F2421]">
                  Niños y adolescentes en un clima de confianza
                </h3>
                <p className="text-xs sm:text-sm text-[#525B54] leading-relaxed">
                  Los niños expresan sus emociones con mayor fluidez cuando se encuentran en su espacio cotidiano, rodeados de sus juguetes y en compañía de sus padres.
                </p>
                <button
                  onClick={() => onOpenWhatsapp('Hola, Mente en Casa. Quisiera información sobre la atención psicológica a domicilio para niños y adolescentes en Trujillo.')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#3B5242] hover:underline pt-2"
                >
                  <span>Consultar modalidad infantil</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Arch Shaped Photo Container */}
              <div className="relative arch-top overflow-hidden rounded-b-2xl h-64 sm:h-72 border-2 border-[#E2DACB] shadow-md group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"
                  alt="Niños jugando en un ambiente seguro y terapéutico"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Card 2: Adultos */}
          <div className="md:col-span-5 bg-[#F3EFE6] rounded-3xl p-6 sm:p-8 border border-[#E2DACB] flex flex-col justify-between group hover:border-[#3B5242]/40 transition-all duration-300 reveal-on-scroll" style={{ transitionDelay: '80ms' }}>
            <div className="space-y-4 text-left">
              <div className="relative rounded-2xl overflow-hidden h-48 sm:h-52 border border-[#E2DACB]">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
                  alt="Persona en sesión de meditación y bienestar emocional"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>

              <h3 className="text-xl font-serif-editorial text-[#1F2421]">
                Ansiedad, estrés laboral y procesos de cambio
              </h3>

              <p className="text-xs text-[#525B54] leading-relaxed">
                Sin prisas ni salas de espera. Recibe herramientas científicas y contención profesional en el confort de tu sala o espacio de descanso.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E2DACB] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#3B5242]">Sesiones de 50 - 60 min</span>
              <button
                onClick={() => onOpenWhatsapp('Hola, Mente en Casa. Deseo consultar sobre atención psicológica para adultos en Trujillo.')}
                className="text-xs font-bold text-[#3B5242] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Saber más</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Terapia de Pareja */}
          <div className="md:col-span-5 bg-[#F3EFE6] rounded-3xl p-6 sm:p-8 border border-[#E2DACB] flex flex-col justify-between group hover:border-[#3B5242]/40 transition-all duration-300 reveal-on-scroll" style={{ transitionDelay: '160ms' }}>
            <div className="space-y-4 text-left">
              <div className="relative rounded-2xl overflow-hidden h-48 sm:h-52 border border-[#E2DACB]">
                <img
                  src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800"
                  alt="Espacio armónico de diálogo en el hogar para terapia de pareja"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>

              <h3 className="text-xl font-serif-editorial text-[#1F2421]">
                Reconstrucción de vínculos y comunicación sana
              </h3>

              <p className="text-xs text-[#525B54] leading-relaxed">
                Espacios neutrales de diálogo mediado. Abordamos conflictos relacionales, crianza respetuosa y transiciones familiares de forma comprensiva.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E2DACB] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#3B5242]">Atención coordinada</span>
              <button
                onClick={() => onOpenWhatsapp('Hola, Mente en Casa. Quisiera consultar sobre terapia de pareja o familia a domicilio en Trujillo.')}
                className="text-xs font-bold text-[#3B5242] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Consultar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Adulto Mayor */}
          <div className="md:col-span-7 bg-[#3B5242] text-[#FAF7F2] rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group shadow-lg reveal-on-scroll" style={{ transitionDelay: '240ms' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2]/10 text-[#FAF7F2] text-[11px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Adulto Mayor & Apoyo Especial</span>
                </div>

                <h3 className="text-2xl font-serif-editorial text-[#FAF7F2]">
                  Acompañamiento cálido a personas mayores en Trujillo
                </h3>

                <p className="text-xs sm:text-sm text-[#EBE4D8] leading-relaxed">
                  Trato digno, estimulación cognitiva y soporte emocional para adultos mayores con dificultades de movilidad o duelo.
                </p>

                <button
                  onClick={() => onOpenWhatsapp('Hola, Mente en Casa. Me interesa consultar sobre el servicio de atención psicológica a domicilio para un adulto mayor en Trujillo.')}
                  className="px-5 py-3 rounded-full bg-[#25D366] text-[#0F2918] font-bold text-xs inline-flex items-center gap-2 hover:bg-[#20ba5a] transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Solicitar atención guiada</span>
                </button>
              </div>

              <div className="relative rounded-2xl overflow-hidden h-60 border border-[#FAF7F2]/20 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
                  alt="Profesional de psicología brindando acompañamiento cálido"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
