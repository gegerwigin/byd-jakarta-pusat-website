import { NavbarContent, NavMenuItem } from '../types/cms';

// CMS Data untuk Navbar - Semua konten bisa diedit dari sini
export const navbarContent: NavbarContent = {
  logo: {
    id: 'main-logo',
    text: 'ElCar Sales',
    icon: 'E', // Huruf atau icon name
    iconBgColor: 'bg-gradient-to-r from-electric-blue-600 to-electric-teal-500',
    textColor: 'text-gray-900',
    link: '/'
  },
  
  menuItems: [
    {
      id: 'home',
      label: 'Home',
      href: '#home',
      type: 'scroll',
      order: 1,
      isVisible: true,
      isActive: false
    },
    {
      id: 'mobil',
      label: 'Mobil',
      href: '#models',
      type: 'scroll',
      order: 2,
      isVisible: true,
      isActive: false
    },
    {
      id: 'keuntungan',
      label: 'Keuntungan',
      href: '#features',
      type: 'scroll',
      order: 3,
      isVisible: true,
      isActive: false
    },
    {
      id: 'kontak',
      label: 'Kontak',
      href: '#contact',
      type: 'scroll',
      order: 4,
      isVisible: true,
      isActive: false
    },
    {
      id: 'crud',
      label: 'CRUD',
      href: '/crud',
      type: 'navigate',
      order: 5,
      isVisible: true,
      isActive: false
    }
  ],
  
  ctaButton: {
    id: 'main-cta',
    text: '🚗 Test Drive GRATIS',
    icon: '🚗',
    bgColor: 'bg-gradient-to-r from-red-600 to-orange-500',
    hoverBgColor: 'hover:from-red-700 hover:to-orange-600',
    textColor: 'text-white',
    href: '#contact',
    type: 'scroll',
    isVisible: true,
    isPulsing: true
  },
  
  settings: {
    id: 'navbar-settings',
    transparentBg: true,
    scrolledBg: 'bg-white/95 backdrop-blur-md shadow-lg',
    logoPosition: 'left',
    menuPosition: 'center',
    ctaPosition: 'right',
    showMobileMenu: true,
    stickyHeader: true
  }
};

// CMS Functions untuk update content
export const updateLogo = (newLogo: Partial<typeof navbarContent.logo>) => {
  Object.assign(navbarContent.logo, newLogo);
};

export const updateMenuItem = (id: string, updates: Partial<NavMenuItem>) => {
  const item = navbarContent.menuItems.find(item => item.id === id);
  if (item) {
    Object.assign(item, updates);
  }
};

export const addMenuItem = (newItem: Omit<NavMenuItem, 'id'>) => {
  const newMenuItem = {
    ...newItem,
    id: `menu-item-${Date.now()}`
  };
  navbarContent.menuItems.push(newMenuItem);
  // Sort by order
  navbarContent.menuItems.sort((a, b) => a.order - b.order);
};

export const removeMenuItem = (id: string) => {
  const index = navbarContent.menuItems.findIndex(item => item.id === id);
  if (index > -1) {
    navbarContent.menuItems.splice(index, 1);
  }
};

export const updateCTAButton = (newCTA: Partial<typeof navbarContent.ctaButton>) => {
  Object.assign(navbarContent.ctaButton, newCTA);
};

export const updateNavbarSettings = (newSettings: Partial<typeof navbarContent.settings>) => {
  Object.assign(navbarContent.settings, newSettings);
};

// Function untuk mendapatkan menu items yang visible dan terurut
export const getVisibleMenuItems = () => {
  return navbarContent.menuItems
    .filter(item => item.isVisible)
    .sort((a, b) => a.order - b.order);
}; 