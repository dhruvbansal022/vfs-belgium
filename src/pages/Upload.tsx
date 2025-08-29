import React, { useState, useEffect, useRef } from "react";
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
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    const isPdfMime = file.type?.toLowerCase().includes("pdf");
    const isPdfExt = /\.pdf$/i.test(file.name);
    const isUnderLimit = file.size <= 10 * 1024 * 1024; // 10MB
    if ((isPdfMime || isPdfExt) && isUnderLimit) {
      setSelectedFile(file);
      console.log("File selected:", file.name, file.type, file.size);
    } else if (!(isPdfMime || isPdfExt)) {
      alert("Please select a PDF file");
    } else {
      alert("File must be 10MB or less");
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
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-4 bg-background">
        <div className="container mx-auto px-4">
          <VfsLogo />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h1 className="font-semibold text-foreground mb-4 text-xl">Fetch original bank statements for seamless visa processing for Belgium</h1>

            <p className="text-muted-foreground mb-6 text-justify leading-relaxed">
              To ensure a seamless Visa processing experience and reduce the risk of financial discrepancies, 
              VFS Global requires applicants to verify their bank account statement. This step guarantees 
              timely and accurate financial transactions related to your Visa application.
            </p>

            <p className="text-muted-foreground mb-6 text-justify leading-relaxed">
              VFS Global partners with{" "}
              <a href="#" className="text-primary hover:underline font-medium">
                DIRO
              </a>{" "}
              for this process, the leading provider of fetching original document from any online source. Trusted by various governments, F500 and 
              Tier 1 global banks. Visit DIRO{" "}
              <a href="#" className="text-primary hover:underline font-medium">
                Trust Center
              </a>
              .
            </p>

            <div className="mt-auto">
              <p className="text-muted-foreground mb-4">
                Learn more about DIRO's{" "}
                <a href="#" className="text-primary hover:underline font-medium">
                  bank
                </a>{" "}
                verification solutions.
              </p>

              <div className="flex gap-4">
                <a href="#" className="text-primary hover:underline font-medium">
                  Terms of Use
                </a>
                <a href="#" className="text-primary hover:underline font-medium">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md p-6 border border-border rounded-xl shadow-sm bg-card">
              {!showWidget ? (
                <>
                  <h2 className="font-medium text-foreground mb-4 text-lg">Enter your URN</h2>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    Please enter your Unique Reference Number (URN) to proceed with the verification process.
                  </p>
                  <UrnForm onSubmit={handleUrnSubmit} />
                </>
              ) : (
                <>
                  <h2 className="font-medium text-foreground mb-6 text-lg">Upload Bank Statement</h2>
                  
                  <div
                    role="button"
                    tabIndex={0}
                    aria-label="Upload PDF by clicking or drag-and-drop"
                    className={`relative rounded-2xl p-12 text-center transition-all cursor-pointer border-2 border-dashed outline-none ${
                      isDragOver
                        ? "ring-2 ring-primary/60 ring-offset-2 border-primary bg-primary/5"
                        : selectedFile
                          ? "border-primary bg-primary/5"
                          : "border-border hover:bg-muted/30 bg-muted/20"
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={handleClick}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleClick();
                      }
                    }}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="application/pdf,.pdf"
                      className="hidden"
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) handleFileSelect(f);
                      }}
                    />
                    <div className="flex flex-col items-center space-y-4">
                      <UploadIcon
                        size={40}
                        className={`${
                          isDragOver || selectedFile ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                      {selectedFile ? (
                        <div className="space-y-1">
                          <p className="font-medium text-foreground">{selectedFile.name}</p>
                          <p className="text-sm text-muted-foreground">PDF ready to upload</p>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <p className="font-medium text-foreground">
                            {isDragOver ? "Drop your PDF here" : "Click to choose or drag a PDF"}
                          </p>
                          <p className="text-sm text-muted-foreground">PDF only, up to 10MB</p>
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