
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cookie } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-forest-800">Cookie Policy</h1>
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <div className="mb-6 flex items-center">
              <Cookie className="h-8 w-8 text-forest-600 mr-3" />
              <p className="text-gray-700">Last Updated: May 4, 2025</p>
            </div>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-forest-700">What Are Cookies</h2>
              <p className="mb-4 text-gray-700">
                Cookies are small pieces of data stored on your device (computer or mobile device) when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-forest-700">How We Use Cookies</h2>
              <p className="mb-4 text-gray-700">
                We use cookies for a variety of reasons detailed below:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
                <li><span className="font-semibold">Necessary cookies:</span> These are essential to navigate around the website and use its features.</li>
                <li><span className="font-semibold">Analytics cookies:</span> These help us improve the way our website works by collecting and reporting information on how you use it.</li>
                <li><span className="font-semibold">Functionality cookies:</span> These allow the website to remember choices you make and provide enhanced, personalized features.</li>
                <li><span className="font-semibold">Targeting cookies:</span> These cookies record your visit to our website, the pages you have visited, and the links you have followed.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-forest-700">Controlling Cookies</h2>
              <p className="mb-4 text-gray-700">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-forest-700">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about our Cookie Policy, please contact us at privacy@vanraksh.ai.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
