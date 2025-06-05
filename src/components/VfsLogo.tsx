
import React from 'react';

const VfsLogo = () => {
  return (
    <div className="flex items-center">
      <img 
        src="/lovable-uploads/c00817ca-f34c-4012-ae73-31bffcc3241b.png" 
        alt="VFS Global Logo" 
        className="h-6 w-auto" 
        onError={(e) => {
          console.log("Logo failed to load");
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
};

export default VfsLogo;
