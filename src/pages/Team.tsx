import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, 
  Heart, 
  GraduationCap, 
  Award, 
  Star,
  Baby,
  BookOpen,
  Palette
} from "lucide-react";
import teamImage from "@/assets/team.jpg";

const Team = () => {
  const teamStats = [
    { number: "5", label: "Dedicated Educators", icon: Users },
    { number: "45+", label: "Happy Learners", icon: Heart },
    { number: "3+", label: "Years Experience", icon: Award },
    { number: "100%", label: "Qualified Staff", icon: GraduationCap }
  ];

  const teamMembers = [
    {
      name: "Andile Khumalo",
      role: "Co-Founder & Director",
      specialization: "Early Childhood Development",
      experience: "10+ years",
      icon: GraduationCap,
      color: "text-primary",
      description: "Passionate advocate for quality early education with extensive experience in educational leadership and community development.",
      qualifications: ["B.Ed Early Childhood Development", "NPO Management Certificate", "Child Psychology Diploma"]
    },
    {
      name: "Nkateko Mandy Khoza",
      role: "Co-Founder & Educational Coordinator",
      specialization: "Play-Based Learning",
      experience: "8+ years",
      icon: Palette,
      color: "text-secondary",
      description: "Creative educator specializing in play-based learning methodologies and holistic child development approaches.",
      qualifications: ["Diploma in Early Childhood Development", "Play Therapy Certificate", "First Aid Certified"]
    },
    {
      name: "Early Years Educator",
      role: "Little Clouds Specialist",
      specialization: "Infant & Toddler Care",
      experience: "5+ years",
      icon: Baby,
      color: "text-accent",
      description: "Gentle, nurturing educator specializing in the unique needs of our youngest learners (0-3 years).",
      qualifications: ["Infant Care Certification", "Montessori Training", "Child Development Studies"]
    },
    {
      name: "Pre-School Teacher",
      role: "Growing Clouds Leader",
      specialization: "School Readiness",
      experience: "6+ years",
      icon: BookOpen,
      color: "text-primary",
      description: "Experienced educator focused on preparing children for their transition to formal schooling through engaging, structured learning.",
      qualifications: ["Teaching Diploma", "CAPS Curriculum Training", "Literacy Specialist Certificate"]
    }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Meet Our Team
            </Badge>
            <h1 className="text-4xl font-bold mb-6 text-foreground">
              Caring Educators, Bright Futures
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our team of 5 dedicated educators and support staff are passionate 
              about nurturing young minds and creating a loving learning environment 
              for approximately 45 learners.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-md transition-shadow">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Loving Team</h2>
              <p className="text-lg text-muted-foreground">
                Every member of our team is committed to providing exceptional care 
                and education for your child.
              </p>
            </div>
            
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src={teamImage} 
                alt="Kidz on the Cloud teaching team"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">United in Our Mission</h3>
                <p className="text-white/90">Creating a nurturing environment where every child can thrive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Team Members</h2>
            <p className="text-lg text-muted-foreground">
              Meet the passionate educators who lead our programs and shape young minds daily.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                      <member.icon className={`h-8 w-8 text-white`} />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-1">{member.role}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {member.specialization}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {member.experience}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{member.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Qualifications:</h4>
                  <ul className="space-y-1">
                    {member.qualifications.map((qual, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Star className="h-3 w-3 text-accent" />
                        <span className="text-sm text-muted-foreground">{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Makes Our Team Special</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our educators are more than just teachers – they're nurturers, 
              guides, and partners in your child's developmental journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Genuine Care</h3>
              <p className="text-muted-foreground">
                Every team member genuinely loves working with children and 
                treats each child as part of their own family.
              </p>
            </div>
            
            <div className="text-center">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Our staff regularly attend training sessions and workshops to 
                stay current with best practices in early childhood education.
              </p>
            </div>
            
            <div className="text-center">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Collaborative Approach</h3>
              <p className="text-muted-foreground">
                We work closely with parents and families to ensure consistency 
                between home and school learning environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Amazing Team</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Are you passionate about early childhood education? We're always 
              looking for caring, qualified educators to join our growing family.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-left">
                <h3 className="font-bold mb-2">What We Offer:</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Supportive work environment</li>
                  <li>• Professional development opportunities</li>
                  <li>• Competitive compensation</li>
                  <li>• Making a real difference</li>
                </ul>
              </div>
              
              <div className="text-left">
                <h3 className="font-bold mb-2">What We Look For:</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Passion for children's development</li>
                  <li>• Relevant qualifications</li>
                  <li>• Patience and creativity</li>
                  <li>• Team collaboration skills</li>
                </ul>
              </div>
            </div>
            
            <Button size="lg" asChild>
              <Link to="/contact">Inquire About Opportunities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Meet Our Team in Person
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            We'd love for you to visit our centre and meet the wonderful educators 
            who will be caring for your child. Schedule a visit today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/programs">View Our Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;