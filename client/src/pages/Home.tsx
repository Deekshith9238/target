import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Thermometer, Wind, Home as HomeIcon, CheckCircle2, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradient & Pattern */}
        <div className="absolute inset-0 z-0 bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block py-2 px-4 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-sm shadow-2xl shadow-blue-500/10">
                Precision Comfort Engineering
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] mb-8 text-balance tracking-tight">
                Target Heating <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">& Air Conditioning</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                Elevating home climate through sophisticated engineering and uncompromising quality. From high-performance furnaces to advanced cooling systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" asChild className="rounded-full h-16 px-10 text-base font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:-translate-y-1 transition-all duration-500 border-0">
                  <Link href="/contact">Request Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full h-16 px-10 text-base bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-xl transition-all duration-500">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white border-b border-slate-100 relative z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center gap-6 p-8 rounded-3xl hover:bg-slate-50 transition-colors duration-500">
              <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-display uppercase tracking-wider">Unrivaled Precision</h3>
                <p className="text-slate-500 font-light leading-relaxed">Meticulous attention to every engineering detail.</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-6 p-8 rounded-3xl hover:bg-slate-50 transition-colors duration-500">
              <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                <HomeIcon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-display uppercase tracking-wider">Bespoke Solutions</h3>
                <p className="text-slate-500 font-light leading-relaxed">Tailored environments for distinguished homes.</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-6 p-8 rounded-3xl hover:bg-slate-50 transition-colors duration-500">
              <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                <PhoneCall className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-display uppercase tracking-wider">24/7 Concierge</h3>
                <p className="text-slate-500 font-light leading-relaxed">Immediate response for elite comfort assurance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products/Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Everything You Need for Perfect Indoor Climate
            </h2>
            <p className="text-lg text-muted-foreground">
              We specialize in installing and maintaining the most reliable HVAC equipment for your home or business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Furnaces",
                icon: Thermometer,
                desc: "High-efficiency furnaces to keep your home warm and cozy through the coldest winters.",
                link: "/products"
              },
              {
                title: "Air Conditioners",
                icon: Wind,
                desc: "Powerful cooling systems designed to provide ultimate comfort during hot summer days.",
                link: "/products"
              },
              {
                title: "Renovations & New Builds",
                icon: HomeIcon,
                desc: "Comprehensive HVAC system design and installation for your renovation or new construction.",
                link: "/services"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-display">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {feature.desc}
                </p>
                <Link href={feature.link} className="inline-flex items-center text-primary font-semibold hover:text-primary/80 group/link">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
            Ready to upgrade your home's comfort?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Contact Target Heating and Air Conditioning today to discuss your project, get a free quote, or schedule a service call.
          </p>
          <Button size="lg" variant="secondary" asChild className="rounded-full h-14 px-10 text-base font-bold shadow-xl hover:scale-105 transition-transform duration-300 text-primary">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
