interface BYDLogoProps {
  className?: string;
  isScrolled?: boolean;
}

const BYDLogo = ({ className, isScrolled = false }: BYDLogoProps) => {
  return (
    <img
      src="/byd-logo.png"
      alt="BYD Logo"
      className={`${className} transition-all duration-300 ${
        isScrolled 
          ? 'brightness-0 invert-0' // Hitam untuk background putih
          : 'brightness-0 invert' // Putih untuk background transparan/gelap
      }`}
    />
  );
};

export default BYDLogo; 