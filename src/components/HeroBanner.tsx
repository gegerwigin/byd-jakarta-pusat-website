
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroBanner = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue-50 via-white to-electric-teal-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-electric-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen py-20">
          {/* Content - Sales Focused */}
          <div className="space-y-8 animate-slide-in-left lg:order-2">
            <div className="space-y-6">
              <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                🔥 PROMO TERBATAS - HANYA BULAN INI!
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight text-center lg:text-left">
                <span className="gradient-text">Mobil Listrik</span>
                <span className="block text-gray-900">Masa Depan</span>
                <span className="block text-2xl md:text-3xl font-normal text-gray-600">Mulai 300 Jutaan</span>
              </h1>
            </div>

            {/* Strong CTA */}
            <div className="space-y-4">
              <Button
                onClick={() => scrollToSection('#contact')}
                size="lg"
                className="w-full lg:w-auto bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-12 py-6 rounded-full font-bold text-xl hover-scale shadow-2xl"
              >
                🚗 TEST DRIVE GRATIS SEKARANG
              </Button>
              <p className="text-sm text-gray-600 text-center lg:text-left">* Konsultasi & Test Drive 100% Gratis</p>
            </div>

            {/* Sales Benefits */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-lg text-gray-900">Mengapa Pilih Kami?</h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Cicilan mulai 3 jutaan/bulan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Garansi 8 tahun baterai</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Hemat BBM hingga 90%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in lg:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                alt="Mobil Listrik Premium"
                className="w-full h-auto rounded-3xl shadow-2xl hover-scale transform scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl"></div>
            </div>
            
            {/* Price Badge */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full flex items-center justify-center text-white font-bold text-lg animate-float shadow-2xl">
              <div className="text-center">
                <div className="text-xs">Mulai</div>
                <div className="text-sm font-bold">300JT</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('#models')}
          className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors duration-200"
        >
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
