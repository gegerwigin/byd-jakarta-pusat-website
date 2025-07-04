
import { useState, useEffect } from 'react';
import BYDHeader from '../components/BYDHeader';
import BYDHeroBanner from '../components/BYDHeroBanner';
import BYDProductGrid from '../components/BYDProductGrid';
import BYDLocations from '../components/BYDLocations';
import BYDNews from '../components/BYDNews';
import BYDSales from '../components/BYDSales';
import BYDFooter from '../components/BYDFooter';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <BYDHeader />
      <main>
        <BYDHeroBanner />
        <BYDProductGrid />
        <BYDLocations />
        <BYDNews />
        <BYDSales />
      </main>
      <BYDFooter />
      
      {/* Floating WhatsApp Chat */}
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
