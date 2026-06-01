import React from 'react';
import { TrendingUp, DollarSign, Target, Users } from 'lucide-react';

const Results = () => {
  const results = [
    {
      icon: TrendingUp,
      stat: "287%",
      label: "Avg Revenue Growth",
      period: "per year",
      description: "Our clients see explosive growth"
    },
    {
      icon: DollarSign,
      stat: "$8.2B",
      label: "Total Value Created",
      period: "across portfolio",
      description: "Combined exit value achieved"
    },
    {
      icon: Target,
      stat: "4.2x",
      label: "Avg Valuation Multiple",
      period: "increase",
      description: "Premium valuations delivered"
    },
    {
      icon: Users,
      stat: "500+",
      label: "Companies Scaled",
      period: "and counting",
      description: "Founders we’ve helped succeed"
    }
  ];

  return (
    <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Results Speak</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Real numbers from real companies we’ve helped scale.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-gray-800/50 backdrop-blur rounded-xl p-8 text-center hover:bg-gray-800 transition group border border-gray-700">
                <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600/30 transition">
                  <Icon className="text-orange-500" size={32} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{item.stat}</div>
                <div className="text-lg font-semibold text-gray-300 mb-1">{item.label}</div>
                <div className="text-sm text-gray-500 mb-3">{item.period}</div>
                <div className="text-xs text-gray-400">{item.description}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur rounded-full px-6 py-3 border border-gray-700">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">Results based on 500+ client engagements since 2018</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;