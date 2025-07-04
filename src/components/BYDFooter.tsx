import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
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
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-7 h-7" />
              </a>
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