import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-900 pb-28">
      {/* Newsletter section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get weekly insights on scaling, M&A trends, and exit strategies.</p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500"
              />
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              acquisition<span className="text-orange-600">.com</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              We help 7-8 figure founders scale their businesses to $100M and beyond, then exit for maximum value.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-xs text-gray-500">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">$8.2B</div>
                <div className="text-xs text-gray-500">Value Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-xs text-gray-500">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition text-sm">About Us</a></li>
              <li><a href="#" className="hover:text-white transition text-sm">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition text-sm">Our Process</a></li>
              <li><a href="#" className="hover:text-white transition text-sm">Team</a></li>
              <li><a href="#" className="hover:text-white transition text-sm">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition text-sm">Founder's Guide</a></li>
              <li><a href="#" className="hover:text-white transition text-sm">Exit Planning</a></li>
              <li><a href="#" className="hover:text-white transition text-sm">Valuation Tools</a></li>
              <li><a href="#" className="hover:text-white transition text-sm">Blog</a></li>
              <li><a href="#" className="hover:text-white transition text-sm">Podcast</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:hello@acquisition.com" className="hover:text-white transition text-sm">hello@acquisition.com</a>
                  <p className="text-xs text-gray-500">General inquiries</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+15551234567" className="hover:text-white transition text-sm">+1 (555) 123-4567</a>
                  <p className="text-xs text-gray-500">Direct line</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-sm">Silicon Valley, CA</span>
                  <p className="text-xs text-gray-500">Headquarters</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Acquisition.com. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;