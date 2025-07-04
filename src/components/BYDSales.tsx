const BYDSales = () => {
  // WhatsApp handler
  const handleWhatsApp = () => {
    const phoneNumber = "6281293342824"; // Format internasional tanpa +
    const message = "Halo dengan Daniel BYD Jakarta Pusat , saya mau tanya -tanya mengenai mobil BYD";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Phone call handler
  const handlePhoneCall = () => {
    const phoneNumber = "081293342824"; // Format lokal untuk tel:
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden" data-sales-section>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

            <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4 md:mb-6 px-4">
            Konsultasi dengan
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sales Expert Kami
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
            Dapatkan informasi lengkap tentang mobil listrik BYD, simulasi kredit, 
            dan penawaran terbaik dari sales professional kami.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Sales Profile Card - Left Column */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border border-white/40 lg:sticky lg:top-8">
              {/* Sales Photo */}
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <div className="w-48 h-64 sm:w-56 sm:h-72 rounded-2xl overflow-hidden shadow-xl bg-white flex items-center justify-center mx-auto">
                    <img
                      src="/sales-photo.jpg"
                      alt="Daniel Julianto - Sales Leader BYD Jakarta Pusat"
                      className="w-full h-full object-cover"
                      onLoad={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'none';
                      }}
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <span className="text-gray-400 text-6xl font-bold absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent">
                      D
                    </span>
                  </div>
                  {/* Online Status */}
                  <div className="absolute -bottom-3 -right-3 flex items-center bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                    Online
                  </div>
                </div>
                
                {/* Sales Info */}
                <div className="mt-6 md:mt-8 space-y-3">
                  <h3 className="text-xl md:text-2xl font-black text-gray-900">Daniel Julianto</h3>
                  <p className="text-blue-600 font-bold text-base md:text-lg">SALES EXPERT BYD JAKARTA PUSAT</p>
                  <p className="text-gray-600 leading-relaxed text-sm px-2 md:px-4">
                    Perkenalkan Saya Daniel Julianto Sebagai <span className="font-semibold text-gray-900">Sales Expert BYD Jakarta Pusat</span>, 
                    Info Promo, Cash dan Kredit BYD bisa hubungi saya di nomor berikut.
                  </p>
                </div>

                {/* Contact Buttons */}
                <div className="mt-6 md:mt-8 space-y-3">
                  <button 
                    onClick={handleWhatsApp}
                    className="w-full group flex items-center justify-center px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm md:text-base"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                    </svg>
                    WhatsApp
                  </button>
                  
                  <button 
                    onClick={handlePhoneCall}
                    className="w-full group flex items-center justify-center px-4 md:px-6 py-3 md:py-4 bg-white text-gray-900 font-semibold rounded-2xl shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-300 text-sm md:text-base"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.57a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.57-2.3-.57-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                    Telepon
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Services & Features - Right Column */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            
            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900">Simulasi Kredit</h4>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">Dapatkan perhitungan kredit dan angsuran dalam hitungan detik</p>
              </div>

              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900">Test Drive</h4>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">Rasakan pengalaman berkendara mobil listrik BYD langsung</p>
              </div>

              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900">Best Price</h4>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">Dapatkan harga terbaik dan penawaran khusus untuk Anda</p>
              </div>

              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900">Garansi Resmi</h4>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">Garansi resmi BYD dengan layanan purna jual terpercaya</p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 md:p-6 text-center border border-blue-200">
                <div className="text-xl sm:text-2xl font-black text-blue-600 mb-1 md:mb-2">Trusted</div>
                <div className="text-xs sm:text-sm text-blue-800 font-medium">Terpercaya</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 md:p-6 text-center border border-purple-200">
                <div className="text-2xl sm:text-3xl font-black text-purple-600 mb-1 md:mb-2">500+</div>
                <div className="text-xs sm:text-sm text-purple-800 font-medium">Customer Puas</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 md:p-6 text-center border border-green-200">
                <div className="text-2xl sm:text-3xl font-black text-green-600 mb-1 md:mb-2">24/7</div>
                <div className="text-xs sm:text-sm text-green-800 font-medium">Layanan</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BYDSales; 