import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, Calendar, Users, MapPin, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              About Our Centre
            </Badge>
            <h1 className="text-4xl font-bold mb-6 text-foreground">
              Building Bright Futures Since 2021
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Kidz on the Cloud Early Learning Centre is a registered non-profit 
              organization dedicated to providing exceptional early childhood education 
              in Alberton, Gauteng, South Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Legal & Operational Background */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Foundation</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Building className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Non-Profit Organization</h3>
                    <p className="text-muted-foreground">
                      We are a registered NPO committed to making quality early 
                      education accessible to families in our community.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold">Incorporated June 29, 2021</h3>
                    <p className="text-muted-foreground">
                      Founded with a vision to provide nurturing, play-based 
                      learning experiences for young children in our community.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold">Community Focused</h3>
                    <p className="text-muted-foreground">
                      Serving approximately 45 learners with 5 dedicated educators 
                      and support staff members.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-card to-primary/5">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Location</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">2066 Moray Street Ext. 10</p>
                    <p className="text-muted-foreground">Watervalspruit, Alberton</p>
                    <p className="text-muted-foreground">Gauteng, South Africa</p>
                  </div>
                </div>
                <Button className="w-full mt-6" asChild>
                  <Link to="/contact">Get Directions</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary leaders who founded Kidz on the Cloud with a 
              passion for early childhood development and community service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                AK
              </div>
              <h3 className="text-xl font-bold mb-2">Andile Khumalo</h3>
              <p className="text-primary font-medium mb-3">Co-Founder</p>
              <p className="text-muted-foreground">
                Passionate advocate for early childhood education with extensive 
                experience in educational leadership and community development.
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary/80 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                NK
              </div>
              <h3 className="text-xl font-bold mb-2">Nkateko Mandy Khoza</h3>
              <p className="text-secondary font-medium mb-3">Co-Founder</p>
              <p className="text-muted-foreground">
                Dedicated early childhood educator with a vision for creating 
                nurturing learning environments that foster holistic development.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Drives Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do, from curriculum design 
              to daily interactions with children and families.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Heart className="h-16 w-16 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Compassionate Care</h3>
              <p className="text-muted-foreground">
                Every child deserves to feel loved, safe, and valued. We create 
                warm, nurturing environments where children thrive.
              </p>
            </div>
            
            <div className="text-center">
              <Award className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Educational Excellence</h3>
              <p className="text-muted-foreground">
                We maintain high standards in our programs while keeping learning 
                fun, engaging, and developmentally appropriate.
              </p>
            </div>
            
            <div className="text-center">
              <Users className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Community Partnership</h3>
              <p className="text-muted-foreground">
                We work closely with families and the broader community to support 
                each child's unique journey and potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Learn More About Our Centre?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We'd love to welcome you to our Kidz on the Cloud family. Contact us 
            today to schedule a visit or learn more about our programs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/programs">View Our Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;