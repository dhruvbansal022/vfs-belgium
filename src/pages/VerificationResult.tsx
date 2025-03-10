
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import VfsLogo from '../components/VfsLogo';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

const VerificationResult = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [urn, setUrn] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urnParam = params.get('urn');
    
    if (urnParam) {
      setUrn(urnParam);
      
      // Simulate verification process
      const timer = setTimeout(() => {
        setLoading(false);
        // For demo purposes, URNs starting with "A" will succeed, others will fail
        setSuccess(urnParam.toUpperCase().startsWith('A'));
      }, 2000);
      
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <header className="border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <VfsLogo />
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Bank Account Verification
          </h1>
          
          <div className="bg-white shadow-md rounded-lg p-8">
            {!urn ? (
              <div className="text-center">
                <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h2 className="text-xl font-medium text-gray-800 mb-4">Missing URN</h2>
                <p className="text-gray-600 mb-6">
                  No reference number was provided. Please return to the verification page.
                </p>
                <Link 
                  to="/" 
                  className="bg-vfs-blue text-white px-6 py-2 rounded-md font-medium inline-block"
                >
                  Back to Verification
                </Link>
              </div>
            ) : loading ? (
              <div className="text-center py-10">
                <Loader2 className="h-16 w-16 text-vfs-blue mx-auto mb-4 animate-spin" />
                <h2 className="text-xl font-medium text-gray-800 mb-4">Verifying Your Bank Account</h2>
                <p className="text-gray-600">
                  Please wait while we verify your bank account with reference number {urn}...
                </p>
              </div>
            ) : success ? (
              <div className="text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-xl font-medium text-gray-800 mb-4">Verification Successful</h2>
                <p className="text-gray-600 mb-6">
                  Your bank account with reference number {urn} has been successfully verified.
                  Your visa application process can now proceed.
                </p>
                <Link 
                  to="/" 
                  className="bg-vfs-blue text-white px-6 py-2 rounded-md font-medium inline-block"
                >
                  Back to Home
                </Link>
              </div>
            ) : (
              <div className="text-center">
                <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h2 className="text-xl font-medium text-gray-800 mb-4">Verification Failed</h2>
                <p className="text-gray-600 mb-6">
                  We couldn't verify the bank account with reference number {urn}.
                  Please check your information and try again.
                </p>
                <Link 
                  to="/" 
                  className="bg-vfs-blue text-white px-6 py-2 rounded-md font-medium inline-block"
                >
                  Try Again
                </Link>
              </div>
            )}
          </div>
          
          <p className="text-gray-500 text-sm text-center mt-8">
            For assistance, please contact VFS Global support at support@vfsglobal.com
          </p>
        </div>
      </main>
    </div>
  );
};

export default VerificationResult;
