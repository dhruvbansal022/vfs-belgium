import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import VfsLogo from "../components/VfsLogo";
import UrnForm from "../components/UrnForm";
import FaqAccordion from "../components/FaqAccordion";

const Upload = () => {
  const [searchParams] = useSearchParams();
  const [showWidget, setShowWidget] = useState(false);
  const [urn, setUrn] = useState("");

  useEffect(() => {
    // Check for URN parameter in URL
    const urlUrn = searchParams.get("URN");
    if (urlUrn && urlUrn.trim()) {
      console.log("URN from URL:", urlUrn);
      sessionStorage.setItem("userUrn", urlUrn);
      setUrn(urlUrn);
      setShowWidget(true);
    }
  }, [searchParams]);

  const handleUrnSubmit = (submittedUrn: string) => {
    console.log("URN submitted:", submittedUrn);
    sessionStorage.setItem("userUrn", submittedUrn);
    setUrn(submittedUrn);
    setShowWidget(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 py-4 bg-white">
        <div className="container mx-auto px-4">
          <VfsLogo />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h1 className="font-semibold text-gray-800 mb-4 text-xl">Fetch original bank statements for seamless visa processing for Belgium</h1>

            <p className="text-gray-600 mb-6 text-justify leading-relaxed">
              To ensure a seamless Visa processing experience and reduce the risk of financial discrepancies, 
              VFS Global requires applicants to verify their bank account statement. This step guarantees 
              timely and accurate financial transactions related to your Visa application.
            </p>

            <p className="text-gray-600 mb-6 text-justify leading-relaxed">
              VFS Global partners with{" "}
              <a href="#" className="text-vfs-blue hover:underline font-medium">
                DIRO
              </a>{" "}
              for this process, the leading provider of fetching original document from any online source. Trusted by various governments, F500 and 
              Tier 1 global banks. Visit DIRO{" "}
              <a href="#" className="text-vfs-blue hover:underline font-medium">
                Trust Center
              </a>
              .
            </p>

            <div className="mt-auto">
              <p className="text-gray-600 mb-4">
                Learn more about DIRO's{" "}
                <a href="#" className="text-vfs-blue hover:underline font-medium">
                  bank
                </a>{" "}
                verification solutions.
              </p>

              <div className="flex gap-4">
                <a href="#" className="text-vfs-blue hover:underline font-medium">
                  Terms of Use
                </a>
                <a href="#" className="text-vfs-blue hover:underline font-medium">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
              {!showWidget ? (
                <>
                  <h2 className="font-medium text-gray-800 mb-4 text-lg">Enter your URN</h2>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    Please enter your Unique Reference Number (URN) to proceed with the verification process.
                  </p>
                  <UrnForm onSubmit={handleUrnSubmit} />
                </>
              ) : (
                <>
                  <h2 className="font-medium text-gray-800 mb-4 text-lg">Upload your bank statement</h2>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">Drag and drop your PDF file or click to browse.</p>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
                    <div className="text-gray-500">
                      <svg className="mx-auto h-12 w-12 mb-4" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="text-sm">Drop your PDF here or click to upload</p>
                      <p className="text-xs text-gray-400 mt-1">PDF files only</p>
                    </div>
                    <input type="file" accept=".pdf" className="hidden" />
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

export default Upload;