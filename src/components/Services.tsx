import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Building2, Wrench, Hammer, PaintBucket, Shield, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Business Architecture",
      description: "Rebuild your organizational structure for hypergrowth and maximum valuation.",
      features: ["Org chart optimization", "Role definition", "Process mapping"],
      image: "https://v3b.fal.media/files/b/0a9c8485/CcdIsSAI-1stak2XiCN9k_43f7845e5fc844b4a716260220870d80.jpg"
    },
    {
      icon: Wrench,
      title: "Operational Excellence",
      description: "Implement systems and processes that scale without breaking.",
      features: ["Workflow automation", "Quality systems", "Performance metrics"],
      image: "https://v3b.fal.media/files/b/0a9c8484/4HwnnhsUGnXMmizrezHnb_d38be723718748efb1fb467b5798d77b.jpg"
    },
    {
      icon: Hammer,
      title: "Revenue Engineering",
      description: "Deploy proven playbooks to accelerate top-line growth 2-3x.",
      features: ["Sales optimization", "Pricing strategy", "Market expansion"],
      image: "https://v3b.fal.media/files/b/0a9c8485/cNJCzB3rjGsSdOK96_VBA_c0d30b06551d4ec19da73677109b06af.jpg"
    },
    {
      icon: PaintBucket,
      title: "Brand Positioning",
      description: "Create a compelling narrative that attracts premium buyers.",
      features: ["Brand strategy", "Market positioning", "Thought leadership"],
      image: "https://v3b.fal.media/files/b/0a9c8485/HSl3LsQbI6F9iseQKYV7q_c39107b7918944b397554d602f3cb77a.jpg"
    },
    {
      icon: Shield,
      title: "Financial Optimization",
      description: "Maximize profitability and margins while maintaining growth momentum.",
      features: ["Cost structure", "Cash flow", "Financial modeling"],
      image: "https://v3b.fal.media/files/b/0a9c8484/_4R_c5TKaIeoqTmT4rJEs_0ee6560d2a0e4450ab2cd6551001fdc1.jpg"
    },
    {
      icon: Award,
      title: "Exit Strategy",
      description: "Navigate M&A or IPO with expert deal structuring and negotiation.",
      features: ["Buyer sourcing", "Due diligence", "Deal negotiation"],
      image: "https://v3b.fal.media/files/b/0a9c8484/YcCTOIMd83xIyvhK6BRVp_5ae2c4ce10de450a996a2626366d2f72.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">End-to-end solutions to scale, optimize, and exit your business.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card key={idx} className="border-gray-800 hover:shadow-lg hover:shadow-orange-600/10 hover:border-orange-600/50 transition bg-gray-900 group overflow-hidden">
                {service.image && (
                  <div className="h-32 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600/30 transition">
                    <Icon className="text-orange-500" size={24} />
                  </div>
                  <CardTitle className="text-gray-100 text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-400 leading-relaxed">{service.description}</CardDescription>
                  <div className="pt-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Areas</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <span key={i} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;