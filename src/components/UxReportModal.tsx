import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Check, 
  Layout, 
  Palette, 
  Boxes, 
  Sliders, 
  Smartphone, 
  TrendingUp, 
  Eye, 
  Code2, 
  Copy, 
  AlertTriangle, 
  CheckCircle2 
} from 'lucide-react';
import { AUDIT_SECTIONS } from '../data/content';

interface UxReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const getSectionIcon = (iconName: string) => {
  switch (iconName) {
    case 'Layout': return <Layout className="w-5 h-5" />;
    case 'Palette': return <Palette className="w-5 h-5" />;
    case 'Boxes': return <Boxes className="w-5 h-5" />;
    case 'Sliders': return <Sliders className="w-5 h-5" />;
    case 'Smartphone': return <Smartphone className="w-5 h-5" />;
    case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
    case 'Eye': return <Eye className="w-5 h-5" />;
    case 'Code2': return <Code2 className="w-5 h-5" />;
    default: return <FileText className="w-5 h-5" />;
  }
};

export const UxReportModal: React.FC<UxReportModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentSection = AUDIT_SECTIONS.find(s => s.num === activeTab) || AUDIT_SECTIONS[0];

  const handleCopyReport = () => {
    const fullText = AUDIT_SECTIONS.map(s => `${s.title}\n${s.subtitle}\n\n${s.content}\n`).join('\n---\n\n');
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-xs animate-fade-in">
      <div className="bg-white w-full max-w-5xl h-[90vh] rounded-3xl shadow-2xl border border-[#E3E2E0] flex flex-col overflow-hidden">
        
        {/* Header Bar */}
        <div className="p-5 bg-[#FAF7F2] border-b border-[#E3E2E0] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#3B5242] text-white flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-extrabold text-lg text-[#1A1C1A]">
                Informe Profesional UX/UI & Diagnóstico de Conversión
              </h2>
              <p className="text-xs text-[#737973]">
                Evaluación crítica del diseño inicial de Stitch y propuesta mejorada para "Mente en Casa"
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyReport}
              className="px-3 py-1.5 rounded-xl border border-[#C2C8C1] text-xs font-semibold text-[#344C3D] hover:bg-[#F4F3F1] transition-colors flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#25D366]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado' : 'Copiar Informe'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#737973] hover:bg-[#E3E2E0] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stitch Comparison Summary Header Pill */}
        <div className="bg-[#EBE2C8]/40 px-6 py-3 border-b border-[#E3E2E0] flex flex-wrap items-center justify-between gap-3 text-xs text-[#4C4733] shrink-0">
          <div className="flex items-center gap-2 font-medium">
            <AlertTriangle className="w-4 h-4 text-[#615C47] shrink-0" />
            <span><strong>Frente al prototipo de Stitch:</strong> Reemplazamos el Hero negro frío por tonos crema hospitalarios, corregimos contraste WCAG, traducimos el slogan en inglés y agregamos la herramienta de orientación.</span>
          </div>
          <span className="font-bold text-[#3B5242] bg-white px-2.5 py-1 rounded-full border border-[#C2C8C1]">
            8 Puntos Evaluados
          </span>
        </div>

        {/* Modal Main Body (2 Columns on Desktop) */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Navigation Sidebar */}
          <div className="lg:col-span-4 bg-[#FAF7F2] border-r border-[#E3E2E0] p-4 overflow-y-auto space-y-1.5">
            <p className="text-[10px] font-bold text-[#737973] uppercase tracking-wider mb-2 px-2">
              Secciones del Análisis:
            </p>
            {AUDIT_SECTIONS.map((sec) => (
              <button
                key={sec.num}
                onClick={() => setActiveTab(sec.num)}
                className={`w-full text-left p-3 rounded-xl text-xs font-semibold flex items-center gap-3 transition-all ${
                  activeTab === sec.num
                    ? 'bg-[#3B5242] text-white shadow-xs'
                    : 'text-[#424843] hover:bg-[#E3E2E0] hover:text-[#1A1C1A]'
                }`}
              >
                <div className={`p-1.5 rounded-lg shrink-0 ${activeTab === sec.num ? 'bg-white/20 text-white' : 'bg-white text-[#3B5242]'}`}>
                  {getSectionIcon(sec.icon)}
                </div>
                <div className="truncate">
                  <p className="font-bold truncate">{sec.title}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Detailed Section Content */}
          <div className="lg:col-span-8 p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
            
            {/* Title & Subtitle */}
            <div className="space-y-1 border-b border-[#E3E2E0] pb-4">
              <span className="text-xs font-bold text-[#3B5242] uppercase tracking-wider bg-[#3B5242]/10 px-2.5 py-1 rounded-md">
                Punto {currentSection.num} de 8
              </span>
              <h3 className="text-2xl font-extrabold text-[#1A1C1A] mt-2">
                {currentSection.title}
              </h3>
              <p className="text-sm font-semibold text-[#615C47]">
                {currentSection.subtitle}
              </p>
            </div>

            {/* Highlights Box */}
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E3E2E0] space-y-2">
              <p className="text-xs font-bold text-[#1A1C1A] uppercase tracking-wider">
                Aspectos Destacados:
              </p>
              <ul className="space-y-2 text-xs text-[#344C3D]">
                {currentSection.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3B5242] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Markdown Text Content */}
            <div className="prose prose-sm text-[#424843] leading-relaxed whitespace-pre-line text-sm space-y-4">
              {currentSection.content}
            </div>

            {/* Footer Navigation within Modal */}
            <div className="pt-6 border-t border-[#E3E2E0] flex items-center justify-between">
              <button
                disabled={activeTab === 1}
                onClick={() => setActiveTab(activeTab - 1)}
                className="px-4 py-2 rounded-xl border border-[#C2C8C1] text-xs font-bold text-[#424843] hover:bg-[#F4F3F1] disabled:opacity-30"
              >
                ← Anterior
              </button>

              <span className="text-xs font-semibold text-[#737973]">
                Página {activeTab} / {AUDIT_SECTIONS.length}
              </span>

              <button
                disabled={activeTab === AUDIT_SECTIONS.length}
                onClick={() => setActiveTab(activeTab + 1)}
                className="px-4 py-2 rounded-xl bg-[#3B5242] text-white text-xs font-bold hover:bg-[#344C3D] disabled:opacity-30"
              >
                Siguiente →
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
