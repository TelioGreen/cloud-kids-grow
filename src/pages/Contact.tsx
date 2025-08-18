import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  FileText,
  MessageSquare,
  Users,
  Baby
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        "2066 Moray Street Ext. 10",
        "Watervalspruit, Alberton",
        "Gauteng, South Africa"
      ],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+27 672 983 094"],
      color: "text-secondary"
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: [
        "Monday - Friday: 7:30 AM - 4:00 PM",
        "Saturday: By appointment",
        "Sunday: Closed"
      ],
      color: "text-accent"
    }
  ];

  const inquiryTypes = [
    {
      icon: Calendar,
      title: "Schedule a Tour",
      description: "Visit our centre and see our facilities in person",
      action: "Book a Tour"
    },
    {
      icon: FileText,
      title: "Request Enrollment Forms",
      description: "Get started with the enrollment process",
      action: "Get Forms"
    },
    {
      icon: Users,
      title: "General Inquiries",
      description: "Ask about our programs, fees, or policies",
      action: "Ask Questions"
    },
    {
      icon: Baby,
      title: "Age-Specific Programs",
      description: "Learn about programs for your child's age group",
      action: "Learn More"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Contact Us
            </Badge>
            <h1 className="text-4xl font-bold mb-6 text-foreground">
              Let's Start Your Child's Journey
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're here to answer your questions, schedule tours, and help you 
              find the perfect early learning experience for your child.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-md transition-shadow">
                <info.icon className={`h-12 w-12 ${info.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Actions */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Can We Help You?</h2>
            <p className="text-lg text-muted-foreground">
              Choose the type of inquiry that best matches your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inquiryTypes.map((type, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <type.icon className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-2">{type.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{type.description}</p>
                <Button size="sm" variant="outline" className="w-full">
                  {type.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            
            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                    <Input 
                      id="parentName" 
                      placeholder="Your full name"
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="+27 XXX XXX XXX"
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="your.email@example.com"
                    className="mt-2"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="childName">Child's Name</Label>
                    <Input 
                      id="childName" 
                      placeholder="Your child's name"
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="childAge">Child's Age</Label>
                    <Input 
                      id="childAge" 
                      placeholder="Age in years/months"
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="inquiryType">Type of Inquiry</Label>
                  <select 
                    id="inquiryType"
                    className="mt-2 w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="">Please select...</option>
                    <option value="tour">Schedule a Tour</option>
                    <option value="enrollment">Enrollment Information</option>
                    <option value="programs">Program Details</option>
                    <option value="fees">Fees & Payment</option>
                    <option value="general">General Questions</option>
                    <option value="employment">Employment Opportunities</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message"
                    placeholder="Please tell us about your inquiry, preferred visit times, or any specific questions you have..."
                    className="mt-2 min-h-[120px]"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" size="lg" className="flex-1">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                  
                  <Button type="button" size="lg" variant="outline" asChild>
                    <a href="tel:+27672983094">
                      <Phone className="h-5 w-5 mr-2" />
                      Call Instead
                    </a>
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Visit Information */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Plan Your Visit</h2>
              <p className="text-lg text-muted-foreground">
                We encourage all prospective families to visit our centre and 
                experience our warm, nurturing environment firsthand.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">What to Expect During Your Visit</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Tour of our safe, child-friendly facilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Meet our caring educators and staff</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Observe children engaged in learning activities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Discussion about your child's specific needs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Review of our programs and policies</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Best Times to Visit</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">Morning Sessions</h4>
                    <p className="text-muted-foreground text-sm">
                      9:00 AM - 11:00 AM: See structured learning activities in action
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-secondary">Outdoor Play</h4>
                    <p className="text-muted-foreground text-sm">
                      11:00 AM - 12:00 PM: Watch children enjoy outdoor activities
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-accent">Creative Time</h4>
                    <p className="text-muted-foreground text-sm">
                      2:00 PM - 3:00 PM: Observe arts, crafts, and creative play
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4">
                  * Tours typically last 30-45 minutes and can be scheduled 
                  Monday through Friday, or by special arrangement.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency & After Hours */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Important Information</h2>
            
            <div className="space-y-4 text-left">
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-muted-foreground text-sm">
                  We aim to respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </Card>
              
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Website Status</h3>
                <p className="text-muted-foreground text-sm">
                  Our website is currently being updated with new features. 
                  For the most current information, please contact us directly.
                </p>
              </Card>
              
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Enrollment Periods</h3>
                <p className="text-muted-foreground text-sm">
                  We accept enrollments throughout the year, subject to availability. 
                  Contact us to check current openings for your child's age group.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Give Your Child the Best Start?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join the Kidz on the Cloud family today. We're excited to meet you 
            and your child and begin this wonderful educational journey together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="h-5 w-5 mr-2" />
              Call Now: +27 672 983 094
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Your Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;