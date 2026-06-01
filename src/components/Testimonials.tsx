import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Founder & CEO, TechVenture",
      content: "Acquisition.com helped us scale from $2M to $40M in revenue in just 18 months. Their strategic guidance and operational playbooks were absolutely game-changing for our business.",
      image: "https://v3b.fal.media/files/b/0a9c8484/qTvhEitcfgadbQX77pW02_b868d46c4c3949acacde1f1fc8e1e4db.jpg",
      company: "TechVenture",
      result: "$40M Revenue"
    },
    {
      name: "Marcus Rodriguez",
      title: "Founder, CloudScale",
      content: "We grew 5x faster than we ever thought possible. Their team's expertise in financial optimization saved us over $2M annually while accelerating our growth trajectory.",
      image: "https://v3b.fal.media/files/b/0a9c8486/SI3JsIcnMO6Sm64LqLu0L.jpg",
      company: "CloudScale",
      result: "5x Growth Rate"
    },
    {
      name: "Emily Patterson",
      title: "CEO, GrowthLabs",
      content: "The exit strategy they crafted for us resulted in a 3.8x valuation multiple. It was the best investment we ever made. They handled every detail flawlessly.",
      image: "https://v3b.fal.media/files/b/0a9c8485/By5_Y_EtBGB6_w3G-8HrU_af18a51c4bcb48a1ab384f566b9aa059.jpg",
      company: "GrowthLabs",
      result: "3.8x Multiple"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Real stories from founders who scaled and exited with us.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="border-gray-800 hover:shadow-lg hover:shadow-orange-600/10 hover:border-orange-600/50 transition bg-gray-900 group overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic text-sm">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.title}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-orange-500 uppercase tracking-wider">{testimonial.company}</p>
                    <p className="text-xs font-bold text-gray-300">{testimonial.result}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">Join 500+ founders who’ve successfully scaled and exited their businesses</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;