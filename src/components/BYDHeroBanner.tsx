import { useState, useEffect } from 'react';

// Custom CSS untuk hide scrollbar
const scrollbarHideStyle = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;

// Inject CSS
if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.textContent = scrollbarHideStyle;
  if (!document.head.querySelector('style[data-scrollbar-hide]')) {
    styleTag.setAttribute('data-scrollbar-hide', '');
    document.head.appendChild(styleTag);
  }
}

const BYDHeroBanner = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // WhatsApp handlers - General messages for hero banner
  const handleTestDrive = () => {
    const phoneNumber = "6281293342824";
    const message = "Halo Daniel Saya mau test drive BYD";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleGetOffer = () => {
    const phoneNumber = "6281293342824";
    const message = "Halo Daniel saya mau tanya detail tentang penawaran BYD, bisa?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const models = [
    {
      tabName: 'SEAL',
      name: 'BYD SEAL',
      leftButtonName: 'Jelajahi',
      rightButtonName: 'Test Drive',
      tertiaryButton: 'Dapatkan Penawaran',
      image: '/seal-hero.jpg',
      description: 'Sedan elektrik premium dengan performa tinggi'
    },
    {
      tabName: 'ATTO 3',
      name: 'BYD ATTO 3',
      leftButtonName: 'Jelajahi',
      rightButtonName: 'Test Drive',
      tertiaryButton: 'Dapatkan Penawaran',
      image: '/atto3-hero.jpg',
      description: 'SUV kompak elektrifikasi untuk kota modern'
    },
    {
      tabName: 'ATTO 1',
      name: 'BYD ATTO 1',
      leftButtonName: 'Jelajahi',
      rightButtonName: 'Test Drive',
      tertiaryButton: 'Dapatkan Penawaran',
      image: '/atto1-hero.jpg',
      description: 'City car elektrifikasi terjangkau untuk keluarga'
    },
    {
      tabName: 'DOLPHIN',
      name: 'BYD DOLPHIN',
      leftButtonName: 'Jelajahi',
      rightButtonName: 'Test Drive',
      tertiaryButton: 'Dapatkan Penawaran',
      image: '/dolphin-hero.jpg',
      description: 'Hatchback elektrik yang efisien dan stylish'
    },
    {
      tabName: 'M6',
      name: 'BYD M6',
      leftButtonName: 'Jelajahi',
      rightButtonName: 'Test Drive',
      tertiaryButton: 'Dapatkan Penawaran',
      image: '/m6-hero.jpg',
      description: 'MPV elektrifikasi untuk keluarga besar'
    },
    {
      tabName: 'SEALION 7',
      name: 'BYD SEALION 7',
      leftButtonName: 'Jelajahi',
      rightButtonName: 'Test Drive',
      tertiaryButton: 'Dapatkan Penawaran',
      image: '/sealion7-hero.jpg',
      description: 'SUV elektrifikasi premium dengan teknologi terdepan'
    }
  ];

  const activeModel = models[activeTab];

  // Auto slider effect - ganti slide setiap 5 detik
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % models.length);
    }, 5000); // 5 detik per slide

    return () => clearInterval(interval);
  }, [isAutoPlaying, models.length]);

  // Stop auto play saat user interaction
  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setIsAutoPlaying(false);
    
    // Resume auto play setelah 10 detik tidak ada interaksi
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  // Pause auto play saat hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  // Resume auto play saat mouse leave
  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Navigate to previous slide
  const handlePrevSlide = () => {
    setActiveTab((prev) => (prev - 1 + models.length) % models.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Navigate to next slide
  const handleNextSlide = () => {
    setActiveTab((prev) => (prev + 1) % models.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section 
      className="relative h-screen bg-black overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Sliding Background Images */}
      <div className="absolute inset-0">
        {models.map((model, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === activeTab ? 'translate-x-0' : 
              index < activeTab ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <img
              src={model.image}
              alt={model.name}
              className="w-full h-full object-cover object-center"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
              }}
              loading="eager"
              onError={(e) => {
                console.error(`Failed to load image: ${model.image}`);
                e.currentTarget.style.backgroundColor = '#333';
              }}
            />
            {/* Enhanced gradient overlay untuk text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 group"
        >
          <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={handleNextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 group"
        >
          <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col pt-16">
        {/* Model Tabs */}
        <div className="pt-8">
          <div className="max-w-7xl mx-auto px-2 sm:px-4">
            <div className="flex justify-center">
              <div className="bg-black/20 backdrop-blur-lg rounded-full p-0.5 sm:p-1 border border-white/20 max-w-[95vw] sm:max-w-full overflow-x-auto scrollbar-hide">
                <div className="flex space-x-0.5 sm:space-x-1 min-w-max">
                  {models.map((model, index) => (
                    <button
                      key={index}
                      onClick={() => handleTabClick(index)}
                      className={`px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[8.5px] sm:text-xs font-medium transition-all duration-300 relative whitespace-nowrap flex-shrink-0 ${
                        activeTab === index
                          ? 'bg-white text-black'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                      style={{ 
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                        minWidth: 'fit-content'
                      }}
                    >
                      {model.tabName}
                      {/* Auto play indicator */}
                      {activeTab === index && isAutoPlaying && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                          <div className="w-1.5 h-0.5 sm:w-2 sm:h-0.5 bg-blue-400 rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Positioned strategically */}
        <div className="flex-1 flex items-end pb-32">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="text-left max-w-2xl">
              {/* Model Name - Enhanced readability dengan smooth transition */}
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl font-black mb-3 text-white transition-all duration-1000 ease-in-out transform"
                style={{ 
                  textShadow: '2px 2px 12px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                }}
                key={activeModel.name} // Force re-render untuk smooth transition
              >
                {activeModel.name}
              </h1>
              
              {/* Description - Enhanced contrast dengan smooth transition */}
              <p 
                className="text-lg md:text-xl mb-8 text-white font-medium transition-all duration-1000 ease-in-out transform"
                style={{ 
                  textShadow: '1px 1px 8px rgba(0,0,0,0.7), 0 0 15px rgba(0,0,0,0.5)',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                }}
                key={activeModel.description} // Force re-render untuk smooth transition
              >
                {activeModel.description}
              </p>

              {/* Action Buttons - Enhanced visibility */}
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={handleTestDrive}
                  className="px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm backdrop-blur-md shadow-lg"
                  style={{ 
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                  }}
                >
                  {activeModel.rightButtonName}
                </button>
                <button 
                  onClick={handleGetOffer}
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 text-sm shadow-lg border-2 border-blue-500"
                  style={{ 
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                  }}
                >
                  {activeModel.tertiaryButton}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {models.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-white scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              >
                {/* Auto play progress ring */}
                {activeTab === index && isAutoPlaying && (
                  <div className="absolute -inset-1 rounded-full border-2 border-blue-400 animate-ping"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Scroll Indicator - Smaller and more subtle */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="inline-block animate-bounce opacity-60">
            <div className="w-5 h-8 border border-white/40 rounded-full relative">
              <div className="w-0.5 h-2 bg-white/40 rounded-full absolute top-1.5 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BYDHeroBanner; 