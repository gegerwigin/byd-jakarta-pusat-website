import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { HeroSlide } from '../../types/heroCMS';
import { heroSliderContent, getVisibleSlides } from '../../data/heroSliderContent';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const visibleSlides = getVisibleSlides();
  const { settings } = heroSliderContent;

  // Auto play functionality
  useEffect(() => {
    if (!settings.autoPlay || !isPlaying || visibleSlides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % visibleSlides.length);
    }, settings.autoPlayInterval);

    return () => clearInterval(interval);
  }, [settings.autoPlay, settings.autoPlayInterval, isPlaying, visibleSlides.length]);

  // Handle navigation
  const handleNavigation = (href?: string, type?: string) => {
    if (!href) return;

    if (type === 'navigate') {
      navigate(href);
    } else if (type === 'external') {
      window.open(href, '_blank');
    } else {
      // Scroll to section
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % visibleSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + visibleSlides.length) % visibleSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => {
    if (settings.pauseOnHover) {
      setIsPlaying(false);
    }
  };

  const handleMouseLeave = () => {
    if (settings.pauseOnHover) {
      setIsPlaying(true);
    }
  };

  if (visibleSlides.length === 0) {
    return null;
  }

  const currentSlideData = visibleSlides[currentSlide];

  return (
    <section 
      id="home"
      className={`relative w-full ${
        settings.height === 'screen' 
          ? 'h-screen' 
          : settings.height === 'custom' 
            ? settings.customHeight 
            : 'h-auto'
      } flex items-center justify-center overflow-hidden`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {visibleSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-${settings.transitionDuration} ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image.src}
              alt={slide.image.alt}
              className={`w-full h-full object-cover object-${slide.image.position || 'center'}`}
            />
          </div>
        ))}
        
        {/* Background Overlay */}
        {settings.backgroundOverlay && (
          <div 
            className={`absolute inset-0 ${settings.overlayColor || 'bg-black'}`}
            style={{ opacity: settings.overlayOpacity || 0.3 }}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container-max text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          {currentSlideData.badge?.isVisible && (
            <div className="mb-6">
              <span 
                className={`inline-block px-6 py-2 rounded-full text-sm font-bold ${
                  currentSlideData.badge.bgColor || 'bg-red-500'
                } ${currentSlideData.badge.textColor || 'text-white'}`}
              >
                {currentSlideData.badge.text}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            {currentSlideData.title}
          </h1>

          {/* Subtitle */}
          {currentSlideData.subtitle && (
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200 mb-6">
              {currentSlideData.subtitle}
            </h2>
          )}

          {/* Description */}
          {currentSlideData.description && (
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {currentSlideData.description}
            </p>
          )}

          {/* Features List */}
          {currentSlideData.features && currentSlideData.features.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Mengapa Pilih Kami?</h3>
              <div className="space-y-3">
                {currentSlideData.features
                  .filter(feature => feature.isVisible)
                  .map((feature) => (
                    <div key={feature.id} className="flex items-center justify-center text-green-400">
                      <span className="mr-2">{feature.icon}</span>
                      <span className="text-white">{feature.text}</span>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary CTA */}
            {currentSlideData.ctaButton?.isVisible && (
              <Button
                onClick={() => handleNavigation(currentSlideData.ctaButton?.href, currentSlideData.ctaButton?.type)}
                className={`${
                  currentSlideData.ctaButton.bgColor || 'bg-red-600'
                } ${
                  currentSlideData.ctaButton.hoverBgColor || 'hover:bg-red-700'
                } ${
                  currentSlideData.ctaButton.textColor || 'text-white'
                } px-8 py-4 text-lg font-bold rounded-full transition-all duration-200 hover:scale-105 shadow-lg`}
                size="lg"
              >
                {currentSlideData.ctaButton.icon && (
                  <span className="mr-2">{currentSlideData.ctaButton.icon}</span>
                )}
                {currentSlideData.ctaButton.text}
              </Button>
            )}

            {/* Secondary CTA */}
            {currentSlideData.secondaryCTA?.isVisible && (
              <Button
                onClick={() => handleNavigation(currentSlideData.secondaryCTA?.href, currentSlideData.secondaryCTA?.type)}
                className={`${
                  currentSlideData.secondaryCTA.bgColor || 'bg-green-500'
                } ${
                  currentSlideData.secondaryCTA.textColor || 'text-white'
                } px-6 py-3 rounded-full font-bold hover:scale-105 transition-all duration-200`}
                variant="secondary"
              >
                {currentSlideData.secondaryCTA.text}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {settings.showArrows && visibleSlides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {settings.showDots && visibleSlides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {visibleSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSlider; 