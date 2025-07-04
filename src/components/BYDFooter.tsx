import { Instagram } from 'lucide-react';
import BYDLogo from './BYDLogo';

const BYDFooter = () => {
  // Handle click address to open Google Maps
  const handleAddressClick = () => {
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

  // Scroll to sales section
  const scrollToSalesSection = () => {
    const salesSection = document.querySelector('[data-sales-section]');
    if (salesSection) {
      salesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Scroll to location section
  const scrollToLocationSection = () => {
    const locationSection = document.querySelector('[data-location-section]');
    if (locationSection) {
      locationSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Scroll to product grid section
  const scrollToProductSection = () => {
    const productGridElement = document.querySelector('[data-product-grid]');
    if (productGridElement) {
      productGridElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <BYDLogo 
                className="h-16 w-auto object-contain"
                isScrolled={false}
              />
            </div>
            <button 
              onClick={handleAddressClick}
              className="text-gray-400 text-base leading-relaxed hover:text-white transition-colors duration-300 text-left cursor-pointer"
            >
              Jl. Samanhudi No.26, RW.3, Ps. Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10710
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Navigasi</h4>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors text-base cursor-pointer"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToProductSection}
                  className="text-gray-400 hover:text-white transition-colors text-base cursor-pointer"
                >
                  Produk Mobil
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToSalesSection}
                  className="text-gray-400 hover:text-white transition-colors text-base cursor-pointer"
                >
                  Hubungi Sales
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToLocationSection}
                  className="text-gray-400 hover:text-white transition-colors text-base cursor-pointer"
                >
                  Lokasi Showroom
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Kontak</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-base">
                📱 WhatsApp: 0812 9334 2824
              </li>
              <li className="text-gray-400 text-base">
                🕒 Senin - Jumat: 08:00 - 17:00
              </li>
              <li className="text-gray-400 text-base">
                🕒 Sabtu - Minggu: 08:00 - 16:00
              </li>
              <li>
                <button 
                  onClick={() => {
                    const phoneNumber = "6281293342824";
                    const message = "Halo dengan Daniel BYD Jakarta Pusat , saya mau tanya -tanya mengenai mobil BYD";
                    const encodedMessage = encodeURIComponent(message);
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="text-green-400 hover:text-green-300 transition-colors text-base cursor-pointer font-medium"
                >
                  💬 Chat WhatsApp
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">IKUTI KAMI</h4>
            <div className="flex space-x-6">
              <a 
                href="https://wa.me/6281293342824?text=Halo%20Daniel%20BYD%20Jakarta%20Pusat%2C%20saya%20mau%20tanya-tanya%20mengenai%20mobil%20BYD" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors group"
                title="WhatsApp Daniel BYD Jakarta Pusat"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/bydaristadaniel?igsh=MTNhOHp0ZjZuajNydA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors group"
                title="Instagram @bydaristadaniel"
              >
                <Instagram className="w-7 h-7" />
              </a>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-gray-400 text-sm">
                📱 <a 
                  href="https://wa.me/6281293342824"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  WhatsApp: 0812 9334 2824
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                📷 <a 
                  href="https://www.instagram.com/bydaristadaniel?igsh=MTNhOHp0ZjZuajNydA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors"
                >
                  @bydaristadaniel
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400 space-y-2">
            <p className="text-base">PT BYD Motor Indonesia. Hak cipta dilindungi undang-undang.</p>
            <p className="text-sm">Copyright and Design By Nectalabs 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BYDFooter; 