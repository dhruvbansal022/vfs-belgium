import React, { useState } from "react";
import VfsLogo from "../components/VfsLogo";
import UrnForm from "../components/UrnForm";
import FaqAccordion from "../components/FaqAccordion";
import WidgetCapture from "./widgetCapture";

const Index = () => {
  const [showWidget, setShowWidget] = useState(false);
  const [urn, setUrn] = useState("");

  const handleUrnSubmit = (submittedUrn: string) => {
    // Save URN to storage
    sessionStorage.setItem("userUrn", submittedUrn);
    setUrn(submittedUrn);
    setShowWidget(true);
  };

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
            <h1 className="font-semibold text-gray-800 mb-4 text-xl">Business verification</h1>

            <p className="text-gray-600 mb-6 text-justify">
              Meta is committed to creating a safe and trusted environment for businesses to grow. Verifying your business helps strengthen account security, improve platform integrity, and enhance your onboarding experience.
            </p>

            <p className="text-gray-600 mb-6 text-justify">
              Meta partners with{" "}
              <a href="#" className="text-meta-blue hover:underline">
                DIRO
              </a>{" "}
              for this process, the leading provider of verification solutions trusted by F500 companies, banks, and governments worldwide. Visit{" "}
              <a href="#" className="text-meta-blue hover:underline">
                DIRO Trust Center
              </a>
              .
            </p>

            <div className="mt-auto">
              <p className="text-gray-600">
                Learn more about DIRO's{" "}
                <a href="#" className="text-meta-blue hover:underline">
                  bank
                </a>{" "}
                verification solutions.
              </p>

              <div className="mt-4">
                <a href="#" className="text-meta-blue hover:underline mr-4">
                  Terms of Use
                </a>
                <a href="#" className="text-meta-blue hover:underline">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md p-4 sm:p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
              {!showWidget ? (
                <>
                  <h2 className="font-medium text-gray-800 mb-4 text-base sm:text-lg">Enter your URN</h2>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Please enter your Unique Reference Number (URN) to proceed with the verification process.
                  </p>
                  <UrnForm onSubmit={handleUrnSubmit} />
                </>
              ) : (
                <>
                  <h2 className="font-medium text-gray-800 mb-4 text-base sm:text-lg">Select your provider</h2>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Please select your country and enter your provider to proceed with the verification process.
                  </p>
                  <div className="flex flex-col align-center gap-4">
                    <WidgetCapture urn={urn} />
                  </div>
                </>
              )}
            </div>
          </div>

          <div>
            <FaqAccordion />
          </div>
        </div>
      </main>
    </div>
  );
};
export default Index;
