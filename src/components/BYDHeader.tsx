import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import BYDLogo from './BYDLogo';

const BYDHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);
  const [isMobilePriceDropdownOpen, setIsMobilePriceDropdownOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Detect scroll to change header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPriceDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Car models for dropdown
  const carModels = [
    { name: 'SEALION 7', id: 'sealion7-section' },
    { name: 'SEAL', id: 'seal-section' },
    { name: 'ATTO 3', id: 'atto3-section' },
    { name: 'ATTO 1', id: 'atto1-section' },
    { name: 'DOLPHIN', id: 'dolphin-section' },
    { name: 'M6', id: 'm6-section' }
  ];

  // Smooth scroll to car section
  const scrollToCarSection = (modelName: string) => {
    // Close dropdowns
    setIsPriceDropdownOpen(false);
    setIsMobilePriceDropdownOpen(false);
    setIsMobileMenuOpen(false);
    
    // Find the car section in product grid
    const productGridElement = document.querySelector('[data-product-grid]');
    if (productGridElement) {
      const carSections = productGridElement.querySelectorAll('section');
      const modelIndex = carModels.findIndex(model => model.name === modelName);
      
      if (carSections[modelIndex]) {
        carSections[modelIndex].scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  // Scroll to location section
  const scrollToLocationSection = () => {
    // Close mobile menu
    setIsMobileMenuOpen(false);
    
    // Find location section (BYDLocations component)
    const locationSection = document.querySelector('[data-location-section]');
    if (locationSection) {
      locationSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Scroll to sales section
  const scrollToSalesSection = () => {
    // Close mobile menu
    setIsMobileMenuOpen(false);
    
    // Find sales section (BYDSales component)
    const salesSection = document.querySelector('[data-sales-section]');
    if (salesSection) {
      salesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Main Header - Fixed/Sticky dengan background dinamis */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo dan Lokasi */}
            <div className="flex items-center space-x-3">
              <BYDLogo 
                className="h-12 w-auto object-contain"
                isScrolled={isScrolled}
              />
              <span className={`text-lg font-semibold transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-800' 
                  : 'text-white drop-shadow-lg'
              }`}>
                Jakarta Pusat
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className={`font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-900 hover:text-blue-600' 
                  : 'text-white hover:text-gray-200 drop-shadow-lg'
              }`}>
                TENTANG BYD
              </a>
              <button 
                onClick={scrollToSalesSection}
                className={`font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-blue-600' 
                    : 'text-white hover:text-gray-200 drop-shadow-lg'
                }`}
              >
                HUBUNGI
              </button>
              
              {/* DAFTAR HARGA with Dropdown */}
              <div 
                ref={dropdownRef}
                className="relative"
              >
                <button 
                  onClick={() => setIsPriceDropdownOpen(!isPriceDropdownOpen)}
                  onMouseEnter={() => setIsPriceDropdownOpen(true)}
                  className={`font-medium transition-all duration-300 flex items-center space-x-1 ${
                    isScrolled 
                      ? 'text-gray-900 hover:text-blue-600' 
                      : 'text-white hover:text-gray-200 drop-shadow-lg'
                  }`}
                >
                  <span>DAFTAR HARGA</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isPriceDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isPriceDropdownOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 py-2 z-50">
                    {carModels.map((model) => (
                      <button
                        key={model.name}
                        onClick={() => scrollToCarSection(model.name)}
                        className="w-full text-left px-4 py-3 text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium"
                      >
                        BYD {model.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <button 
                onClick={scrollToLocationSection}
                className={`font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-blue-600' 
                    : 'text-white hover:text-gray-200 drop-shadow-lg'
                }`}
              >
                TEMUKAN KAMI
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-blue-600' 
                    : 'text-white hover:text-gray-200 drop-shadow-lg'
                }`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200/20">
              <div className={`px-2 pt-2 pb-3 space-y-1 ${
                isScrolled ? 'bg-white/95' : 'bg-black/50 backdrop-blur-md'
              }`}>
                <a href="#" className={`block px-3 py-2 font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-blue-600' 
                    : 'text-white hover:text-gray-200'
                }`}>
                  TENTANG BYD
                </a>
                <button 
                  onClick={scrollToSalesSection}
                  className={`block w-full text-left px-3 py-2 font-medium transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-gray-900 hover:text-blue-600' 
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  HUBUNGI
                </button>
                
                {/* Mobile DAFTAR HARGA Dropdown */}
                <div>
                  <button 
                    onClick={() => setIsMobilePriceDropdownOpen(!isMobilePriceDropdownOpen)}
                    className={`w-full text-left px-3 py-2 font-medium transition-colors duration-300 flex items-center justify-between ${
                      isScrolled 
                        ? 'text-gray-900 hover:text-blue-600' 
                        : 'text-white hover:text-gray-200'
                    }`}
                  >
                    <span>DAFTAR HARGA</span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${isMobilePriceDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Mobile Dropdown Items */}
                  {isMobilePriceDropdownOpen && (
                    <div className="pl-6 space-y-1">
                      {carModels.map((model) => (
                        <button
                          key={model.name}
                          onClick={() => scrollToCarSection(model.name)}
                          className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                            isScrolled 
                              ? 'text-gray-700 hover:text-blue-600' 
                              : 'text-white/80 hover:text-white'
                          }`}
                        >
                          BYD {model.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                <button 
                  onClick={scrollToLocationSection}
                  className={`block w-full text-left px-3 py-2 font-medium transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-gray-900 hover:text-blue-600' 
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  TEMUKAN KAMI
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default BYDHeader; 