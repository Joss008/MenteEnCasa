import React from 'react';
import { MapPin, ShieldCheck, PhoneCall } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Logo } from './Logo';

interface FooterProps {
  onOpenWhatsapp: (msg?: string) => void;
  onScrollToSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenWhatsapp,
  onScrollToSection
}) => {
  return (
    <footer id="contacto" className="bg-[#2C3E33] text-[#FAF7F2] pt-16 pb-12 border-t border-[#3B5242]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3B5242]">

          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="bg-[#233328] p-3 rounded-2xl border border-[#3B5242] inline-block">
              <Logo variant="horizontal" theme="dark" size="md" />
            </div>

            <p className="text-xs text-[#EBE4D8] leading-relaxed max-w-sm">
              Atención psicológica personalizada a domicilio. Acompañamos el bienestar emocional de niños, adolescentes, adultos y familias en su propio espacio.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-[#EBE4D8]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#3B5242] shrink-0" aria-hidden="true" />
                <span>Según disponibilidad de agenda</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#3B5242] shrink-0" aria-hidden="true" />
                <span>Psicóloga Colegiada y Habilitada (CPsP)</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <p className="font-bold text-xs text-[#FAF7F2] uppercase tracking-wider">
              Contacto
            </p>

            <div className="space-y-3 text-xs text-[#EBE4D8]">
              <p>La forma más rápida de comunicarte conmigo es por WhatsApp.</p>
              
              <button
                onClick={() => onOpenWhatsapp('Hola, me gustaría agendar una sesión de psicología a domicilio.')}
                className="px-5 py-3 rounded-full bg-[#3B5242] text-white font-bold text-xs hover:bg-[#2C3E33] transition-all inline-flex items-center gap-2 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5242] btn-press cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" aria-hidden="true" />
                <span>Escribir por WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Emergency */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <p className="font-bold text-xs text-[#FAF7F2] uppercase tracking-wider">
              Emergencias
            </p>

            <div className="bg-[#24332A] p-4 rounded-2xl border border-[#3B5242] space-y-2 text-xs text-[#EBE4D8]">
              <p className="font-bold text-[#FAF7F2] flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-[#3B5242]" aria-hidden="true" />
                <span>Línea de Emergencias Perú:</span>
              </p>
              <p className="text-[11px] leading-relaxed text-[#EBE4D8]/90">
                Brindo atención ambulatoria programada. En caso de emergencias psiquiátricas inmediatas, comunícate con la <strong>Línea 113 (Minsa)</strong> o acude al hospital más cercano.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EBE4D8]/70">
          <p>&copy; {new Date().getFullYear()} Mente en Casa. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
};
