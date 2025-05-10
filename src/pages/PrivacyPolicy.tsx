
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    // Set the document title when component mounts
    document.title = "Privacy Policy | Vanraksh AI";
    
    // Reset title when component unmounts
    return () => {
      document.title = "Vanraksh AI";
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-forest-800">Privacy Policy</h1>
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <p className="mb-4 text-gray-700">Last Updated: May 4, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-forest-700">Introduction</h2>
              <p className="mb-4 text-gray-700">
                At Vanraksh AI Solutions ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-forest-700">Information We Collect</h2>
              <p className="mb-4 text-gray-700">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>Identity Data includes first name, last name, username or similar identifier.</li>
                <li>Contact Data includes email address and telephone numbers.</li>
                <li>Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                <li>Usage Data includes information about how you use our website and services.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-forest-700">How We Use Your Information</h2>
              <p className="mb-4 text-gray-700">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>To register you as a new customer.</li>
                <li>To process and deliver your order.</li>
                <li>To manage our relationship with you.</li>
                <li>To improve our website, products/services, marketing or customer relationships.</li>
                <li>To recommend products or services which may be of interest to you.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-forest-700">Data Security</h2>
              <p className="mb-4 text-gray-700">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-forest-700">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@vanraksh.ai.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
