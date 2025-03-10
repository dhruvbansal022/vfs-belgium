
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UrnForm = () => {
  const [urn, setUrn] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urn.trim()) {
      // Pass the URN to the verification result page
      navigate(`/verification-result?urn=${encodeURIComponent(urn)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="flex w-full max-w-md">
        <input
          type="text"
          placeholder="URN"
          value={urn}
          onChange={(e) => setUrn(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-vfs-blue"
          required
        />
        <button
          type="submit"
          className="bg-vfs-blue text-white px-6 py-2 rounded-r-md font-medium"
        >
          Go
        </button>
      </div>
    </form>
  );
};

export default UrnForm;
