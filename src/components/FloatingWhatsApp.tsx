import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FloatingWhatsAppProps {
  onOpenWhatsapp: (msg: string) => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenWhatsapp }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [popoverAnim, setPopoverAnim] = useState<'enter' | 'enter-active' | 'exit' | 'exit-active' | null>(null);

  useEffect(() => {
    if (!popoverOpen) return;
    const handleScroll = () => closePopover();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [popoverOpen]);

  useEffect(() => {
    if (!popoverOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePopover();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [popoverOpen]);

  const openPopover = () => {
    setPopoverVisible(true);
    setPopoverAnim('enter');
    setPopoverOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setPopoverAnim('enter-active'));
    });
  };

  const closePopover = () => {
    setPopoverAnim('exit');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setPopoverAnim('exit-active');
        setTimeout(() => {
          setPopoverVisible(false);
          setPopoverOpen(false);
          setPopoverAnim(null);
        }, 140);
      });
    });
  };

  const togglePopover = () => {
    if (popoverOpen) closePopover();
    else openPopover();
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 flex flex-col items-end">

      {popoverVisible && (
        <div
          className={`mb-3 w-72 bg-white rounded-2xl p-4 shadow-2xl border border-[#E3E2E0] space-y-3 relative text-left ${
            popoverAnim === 'enter' ? 'popover-enter' :
            popoverAnim === 'enter-active' ? 'popover-enter-active' :
            popoverAnim === 'exit' ? 'popover-exit' :
            popoverAnim === 'exit-active' ? 'popover-exit-active' : ''
          }`}
          role="dialog"
          aria-label="Contacto por WhatsApp"
          style={{ transformOrigin: 'bottom right' }}
        >
          <button
            onClick={closePopover}
            className="btn-press-strong absolute top-2 right-2 p-1 rounded-full text-[#737973] hover:bg-gray-100 focus:outline-none"
            aria-label="Cerrar"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Greeting */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
              <WhatsAppIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-sm text-[#1A1C1A]">Mente en Casa</p>
              <p className="text-[11px] text-gray-500">En línea ahora</p>
            </div>
          </div>

          {/* Message */}
          <div className="bg-gray-50 p-3 rounded-xl text-xs text-gray-600 border border-gray-100">
            ¡Hola! ¿En qué puedo ayudarte?
          </div>

          {/* CTA Button */}
          <button
            onClick={() => { closePopover(); onOpenWhatsapp('Hola, me gustaría información sobre tus servicios.'); }}
            className="btn-press w-full py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#20ba5a] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Iniciar chat</span>
          </button>
        </div>
      )}

      <button
        id="floating-whatsapp-btn"
        onClick={togglePopover}
        className="relative group p-3.5 sm:p-4 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba5a] transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
        aria-label={popoverOpen ? 'Cerrar' : 'Abrir chat de WhatsApp'}
        aria-expanded={popoverOpen}
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#128C7E]" />
        </span>
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

    </div>
  );
};
