import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Heart, Star, Users, MapPin, Phone, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-2xl text-white">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Est. 2021 • Non-Profit Organization
            </Badge>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-accent">Kidz on the Cloud</span> Early Learning Centre
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Where young minds soar! We nurture children aged 0-6 years through 
              play-based learning, creativity, and holistic development in the heart 
              of Alberton, Gauteng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/programs">Explore Our Programs</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary" asChild>
                <Link to="/contact">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Our Mission & Values
            </h2>
            <p className="text-lg text-muted-foreground">
              At Kidz on the Cloud, we believe every child is unique and deserves 
              a nurturing environment where they can grow, learn, and discover 
              their potential through play, exploration, and meaningful connections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Nurturing Care</h3>
              <p className="text-muted-foreground">
                We provide a safe, loving environment where every child feels 
                valued and supported in their individual journey.
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Star className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Excellence in Learning</h3>
              <p className="text-muted-foreground">
                Our play-based curriculum covers all developmental areas from 
                language arts to computer skills and emotional intelligence.
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
              <p className="text-muted-foreground">
                As a non-profit organization, we're committed to serving our 
                community and making quality early education accessible.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">45+</div>
              <div className="text-muted-foreground">Happy Learners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">5</div>
              <div className="text-muted-foreground">Dedicated Educators</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">3+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">0-6</div>
              <div className="text-muted-foreground">Age Groups Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Give Your Child the Best Start?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join our loving community of families in Alberton. Contact us today 
            to learn more about our programs or schedule a visit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-white/90">
              <Phone className="h-5 w-5" />
              <span className="font-medium">+27 672 983 094</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="h-5 w-5" />
              <span>Watervalspruit, Alberton</span>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule a Tour
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/fees">View Fees & Registration</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;