import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Logo } from './Logo';

const NAV_SECTIONS: Array<{ id: string; label: string }> = [
  { id: 'quienes', label: 'Quiénes Somos' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'metodologia', label: 'Cómo empezar' },
  { id: 'contacto', label: 'Contacto' },
];

interface NavbarProps {
  onOpenWhatsapp: (customMessage?: string) => void;
  onScrollToSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenWhatsapp,
  onScrollToSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [drawerState, setDrawerState] = useState<'enter' | 'enter-active' | 'exit' | 'exit-active' | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    closeDrawer();
  };

  useEffect(() => {
    const sectionIds = NAV_SECTIONS.map(s => s.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-20% 0px -70% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDrawer();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  const openDrawer = () => {
    setMobileMenuOpen(true);
    setDrawerVisible(true);
    setDrawerState('enter');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setDrawerState('enter-active'));
    });
  };

  const closeDrawer = () => {
    setDrawerState('exit');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setDrawerState('exit-active');
        setTimeout(() => {
          setMobileMenuOpen(false);
          setDrawerVisible(false);
          setDrawerState(null);
        }, 180);
      });
    });
  };

  const toggleDrawer = () => {
    if (mobileMenuOpen) closeDrawer();
    else openDrawer();
  };

  return (
    <header ref={navRef} className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E2DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5242] focus-visible:ring-offset-2 rounded-lg"
          aria-label="Ir al inicio — Mente en Casa"
        >
          <Logo variant="horizontal" size="md" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2 lg:gap-6" aria-label="Navegación principal">
          {NAV_SECTIONS.map(section => {
            const isActive = activeSection === section.id;

            return (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`nav-link px-3.5 py-2 text-sm font-medium rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5242] ${
                  isActive
                    ? 'text-[#1F2421] bg-[#EBE4D8] font-semibold'
                    : 'text-[#525B54] hover:text-[#1F2421] hover:bg-[#F3EFE6]'
                }`}
                aria-current={isActive ? 'true' : undefined}
              >
                {section.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center">
          <button
            onClick={toggleDrawer}
            className="p-2.5 rounded-full text-[#1F2421] hover:bg-[#EBE4D8] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5242]"
            aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {drawerVisible && (
        <div
          id="mobile-menu"
          className={`md:hidden bg-[#FAF7F2] border-b border-[#E2DACB] px-4 pt-4 pb-6 space-y-4 shadow-xl ${
            drawerState === 'enter' ? 'drawer-enter' :
            drawerState === 'enter-active' ? 'drawer-enter-active' :
            drawerState === 'exit' ? 'drawer-exit' :
            drawerState === 'exit-active' ? 'drawer-exit-active' : ''
          }`}
          role="menu"
        >
          <div className="flex flex-col gap-1.5">
            {NAV_SECTIONS.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3.5 py-2.5 rounded-xl text-sm transition-colors duration-150 font-medium text-[#1F2421] hover:bg-[#F3EFE6]`}
                role="menuitem"
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E2DACB]">
            <button
              onClick={() => {
                closeDrawer();
                onOpenWhatsapp('Hola, me gustaría agendar una sesión de psicología a domicilio.');
              }}
              className="btn-press w-full py-3 rounded-full bg-[#90A4AE] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
              role="menuitem"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Contactar por WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
