import { motion } from "framer-motion";
import { Wrench, Hammer, HardHat, Ruler } from "lucide-react";

export default function Services() {
  const services = [
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
    },
    {
      id: "new-construction",
      title: "New Construction",
      subtitle: "Your home from start to finish",
      description: "Building a new home? We handle the complete design and installation of your entire HVAC infrastructure, ensuring optimal airflow and comfort from day one.",
      points: [
        "Complete system design & sizing",
        "Full ductwork installation",
        "Furnace and AC deployment",
        "Compliance with latest energy codes"
      ],
      icon: HardHat
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary/5 py-16 mb-16 rounded-b-[3rem]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Professional Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Whether you are updating your current space or building your dream home from the ground up, 
              Target Heating has the expertise to execute your project flawlessly.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
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
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-xl mb-2">
                  {index === 0 ? <Hammer className="h-6 w-6" /> : <Ruler className="h-6 w-6" />}
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">{service.title}</h2>
                  <p className="text-xl text-primary font-medium mt-2">{service.subtitle}</p>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4 pt-4">
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
