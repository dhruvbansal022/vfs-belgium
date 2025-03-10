import React from 'react';
import VfsLogo from '../components/VfsLogo';
import UrnForm from '../components/UrnForm';
import FaqAccordion from '../components/FaqAccordion';
const Index = () => {
  return <div className="min-h-screen">
      <header className="border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <VfsLogo />
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h1 className="font-semibold text-gray-800 mb-4 text-xl">
              Bank account verification for seamless Visa processing in Malta
            </h1>
            
            <p className="text-gray-600 mb-6">
              To ensure a seamless Visa processing experience and reduce the risk of financial discrepancies, 
              VFS Global requires applicants to verify their bank account statement. This step guarantees 
              timely and accurate financial transactions related to your Visa application.
            </p>
            
            <p className="text-gray-600 mb-6">
              VFS Global partners with <a href="#" className="text-vfs-lightblue hover:underline">DIRO</a> for this process, 
              the leading provider of bank verification solutions trusted by F500 and Tier 1 global banks. Visit 
              DIRO <a href="#" className="text-vfs-lightblue hover:underline">Trust Center</a>.
            </p>
            
            <div className="mt-auto">
              <p className="text-gray-600">
                Learn more about DIRO's <a href="#" className="text-vfs-lightblue hover:underline">bank</a> verification solutions.
              </p>
              
              <div className="mt-4">
                <a href="#" className="text-vfs-lightblue hover:underline mr-4">Terms of Use</a>
                <a href="#" className="text-vfs-lightblue hover:underline">Privacy Policy</a>
              </div>
            </div>
          </div>
          
          
          
          <div>
            <FaqAccordion />
          </div>
        </div>
      </main>
    </div>;
};
export default Index;