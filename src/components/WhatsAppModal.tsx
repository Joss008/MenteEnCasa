import React, { useState, useEffect, useRef } from 'react';
import { X, MapPin, Clock } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_NUMBER } from '../data/content';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
  serviceTitle?: string;
}

const isMobileDevice = () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  initialMessage = '',
  serviceTitle
}) => {
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [animState, setAnimState] = useState<'enter' | 'enter-active' | 'exit' | 'exit-active' | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setAnimState('enter');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimState('enter-active'));
      });
    }
  }, [isOpen]);

  const handleClose = () => {
    setAnimState('exit');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimState('exit-active');
        setTimeout(() => {
          setIsVisible(false);
          setAnimState(null);
          onClose();
        }, 160);
      });
    });
  };

  useEffect(() => {
    if (!isOpen) return;
    previousFocusRef.current = document.activeElement as HTMLElement;
    const modal = modalRef.current;
    if (!modal) return;

    const focusable = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    setTimeout(() => first?.focus(), 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { handleClose(); return; }
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  const buildMessage = () => {
    let msg = initialMessage || 'Hola, me gustaría información sobre tus servicios.';
    if (serviceTitle && !msg.includes(serviceTitle)) {
      msg += ` [Servicio: ${serviceTitle}]`;
    }
    if (location) msg += `\n📍 Ubicación: ${location}`;
    if (time) msg += `\n⏰ Horario: ${time}`;
    return msg;
  };

  const handleSend = () => {
    const msg = buildMessage();
    const encoded = encodeURIComponent(msg);
    if (isMobileDevice()) {
      window.location.href = `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encoded}`;
    } else {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    }
    handleClose();
  };

  const handleDirectSend = () => {
    const msg = initialMessage || 'Hola, me gustaría información sobre tus servicios.';
    const encoded = encodeURIComponent(msg);
    if (isMobileDevice()) {
      window.location.href = `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encoded}`;
    } else {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    }
    handleClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm ${
        animState === 'enter' ? 'modal-backdrop-enter' :
        animState === 'enter-active' ? 'modal-backdrop-enter-active' :
        animState === 'exit' ? 'modal-backdrop-exit' :
        animState === 'exit-active' ? 'modal-backdrop-exit-active' : ''
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Enviar mensaje por WhatsApp"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div
        ref={modalRef}
        className={`bg-white w-full max-w-sm rounded-2xl p-5 shadow-2xl relative ${
          animState === 'enter' ? 'modal-content-enter' :
          animState === 'enter-active' ? 'modal-content-enter-active' :
          animState === 'exit' ? 'modal-content-exit' :
          animState === 'exit-active' ? 'modal-content-exit-active' : ''
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-1.5 rounded-full text-gray-400 hover:bg-gray-100 focus:outline-none"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
            <WhatsAppIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-base text-gray-900">Agendar cita</h2>
            <p className="text-xs text-gray-500">Mente en Casa</p>
          </div>
        </div>

        {/* Service */}
        {serviceTitle && (
          <div className="bg-gray-50 p-3 rounded-xl mb-4 text-xs">
            <span className="text-gray-500">Servicio:</span>
            <span className="ml-1 font-semibold text-gray-900">{serviceTitle}</span>
          </div>
        )}

        {/* Form */}
        <div className="space-y-3 mb-4">
          <div>
            <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5 mb-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#25D366]" />
              ¿Dónde te encuentras?
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Ciudad o zona"
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-[#25D366] focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5 mb-1.5">
              <Clock className="w-3.5 h-3.5 text-[#25D366]" />
              Horario preferido
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Mañana', 'Tarde', 'Noche'].map((option) => (
                <button
                  key={option}
                  onClick={() => setTime(time === option ? '' : option)}
                  className={`py-2 rounded-xl text-xs font-semibold transition-all duration-150 ${
                    time === option
                      ? 'bg-[#25D366] text-white'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Message preview */}
        <div className="bg-gray-50 p-3 rounded-xl mb-4 text-xs text-gray-500 border border-gray-100">
          <p className="whitespace-pre-line">{buildMessage()}</p>
        </div>

        {/* Buttons */}
        <button
          onClick={handleSend}
          className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        >
          <WhatsAppIcon className="w-4 h-4 text-white" />
          <span>Abrir WhatsApp</span>
        </button>

        <button
          onClick={handleDirectSend}
          className="w-full mt-2 py-2 text-xs text-gray-500 hover:text-gray-700 font-medium transition-colors"
        >
          Enviar sin configurar
        </button>
      </div>
    </div>
  );
};
