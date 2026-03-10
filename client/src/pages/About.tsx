import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, Award } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-slate-950 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-cyan-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Heritage</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-red-400">Excellence</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              Dedicated to the art of climate control since our inception.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white rounded-[2rem] p-10 md:p-16 shadow-2xl shadow-blue-900/5 border border-slate-100 mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-display font-bold text-slate-900 mb-8 tracking-tight">A Legacy of Trust</h2>
                <div className="space-y-6 text-slate-600 leading-relaxed font-light text-lg">
                  <p>
                    At Target Heating and Air Conditioning, we define luxury through comfort. Your home is a masterpiece, and we provide the invisible engineering that makes it livable.
                  </p>
                  <p>
                    Our approach integrates technical mastery with aesthetic sensitivity. We don't just install systems; we harmonize technology with your living space.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-red-500/5" />
                  <Target className="w-32 h-32 text-cyan-500 opacity-20" />
                </div>
              </div>
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
