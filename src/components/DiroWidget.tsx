import React, { useEffect, useRef } from 'react';

interface DiroWidgetProps {
  urn?: string;
}

const DiroWidget: React.FC<DiroWidgetProps> = ({ urn }) => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const cssLoadedRef = useRef(false);
  const jsLoadedRef = useRef(false);

  useEffect(() => {
    const loadCSS = () => {
      if (cssLoadedRef.current) return;
      
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://smartupload.diro.io/widgets/diro.css';
      document.head.appendChild(link);
      cssLoadedRef.current = true;
    };

    const loadJS = () => {
      if (jsLoadedRef.current) return;
      
      const script = document.createElement('script');
      script.src = 'https://smartupload.diro.io/widgets/diro.js';
      script.async = true;
      document.body.appendChild(script);
      jsLoadedRef.current = true;
    };

    loadCSS();
    loadJS();

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector('script[src="https://smartupload.diro.io/widgets/diro.js"]');
      if (existingScript) {
        existingScript.remove();
        jsLoadedRef.current = false;
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div 
        ref={widgetRef}
        id="reactWidget" 
        data-buttonid="O.c117bd44-8cfa-42df-99df-c4ad2ba6c6f5-h3rO" 
        data-trackid={urn || ""}
        {...({ wrapper: '{ "height": "50px", "width": "300px", "themeColor":"black", "fontFamily":"sans-serif", "fontSizeTitle":"20px", "fontWeightTitle":"600", "buttonHeight":"30px" }' } as any)}
      />
    </div>
  );
};

export default DiroWidget;