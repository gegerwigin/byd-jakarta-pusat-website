const BYDLocations = () => {
  const handleOpenMap = () => {
    const locationName = "BYD Arista Samanhudi";
    const encodedLocation = encodeURIComponent(locationName);
    
    // Detect if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile: Open Google Maps app with specific place
      window.open(`https://maps.google.com/maps?q=${encodedLocation}`, '_blank');
    } else {
      // For desktop: Open Google Maps in browser with specific place
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodedLocation}`, '_blank');
    }
  };

  const handleDirections = () => {
    const locationName = "BYD Arista Samanhudi";
    const encodedLocation = encodeURIComponent(locationName);
    
    // Detect if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile: Open Google Maps app with directions
      window.open(`https://maps.google.com/maps?daddr=${encodedLocation}`, '_blank');
    } else {
      // For desktop: Open Google Maps in browser with directions
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedLocation}`, '_blank');
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = "6281293342824"; // Format internasional tanpa +
    const message = "Halo dengan BYD Jakarta Pusat ?";
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp API URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen" data-location-section>
      {/* Location Banner - Full Screen */}
      <div 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-end"
        style={{ backgroundImage: `url(/location-banner.webp)` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pb-16">
          <div className="text-center text-white space-y-8">
            <h2 className="text-6xl md:text-8xl font-black tracking-tight" 
                style={{ 
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  textShadow: '2px 2px 12px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'
                }}>
              BYD Jakarta Pusat
            </h2>

            {/* Address Info */}
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-semibold text-white">
                Jl. Samanhudi No.37, Pasar Baru, Sawah Besar
              </p>
              <p className="text-lg text-white/80">
                Jakarta Pusat, DKI Jakarta 10710
              </p>
              <p className="text-lg text-white/80">
                📱 WhatsApp: 0812 9334 2824
              </p>
            </div>

            {/* Operating Hours */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">Jam Operasional</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                <div>
                  <p className="font-semibold">Senin - Jumat</p>
                  <p>08:00 - 17:00 WIB</p>
                </div>
                <div>
                  <p className="font-semibold">Sabtu - Minggu</p>
                  <p>08:00 - 16:00 WIB</p>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={handleOpenMap}
                className="px-8 py-4 bg-white/20 backdrop-blur-md text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105"
              >
                Lihat Peta
              </button>
              <button 
                onClick={handleWhatsApp}
                className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Hubungi Kami
              </button>
              <button 
                onClick={handleDirections}
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                Kunjungi Showroom
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BYDLocations; 