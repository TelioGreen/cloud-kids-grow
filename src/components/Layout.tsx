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
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative">
                <Cloud className="h-8 w-8 text-primary" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground leading-tight">
                  Kidz on the Cloud
                </span>
                <span className="text-xs text-muted-foreground">
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
            <div className="flex items-center space-x-2">
              <Button
                variant="secondary"
                size="sm"
                className="hidden sm:flex items-center space-x-1"
                asChild
              >
                <a href="tel:+27672983094">
                  <Phone className="h-4 w-4" />
                  <span>Call Us</span>
                </a>
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="md:hidden">
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
      <footer className="bg-card border-t border-border/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Cloud className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">Kidz on the Cloud</span>
              </div>
              <p className="text-muted-foreground">
                Nurturing young minds through play-based learning and holistic development
                in Alberton, Gauteng.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
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
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>2066 Moray Street Ext. 10</p>
                <p>Watervalspruit, Alberton</p>
                <p>Gauteng, South Africa</p>
                <p className="font-medium text-primary">+27 672 983 094</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-6 text-center text-muted-foreground">
            <p>© 2024 Kidz on the Cloud Early Learning Centre. A registered non-profit organization.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;