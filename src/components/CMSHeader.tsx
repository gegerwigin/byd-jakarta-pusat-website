import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './navbar/Logo';
import { NavigationMenu } from './navbar/NavigationMenu';
import { CTAButton } from './navbar/CTAButton';
import { navbarContent } from '../data/navbarContent';

const CMSHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { logo, menuItems, ctaButton, settings } = navbarContent;

  // Dynamic background based on CMS settings
  const headerBg = isScrolled 
    ? settings.scrolledBg || 'bg-white/95 backdrop-blur-md shadow-lg'
    : settings.transparentBg 
      ? 'bg-transparent' 
      : 'bg-white';

  // Dynamic positioning classes
  const getPositionClass = (position?: string) => {
    switch (position) {
      case 'center': return 'justify-center';
      case 'right': return 'justify-end';
      default: return 'justify-start';
    }
  };

  return (
    <header
      className={`${settings.stickyHeader ? 'fixed' : 'relative'} top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <div className={`flex ${getPositionClass(settings.logoPosition)}`}>
            <Logo logoData={logo} />
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex ${getPositionClass(settings.menuPosition)}`}>
            <NavigationMenu 
              menuItems={menuItems}
              isMobile={false}
            />
          </div>

          {/* Desktop CTA Button */}
          <div className={`hidden md:flex ${getPositionClass(settings.ctaPosition)}`}>
            <CTAButton 
              ctaData={ctaButton}
              isMobile={false}
            />
          </div>

          {/* Mobile Menu Button */}
          {settings.showMobileMenu && (
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {settings.showMobileMenu && (
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-white border-t border-gray-200 py-4">
              <NavigationMenu 
                menuItems={menuItems}
                isMobile={true}
                onItemClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Mobile CTA */}
              <div className="px-4 pt-4">
                <CTAButton 
                  ctaData={ctaButton}
                  isMobile={true}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default CMSHeader; 