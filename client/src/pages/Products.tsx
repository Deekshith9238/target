import { motion } from "framer-motion";
import { Thermometer, Wind, CarFront } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Products() {
  const products = [
    {
      id: "furnaces",
      title: "Furnaces",
      description: "Stay warm all winter with our high-efficiency furnace options.",
      details: "We offer top-of-the-line furnaces designed to provide reliable, efficient heating for your home. Our expert installation ensures optimal performance, lower energy bills, and consistent comfort during the harsh winter months.",
      icon: Thermometer,
      color: "bg-orange-50 text-orange-600 border-orange-100",
      iconColor: "text-orange-500"
    },
    {
      id: "ac",
      title: "Air Conditioners",
      description: "Beat the summer heat with powerful, quiet cooling systems.",
      details: "Keep your home cool and comfortable with our range of modern air conditioning units. We provide solutions that are energy-efficient, whisper-quiet, and appropriately sized for your specific living space.",
      icon: Wind,
      color: "bg-blue-50 text-blue-600 border-blue-100",
      iconColor: "text-blue-500"
    },
    {
      id: "garage-heaters",
      title: "Garage Heaters",
      description: "Make your garage usable year-round with targeted heating.",
      details: "Don't let a cold garage limit your space. Our garage heating solutions provide safe, effective warmth so you can work on projects, protect your vehicles, or expand your usable square footage regardless of the temperature outside.",
      icon: CarFront,
      color: "bg-slate-100 text-slate-700 border-slate-200",
      iconColor: "text-slate-600"
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
            <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Curated Systems</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight">
              Elite <span className="text-blue-500">Equipment</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              We select only the most advanced thermal systems, engineered for longevity and peak efficiency.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
            >
              <Card className="h-full border-0 shadow-2xl shadow-blue-900/5 hover:shadow-blue-900/10 transition-all duration-500 group overflow-hidden rounded-[2rem] bg-white">
                <CardHeader className="p-10 pb-0">
                  <div className="h-16 w-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-500">
                    <product.icon className={`h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-500`} />
                  </div>
                  <CardTitle className="text-3xl font-display font-bold text-slate-900 tracking-tight">{product.title}</CardTitle>
                  <CardDescription className="text-lg font-light mt-4 text-slate-500 leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-10 pt-6">
                  <p className="text-slate-600 leading-relaxed font-light italic border-l-2 border-blue-500/20 pl-6">
                    {product.details}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
