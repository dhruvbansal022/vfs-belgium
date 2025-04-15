
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; 
import { Label } from "@/components/ui/label";

interface UrnFormProps {
  onSubmit: (urn: string) => void;
}

const UrnForm: React.FC<UrnFormProps> = ({ onSubmit }) => {
  const [urn, setUrn] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!urn.trim()) {
      setError('Please enter a valid URN');
      return;
    }
    
    setError('');
    onSubmit(urn);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="urn">URN</Label>
        <Input 
          id="urn"
          type="text"
          value={urn}
          onChange={(e) => setUrn(e.target.value)}
          placeholder="Enter your URN"
          className={error ? "border-red-500" : ""}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
      
      <Button type="submit" className="w-full bg-meta-blue">
        Continue
      </Button>
    </form>
  );
};

export default UrnForm;
