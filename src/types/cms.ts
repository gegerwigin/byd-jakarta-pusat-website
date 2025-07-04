// CMS Data Types untuk Navbar
export interface Logo {
  id: string;
  text: string;
  icon?: string;
  iconBgColor?: string;
  textColor?: string;
  link?: string;
}

export interface NavMenuItem {
  id: string;
  label: string;
  href: string;
  type: 'scroll' | 'navigate' | 'external';
  isActive?: boolean;
  order: number;
  isVisible?: boolean;
}

export interface CTAButton {
  id: string;
  text: string;
  icon?: string;
  bgColor?: string;
  hoverBgColor?: string;
  textColor?: string;
  href?: string;
  type: 'scroll' | 'navigate' | 'external';
  isVisible?: boolean;
  isPulsing?: boolean;
}

export interface NavbarSettings {
  id: string;
  transparentBg?: boolean;
  scrolledBg?: string;
  logoPosition?: 'left' | 'center' | 'right';
  menuPosition?: 'left' | 'center' | 'right';
  ctaPosition?: 'left' | 'center' | 'right';
  showMobileMenu?: boolean;
  stickyHeader?: boolean;
}

export interface NavbarContent {
  logo: Logo;
  menuItems: NavMenuItem[];
  ctaButton: CTAButton;
  settings: NavbarSettings;
}