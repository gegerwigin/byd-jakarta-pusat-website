
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'test-drive',
    budget: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Terima kasih!",
        description: "Sales kami akan menghubungi Anda dalam 10 menit!",
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        interest: 'test-drive',
        budget: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container-max">
        {/* Section Header - Sales Focused */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
            ⏰ RESPONS CEPAT DALAM 10 MENIT!
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Siap <span className="gradient-text">Test Drive</span> Sekarang?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Isi form di bawah ini dan sales terbaik kami akan menghubungi Anda dalam 10 menit 
            dengan penawaran terbaik dan jadwal test drive yang fleksibel.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form - More Sales Focused */}
          <Card className="border-0 shadow-xl bg-white animate-slide-in-left">
            <CardContent className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-2">
                  Form Test Drive & Konsultasi GRATIS
                </h3>
                <p className="text-green-600 font-semibold">✅ 100% Gratis & Tanpa Komitmen</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Nama Lengkap *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      WhatsApp *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="08xx xxxx xxxx"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium text-gray-700">
                      Yang Anda Inginkan *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="test-drive">Test Drive Gratis</option>
                      <option value="price-quote">Harga & Cicilan</option>
                      <option value="trade-in">Tukar Tambah</option>
                      <option value="consultation">Konsultasi</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium text-gray-700">
                      Budget Cicilan/Bulan
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Pilih Budget</option>
                      <option value="3-5">3-5 Juta</option>
                      <option value="5-7">5-7 Juta</option>
                      <option value="7-10">7-10 Juta</option>
                      <option value="10+">Di atas 10 Juta</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Pesan Khusus
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Ada pertanyaan khusus?"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-200 hover-scale"
                >
                  {isLoading ? 'Mengirim...' : '🚗 KIRIM & JADWALKAN TEST DRIVE'}
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  Dengan mengirim form ini, Anda setuju untuk dihubungi oleh sales kami
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Sales Information */}
          <div className="space-y-6">
            {/* Urgency Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-red-500 to-orange-500 text-white">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-xl mb-2">🔥 PROMO TERBATAS!</h4>
                <p className="mb-4">Hanya tersisa 15 unit dengan harga promo khususbulan ini!</p>
                <div className="text-2xl font-bold">Cashback hingga 25 Juta</div>
              </CardContent>
            </Card>

            {/* Sales Benefits */}
            <div className="space-y-4">
              {[
                {
                  icon: '⚡',
                  title: 'Respons Cepat',
                  content: 'Sales menghubungi dalam 10 menit',
                  color: 'from-blue-400 to-cyan-500'
                },
                {
                  icon: '🎯',
                  title: 'Konsultasi Personal',
                  content: 'Solusi terbaik sesuai kebutuhan Anda',
                  color: 'from-green-400 to-emerald-500'
                },
                {
                  icon: '🏠',
                  title: 'Test Drive ke Rumah',
                  content: 'Kami datang ke lokasi Anda',
                  color: 'from-purple-400 to-pink-500'
                },
                {
                  icon: '💰',
                  title: 'Cicilan Fleksibel',
                  content: 'DP mulai 20%, tenor hingga 7 tahun',
                  color: 'from-orange-400 to-red-500'
                }
              ].map((item, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-xl`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Direct Contact Options */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 rounded-xl font-bold hover-scale"
              >
                📱 WhatsApp
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-bold hover-scale"
              >
                📞 Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
