
const Footer = () => {
  const footerSections = [
    {
      title: 'ElCar Indonesia',
      links: [
        { label: 'Tentang Kami', href: '#about' },
        { label: 'Visi & Misi', href: '#vision' },
        { label: 'Tim Kami', href: '#team' },
        { label: 'Karir', href: '#career' }
      ]
    },
    {
      title: 'Produk',
      links: [
        { label: 'ElCar Urban', href: '#urban' },
        { label: 'ElCar Executive', href: '#executive' },
        { label: 'ElCar Sport', href: '#sport' },
        { label: 'Bandingkan Model', href: '#compare' }
      ]
    },
    {
      title: 'Layanan',
      links: [
        { label: 'Test Drive', href: '#test-drive' },
        { label: 'Service & Maintenance', href: '#service' },
        { label: 'Charging Network', href: '#charging' },
        { label: 'Insurance', href: '#insurance' }
      ]
    },
    {
      title: 'Dukungan',
      links: [
        { label: 'FAQ', href: '#faq' },
        { label: 'Manual Book', href: '#manual' },
        { label: 'Warranty', href: '#warranty' },
        { label: 'Contact Support', href: '#support' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: '📷', href: '#instagram' },
    { name: 'Facebook', icon: '👥', href: '#facebook' },
    { name: 'Twitter', icon: '🐦', href: '#twitter' },
    { name: 'YouTube', icon: '📹', href: '#youtube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-electric-blue-600 to-electric-teal-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">E</span>
                </div>
                <span className="font-poppins font-bold text-2xl">ElCar Indonesia</span>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Memimpin revolusi transportasi berkelanjutan di Indonesia dengan 
                teknologi terdepan dan pengalaman berkendara yang luar biasa.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-electric-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200 hover-scale"
                    aria-label={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-bold text-lg font-poppins">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-electric-blue-400 transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="font-bold text-xl font-poppins mb-2">
                  Dapatkan Update Terbaru
                </h4>
                <p className="text-gray-300">
                  Subscribe newsletter kami untuk mendapatkan info terbaru tentang produk dan teknologi ElCar.
                </p>
              </div>
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue-500 focus:border-electric-blue-500 text-white"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-electric-blue-600 to-electric-teal-500 hover:from-electric-blue-700 hover:to-electric-teal-600 rounded-lg font-semibold transition-all duration-200 hover-scale">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="container-max">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 ElCar Indonesia. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-electric-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-electric-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-electric-blue-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
