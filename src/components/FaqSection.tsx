import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/content';

interface FaqSectionProps {
  onOpenWhatsapp: (msg: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenWhatsapp }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('f1');
  const [activeCategory, setActiveCategory] = useState<string>('todas');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = activeCategory === 'todas' || faq.category === activeCategory;
    const matchesQuery = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="faq" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3EFE6] border border-[#E2DACB] text-[#3B5242] text-xs font-semibold tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Resolvemos tus dudas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal text-[#1F2421] tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-base sm:text-lg text-[#525B54]">
            Transparencia total sobre la modalidad a domicilio, seguridad, psicólogos y métodos de pago en Trujillo.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Categorías de preguntas frecuentes">
            {[
              { id: 'todas', label: 'Todas' },
              { id: 'domicilio', label: 'Sobre el Domicilio' },
              { id: 'seguridad', label: 'Seguridad & Colegio' },
              { id: 'pagos', label: 'Pagos & Reservas' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                role="tab"
                aria-selected={activeCategory === tab.id}
                aria-controls="faq-list"
                className={`btn-press px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5242] ${
                  activeCategory === tab.id ? 'bg-[#3B5242] text-[#FAF7F2]' : 'bg-[#F3EFE6] border border-[#E2DACB] text-[#525B54]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#615C47] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar pregunta..."
              aria-label="Buscar en preguntas frecuentes"
              className="w-full pl-9 pr-3 py-2 rounded-full border border-[#E2DACB] text-xs focus:outline-none focus:ring-2 focus:ring-[#3B5242] bg-[#F3EFE6] transition-shadow duration-150"
            />
          </div>
        </div>

        {/* Accordion — grid-template-rows for smooth height animation */}
        <div id="faq-list" role="tabpanel" className="mt-8 space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              const headingId = `faq-heading-${faq.id}`;
              const panelId = `faq-panel-${faq.id}`;

              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className="bg-[#F3EFE6] rounded-3xl border border-[#E2DACB] overflow-hidden transition-all duration-200 hover:border-[#3B5242]/50"
                >
                  <h3>
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5242] focus-visible:ring-inset rounded-3xl"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      id={headingId}
                    >
                      <span className="font-serif-editorial font-normal text-base sm:text-lg text-[#1F2421]">
                        {faq.question}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#EBE4D8] text-[#3B5242] flex items-center justify-center shrink-0 transition-colors duration-150">
                        <ChevronDown
                          className="w-4 h-4 transition-transform duration-200"
                          style={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transitionTimingFunction: 'var(--ease-out-expo)'
                          }}
                        />
                      </div>
                    </button>
                  </h3>

                  {/* Accordion panel with grid-template-rows */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="faq-accordion-content"
                    data-open={isOpen ? 'true' : 'false'}
                  >
                    <div>
                      <div className="px-6 pb-6 text-xs sm:text-sm text-[#525B54] leading-relaxed border-t border-[#E2DACB]/60 pt-4">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-xs text-[#615C47]">
              No se encontraron preguntas asociadas a tu búsqueda.
            </div>
          )}
        </div>

        {/* WhatsApp Banner */}
        <div className="mt-14 text-center bg-[#3B5242] text-[#FAF7F2] p-8 sm:p-10 rounded-3xl space-y-4 shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-serif-editorial font-normal">
            ¿Tienes otra pregunta específica sobre tu caso?
          </h3>
          <p className="text-xs sm:text-sm text-[#EBE4D8] max-w-xl mx-auto leading-relaxed">
            Te brindamos atención humana, confidencial e inmediata en Trujillo. No dudes en consultarnos sin ningún compromiso.
          </p>
          <button
            onClick={() => onOpenWhatsapp('Hola, Mente en Casa. Tengo una consulta específica sobre la atención a domicilio en Trujillo que me gustaría resolver.')}
            className="btn-press px-7 py-3.5 rounded-full bg-[#25D366] text-[#0F2918] font-bold text-xs sm:text-sm hover:bg-[#20ba5a] transition-colors duration-200 shadow-sm inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Hablar directamente con un orientador</span>
          </button>
        </div>

      </div>
    </section>
  );
};
