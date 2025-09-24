import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqAccordionCopy = () => {
  return (
    <div className="w-full">
      <h2 className="font-medium text-gray-800 mb-6 text-lg">Frequently asked questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left font-medium">What information will be shared?</AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed">
            Only the necessary financial information required for visa processing verification will be shared. 
            VFS Global follows strict data protection protocols and your personal banking details remain secure 
            throughout the verification process.
          </AccordionContent>
        </AccordionItem>
        
        
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left font-medium">Why should I trust DIRO?</AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed">
            DIRO is a leading provider of verification solutions trusted by Fortune 500 companies, major banks, 
            and government institutions worldwide. They maintain the highest security standards and compliance 
            certifications in the industry.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left font-medium">How DIRO creates a new global standard?</AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed">
            DIRO revolutionizes document verification by providing real-time, direct-from-source validation that 
            eliminates fraud and reduces processing times. Their technology sets new industry standards for 
            security, accuracy, and efficiency in financial document verification.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqAccordionCopy;