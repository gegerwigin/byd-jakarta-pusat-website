
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Budi Santoso',
      role: 'Business Executive',
      company: 'Jakarta',
      content: 'ElCar Executive benar-benar mengubah cara saya berkendara. Nyaman, irit, dan teknologinya sangat canggih. Saya sangat puas dengan performanya.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 2,
      name: 'Sarah Wijaya',
      role: 'Content Creator',
      company: 'Bandung',
      content: 'Charging cepat dan jangkauan yang luas membuat saya tidak khawatir untuk perjalanan jauh. Smart interior-nya juga sangat membantu aktivitas saya.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'Tech Entrepreneur',
      company: 'Surabaya',
      content: 'ElCar Sport memberikan performa yang luar biasa. Akselerasinya sangat responsif dan handling-nya sangat presisi. Recommended!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    }
  ];

  const partners = [
    {
      name: 'Pertamina',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'PLN',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Shell',
      logo: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Toyota',
      logo: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Kata <span className="gradient-text">Pelanggan</span> Kami
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Ribuan pelanggan telah merasakan pengalaman berkendara yang luar biasa 
            dengan ElCar. Inilah cerita mereka.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover-scale bg-white animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 space-y-6">
                {/* Rating */}
                <div className="flex justify-center space-x-1">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <blockquote className="text-gray-600 text-center italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="text-center space-y-2">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-electric-blue-600">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Logos */}
        <div className="space-y-12">
          <div className="text-center animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold font-poppins text-gray-900 mb-4">
              Dipercaya oleh Partner Terbaik
            </h3>
            <p className="text-gray-600">
              Bekerjasama dengan perusahaan terkemuka untuk memberikan layanan terbaik
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-br from-electric-blue-50 to-electric-teal-50 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-electric-blue-600">5000+</div>
              <div className="text-gray-600">Pelanggan Puas</div>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl md:text-4xl font-bold text-electric-teal-500">500+</div>
              <div className="text-gray-600">Stasiun Charging</div>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-purple-600">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl md:text-4xl font-bold text-green-600">100%</div>
              <div className="text-gray-600">Kepuasan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
