
import React from 'react';

const VfsLogo = () => {
  return (
    <div className="flex items-center">
      <img 
        src="/lovable-uploads/9af7edee-16ef-4d1f-8085-866e5b83b3c3.png" 
        alt="VFS Global Logo" 
        className="h-16 w-auto" 
        onError={(e) => {
          console.log("Logo failed to load");
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
};

export default VfsLogo;
