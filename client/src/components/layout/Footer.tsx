import { Link } from "wouter";
import { Mail, MapPin, Phone, ThermometerSun, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <img 
                src="/images/logo.jpg" 
                alt="Target Heating & Air Conditioning" 
                className="h-10 w-auto rounded-md shadow-sm opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your reliable heating and air conditioning partner. Providing top-tier installations, renovations, and maintenance for your comfort.
            </p>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-primary transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors text-sm">Products</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors text-sm">Services</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors text-sm">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li className="text-sm text-slate-400">Furnace Installation</li>
              <li className="text-sm text-slate-400">Air Conditioning</li>
              <li className="text-sm text-slate-400">Garage Heaters</li>
              <li className="text-sm text-slate-400">Home Renovations</li>
              <li className="text-sm text-slate-400">New Construction</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:7804657044" className="hover:text-white transition-colors">
                  (780) 465-7044
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@targetheating.com" className="hover:text-white transition-colors">
                  info@targetheating.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>Available for your heating & cooling needs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Target Heating & Air Conditioning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
