import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ThermometerSun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] py-4" : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-blue-600 text-white p-2.5 rounded-xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
              <ThermometerSun className="h-6 w-6" />
            </div>
            <div>
              <span className={cn(
                "block font-display font-bold text-2xl leading-none tracking-tight transition-colors duration-500",
                !scrolled && location === "/" ? "text-white" : "text-slate-900"
              )}>
                Target <span className="text-blue-500 font-extrabold">HVAC</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-bold tracking-wider uppercase transition-all duration-500 hover:text-blue-500 relative group/link",
                  scrolled || location !== "/" ? (location === link.href ? "text-blue-600" : "text-slate-600") : (location === link.href ? "text-blue-400" : "text-slate-300")
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-500 group-hover/link:w-full",
                  location === link.href ? "w-full" : ""
                )} />
              </Link>
            ))}
            
            <Button asChild className="rounded-full h-12 px-8 bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-500/20 transition-all duration-500 hover:-translate-y-1 border-0">
              <Link href="/contact">Inquire Now</Link>
            </Button>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center gap-4">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex items-center gap-2 mb-8 mt-4">
                  <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                    <ThermometerSun className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block font-display font-bold text-xl leading-none text-foreground">
                      Target
                    </span>
                    <span className="block text-xs font-medium text-muted-foreground uppercase">
                      HVAC
                    </span>
                  </div>
                </div>
                <nav className="flex flex-col gap-4">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-lg font-medium transition-colors",
                        location === link.href
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-muted text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="mt-4 pt-4 border-t border-border">
                    <a 
                      href="tel:7804657044" 
                      className="flex items-center gap-3 px-4 py-3 rounded-lg bg-accent/10 text-primary font-semibold"
                    >
                      <Phone className="h-5 w-5" />
                      (780) 465-7044
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
