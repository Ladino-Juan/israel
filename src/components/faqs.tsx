import { useState } from 'react'

import { faqsList } from '../utils/faqs-list'
import { AccordionFAQItem } from './accordion-faq-item'

export function Faqs() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null)

  return (
    <div className="bg-black py-[72px] text-white sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mx-auto text-center text-4xl font-bold tracking-tighter sm:max-w-[648px] sm:text-6xl">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto mt-12 max-w-[648px]">
          {faqsList.map((faq) => (
            <AccordionFAQItem
              key={faq.id}
              fqaItem={faq}
              isOpen={openFaqId === faq.id}
              onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}