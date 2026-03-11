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
                <h2 className="text-4xl font-display font-bold text-slate-900 mb-8 tracking-tight">Engineered Comfort with Precision</h2>
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

          {/* 15 Year Timeline Section */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">15 Years of Precision</h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
                A trajectory defined by bespoke engineering and unwavering dedication to the art of climate control.
              </p>
            </motion.div>

            <div className="relative border-l-2 border-slate-100 ml-4 md:ml-0 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-px md:before:bg-slate-100 space-y-12">
              {[
                {
                  year: "2011",
                  title: "Foundation of Quality",
                  desc: "Started with a vision for high-performance heating and cooling systems built to last.",
                  color: "bg-cyan-500",
                  align: "left"
                },
                {
                  year: "2016",
                  title: "Custom Home Specialization",
                  desc: "Pivot to exclusive custom home projects, partnering with top architects and builders for specialized designs.",
                  color: "bg-cyan-400",
                  align: "right"
                },
                {
                  year: "2021",
                  title: "Technical Mastery",
                  desc: "Mastery of advanced load calculations and specialized zone-management for high-complexity properties.",
                  color: "bg-red-500",
                  align: "left"
                },
                {
                  year: "2026",
                  title: "15 Years of Excellence",
                  desc: "Currently leading the industry with 15 years of deep expertise in premium Fire & Ice thermal comfort.",
                  color: "bg-orange-500",
                  align: "right"
                }
              ].map((milestone, idx) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: milestone.align === "left" ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center md:justify-between mb-8 ${milestone.align === "right" ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="hidden md:block w-[45%]" />
                  <div className="absolute left-[-9px] md:left-1/2 md:-ml-2 w-4 h-4 rounded-full bg-white border-2 border-slate-200 z-10" />
                  <div className="w-full md:w-[45%] bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-50 hover:-translate-y-1 transition-transform duration-300">
                    <span className={`inline-block px-4 py-1 rounded-full text-white text-sm font-bold mb-4 ${milestone.color}`}>
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h3>
                    <p className="text-slate-500 font-light leading-relaxed">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

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
