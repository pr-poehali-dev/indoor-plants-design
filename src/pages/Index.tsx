import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CompositionsSection from '@/components/CompositionsSection';
import PotsSection from '@/components/PotsSection';
import InspirationSection from '@/components/InspirationSection';
import CatalogSection from '@/components/CatalogSection';
import Footer from '@/components/Footer';

type Section = 'home' | 'compositions' | 'pots' | 'inspiration' | 'catalog';

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const handleNavigate = (section: string) => {
    setActiveSection(section as Section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--warm-white))]">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      <main>
        <div id="home">
          <HeroSection onNavigate={handleNavigate} />
        </div>

        <div id="compositions">
          <CompositionsSection />
        </div>

        <div id="pots">
          <PotsSection />
        </div>

        <div id="inspiration">
          <InspirationSection />
        </div>

        <div id="catalog">
          <CatalogSection />
        </div>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
