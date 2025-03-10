import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
type FaqItemProps = {
  question: string;
  answer: React.ReactNode;
};
const FaqItem = ({
  question,
  answer
}: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="border-b border-gray-200">
      <button className="flex w-full justify-between items-center py-4 text-left" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="font-medium text-gray-800 text-base">{question}</h3>
        {isOpen ? <Minus className="h-5 w-5 text-vfs-blue" /> : <Plus className="h-5 w-5 text-vfs-blue" />}
      </button>
      {isOpen && <div className="pb-4 text-gray-600">
          {answer}
        </div>}
    </div>;
};
const FaqAccordion = () => {
  return <div className="space-y-2">
      <h2 className="font-semibold text-gray-800 mb-6 text-xl">Frequently asked questions</h2>
      <div className="space-y-2">
        <FaqItem question="What information will be shared?" answer={<p>VFS Global will only receive verification of your bank account details. Your personal financial information remains secure and is not shared with VFS Global.</p>} />
        <FaqItem question="How does my password remain private?" answer={<p>Your banking credentials are encrypted and securely managed by DIRO. VFS Global never has access to your login information or passwords.</p>} />
        <FaqItem question="Why should I trust DIRO?" answer={<p>DIRO is a trusted verification provider used by F500 companies and Tier 1 global banks. They maintain the highest security standards and are compliant with global privacy regulations.</p>} />
        <FaqItem question="How DIRO creates a new global standard?" answer={<p>DIRO's technology eliminates manual verification processes through secure, real-time bank connectivity, creating a new standard for financial verification that's both faster and more reliable than traditional methods.</p>} />
      </div>
    </div>;
};
export default FaqAccordion;