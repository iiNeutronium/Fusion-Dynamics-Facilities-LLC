import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      content: "2847 Fusion Drive, Tech Valley\nSilicon Valley, CA 94088",
      gradient: "from-electric-blue to-electric-cyan",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-FUSION",
      gradient: "from-electric-cyan to-electric-purple",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@fusiondynamics.com",
      gradient: "from-electric-purple to-electric-blue",
    },
    {
      icon: Clock,
      title: "Support Hours",
      content: "Monday - Friday: 9:00 AM - 6:00 PM PST\nWeekend: 10:00 AM - 4:00 PM PST",
      gradient: "from-electric-blue to-electric-cyan",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-space-gray to-dark-space">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-electric-cyan to-electric-blue bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about fusion energy or our simulation? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                      <p className="text-gray-400 whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-space-gray/50 backdrop-blur-sm border border-electric-blue/20 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-300 mb-2">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-dark-space/50 border border-electric-blue/30 rounded-lg px-4 py-3 text-white focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-300 mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-dark-space/50 border border-electric-blue/30 rounded-lg px-4 py-3 text-white focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-sm font-medium text-gray-300 mb-2">
                  Subject
                </Label>
                <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                  <SelectTrigger className="w-full bg-dark-space/50 border border-electric-blue/30 rounded-lg px-4 py-3 text-white focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="business">Business Partnership</SelectItem>
                    <SelectItem value="research">Research Collaboration</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium text-gray-300 mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-dark-space/50 border border-electric-blue/30 rounded-lg px-4 py-3 text-white focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-electric-blue to-electric-cyan text-white py-3 font-semibold hover:shadow-lg hover:shadow-electric-blue/50 transform hover:scale-105 transition-all duration-300"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
