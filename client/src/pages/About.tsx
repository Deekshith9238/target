import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, Award } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-foreground/10 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              About Target Heating
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto font-medium">
              Your Reliable Heating and Air Conditioning Partner
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Who We Are</h2>
            <div className="prose prose-lg prose-slate max-w-none text-muted-foreground leading-relaxed">
              <p>
                At Target Heating and Air Conditioning, we believe that your home should be your sanctuary—comfortable, safe, and perfectly climate-controlled all year round. 
              </p>
              <p>
                Based in the heart of the community, we have built our reputation on a foundation of trust, technical excellence, and unwavering commitment to customer satisfaction. Whether you're facing a freezing winter night or a sweltering summer day, our team is equipped to ensure your HVAC systems are functioning flawlessly.
              </p>
              <p>
                We don't just install equipment; we design complete comfort solutions tailored to the unique layout of your home and your family's specific needs.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Reliability",
                desc: "We show up when we say we will, and we do the job right the first time. Your comfort can't wait."
              },
              {
                icon: Award,
                title: "Quality Craftsmanship",
                desc: "We use premium materials and rigorous installation standards that exceed industry codes."
              },
              {
                icon: Users,
                title: "Customer First",
                desc: "Transparent pricing, honest advice, and friendly service from professionals who respect your home."
              },
              {
                icon: Target,
                title: "Targeted Solutions",
                desc: "No cookie-cutter approaches. We evaluate your specific space to provide the most efficient system."
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-white p-8 rounded-2xl shadow-md shadow-slate-200/40 border border-slate-100 flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-display text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
