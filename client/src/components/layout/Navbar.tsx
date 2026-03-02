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
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:scale-105 transition-transform">
              <ThermometerSun className="h-6 w-6" />
            </div>
            <div>
              <span className="block font-display font-bold text-xl leading-none text-foreground tracking-tight">
                Target Heating
              </span>
              <span className="block text-xs font-medium text-muted-foreground uppercase tracking-widest">
                & Air Conditioning
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-primary",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="flex items-center gap-4 ml-4">
              <div className="hidden lg:flex items-center gap-2 text-sm font-semibold text-foreground">
                <div className="bg-accent/10 p-2 rounded-full text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                (780) 465-7044
              </div>
              <Button asChild className="rounded-full shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
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
