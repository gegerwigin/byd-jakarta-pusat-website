const BYDProductGrid = () => {
  // WhatsApp handlers
  const handleTestDrive = (modelName: string) => {
    const phoneNumber = "6281293342824";
    const message = `Halo Daniel Saya mau testdrive BYD ${modelName}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleGetOffer = (modelName: string) => {
    const phoneNumber = "6281293342824";
    const message = `Halo Daniel saya mau tanya detail tentang penawaran/harga BYD ${modelName}, bisa?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const models = [
    {
      name: "ATTO 1",
      image: "/atto1-hero.jpg",
      specs: [
        { label: "Hingga 380km*", subtitle: "Jarak (NEDC)" },
        { label: "32.78 kWh*", subtitle: "Kapasitas Baterai" },
        { label: "136 Nm*", subtitle: "Torsi Maksimum" },
        { label: "FWD*", subtitle: "Penggerak Roda" }
      ],
      price: "IDR 195,000,000"
    },
    {
      name: "SEALION 7",
      image: "/sealion7-hero.jpg",
      specs: [
        { label: "Hingga 567km*", subtitle: "Jarak (NEDC)" },
        { label: "82.56 kWh*", subtitle: "Kapasitas Baterai" },
        { label: "690 Nm*", subtitle: "Torsi Maksimum" },
        { label: "AWD*", subtitle: "Penggerak Roda" }
      ],
      price: "IDR 629,000,000"
    },
    {
      name: "SEAL",
      image: "/seal-hero.jpg",
      specs: [
        { label: "Hingga 570km*", subtitle: "Jarak (NEDC)" },
        { label: "82.56 kWh*", subtitle: "Kapasitas Baterai" },
        { label: "360 Nm*", subtitle: "Torsi Maksimum" },
        { label: "AWD*", subtitle: "Penggerak Roda" }
      ],
      price: "IDR 639,000,000"
    },
    {
      name: "ATTO 3",
      image: "/atto3-hero.jpg",
      specs: [
        { label: "Hingga 480km*", subtitle: "Jarak (NEDC)" },
        { label: "60.48 kWh*", subtitle: "Kapasitas Baterai" },
        { label: "310 Nm*", subtitle: "Torsi Maksimum" },
        { label: "FWD*", subtitle: "Penggerak Roda" }
      ],
      price: "IDR 390,000,000"
    },
    {
      name: "DOLPHIN",
      image: "/dolphin-hero.jpg",
      specs: [
        { label: "Hingga 427km*", subtitle: "Jarak (NEDC)" },
        { label: "44.9 kWh*", subtitle: "Kapasitas Baterai" },
        { label: "290 Nm*", subtitle: "Torsi Maksimum" },
        { label: "FWD*", subtitle: "Penggerak Roda" }
      ],
      price: "IDR 369,000,000"
    },
    {
      name: "M6",
      image: "/m6-hero.jpg",
      specs: [
        { label: "Hingga 580km*", subtitle: "Jarak (NEDC)" },
        { label: "71.8 kWh*", subtitle: "Kapasitas Baterai" },
        { label: "310 Nm*", subtitle: "Torsi Maksimum" },
        { label: "FWD*", subtitle: "Penggerak Roda" }
      ],
      price: "IDR 383,000,000"
    }
  ];

  return (
    <div className="relative" data-product-grid>
      {models.map((model, index) => (
        <section key={model.name} className="relative min-h-screen">
          {/* Hero Image with Overlay Content */}
          <div 
            className={`relative min-h-screen bg-cover bg-no-repeat flex items-end ${
              model.name === 'ATTO 1' 
                ? 'bg-[center_30%] md:bg-center' // Mobile: posisi 30% dari atas, Desktop: center
                : 'bg-center'
            }`}
            style={{ backgroundImage: `url(${model.image})` }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pb-12 md:pb-16">
              <div className="text-center text-white space-y-6 md:space-y-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight" 
                    style={{ 
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                      textShadow: '2px 2px 12px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'
                    }}>
                  BYD {model.name}
                </h2>

                {/* Price Section */}
                <div className="space-y-1 md:space-y-2">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    Mulai dari {model.price}
                  </p>
                  <p className="text-xs md:text-sm text-white/70 italic">
                    *Harga dapat berubah sewaktu-waktu
                  </p>
                </div>

                {/* Specs Grid - Overlay on Image */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
                  {model.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="text-center">
                      <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                        <div className="space-y-1 md:space-y-2">
                          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-white">
                            {spec.label}
                          </h4>
                          <p className="text-xs text-white/80 font-medium">
                            {spec.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                  <button 
                    onClick={() => handleTestDrive(model.name)}
                    className="px-6 md:px-8 py-3 md:py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-sm md:text-base"
                  >
                    Test Drive
                  </button>
                  <button 
                    onClick={() => handleGetOffer(model.name)}
                    className="px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-sm md:text-base"
                  >
                    Dapatkan Penawaran
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default BYDProductGrid; 