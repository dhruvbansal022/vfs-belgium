
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import VfsLogo from '../components/VfsLogo';
import FaqAccordion from '../components/FaqAccordion';

const VerificationResult = () => {
  useEffect(() => {
    // Load the DIRO widget JS script after component mounts
    const script = document.createElement('script');
    script.src = 'https://capturev2.diro.io/directlink/diroWidgetSelectLinkProd.js';
    script.async = true;
    script.onload = () => {
      // Initialize the widget once the script is loaded
      if (window.initializeDiroWidget && document.getElementById('diro-widget-container')) {
        window.initializeDiroWidget(
          document.getElementById('diro-widget-container'),
          {
            targetUrl: "https://verification.diro.io/?buttonid=O.c117bd44-8cfa-42df-99df-c4ad2ba6c6f5-48sB&trackid=",
            allowRedirection: true,
            buttonText: "Start verification",
            openWith: "",
            containerStyles: {
              backgroundColor: "#f0f0f0",
              padding: "20px",
              borderRadius: "10px",
            },
            buttonStyles: {
              fontSize: "16px",
              borderRadius: "12px",
              width: "300px",
            },
          }
        );
      }
    };
    document.body.appendChild(script);

    // Load the DIRO widget CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://capturev2.diro.io/directlink-staging/stylesSelectLink.css';
    document.head.appendChild(link);

    // Cleanup
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <header className="border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <VfsLogo />
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              Bank account verification for seamless Visa processing in Malta
            </h1>
            
            <p className="text-gray-600 mb-6">
              To ensure a seamless Visa processing experience and reduce the risk of financial discrepancies, 
              VFS Global requires applicants to verify their bank account statement. This step guarantees 
              timely and accurate financial transactions related to your Visa application.
            </p>
            
            <p className="text-gray-600 mb-6">
              VFS Global partners with <a href="#" className="text-vfs-blue hover:underline">DIRO</a> for this process, 
              the leading provider of bank verification solutions trusted by F500 and Tier 1 global banks. Visit 
              DIRO <a href="#" className="text-vfs-blue hover:underline">Trust Center</a>.
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Verification Widget */}
            <div className="w-full max-w-md">
              {/* DIRO Widget Container */}
              <div id="diro-widget-container" className="w-full rounded-md overflow-hidden"></div>
            </div>
            
            <button
              className="w-full max-w-md border-2 border-[#0e3b7b] text-[#0e3b7b] px-6 py-4 rounded-md font-medium hover:bg-gray-50 transition-colors"
            >
              Get support
            </button>
            
            <div className="mt-4 flex items-center">
              <span className="text-gray-600 mr-2">Powered by</span>
              <span className="font-semibold">DIRO</span>
            </div>
          </div>
          
          <div>
            <FaqAccordion />
            
            <div className="mt-8">
              <p className="text-gray-600">
                Learn more about DIRO's <a href="#" className="text-[#0e3b7b] hover:underline">bank</a> verification solutions.
              </p>
              
              <div className="mt-4">
                <a href="#" className="text-[#0e3b7b] hover:underline mr-4">Terms of Use</a>
                <a href="#" className="text-[#0e3b7b] hover:underline">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VerificationResult;
