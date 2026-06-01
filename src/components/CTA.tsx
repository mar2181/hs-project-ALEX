import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Phone, Calendar, Shield } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-orange-500 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Scale to $100M?</h2>
        <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join 500+ founders who’ve scaled their businesses and created life-changing exits with us.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button className="bg-white text-orange-600 hover:bg-orange-50 h-12 px-8 text-base font-semibold flex items-center gap-2 shadow-lg">
            <Calendar size={20} />
            Schedule Your Free Consultation
          </Button>
          <Button variant="outline" className="border-2 border-white text-white hover:bg-white/20 h-12 px-8 text-base flex items-center gap-2">
            <Phone size={20} /> Call Now: (555) 123-4567
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <Shield className="text-orange-200 mx-auto mb-3" size={32} />
            <p className="text-sm text-orange-50 mb-1">100% Confidential</p>
            <p className="text-lg font-bold text-white">NDA Protected</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <Calendar className="text-orange-200 mx-auto mb-3" size={32} />
            <p className="text-sm text-orange-50 mb-1">Limited Availability</p>
            <p className="text-lg font-bold text-white">5 Spots/Month</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <ArrowRight className="text-orange-200 mx-auto mb-3" size={32} />
            <p className="text-sm text-orange-50 mb-1">Average ROI</p>
            <p className="text-lg font-bold text-white">287% in Year 1</p>
          </div>
        </div>

        <div className="border-t border-orange-400/50 pt-8">
          <p className="text-orange-50 text-sm mb-2">Trusted by founders from:</p>
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <span>YC Companies</span>
            <span>•</span>
            <span>Fortune 500 Spin-offs</span>
            <span>•</span>
            <span>PE-Backed Businesses</span>
            <span>•</span>
            <span>Family Offices</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;