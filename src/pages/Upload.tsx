import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Upload as UploadIcon } from "lucide-react";
import VfsLogo from "../components/VfsLogo";
import UrnForm from "../components/UrnForm";
import FaqAccordion from "../components/FaqAccordion";

const Upload = () => {
  const [searchParams] = useSearchParams();
  const [showWidget, setShowWidget] = useState(false);
  const [urn, setUrn] = useState("");
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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

  const handleFileSelect = (file: File) => {
    if (file.type === "application/pdf") {
      setSelectedFile(file);
      console.log("File selected:", file.name);
    } else {
      alert("Please select a PDF file");
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".pdf";
    input.onchange = (e) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        handleFileSelect(target.files[0]);
      }
    };
    input.click();
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
                  <h2 className="font-medium text-gray-800 mb-6 text-lg">Upload Bank Statement</h2>
                  
                  <div 
                    className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all cursor-pointer ${
                      isDragOver 
                        ? "border-blue-400 bg-blue-50" 
                        : selectedFile 
                          ? "border-green-400 bg-green-50" 
                          : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={handleClick}
                  >
                    <div className="flex flex-col items-center space-y-4">
                      <UploadIcon 
                        size={40} 
                        className={`${
                          isDragOver 
                            ? "text-blue-500" 
                            : selectedFile 
                              ? "text-green-500" 
                              : "text-gray-400"
                        }`} 
                      />
                      
                      {selectedFile ? (
                        <div className="space-y-2">
                          <p className="font-medium text-green-700">{selectedFile.name}</p>
                          <p className="text-sm text-green-600">File ready for upload</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <p className="font-medium text-gray-700">
                            {isDragOver ? "Drop your PDF here" : "Drop PDF here or click to browse"}
                          </p>
                          <p className="text-sm text-gray-500">PDF files only, max 10MB</p>
                        </div>
                      )}
                    </div>
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