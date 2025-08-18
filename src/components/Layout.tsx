import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Cloud, Phone } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Programs", href: "/programs" },
    { name: "Fees & Registration", href: "/fees" },
    { name: "Meet the Team", href: "/team" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 bg-pattern-waves">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-md border-b border-border/30 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Cloud className="h-10 w-10 text-primary transition-all duration-300 group-hover:scale-110 animate-float" />
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-accent rounded-full animate-bounce-gentle"></div>
                <div className="absolute top-2 left-2 h-2 w-2 bg-secondary/60 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-foreground leading-tight transition-all duration-300 group-hover:text-primary">
                  Kidz on the Cloud
                </span>
                <span className="text-sm text-muted-foreground font-medium">
                  Early Learning Centre
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Contact Button & Mobile Menu */}
            <div className="flex items-center space-x-3">
              <Button
                variant="secondary"
                size="sm"
                className="hidden sm:flex items-center space-x-2 btn-float rounded-full px-6"
                asChild
              >
                <a href="tel:+27672983094">
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">Call Us</span>
                </a>
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="md:hidden rounded-full border-2 hover:border-primary transition-all duration-300">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4 mt-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium transition-colors ${
                          isActive(item.href)
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Button
                      variant="secondary"
                      className="mt-4 justify-start"
                      asChild
                    >
                      <a href="tel:+27672983094">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Us: +27 672 983 094
                      </a>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-card via-card to-primary/5 border-t border-border/30 mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Cloud className="h-8 w-8 text-primary animate-float" />
              <span className="font-heading font-bold text-xl text-gradient">Kidz on the Cloud</span>
              </div>
              <p className="text-muted-foreground">
                Nurturing young minds through play-based learning and holistic development
                in Alberton, Gauteng.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 text-foreground">Quick Links</h3>
              <div className="space-y-3">
                {navigation.slice(0, 4).map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 text-foreground">Contact Info</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>2066 Moray Street Ext. 10</p>
                <p>Watervalspruit, Alberton</p>
                <p>Gauteng, South Africa</p>
                <p className="font-medium text-primary">+27 672 983 094</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/30 mt-12 pt-8 text-center text-muted-foreground">
            <p className="text-sm">© 2024 Kidz on the Cloud Early Learning Centre. A registered non-profit organization.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;