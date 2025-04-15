
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "@/components/ui/use-toast";

const UrnForm = () => {
  const [urn, setUrn] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urn.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid URN",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Show a toast notification
    toast({
      title: "Verification initiated",
      description: "Redirecting to verification page..."
    });

    // Add a slight delay before navigation to ensure toast is visible
    setTimeout(() => {
      // Store the URN in session storage so it can be accessed on the verification page
      sessionStorage.setItem('userUrn', urn);

      // Navigate to the verification result page
      navigate('/verification-result');
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col w-full gap-4">
        <input 
          type="text" 
          placeholder="Enter your URN" 
          value={urn} 
          onChange={e => setUrn(e.target.value)} 
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-meta-blue focus:border-transparent" 
          required 
          disabled={isSubmitting} 
        />
        <button 
          type="submit" 
          disabled={isSubmitting} 
          className="w-full bg-meta-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium text-base"
        >
          {isSubmitting ? 'Please wait...' : 'Verify Now'}
        </button>
      </div>
    </form>
  );
};

export default UrnForm;
