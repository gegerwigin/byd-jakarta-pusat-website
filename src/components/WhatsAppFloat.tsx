import { useState } from 'react';

const WhatsAppFloat = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "6281293342824";
    const message = "Halo dengan Daniel BYD Jakarta Pusat , saya mau tanya -tanya mengenai mobil BYD";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
      >
        {/* Expanded state with text */}
        <div className={`flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'pr-5 pl-5 py-3' : 'w-14 h-14 md:w-16 md:h-16'
        }`}>
          {/* WhatsApp Icon */}
          <div className="relative flex items-center justify-center">
            <svg 
              className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
            </svg>
            
            {/* Pulse animation - perfectly centered */}
            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25"></div>
          </div>

          {/* Text that appears on hover */}
          <div className={`ml-3 transition-all duration-300 overflow-hidden ${
            isHovered ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
          }`}>
            <div className="whitespace-nowrap">
              <div className="text-sm md:text-base font-bold">Chat with Daniel</div>
              <div className="text-xs md:text-sm opacity-90">Sales Expert BYD</div>
            </div>
          </div>
        </div>

        {/* Online indicator */}
        <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-400 rounded-full border-2 border-white">
          <div className="w-full h-full bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </button>

      {/* Tooltip for mobile - only show on tap/touch */}
      <div className={`absolute bottom-full right-0 mb-3 transition-all duration-300 md:hidden ${
        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}>
        <div className="bg-gray-900/95 backdrop-blur-sm text-white px-3 py-2 rounded-xl text-sm whitespace-nowrap shadow-xl">
          <div className="font-semibold">Chat with Daniel</div>
          <div className="text-xs opacity-80">Sales Expert BYD</div>
          {/* Arrow pointing down */}
          <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/95"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloat; 