import { motion } from "framer-motion";
import { Wrench, Hammer, HardHat, Building2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "new-construction-residential",
      title: "New Construction (Residential)",
      subtitle: "Bespoke Comfort for Custom Homes",
      description: "From high-end custom builds to family estates, we deliver comprehensive HVAC solutions tailored to your unique architectural requirements. We handle everything from initial load calculations to final deployment with surgical precision.",
      points: [
        "Specialized Custom Home Builds",
        "Expert HVAC Design & Engineering",
        "Precise Load Calculations & Sizing",
        "Full Infrastructure & Ductwork Installation",
        "Furnace and AC Deployment",
        "Compliance with latest Energy Codes"
      ],
      icon: HardHat
    },
    {
      id: "new-construction-commercial",
      title: "New Construction (Commercial)",
      subtitle: "Professional Climate Solutions",
      description: "We provide robust, high-performance HVAC infrastructure for commercial developments. Our team ensures your professional space meets rigorous air quality and efficiency standards while maintaining optimal comfort for occupants.",
      points: [
        "Commercial System Design & Engineering",
        "High-Capacity Air Handling Units",
        "Large-Scale Ductwork Systems",
        "Energy Management & Zoning",
        "Professional Ventilation Solutions",
        "Commercial Grade Maintenance Plans"
      ],
      icon: Building2
    },
    {
      id: "renovations",
      title: "Renovations",
      subtitle: "From small to large projects",
      description: "Upgrading your home's HVAC system during a renovation is crucial. We seamlessly integrate modern, efficient heating and cooling solutions into your existing structure.",
      points: [
        "Basement development HVAC routing",
        "System retrofitting and upgrades",
        "Ductwork modification and sealing",
        "Smart thermostat integration"
      ],
      icon: Wrench
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-950 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-cyan-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Expertise</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight">
              Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-cyan-400">Craftsmanship</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              From delicate architectural retrofits to massive new builds, we execute with surgical precision.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-20">
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              {/* Visual Element */}
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl relative flex items-center justify-center group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 z-0"></div>

                  {/* Abstract representation instead of stock image */}
                  <div className="relative z-10 p-12 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white transform group-hover:scale-105 transition-transform duration-500">
                    <service.icon className="w-32 h-32 text-primary opacity-80" />
                  </div>

                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center justify-center p-4 bg-primary/10 text-primary rounded-2xl mb-6 shadow-sm">
                  <service.icon className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">{service.title}</h2>
                  <p className="text-xl text-primary font-medium mt-2">{service.subtitle}</p>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pt-4">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0"></div>
                      <span className="text-foreground font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
