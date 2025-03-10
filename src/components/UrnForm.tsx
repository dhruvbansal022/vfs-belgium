
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "@/components/ui/use-toast";

const UrnForm = () => {
  const [urn, setUrn] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urn.trim()) {
      // Show a toast notification
      toast({
        title: "Verification initiated",
        description: "Redirecting to verification page...",
      });
      
      // Navigate to the verification result page
      navigate('/verification-result');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col w-full gap-3">
        <input
          type="text"
          placeholder="Enter your URN"
          value={urn}
          onChange={(e) => setUrn(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-vfs-blue"
          required
        />
        <button
          type="submit"
          className="w-full bg-vfs-blue text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
        >
          Verify Now
        </button>
      </div>
    </form>
  );
};

export default UrnForm;
