import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, MessageCircle, RotateCcw, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { ORIENTATION_QUESTIONS, SERVICES } from '../data/content';

interface OrientationToolProps {
  onOpenWhatsapp: (msg: string) => void;
}

export const OrientationTool: React.FC<OrientationToolProps> = ({ onOpenWhatsapp }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, { label: string; serviceId: string }>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [stepDirection, setStepDirection] = useState<'forward' | 'back'>('forward');
  const [stepVisible, setStepVisible] = useState(true);

  const question = ORIENTATION_QUESTIONS[currentStep];

  const handleSelectOption = (optionLabel: string, serviceId: string) => {
    const updated = {
      ...selectedAnswers,
      [currentStep]: { label: optionLabel, serviceId }
    };
    setSelectedAnswers(updated);

    // Animate step transition
    setStepVisible(false);
    setStepDirection('forward');
    setTimeout(() => {
      if (currentStep < ORIENTATION_QUESTIONS.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setIsFinished(true);
      }
      setStepVisible(true);
    }, 160);
  };

  const handleBack = () => {
    setStepVisible(false);
    setStepDirection('back');
    setTimeout(() => {
      setCurrentStep(currentStep - 1);
      setStepVisible(true);
    }, 160);
  };

  const handleReset = () => {
    setStepVisible(false);
    setTimeout(() => {
      setCurrentStep(0);
      setSelectedAnswers({});
      setIsFinished(false);
      setStepVisible(true);
    }, 160);
  };

  const getRecommendedService = () => {
    const counts: Record<string, number> = {};
    Object.values(selectedAnswers).forEach((ans: { label: string; serviceId: string }) => {
      counts[ans.serviceId] = (counts[ans.serviceId] || 0) + 1;
    });

    let topServiceId = 'padres';
    let maxCount = 0;
    Object.entries(counts).forEach(([sId, count]) => {
      if (count > maxCount) {
        maxCount = count;
        topServiceId = sId;
      }
    });

    return SERVICES.find(s => s.id === topServiceId) || SERVICES[0];
  };

  const recommendedService = getRecommendedService();

  const generateWhatsappMessage = () => {
    const persona = selectedAnswers[0]?.label || 'una consulta familiar';
    const motivo = selectedAnswers[1]?.label || 'situación general';
    const meta = selectedAnswers[2]?.label || 'orientación';
    return `Hola, Mente en Casa. Utilicé su herramienta de orientación para ${persona}. La situación principal es: ${motivo}. Deseamos ${meta}. Quisiera orientación sobre el servicio de ${recommendedService.title} a domicilio en Trujillo.`;
  };

  const progressPct = ((currentStep + 1) / ORIENTATION_QUESTIONS.length) * 100;

  return (
    <section id="orientacion" className="py-20 bg-[#F3EFE6] border-y border-[#E2DACB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 shadow-lg border border-[#E2DACB] relative overflow-hidden">

          {/* Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-[#3B5242]" />

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBE4D8] text-[#3B5242] text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-[#3B5242]" />
              <span>Asistente de Orientación Inicial</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#1F2421]">
              ¿No sabes qué servicio necesitas?
            </h2>

            <p className="text-sm text-[#525B54]">
              Responde 3 preguntas breves. Te guiaremos hacia la modalidad más conveniente para ti o tu familia en Trujillo.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 bg-[#EBE4D8]/60 border border-[#E2DACB] rounded-2xl p-4 flex items-start gap-3 text-left">
            <AlertCircle className="w-5 h-5 text-[#5C5549] shrink-0 mt-0.5" />
            <p className="text-xs text-[#5C5549] leading-relaxed">
              <strong>Nota importante:</strong> Esta herramienta es 100% orientativa. <strong>NO realiza diagnósticos clínicos</strong> ni reemplaza una evaluación profesional. Su objetivo es facilitarte el contacto oportuno.
            </p>
          </div>

          {/* Progress Bar — CSS transition */}
          {!isFinished && (
            <div className="mt-8">
              <div className="flex items-center justify-between text-xs font-bold text-[#3B5242] mb-2">
                <span>Paso {currentStep + 1} de {ORIENTATION_QUESTIONS.length}</span>
                <span>{Math.round(progressPct)}% Completado</span>
              </div>
              <div className="w-full h-2 bg-[#EBE4D8] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#3B5242] progress-fill"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          )}

          {/* Wizard Content — CSS transitions for step swap */}
          <div className="mt-8">
            {!isFinished ? (
              <div
                className={`space-y-6 transition-all duration-200 ${
                  stepVisible ? 'opacity-100 translate-x-0' :
                  stepDirection === 'forward' ? 'opacity-0 -translate-x-4' : 'opacity-0 translate-x-4'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-serif-editorial text-[#1F2421]">
                    {question.title}
                  </h3>
                  <p className="text-xs text-[#615C47] mt-1">
                    {question.subtitle}
                  </p>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 gap-3">
                  {question.options.map((option, idx) => (
                    <button
                      key={idx}
                      id={`orientation-opt-${currentStep}-${idx}`}
                      onClick={() => handleSelectOption(option.label, option.suggestedServiceId)}
                      className="btn-press w-full text-left p-4 rounded-2xl border border-[#E2DACB] bg-[#F3EFE6] hover:bg-white hover:border-[#3B5242] hover:shadow-xs transition-all duration-200 flex items-start justify-between group focus:outline-none cursor-pointer"
                    >
                      <div>
                        <p className="text-sm font-bold text-[#1F2421] group-hover:text-[#3B5242] transition-colors duration-150">
                          {option.label}
                        </p>
                        <p className="text-xs text-[#615C47] mt-0.5">
                          {option.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#615C47] group-hover:text-[#3B5242] group-hover:translate-x-1 transition-all duration-200 shrink-0 ml-3 mt-1" />
                    </button>
                  ))}
                </div>

                {/* Back button */}
                {currentStep > 0 && (
                  <div className="pt-2 flex justify-start">
                    <button
                      onClick={handleBack}
                      className="text-xs font-semibold text-[#615C47] hover:text-[#1F2421] underline cursor-pointer transition-colors duration-150"
                    >
                      ← Volver a la pregunta anterior
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Results Screen */
              <div className="space-y-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#3B5242]/10 text-[#3B5242] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="px-3 py-1 bg-[#EBE4D8] text-[#5C5549] text-xs font-bold rounded-full uppercase">
                    Recomendación Orientativa
                  </span>
                  <h3 className="text-2xl font-serif-editorial text-[#1F2421]">
                    Basado en tus respuestas, te sugerimos: <span className="text-[#3B5242] italic">{recommendedService.title}</span>
                  </h3>
                  <p className="text-sm text-[#525B54] max-w-lg mx-auto leading-relaxed">
                    Podemos orientarte mejor sobre este caso particular. Comunícate con Mente en Casa para coordinar la mejor modalidad a domicilio en Trujillo.
                  </p>
                </div>

                {/* Result Summary */}
                <div className="bg-[#F3EFE6] p-4 rounded-2xl border border-[#E2DACB] text-left max-w-md mx-auto space-y-2 text-xs">
                  <p className="font-bold text-[#2C3E33] uppercase tracking-wider">Resumen de tus selecciones:</p>
                  <p><span className="text-[#615C47]">Para quién:</span> {selectedAnswers[0]?.label}</p>
                  <p><span className="text-[#615C47]">Situación:</span> {selectedAnswers[1]?.label}</p>
                  <p><span className="text-[#615C47]">Objetivo:</span> {selectedAnswers[2]?.label}</p>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    id="orientation-whatsapp-final-btn"
                    onClick={() => onOpenWhatsapp(generateWhatsappMessage())}
                    className="btn-press w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-[#0F2918] font-extrabold text-base transition-colors duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Consultar por WhatsApp con este caso</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="px-4 py-3 text-xs font-semibold text-[#615C47] hover:text-[#1F2421] flex items-center gap-1 cursor-pointer transition-colors duration-150"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Volver a responder</span>
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
