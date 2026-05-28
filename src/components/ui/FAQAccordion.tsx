import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl overflow-hidden transition-all duration-200"
          style={{
            border: '1px solid',
            borderColor: open === i ? '#c8a84b' : '#e5e7eb',
            background: open === i ? '#fffdf7' : '#ffffff',
          }}
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-gray-800 text-sm sm:text-base leading-snug">{item.q}</span>
            <ChevronDown
              size={18}
              className={`flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
              style={{ color: '#c8a84b' }}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5 animate-fadeIn">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
