import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Thermometer, Wind, Home as HomeIcon, CheckCircle2, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/20 z-10" />
          <img 
            src="/images/truck.jpg" 
            alt="Target Heating and Air Conditioning Truck" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
                Edmonton's Premier HVAC Experts
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6 text-balance">
                Total Comfort For Your Home.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                Target Heating and Air Conditioning provides top-tier furnaces, AC units, and renovations. From small projects to new construction, we build comfort from start to finish.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="rounded-full h-14 px-8 text-base shadow-lg shadow-primary/30 hover:-translate-y-1 transition-all duration-300">
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full h-14 px-8 text-base bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white backdrop-blur-md transition-all duration-300">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b border-border relative z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="flex items-center gap-4 md:px-6 py-4 md:py-0">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Reliable Service</h3>
                <p className="text-sm text-muted-foreground">Expert technicians you can trust</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:px-6 py-4 md:py-0">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <HomeIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Complete Solutions</h3>
                <p className="text-sm text-muted-foreground">Renovations & New Construction</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:px-6 py-4 md:py-0">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <PhoneCall className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Always Available</h3>
                <p className="text-sm text-muted-foreground">(780) 465-7044</p>
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
