
import React from 'react';
import { Link } from 'react-router-dom';
import VfsLogo from '../components/VfsLogo';

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
            <button
              className="w-full max-w-md bg-[#0e3b7b] text-white px-6 py-4 rounded-md font-medium hover:bg-opacity-90 transition-colors"
            >
              Bank account verification
            </button>
            
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
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Frequently asked questions</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex items-center">
                  <div className="text-[#0e3b7b] mr-3 text-2xl">+</div>
                  <h3 className="text-lg font-medium text-gray-800">What information will be shared?</h3>
                </div>
              </div>
              
              <div className="border-b pb-4">
                <div className="flex items-center">
                  <div className="text-[#0e3b7b] mr-3 text-2xl">+</div>
                  <h3 className="text-lg font-medium text-gray-800">How does my password remain private?</h3>
                </div>
              </div>
              
              <div className="border-b pb-4">
                <div className="flex items-center">
                  <div className="text-[#0e3b7b] mr-3 text-2xl">+</div>
                  <h3 className="text-lg font-medium text-gray-800">Why should I trust DIRO?</h3>
                </div>
              </div>
              
              <div className="border-b pb-4">
                <div className="flex items-center">
                  <div className="text-[#0e3b7b] mr-3 text-2xl">+</div>
                  <h3 className="text-lg font-medium text-gray-800">How DIRO creates a new global standard?</h3>
                </div>
              </div>
            </div>
            
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
