
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqAccordion = () => {
  return (
    <div className="w-full">
      <h2 className="font-medium text-gray-800 mb-4">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">Why does VFS Global require bank verification?</AccordionTrigger>
          <AccordionContent>
            VFS Global requires bank verification to protect applicants and ensure compliance with financial
            regulations, creating a more trusted visa application process.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">Is my banking information secure?</AccordionTrigger>
          <AccordionContent>
            Yes, all verification is handled through DIRO's secure platform, which uses bank-level encryption. VFS Global never
            directly accesses or stores your banking credentials.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">How long does verification take?</AccordionTrigger>
          <AccordionContent>
            Most verifications are completed within minutes. In some cases, additional review may be needed which can take
            up to 24 hours.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left">What if I have trouble verifying?</AccordionTrigger>
          <AccordionContent>
            If you encounter any issues, you can use the "Get support" button and our team will assist you promptly.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
