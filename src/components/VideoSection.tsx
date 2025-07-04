
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const videos = [
    {
      id: 1,
      title: 'Technology Overview',
      description: 'Discover the cutting-edge technology behind our electric vehicles',
      thumbnail: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      embedId: 'dQw4w9WgXcQ' // Example YouTube video ID
    },
    {
      id: 2,
      title: 'Driving Experience',
      description: 'Experience the smooth and silent power of electric driving',
      thumbnail: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      embedId: 'dQw4w9WgXcQ'
    },
    {
      id: 3,
      title: 'Charging Solutions',
      description: 'Learn about our comprehensive charging infrastructure',
      thumbnail: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      embedId: 'dQw4w9WgXcQ'
    }
  ];

  return (
    <section id="video" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Lihat <span className="gradient-text">ElCar</span> dalam Aksi
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Saksikan teknologi revolusioner dan pengalaman berkendara yang luar biasa 
            melalui video-video inspiratif kami.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Placeholder - In production, this would be an actual video player */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue-600/20 to-electric-teal-500/20 flex items-center justify-center">
                <img
                  src={videos[activeVideo].thumbnail}
                  alt={videos[activeVideo].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 hover-scale">
                    <div className="w-0 h-0 border-l-8 border-l-electric-blue-600 border-t-6 border-b-6 border-t-transparent border-b-transparent ml-2"></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-2xl font-bold font-poppins text-gray-900">
                {videos[activeVideo].title}
              </h3>
              <p className="text-gray-600 text-lg">
                {videos[activeVideo].description}
              </p>
            </div>
          </div>

          {/* Video Playlist */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold font-poppins text-gray-900 mb-6">
              Video Lainnya
            </h4>
            {videos.map((video, index) => (
              <div
                key={video.id}
                onClick={() => setActiveVideo(index)}
                className={`group cursor-pointer p-4 rounded-xl transition-all duration-200 hover-scale ${
                  activeVideo === index
                    ? 'bg-gradient-to-r from-electric-blue-50 to-electric-teal-50 border-2 border-electric-blue-200'
                    : 'bg-white hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="flex space-x-4">
                  <div className="relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-3 border-l-gray-800 border-t-2 border-b-2 border-t-transparent border-b-transparent ml-0.5"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-semibold text-gray-900 truncate group-hover:text-electric-blue-600 transition-colors">
                      {video.title}
                    </h5>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-electric-blue-600 to-electric-teal-500 rounded-3xl text-white animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-4">
            Siap untuk Test Drive?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Rasakan langsung pengalaman berkendara ElCar yang revolusioner
          </p>
          <Button
            size="lg"
            className="bg-white text-electric-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg hover-scale"
          >
            Jadwalkan Test Drive
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
