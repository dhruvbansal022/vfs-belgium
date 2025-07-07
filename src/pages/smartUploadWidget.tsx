import React, { useEffect, useRef, forwardRef, useImperativeHandle, useState } from "react";

interface WidgetRefMethods {
  updateWidget: (data: any) => void;
  reinitialize: () => void;
}

interface SmartUploadWidgetProps {
  urn?: string;
}

const SmartUploadWidget = forwardRef<WidgetRefMethods, SmartUploadWidgetProps>(({ urn }, ref) => {
  const [isWidgetLoaded, setIsWidgetLoaded] = useState<boolean>(false);
  const [containerKey, setContainerKey] = useState<number>(0);
  const hasInitialized = useRef<boolean>(false);

  useImperativeHandle(ref, () => ({
    updateWidget: (data: any) => {
      // Widget will reinitialize automatically when URN changes
    },
    reinitialize: () => {
      setContainerKey((prev) => prev + 1);
      hasInitialized.current = false;
      setTimeout(() => {
        loadWidget();
      }, 100);
    },
  }));

  const loadWidget = () => {
    if (hasInitialized.current) return;

    // Load CSS if not already loaded
    if (!document.querySelector('link[href="https://smartupload.diro.io/widgets/diro.css"]')) {
      const cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = 'https://smartupload.diro.io/widgets/diro.css';
      document.head.appendChild(cssLink);
    }

    // Load JS if not already loaded
    if (!document.querySelector('script[src="https://smartupload.diro.io/widgets/diro.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://smartupload.diro.io/widgets/diro.js';
      script.onload = () => {
        setIsWidgetLoaded(true);
        hasInitialized.current = true;
      };
      script.onerror = () => {
        console.error('Failed to load Diro widget script');
      };
      document.head.appendChild(script);
    } else {
      setIsWidgetLoaded(true);
      hasInitialized.current = true;
    }
  };

  useEffect(() => {
    loadWidget();
  }, [containerKey]);

  const wrapperConfig = {
    height: "350px",
    width: "100%",
    themeColor: "black",
    fontFamily: "Montserrat",
    fontSize: "12px"
  };

  return (
    <React.Fragment>
      {!isWidgetLoaded && (
        <div className="widget-loading p-4 text-center">Loading Diro widget...</div>
      )}

      <div className="w-full">
        <div
          key={`smart-upload-widget-${containerKey}`}
          id="reactWidget"
          data-buttonid="O.c117bd44-8cfa-42df-99df-c4ad2ba6c6f5-h3rO"
          data-trackid={urn || ""}
          {...({ wrapper: JSON.stringify(wrapperConfig) } as any)}
          style={{ 
            display: isWidgetLoaded ? "block" : "none",
            minHeight: "350px",
            width: "100%",
            maxWidth: "100%",
            overflow: "hidden",
            position: "relative"
          }}
        />
      </div>
    </React.Fragment>
  );
});

export default SmartUploadWidget;