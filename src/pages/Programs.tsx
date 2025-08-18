import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Baby, 
  Users, 
  BookOpen, 
  Calculator, 
  Monitor, 
  Beaker, 
  Music, 
  Palette, 
  Activity, 
  Globe, 
  Shield, 
  Heart 
} from "lucide-react";
import playgroundImage from "@/assets/playground.jpg";

const Programs = () => {
  const ageGroups = [
    {
      title: "Little Clouds",
      ageRange: "0-3 Years",
      icon: Baby,
      color: "text-secondary",
      description: "Gentle introduction to learning through sensory play, music, and movement in a nurturing environment.",
      highlights: [
        "Sensory exploration and development",
        "Basic social interaction skills",
        "Music and movement activities",
        "Safe, loving environment"
      ]
    },
    {
      title: "Growing Clouds",
      ageRange: "4-6 Years",
      icon: Users,
      color: "text-primary",
      description: "Comprehensive pre-school preparation with structured learning and creative exploration.",
      highlights: [
        "School readiness programs",
        "Advanced problem-solving skills",
        "Independent learning activities",
        "Leadership development"
      ]
    }
  ];

  const learningAreas = [
    { name: "Language Arts", icon: BookOpen, color: "text-primary" },
    { name: "Mathematics", icon: Calculator, color: "text-secondary" },
    { name: "Computer Skills", icon: Monitor, color: "text-accent" },
    { name: "Sciences", icon: Beaker, color: "text-primary" },
    { name: "Music", icon: Music, color: "text-secondary" },
    { name: "Arts & Crafts", icon: Palette, color: "text-accent" },
    { name: "Physical Development", icon: Activity, color: "text-primary" },
    { name: "Multicultural Activities", icon: Globe, color: "text-secondary" },
    { name: "Health & Safety", icon: Shield, color: "text-accent" },
    { name: "Social-Emotional Development", icon: Heart, color: "text-primary" }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Our Programs
            </Badge>
            <h1 className="text-4xl font-bold mb-6 text-foreground">
              Comprehensive Learning for Every Age
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our play-based curriculum covers all developmental areas, ensuring 
              each child receives a well-rounded foundation for lifelong learning.
            </p>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Age Groups We Serve</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ageGroups.map((group, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <group.icon className={`h-12 w-12 ${group.color}`} />
                  <div>
                    <h3 className="text-2xl font-bold">{group.title}</h3>
                    <Badge variant="outline" className="mt-1">
                      {group.ageRange}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">{group.description}</p>
                
                <h4 className="font-semibold mb-3">Program Highlights:</h4>
                <ul className="space-y-2">
                  {group.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Areas */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Learning Areas</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive education across multiple domains to ensure 
              holistic development of every child in our care.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {learningAreas.map((area, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
                <area.icon className={`h-8 w-8 ${area.color} mx-auto mb-3`} />
                <h3 className="font-medium text-sm leading-tight">{area.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Play-Based Learning */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Play-Based Learning Approach</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Kidz on the Cloud, we believe that children learn best through play. 
                Our curriculum is designed to make learning natural, enjoyable, and meaningful.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Outdoor Activities</h3>
                    <p className="text-muted-foreground">
                      Fresh air play, nature exploration, and physical development 
                      in our safe outdoor spaces.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Cognitive Development</h3>
                    <p className="text-muted-foreground">
                      Problem-solving activities, creative thinking, and early 
                      STEM concepts through hands-on exploration.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Creative Expression</h3>
                    <p className="text-muted-foreground">
                      Art, music, drama, and imaginative play to foster creativity 
                      and self-expression.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={playgroundImage} 
                alt="Children playing outdoors at Kidz on the Cloud"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule Preview */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">A Typical Day</h2>
            <p className="text-lg text-muted-foreground">
              Our structured yet flexible daily routine ensures balanced learning and fun.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-4 text-primary">Morning Activities</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium">7:30 - 8:30</span>
                      <p className="text-muted-foreground">Arrival & Free Play</p>
                    </div>
                    <div>
                      <span className="font-medium">8:30 - 9:00</span>
                      <p className="text-muted-foreground">Circle Time & Songs</p>
                    </div>
                    <div>
                      <span className="font-medium">9:00 - 10:30</span>
                      <p className="text-muted-foreground">Learning Activities</p>
                    </div>
                    <div>
                      <span className="font-medium">10:30 - 11:00</span>
                      <p className="text-muted-foreground">Snack & Rest</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-4 text-secondary">Afternoon Fun</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium">11:00 - 12:00</span>
                      <p className="text-muted-foreground">Outdoor Play</p>
                    </div>
                    <div>
                      <span className="font-medium">12:00 - 13:00</span>
                      <p className="text-muted-foreground">Lunch Time</p>
                    </div>
                    <div>
                      <span className="font-medium">13:00 - 14:30</span>
                      <p className="text-muted-foreground">Creative Activities</p>
                    </div>
                    <div>
                      <span className="font-medium">14:30 - 16:00</span>
                      <p className="text-muted-foreground">Story Time & Collection</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Enroll Your Child?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Give your child the gift of quality early education in a loving, 
            nurturing environment. Contact us today to learn more!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/fees">View Fees & Registration</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;