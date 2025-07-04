import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CTAButton as CTAButtonType } from '../../types/cms';

interface CTAButtonProps {
  ctaData: CTAButtonType;
  isMobile?: boolean;
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ 
  ctaData, 
  isMobile = false, 
  className = '' 
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCTAClick = () => {
    if (!ctaData.href) return;

    if (ctaData.type === 'navigate') {
      navigate(ctaData.href);
    } else if (ctaData.type === 'external') {
      window.open(ctaData.href, '_blank');
    } else {
      // Scroll to section
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(ctaData.href!);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(ctaData.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  if (!ctaData.isVisible) {
    return null;
  }

  const buttonClasses = `
    ${ctaData.bgColor || 'bg-blue-600'} 
    ${ctaData.hoverBgColor || 'hover:bg-blue-700'} 
    ${ctaData.textColor || 'text-white'} 
    ${isMobile ? 'w-full py-2' : 'px-6 py-2'} 
    rounded-full font-bold transition-all duration-200 hover-scale 
    ${ctaData.isPulsing ? 'animate-pulse' : ''}
    ${className}
  `;

  return (
    <Button
      onClick={handleCTAClick}
      className={buttonClasses}
    >
      {ctaData.icon && (
        <span className="mr-2">{ctaData.icon}</span>
      )}
      {ctaData.text}
    </Button>
  );
}; 