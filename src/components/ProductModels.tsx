
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ProductModels = () => {
  const models = [
    {
      id: 1,
      name: 'ElCar Urban',
      type: 'SUV Kompak',
      price: '350 Juta',
      monthlyPayment: '3.2 Juta/bulan',
      range: '450 km',
      charging: '30 menit',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      savings: 'Hemat 2.5 Juta/bulan BBM',
      badge: 'TERLARIS'
    },
    {
      id: 2,
      name: 'ElCar Executive',
      type: 'Sedan Mewah',
      price: '550 Juta',
      monthlyPayment: '4.8 Juta/bulan',
      range: '600 km',
      charging: '20 menit',
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      savings: 'Hemat 3.2 Juta/bulan BBM',
      badge: 'PREMIUM'
    },
    {
      id: 3,
      name: 'ElCar Sport',
      type: 'Coupe Performa',
      price: '750 Juta',
      monthlyPayment: '6.5 Juta/bulan',
      range: '500 km',
      charging: '15 menit',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      savings: 'Hemat 4.0 Juta/bulan BBM',
      badge: 'SPORT'
    }
  ];

  return (
    <section id="models" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header - Sales Focused */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            💰 INVESTASI TERBAIK UNTUK MASA DEPAN
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Pilih Mobil <span className="gradient-text">Hemat BBM</span> Anda
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Bayar sekali, hemat selamanya! Cicilan ringan dengan penghematan BBM hingga jutaan per bulan.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <Card 
              key={model.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover-scale bg-white relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {model.badge}
                </span>
              </div>

              <div className="relative overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-poppins text-gray-900 mb-1">
                    {model.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{model.type}</p>
                </div>

                {/* Pricing - Sales Focus */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{model.price}</div>
                    <div className="text-sm text-gray-600">atau cicilan</div>
                    <div className="text-lg font-bold text-blue-600">{model.monthlyPayment}</div>
                  </div>
                </div>

                {/* Savings Highlight */}
                <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                  <div className="text-center text-sm">
                    <span className="text-orange-600 font-bold">💰 {model.savings}</span>
                  </div>
                </div>

                {/* Quick Specs */}
                <div className="grid grid-cols-2 gap-4 py-2 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-gray-900">{model.range}</div>
                    <div className="text-gray-600">Jangkauan</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">{model.charging}</div>
                    <div className="text-gray-600">Charging</div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition-all duration-200"
                >
                  🚗 Test Drive Sekarang
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA - More Aggressive */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Masih Ragu? Konsultasi GRATIS!</h3>
          <p className="mb-6 text-blue-100">
            Dapatkan perhitungan cicilan, trade-in, dan promo khusus untuk Anda
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-200"
          >
            📞 Hubungi Sales Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductModels;
