
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Features = () => {
  const benefits = [
    {
      icon: '💰',
      title: 'Hemat BBM 90%',
      description: 'Bayar listrik hanya 50 ribu untuk 500km. Bandingkan dengan BBM 500 ribu!',
      savings: 'Hemat 450rb per 500km',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '⚡',
      title: 'Charging Cepat',
      description: 'Isi daya 80% hanya 15-30 menit. Lebih cepat dari isi bensin!',
      savings: '15-30 menit saja',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: '🔧',
      title: 'Perawatan Murah',
      description: 'Tidak ada oli, tune up, atau part yang mudah rusak. Service minimal!',
      savings: 'Hemat 80% biaya service',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: '🏆',
      title: 'Garansi Panjang',
      description: 'Garansi baterai 8 tahun atau 160,000 km. Investasi aman jangka panjang.',
      savings: '8 tahun garansi',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: '🌱',
      title: 'Ramah Lingkungan',
      description: 'Zero emission, udah bersih, anak cucu bangga dengan pilihan Anda.',
      savings: '100% bebas polusi',
      gradient: 'from-teal-400 to-green-500'
    },
    {
      icon: '📱',
      title: 'Teknologi Canggih',
      description: 'Kontrol AC, musik, GPS dari HP. Mobil pintar untuk hidup modern.',
      savings: 'Smart features',
      gradient: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header - Sales Focused */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            💡 KEUNTUNGAN YANG AKAN ANDA DAPATKAN
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Mengapa <span className="gradient-text">Mobil Listrik</span> Lebih Menguntungkan?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Bukan hanya tren, tapi investasi cerdas! Lihat sendiri penghematan yang bisa Anda dapatkan.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover-scale bg-white overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center space-y-4 relative">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold font-poppins text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className={`inline-block bg-gradient-to-r ${benefit.gradient} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                    {benefit.savings}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ROI Calculator Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h3 className="text-2xl md:text-3xl font-bold font-poppins text-gray-900">
                Hitung Penghematan Anda!
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-red-600 font-bold text-lg">Mobil Bensin</div>
                      <div className="text-2xl font-bold text-red-600">6 Juta</div>
                      <div className="text-sm text-gray-600">BBM per bulan</div>
                    </div>
                    <div>
                      <div className="text-green-600 font-bold text-lg">Mobil Listrik</div>
                      <div className="text-2xl font-bold text-green-600">600 Ribu</div>
                      <div className="text-sm text-gray-600">Listrik per bulan</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl p-4 text-center">
                  <div className="text-lg font-bold">Penghematan Per Bulan</div>
                  <div className="text-3xl font-bold">5.4 Juta</div>
                  <div className="text-sm opacity-90">atau 64.8 Juta per tahun!</div>
                </div>
              </div>
            </div>
            <div className="text-center space-y-6">
              <img
                src="https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Electric Car Charging"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg"
              >
                🧮 Hitung Penghematan Saya
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
