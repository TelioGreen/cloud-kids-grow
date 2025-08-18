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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float"></div>
        <div className="absolute top-40 left-1/4 w-8 h-8 bg-secondary/30 rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-primary/20 rounded-full animate-wiggle"></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-3xl text-white animate-fade-in-up">
            <Badge className="mb-6 bg-accent/90 text-accent-foreground rounded-full px-6 py-2 text-lg font-semibold shadow-lg">
              Est. 2021 • Non-Profit Organization
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Welcome to <span className="text-accent drop-shadow-lg">Kidz on the Cloud</span> Early Learning Centre
            </h1>
            <p className="text-2xl mb-10 text-white/95 leading-relaxed">
              Where young minds soar! We nurture children aged 0-6 years through 
              play-based learning, creativity, and holistic development in the heart 
              of Alberton, Gauteng.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="btn-playful text-lg px-8 py-4 shadow-xl" asChild>
                <Link to="/programs">Explore Our Programs</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/15 backdrop-blur-sm text-white border-2 border-white/40 hover:bg-white hover:text-primary text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105" asChild>
                <Link to="/contact">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-br from-card via-primary/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-5xl font-bold mb-8 text-gradient">
              Our Mission & Values
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Kidz on the Cloud, we believe every child is unique and deserves 
              a nurturing environment where they can grow, learn, and discover 
              their potential through play, exploration, and meaningful connections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="card-playful p-8 text-center group">
              <Heart className="h-16 w-16 text-secondary mx-auto mb-6 transition-all duration-300 group-hover:scale-110 animate-bounce-gentle" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Nurturing Care</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We provide a safe, loving environment where every child feels 
                valued and supported in their individual journey.
              </p>
            </Card>
            
            <Card className="card-playful p-8 text-center group">
              <Star className="h-16 w-16 text-accent mx-auto mb-6 transition-all duration-300 group-hover:scale-110 animate-wiggle" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Excellence in Learning</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our play-based curriculum covers all developmental areas from 
                language arts to computer skills and emotional intelligence.
              </p>
            </Card>
            
            <Card className="card-playful p-8 text-center group">
              <Users className="h-16 w-16 text-primary mx-auto mb-6 transition-all duration-300 group-hover:scale-110 animate-float" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Community Focus</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                As a non-profit organization, we're committed to serving our 
                community and making quality early education accessible.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-gradient-playful relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-waves"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="group">
              <div className="text-6xl font-bold text-white mb-4 transition-all duration-300 group-hover:scale-110 animate-bounce-gentle">45+</div>
              <div className="text-white/90 text-lg font-medium">Happy Learners</div>
            </div>
            <div className="group">
              <div className="text-6xl font-bold text-white mb-4 transition-all duration-300 group-hover:scale-110 animate-float">5</div>
              <div className="text-white/90 text-lg font-medium">Dedicated Educators</div>
            </div>
            <div className="group">
              <div className="text-6xl font-bold text-white mb-4 transition-all duration-300 group-hover:scale-110 animate-wiggle">3+</div>
              <div className="text-white/90 text-lg font-medium">Years of Excellence</div>
            </div>
            <div className="group">
              <div className="text-6xl font-bold text-white mb-4 transition-all duration-300 group-hover:scale-110 animate-bounce-gentle">0-6</div>
              <div className="text-white/90 text-lg font-medium">Age Groups Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/15 rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-wiggle"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8 drop-shadow-lg">
            Ready to Give Your Child the Best Start?
          </h2>
          <p className="text-2xl mb-12 text-white/95 max-w-3xl mx-auto leading-relaxed">
            Join our loving community of families in Alberton. Contact us today 
            to learn more about our programs or schedule a visit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <div className="flex items-center gap-3 text-white/95 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Phone className="h-6 w-6" />
              <span className="font-semibold text-lg">+27 672 983 094</span>
            </div>
            <div className="flex items-center gap-3 text-white/95 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <MapPin className="h-6 w-6" />
              <span className="text-lg">Watervalspruit, Alberton</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="btn-playful bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 shadow-xl" asChild>
              <Link to="/contact">
                <Calendar className="h-6 w-6 mr-3" />
                Schedule a Tour
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/15 backdrop-blur-sm text-white border-2 border-white/40 hover:bg-white hover:text-primary text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105" asChild>
              <Link to="/fees">View Fees & Registration</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;