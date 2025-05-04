
import React, { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Form submission logic - in a real implementation, this would send data to info@vanraksh.in
    // For now we simulate the form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting Vanraksh AI Solutions. We'll get back to you shortly.",
      });
      setFormData({ name: "", email: "", organization: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto w-fit">Contact Us</h2>
          <p className="max-w-3xl mx-auto text-gray-600 mt-4 text-lg">
            Interested in our forest surveillance solutions? Get in touch with our team to discuss how we can help protect your forest areas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-forest-700">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="organization" className="block text-gray-700 mb-2">Organization</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-3 flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-forest-700">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-forest-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-forest-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91 9888227848</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-forest-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-forest-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@vanraksh.in</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-forest-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-forest-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Location</h4>
                    <p className="text-gray-600">Mohali, Punjab, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-forest-600 text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Partner with Us</h3>
              <p className="mb-4 opacity-90">
                If you are an organization looking to make a difference in conservation, a forest officer managing sensitive zones, or a researcher exploring ecosystem changes, Vanraksh AI Solutions invites you to be part of a smarter, greener future.
              </p>
              <p className="font-medium">
                Let's protect our forests—with minds in the cloud and sensors in the trees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
