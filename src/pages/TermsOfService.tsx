
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  useEffect(() => {
    // Set the document title when component mounts
    document.title = "Terms of Service | Vanraksh AI";
    
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-forest-800">Terms of Service</h1>
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <p className="mb-4 text-gray-700">Last Updated: May 4, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-forest-700">Introduction</h2>
              <p className="mb-4 text-gray-700">
                Welcome to Vanraksh AI Solutions. These terms and conditions outline the rules and regulations for the use of our website and services.
              </p>
              <p className="mb-4 text-gray-700">
                By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Vanraksh AI Solutions' website if you do not accept all of the terms and conditions stated on this page.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-forest-700">License</h2>
              <p className="mb-4 text-gray-700">
                Unless otherwise stated, Vanraksh AI Solutions and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-forest-700">Restrictions</h2>
              <p className="mb-4 text-gray-700">You are specifically restricted from all of the following:</p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li>Publishing any website material in any other media</li>
                <li>Selling, sublicensing and/or otherwise commercializing any website material</li>
                <li>Publicly performing and/or showing any website material</li>
                <li>Using this website in any way that is or may be damaging to this website</li>
                <li>Using this website in any way that impacts user access to this website</li>
                <li>Using this website contrary to applicable laws and regulations, or in a way that causes, or may cause, harm to the website, or to any person or business entity</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-forest-700">Limitation of Liability</h2>
              <p className="mb-4 text-gray-700">
                In no event shall Vanraksh AI Solutions, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website, whether such liability is under contract.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-forest-700">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about these Terms of Service, please contact us at legal@vanraksh.ai.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
