import { HeroSliderContent, HeroSlide } from '../types/heroCMS';

// CMS Data untuk Hero Slider - Semua konten bisa diedit dari sini
export const heroSliderContent: HeroSliderContent = {
  slides: [
    {
      id: 'slide-1',
      title: 'Mobil Listrik Masa Depan',
      subtitle: 'Mulai 300 Jutaan',
      description: 'Rasakan pengalaman berkendara yang revolusioner dengan teknologi terdepan',
      image: {
        src: '/images/hero-car-1.jpg', // Ganti dengan path image yang sesuai
        alt: 'Mobil Listrik Premium',
        position: 'center'
      },
      badge: {
        text: '🔥 PROMO TERBATAS - HANYA BULAN INI!',
        bgColor: 'bg-gradient-to-r from-red-500 to-orange-500',
        textColor: 'text-white',
        isVisible: true
      },
      features: [
        {
          id: 'feature-1',
          text: 'Cicilan mulai 3 jutaan/bulan',
          icon: '✅',
          isVisible: true
        },
        {
          id: 'feature-2', 
          text: 'Garansi 8 tahun baterai',
          icon: '✅',
          isVisible: true
        },
        {
          id: 'feature-3',
          text: 'Hemat BBM hingga 90%',
          icon: '✅',
          isVisible: true
        }
      ],
      ctaButton: {
        text: '🚗 TEST DRIVE GRATIS SEKARANG',
        icon: '🚗',
        bgColor: 'bg-gradient-to-r from-red-600 to-orange-500',
        hoverBgColor: 'hover:from-red-700 hover:to-orange-600',
        textColor: 'text-white',
        href: '#contact',
        type: 'scroll',
        isVisible: true
      },
      secondaryCTA: {
        text: 'Mulai 300JT',
        bgColor: 'bg-green-500',
        textColor: 'text-white',
        href: '#models',
        type: 'scroll',
        isVisible: true
      },
      order: 1,
      isActive: true,
      isVisible: true
    },
    {
      id: 'slide-2',
      title: 'Teknologi Terdepan',
      subtitle: 'Autopilot & Smart Features',
      description: 'Dilengkapi dengan AI terbaru untuk pengalaman berkendara yang aman dan nyaman',
      image: {
        src: '/images/hero-car-2.jpg',
        alt: 'Mobil Listrik dengan Teknologi AI',
        position: 'center'
      },
      badge: {
        text: '🤖 AI TECHNOLOGY',
        bgColor: 'bg-gradient-to-r from-blue-500 to-purple-500',
        textColor: 'text-white',
        isVisible: true
      },
      features: [
        {
          id: 'feature-4',
          text: 'Autopilot Level 3',
          icon: '🚗',
          isVisible: true
        },
        {
          id: 'feature-5',
          text: 'Smart Charging System',
          icon: '⚡',
          isVisible: true
        },
        {
          id: 'feature-6',
          text: 'Over-the-Air Updates',
          icon: '📡',
          isVisible: true
        }
      ],
      ctaButton: {
        text: '🔍 LIHAT SPESIFIKASI',
        icon: '🔍',
        bgColor: 'bg-gradient-to-r from-blue-600 to-purple-600',
        hoverBgColor: 'hover:from-blue-700 hover:to-purple-700',
        textColor: 'text-white',
        href: '#features',
        type: 'scroll',
        isVisible: true
      },
      secondaryCTA: {
        text: 'Demo AI',
        bgColor: 'bg-purple-500',
        textColor: 'text-white',
        href: '/demo',
        type: 'navigate',
        isVisible: true
      },
      order: 2,
      isActive: false,
      isVisible: true
    },
    {
      id: 'slide-3',
      title: 'Ramah Lingkungan',
      subtitle: 'Zero Emission Vehicle',
      description: 'Berkontribusi untuk masa depan bumi yang lebih hijau dengan emisi nol',
      image: {
        src: '/images/hero-car-3.jpg',
        alt: 'Mobil Listrik Ramah Lingkungan',
        position: 'center'
      },
      badge: {
        text: '🌱 ECO FRIENDLY',
        bgColor: 'bg-gradient-to-r from-green-500 to-teal-500',
        textColor: 'text-white',
        isVisible: true
      },
      features: [
        {
          id: 'feature-7',
          text: '0% Emisi Karbon',
          icon: '🌿',
          isVisible: true
        },
        {
          id: 'feature-8',
          text: 'Baterai Ramah Lingkungan',
          icon: '♻️',
          isVisible: true
        },
        {
          id: 'feature-9',
          text: 'Solar Panel Ready',
          icon: '☀️',
          isVisible: true
        }
      ],
      ctaButton: {
        text: '🌍 JADI BAGIAN PERUBAHAN',
        icon: '🌍',
        bgColor: 'bg-gradient-to-r from-green-600 to-teal-600',
        hoverBgColor: 'hover:from-green-700 hover:to-teal-700',
        textColor: 'text-white',
        href: '#contact',
        type: 'scroll',
        isVisible: true
      },
      secondaryCTA: {
        text: 'Info Lengkap',
        bgColor: 'bg-teal-500',
        textColor: 'text-white',
        href: '#features',
        type: 'scroll',
        isVisible: true
      },
      order: 3,
      isActive: false,
      isVisible: true
    }
  ],
  
  settings: {
    id: 'hero-slider-settings',
    autoPlay: true,
    autoPlayInterval: 5000, // 5 detik
    showDots: true,
    showArrows: true,
    pauseOnHover: true,
    transitionType: 'slide',
    transitionDuration: 500,
    height: 'screen',
    customHeight: '80vh',
    backgroundOverlay: true,
    overlayColor: 'bg-black',
    overlayOpacity: 0.3
  }
};

// CMS Functions untuk update content
export const updateSlide = (id: string, updates: Partial<HeroSlide>) => {
  const slide = heroSliderContent.slides.find(slide => slide.id === id);
  if (slide) {
    Object.assign(slide, updates);
  }
};

export const addSlide = (newSlide: Omit<HeroSlide, 'id'>) => {
  const slide: HeroSlide = {
    ...newSlide,
    id: `slide-${Date.now()}`
  };
  heroSliderContent.slides.push(slide);
  // Sort by order
  heroSliderContent.slides.sort((a, b) => a.order - b.order);
};

export const removeSlide = (id: string) => {
  const index = heroSliderContent.slides.findIndex(slide => slide.id === id);
  if (index > -1) {
    heroSliderContent.slides.splice(index, 1);
  }
};

export const updateSliderSettings = (newSettings: Partial<typeof heroSliderContent.settings>) => {
  Object.assign(heroSliderContent.settings, newSettings);
};

export const updateSlideCTA = (slideId: string, ctaUpdates: Partial<HeroSlide['ctaButton']>) => {
  const slide = heroSliderContent.slides.find(slide => slide.id === slideId);
  if (slide && slide.ctaButton) {
    Object.assign(slide.ctaButton, ctaUpdates);
  }
};

export const updateSlideImage = (slideId: string, imageUpdates: Partial<HeroSlide['image']>) => {
  const slide = heroSliderContent.slides.find(slide => slide.id === slideId);
  if (slide) {
    Object.assign(slide.image, imageUpdates);
  }
};

// Function untuk mendapatkan slides yang visible dan terurut
export const getVisibleSlides = () => {
  return heroSliderContent.slides
    .filter(slide => slide.isVisible)
    .sort((a, b) => a.order - b.order);
};

// Function untuk mendapatkan slide yang aktif
export const getActiveSlide = () => {
  return heroSliderContent.slides.find(slide => slide.isActive) || heroSliderContent.slides[0];
}; 