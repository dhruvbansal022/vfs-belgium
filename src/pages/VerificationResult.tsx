
import React from 'react';
import { Link } from 'react-router-dom';
import VfsLogo from '../components/VfsLogo';
import FaqAccordion from '../components/FaqAccordion';

const VerificationResult = () => {
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
              <div 
                id="verification-widget-container"
                className="w-full overflow-hidden rounded-md shadow-md"
                style={{ minHeight: "200px" }}
              >
                <iframe 
                  src="about:blank" 
                  id="verification-iframe"
                  className="w-full h-full border-0"
                  style={{ minHeight: "200px" }}
                />
              </div>
              <script dangerouslySetInnerHTML={{
                __html: `
                  document.addEventListener('DOMContentLoaded', () => {
                    // This would be replaced with the actual widget initialization code
                    const iframe = document.getElementById('verification-iframe');
                    if (iframe && iframe.contentWindow) {
                      iframe.contentWindow.document.open();
                      iframe.contentWindow.document.write('<html><body style="margin:0;padding:20px;font-family:Arial,sans-serif;background:#f9f9f9;"><div style="text-align:center;padding:20px;background:white;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,0.1);"><h3 style="color:#0e3b7b;margin-bottom:15px;">DIRO Verification</h3><p style="margin-bottom:20px;">Select your bank to begin verification</p><select style="width:100%;padding:10px;margin-bottom:15px;border:1px solid #ddd;border-radius:4px;"><option>Select your bank</option><option>Bank of Malta</option><option>HSBC Malta</option><option>BOV</option></select><button style="background:#0e3b7b;color:white;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;width:100%;">Start Verification</button></div></body></html>');
                      iframe.contentWindow.document.close();
                    }
                  });
                `
              }} />
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
