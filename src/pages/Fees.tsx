import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  DollarSign, 
  Calendar, 
  FileText, 
  Phone, 
  CheckCircle, 
  Clock,
  Users,
  GraduationCap
} from "lucide-react";

const Fees = () => {
  const feeOptions = [
    {
      title: "Basic Registration",
      price: "R300",
      period: "One-time",
      icon: FileText,
      color: "text-accent",
      features: [
        "Application processing",
        "Initial assessment",
        "Welcome pack",
        "Basic orientation session"
      ]
    },
    {
      title: "Standard Registration",
      price: "R500",
      period: "One-time",
      icon: Users,
      color: "text-primary",
      popular: true,
      features: [
        "Everything in Basic",
        "Extended orientation program",
        "Parent handbook",
        "Individual consultation",
        "Progress tracking setup"
      ]
    },
    {
      title: "Premium Registration",
      price: "R800",
      period: "One-time",
      icon: GraduationCap,
      color: "text-secondary",
      features: [
        "Everything in Standard",
        "Comprehensive developmental assessment",
        "Personalized learning plan",
        "Priority placement",
        "Extended support sessions"
      ]
    }
  ];

  const paymentOptions = [
    {
      title: "Monthly Payment",
      description: "Pay month by month for maximum flexibility",
      icon: Calendar,
      benefits: ["No long-term commitment", "Easy budget management", "Flexible scheduling"]
    },
    {
      title: "Annual Payment",
      description: "Pay for the full year and save",
      icon: DollarSign,
      benefits: ["Discounted rates", "Guaranteed placement", "No monthly processing"]
    }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Fees & Registration
            </Badge>
            <h1 className="text-4xl font-bold mb-6 text-foreground">
              Affordable Quality Education
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              As a non-profit organization, we're committed to making quality 
              early childhood education accessible to families in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Fees */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Registration Options</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the registration package that best fits your family's needs. 
              All packages include our commitment to your child's development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {feeOptions.map((option, index) => (
              <Card key={index} className={`p-6 relative hover:shadow-lg transition-shadow ${option.popular ? 'border-primary border-2' : ''}`}>
                {option.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-6">
                  <option.icon className={`h-12 w-12 ${option.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <div className="text-3xl font-bold text-primary mb-1">{option.price}</div>
                  <p className="text-muted-foreground">{option.period}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={option.popular ? "default" : "outline"}
                  asChild
                >
                  <Link to="/contact">Choose This Option</Link>
                </Button>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              * Registration fees are separate from monthly tuition fees. 
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link to="/contact">Contact us for current tuition rates.</Link>
              </Button>
            </p>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Payment Options</h2>
            <p className="text-lg text-muted-foreground">
              We offer flexible payment arrangements to suit different family situations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {paymentOptions.map((option, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <option.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">{option.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">{option.description}</p>
                
                <ul className="space-y-2">
                  {option.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Enrollment Process</h2>
            <p className="text-lg text-muted-foreground">
              Getting started at Kidz on the Cloud is simple and straightforward.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold mb-2">Contact Us</h3>
                <p className="text-muted-foreground text-sm">
                  Call or visit to discuss your needs and schedule a tour.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold mb-2">Visit Our Centre</h3>
                <p className="text-muted-foreground text-sm">
                  Tour our facilities and meet our caring staff team.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">Complete Application</h3>
                <p className="text-muted-foreground text-sm">
                  Fill out enrollment forms and choose your registration package.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold mb-2">Start Learning</h3>
                <p className="text-muted-foreground text-sm">
                  Begin your child's exciting educational journey with us!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Assistance */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Financial Assistance Available</h2>
            <p className="text-lg text-muted-foreground mb-8">
              As a non-profit organization, we understand that every family's financial 
              situation is different. We offer various assistance programs to help make 
              quality early education accessible to all children in our community.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Payment Plans</h3>
                <p className="text-muted-foreground text-sm">
                  Flexible payment arrangements to spread costs over time.
                </p>
              </Card>
              
              <Card className="p-6">
                <Users className="h-8 w-8 text-secondary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Sibling Discounts</h3>
                <p className="text-muted-foreground text-sm">
                  Special rates for families with multiple children enrolled.
                </p>
              </Card>
            </div>
            
            <Button size="lg" asChild>
              <Link to="/contact">
                <Phone className="h-5 w-5 mr-2" />
                Discuss Your Needs
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact for Current Rates */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us today to discuss current tuition rates, available spaces, 
            and to schedule a visit to our beautiful learning centre.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-white/90">
              <Phone className="h-5 w-5" />
              <span className="font-medium text-lg">+27 672 983 094</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fees;