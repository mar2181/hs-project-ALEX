import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Scale to <span className="text-orange-600">$100M</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-prose">
              We help 7-8 figure founders build and sell their businesses for maximum value. From acquisition strategy to post-sale optimization, we’re your partner every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white h-12 px-8 text-base flex items-center gap-2">
                Start Your Journey <ArrowRight size={20} />
              </Button>
              <Button variant="outline" className="h-12 px-8 text-base border-gray-700 text-gray-300 hover:text-white">
                View Case Studies
              </Button>
            </div>
            <div className="flex gap-8 pt-8 border-t border-gray-800">
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <p className="text-gray-400 text-sm">Companies Scaled</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">$8B+</div>
                <p className="text-gray-400 text-sm">Combined Value Created</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <p className="text-gray-400 text-sm">Success Rate</p>
              </div>
            </div>
          </div>
          
          <div className="w-full order-1 md:order-2 space-y-6">
            <img
              src="https://svgsbaahxiaeljmfykzp.supabase.co/storage/v1/object/public/alex.h/2de4799d-8ec6-46c7-a557-5577697be054.png"
              alt="Growth Dashboard"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            />
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-orange-600/10 transition">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Your Scaling Blueprint Awaits</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    Get instant access to our proven 4-phase roadmap that’s helped 500+ founders scale to $100M. Includes financial models, growth playbooks, and exit strategies...
                  </p>
                  <div className="flex items-center gap-2 text-orange-500 text-sm font-semibold">
                    Scroll to discover <ArrowDown size={16} className="animate-bounce" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;