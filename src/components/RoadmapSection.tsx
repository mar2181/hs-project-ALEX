import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronDown, ChevronUp } from 'lucide-react';

const RoadmapSection = () => {
  const [expandedPhase, setExpandedPhase] = useState(0);

  const phases = [
    {
      phase: 1,
      title: "Foundation (Months 1-3)",
      tagline: "Build Your Fortress",
      milestones: [
        "Comprehensive business audit",
        "Financial optimization",
        "Team structure refinement",
        "Systems documentation"
      ],
      outcome: "Clean, scalable foundation",
      details: "We start by conducting a 360-degree audit of your business, identifying inefficiencies, and building robust systems that can handle massive scale."
    },
    {
      phase: 2,
      title: "Acceleration (Months 4-8)",
      tagline: "Scale Aggressively",
      milestones: [
        "Revenue growth playbook",
        "Market expansion strategy",
        "Product optimization",
        "Team hiring plan"
      ],
      outcome: "2-3x revenue growth",
      details: "Deploy proven growth strategies that have scaled hundreds of companies. Focus on expanding market reach and optimizing conversion funnels."
    },
    {
      phase: 3,
      title: "Optimization (Months 9-12)",
      tagline: "Perfect The Machine",
      milestones: [
        "Margin improvement",
        "Operational excellence",
        "Strategic partnerships",
        "Brand positioning"
      ],
      outcome: "Premium valuation multiple",
      details: "Fine-tune operations for maximum efficiency and profitability. Position your company as the market leader in your category."
    },
    {
      phase: 4,
      title: "Exit Strategy (Months 12+)",
      tagline: "Maximize Value",
      milestones: [
        "Buyer identification",
        "Deal structuring",
        "Negotiation support",
        "Transaction management"
      ],
      outcome: "Optimal exit terms",
      details: "Navigate the complex M&A process with expert guidance. We’ll help you structure the deal for maximum value and favorable terms."
    }
  ];

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Your Scaling Roadmap</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">A clear, phased approach to take you from where you are to $100M and beyond.</p>
        </div>

        <div className="space-y-4">
          {phases.map((phase, idx) => (
            <Card
              key={idx}
              className={`cursor-pointer border-2 transition-all duration-300 bg-gray-800 ${
                expandedPhase === idx 
                  ? 'border-orange-500 shadow-lg shadow-orange-600/20' 
                  : 'border-gray-700 hover:border-orange-600/50'
              }`}
              onClick={() => setExpandedPhase(expandedPhase === idx ? -1 : idx)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-orange-600 text-white font-semibold px-3 py-1">
                        Phase {phase.phase}
                      </Badge>
                      <div className="w-8 h-8 rounded-full bg-orange-600/20 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">{phase.title}</CardTitle>
                      <CardDescription className="text-orange-500 font-semibold text-base">
                        {phase.tagline}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <p className="text-sm text-gray-400">Expected Outcome</p>
                      <p className="font-bold text-white">{phase.outcome}</p>
                    </div>
                    {expandedPhase === idx ? (
                      <ChevronUp className="text-orange-500" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-500" size={24} />
                    )}
                  </div>
                </div>
              </CardHeader>
              
              {expandedPhase === idx && (
                <CardContent className="border-t border-gray-700 pt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Key Milestones
                      </h4>
                      <ul className="space-y-3">
                        {phase.milestones.map((milestone, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300">
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-orange-600/10 rounded-lg p-6 border border-orange-600/30">
                        <p className="text-sm text-orange-300 font-medium mb-2">Expected Outcome</p>
                        <p className="font-bold text-white text-lg mb-3">{phase.outcome}</p>
                        <p className="text-gray-300 text-sm leading-relaxed">{phase.details}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-800 rounded-full px-6 py-3 shadow-sm border border-gray-700">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">Average timeline: 12-18 months to exit</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;