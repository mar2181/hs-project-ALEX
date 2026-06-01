import React from 'react';
import { Target, Zap, TrendingUp } from 'lucide-react';

const Vision = () => {
  const pillars = [
    {
      icon: Target,
      title: "Strategic Positioning",
      description: "We identify your unique market position and build a narrative that attracts premium buyers.",
      image: "https://v3b.fal.media/files/b/0a9c8484/FDVz-OgX5GcNp1ANY964O_46ecacfd53ab4bd79290774cc2fbad97.jpg"
    },
    {
      icon: Zap,
      title: "Rapid Growth",
      description: "Proven systems to accelerate revenue, profitability, and valuation multiples in 12-24 months.",
      image: "https://v3b.fal.media/files/b/0a9c8485/zdflI5vVC8QvKuN7tBqw0_ceae61a9fbbe420ca5e9c13b507e8e69.jpg"
    },
    {
      icon: TrendingUp,
      title: "Exit Optimization",
      description: "From preparation to negotiation, we maximize your deal value and negotiate favorable terms.",
      image: "https://v3b.fal.media/files/b/0a9c8485/ux6690bObJhpgkv-sjM_2_9ff84611104146acabfcfd5ed646ba31.jpg"
    }
  ];

  return (
    <section id="vision" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">We believe every founder deserves the tools and guidance to build a billion-dollar company.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-orange-600/20 transition border border-gray-800 group">
                <div className="h-40 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-orange-500" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Vision;