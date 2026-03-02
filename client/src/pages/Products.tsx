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
    <div className="pt-24 pb-20 min-h-screen bg-slate-50/50">
      {/* Header */}
      <div className="bg-white border-b border-border py-16 mb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Target Heating and Air Conditioning provides premium equipment for all your climate control needs. 
              We stand behind the products we install.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <Card className="h-full border border-border/50 shadow-lg shadow-black/5 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group overflow-hidden">
                <CardHeader className={`${product.color} pb-8 pt-8`}>
                  <div className="flex items-center justify-between mb-4">
                    <product.icon className={`h-12 w-12 ${product.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <CardTitle className="text-2xl font-display text-foreground">{product.title}</CardTitle>
                  <CardDescription className="text-base font-medium mt-2 text-foreground/70">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-8">
                  <p className="text-muted-foreground leading-relaxed">
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
