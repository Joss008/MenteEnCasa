import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Search, CheckCircle2, MessageCircle, Navigation, ShieldAlert } from 'lucide-react';
import { TRUJILLO_DISTRICTS } from '../data/content';

interface CoverageTrujilloProps {
  onOpenWhatsapp: (msg: string) => void;
}

export const CoverageTrujillo: React.FC<CoverageTrujilloProps> = ({ onOpenWhatsapp }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredDistricts = TRUJILLO_DISTRICTS.filter(d => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.popularPlaces.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
  }, [filteredDistricts.length]);

  return (
    <section id="cobertura" className="py-24 bg-[#FAF7F2] border-t border-[#E2DACB]">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3EFE6] border border-[#E2DACB] text-[#3B5242] text-xs font-semibold tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Presencia Local</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal text-[#1F2421] tracking-tight">
            Cobertura de Atención a Domicilio en Trujillo
          </h2>
          <p className="text-base sm:text-lg text-[#525B54] leading-relaxed">
            Acudimos directamente a tu residencia en la provincia de Trujillo. Revisa tu zona o consulta la disponibilidad de horarios en tu distrito.
          </p>
        </div>

        {/* Search Input Box */}
        <div className="mt-10 max-w-md mx-auto relative">
          <Search className="w-5 h-5 text-[#615C47] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            id="district-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Busca tu distrito o urbanización (ej: El Golf, San Andrés)..."
            className="w-full pl-11 pr-4 py-3.5 rounded-full bg-[#F3EFE6] border border-[#E2DACB] text-sm text-[#1F2421] placeholder-[#615C47] focus:outline-none focus:ring-2 focus:ring-[#3B5242] shadow-xs"
          />
        </div>

        {/* Districts Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDistricts.length > 0 ? (
            filteredDistricts.map((district, idx) => (
              <div
                key={idx}
                id={`district-card-${idx}`}
                className="bg-[#F3EFE6] p-6 rounded-3xl border border-[#E2DACB] shadow-xs hover:border-[#3B5242]/50 transition-all duration-300 flex flex-col justify-between reveal-on-scroll"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif-editorial font-normal text-lg text-[#1F2421]">
                      {district.name}
                    </h3>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#EBE4D8] text-[#5C5549]">
                      Zona {district.zone}
                    </span>
                  </div>

                  <p className="text-xs text-[#615C47]">
                    <strong>Urbanizaciones / Lugares:</strong> {district.popularPlaces}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E2DACB] flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#2C3E33]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                    {district.coverageStatus}
                  </span>

                  <button
                    onClick={() => onOpenWhatsapp(`Hola, Mente en Casa. Deseo consultar disponibilidad para una cita a domicilio en el distrito de ${district.name} en Trujillo.`)}
                    className="text-xs font-semibold text-[#3B5242] hover:underline flex items-center gap-1"
                  >
                    <span>Consultar</span>
                    <Navigation className="w-3 h-3 text-[#3B5242]" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10 bg-[#F3EFE6] rounded-3xl border border-[#E2DACB] p-8 space-y-4">
              <ShieldAlert className="w-8 h-8 text-[#5C5549] mx-auto" />
              <p className="text-sm font-semibold text-[#1F2421]">
                No encontramos "{searchTerm}" en la lista previa
              </p>
              <p className="text-xs text-[#615C47]">
                ¡No te preocupes! Atendemos en toda la provincia de Trujillo. Consúltanos directamente por WhatsApp.
              </p>
              <button
                onClick={() => onOpenWhatsapp(`Hola, Mente en Casa. Quisiera saber si tienen cobertura a domicilio en la zona de "${searchTerm}" en Trujillo.`)}
                className="px-6 py-3 rounded-full bg-[#25D366] text-[#0F2918] font-bold text-xs inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Consultar zona por WhatsApp</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
