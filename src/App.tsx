import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutPsychologists } from './components/AboutPsychologists';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { Footer } from './components/Footer';
import { WhatsAppModal } from './components/WhatsAppModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [whatsappModalOpen, setWhatsappModalOpen] = useState(false);
  const [whatsappMsg, setWhatsappMsg] = useState('');
  const [whatsappServiceTitle, setWhatsappServiceTitle] = useState<string | undefined>(undefined);

  const handleOpenWhatsapp = (msg?: string, serviceTitle?: string) => {
    setWhatsappMsg(msg || '');
    setWhatsappServiceTitle(serviceTitle);
    setWhatsappModalOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F2421] flex flex-col font-sans selection:bg-[#3B5242]/20 selection:text-[#1F2421]">

      <a href="#main-content" className="skip-to-content">
        Saltar al contenido principal
      </a>

      <Navbar
        onOpenWhatsapp={handleOpenWhatsapp}
        onScrollToSection={handleScrollToSection}
      />

      <main id="main-content" className="flex-grow">

        {/* 1. Portada */}
        <Hero
          onOpenWhatsapp={handleOpenWhatsapp}
          onScrollToSection={handleScrollToSection}
        />

        {/* 2. Quiénes somos */}
        <AboutPsychologists
          onOpenWhatsapp={handleOpenWhatsapp}
        />

        {/* 3. Servicios */}
        <ServicesSection
          onOpenWhatsapp={handleOpenWhatsapp}
        />

        {/* 4. Metodología */}
        <ProcessSection
          onOpenWhatsapp={handleOpenWhatsapp}
        />

      </main>

      {/* 5. Contacto */}
      <Footer
        onOpenWhatsapp={handleOpenWhatsapp}
        onScrollToSection={handleScrollToSection}
      />

      <WhatsAppModal
        isOpen={whatsappModalOpen}
        onClose={() => setWhatsappModalOpen(false)}
        initialMessage={whatsappMsg}
        serviceTitle={whatsappServiceTitle}
      />

      <FloatingWhatsApp
        onOpenWhatsapp={handleOpenWhatsapp}
      />

    </div>
  );
}
