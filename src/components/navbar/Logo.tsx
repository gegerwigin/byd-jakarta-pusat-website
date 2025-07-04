import { useNavigate } from 'react-router-dom';
import { Logo as LogoType } from '../../types/cms';

interface LogoProps {
  logoData: LogoType;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ logoData, className = '' }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (logoData.link) {
      if (logoData.link.startsWith('#')) {
        // Scroll to section
        const element = document.querySelector(logoData.link);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to route
        navigate(logoData.link);
      }
    }
  };

  return (
    <div 
      className={`flex items-center space-x-2 cursor-pointer ${className}`}
      onClick={handleLogoClick}
    >
      {/* Icon */}
      {logoData.icon && (
        <div className={`w-10 h-10 ${logoData.iconBgColor || 'bg-gray-500'} rounded-lg flex items-center justify-center`}>
          <span className="text-white font-bold text-xl">
            {logoData.icon}
          </span>
        </div>
      )}
      
      {/* Logo Text */}
      <span className={`font-poppins font-bold text-xl md:text-2xl ${logoData.textColor || 'text-gray-900'}`}>
        {logoData.text}
      </span>
    </div>
  );
}; 