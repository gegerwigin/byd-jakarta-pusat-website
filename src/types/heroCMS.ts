// CMS Data Types untuk Hero Slider
export interface HeroSlide {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: {
    src: string;
    alt: string;
    position?: 'left' | 'center' | 'right';
  };
  badge?: {
    text: string;
    bgColor?: string;
    textColor?: string;
    isVisible?: boolean;
  };
  features?: {
    id: string;
    text: string;
    icon?: string;
    isVisible?: boolean;
  }[];
  ctaButton?: {
    text: string;
    icon?: string;
    bgColor?: string;
    hoverBgColor?: string;
    textColor?: string;
    href?: string;
    type?: 'scroll' | 'navigate' | 'external';
    isVisible?: boolean;
  };
  secondaryCTA?: {
    text: string;
    bgColor?: string;
    textColor?: string;
    href?: string;
    type?: 'scroll' | 'navigate' | 'external';
    isVisible?: boolean;
  };
  order: number;
  isActive?: boolean;
  isVisible?: boolean;
}

export interface HeroSliderSettings {
  id: string;
  autoPlay?: boolean;
  autoPlayInterval?: number; // dalam milidetik
  showDots?: boolean;
  showArrows?: boolean;
  pauseOnHover?: boolean;
  transitionType?: 'slide' | 'fade';
  transitionDuration?: number;
  height?: 'auto' | 'screen' | 'custom';
  customHeight?: string;
  backgroundOverlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
}

export interface HeroSliderContent {
  slides: HeroSlide[];
  settings: HeroSliderSettings;
} 