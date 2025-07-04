import { useNavigate, useLocation } from 'react-router-dom';
import { NavMenuItem } from '../../types/cms';

interface NavigationMenuProps {
  menuItems: NavMenuItem[];
  isMobile?: boolean;
  onItemClick?: () => void;
  className?: string;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ 
  menuItems, 
  isMobile = false, 
  onItemClick,
  className = '' 
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (item: NavMenuItem) => {
    if (item.type === 'navigate') {
      navigate(item.href);
    } else if (item.type === 'external') {
      window.open(item.href, '_blank');
    } else {
      // Scroll to section - hanya jika di halaman home
      if (location.pathname !== '/') {
        navigate('/');
        // Delay scroll untuk memberi waktu halaman load
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    
    // Callback untuk mobile menu close
    if (onItemClick) {
      onItemClick();
    }
  };

  // Filter only visible items and sort by order
  const visibleItems = menuItems
    .filter(item => item.isVisible)
    .sort((a, b) => a.order - b.order);

  if (isMobile) {
    return (
      <nav className={`${className}`}>
        {visibleItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item)}
            className={`block w-full text-left px-4 py-3 text-gray-700 hover:text-electric-blue-600 hover:bg-gray-50 font-medium transition-colors duration-200 ${
              item.isActive ? 'text-electric-blue-600 bg-gray-50' : ''
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    );
  }

  return (
    <nav className={`flex items-center space-x-8 ${className}`}>
      {visibleItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleNavigation(item)}
          className={`text-gray-700 hover:text-electric-blue-600 font-medium transition-colors duration-200 relative group ${
            item.isActive ? 'text-electric-blue-600' : ''
          }`}
        >
          {item.label}
          <span className={`absolute bottom-0 left-0 h-0.5 bg-electric-blue-600 transition-all duration-200 group-hover:w-full ${
            item.isActive ? 'w-full' : 'w-0'
          }`}></span>
        </button>
      ))}
    </nav>
  );
}; 