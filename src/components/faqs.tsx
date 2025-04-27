import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { faqsList } from '../utils/faqs-list'
import { AccordionFAQItem } from './accordion-faq-item'
import emojiStarImage from '../assets/images/emojistar.svg'
import helixImage from '../assets/images/helix2.svg'

export function Faqs() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <div className="relative overflow-hidden bg-black py-[72px] text-white sm:py-24">
      {/* Decorative elements - positioned outside content flow */}
      <motion.div 
        style={{ translateY }}
        className="pointer-events-none absolute -left-10 top-1/4 hidden h-28 w-28 md:block lg:left-28 lg:h-40 lg:w-40"
      >
        <img
          src={helixImage}
          alt="Decorative spiral"
          className="h-full w-full object-contain"
          draggable="false"
        />
      </motion.div>
      
      <motion.div 
        style={{ translateY }}
        className="pointer-events-none absolute -right-10 top-1/3 hidden h-28 w-28 md:block lg:right-28 lg:h-40 lg:w-40"
      >
        <img
          src={emojiStarImage}
          alt="Decorative star"
          className="h-full w-full object-contain"
          draggable="false"
        />
      </motion.div>

      {/* Content container - maintains original layout */}
      <div className="container relative mx-auto px-4" ref={containerRef}>
        <h2 className="mx-auto text-center text-4xl font-bold tracking-tighter sm:max-w-[648px] sm:text-6xl">
          שאלות נפוצות
        </h2>
        <div className="mx-auto mt-12 max-w-[648px]">
          {faqsList.map((faq) => (
            <div key={faq.id} dir="rtl" className="text-right">
              <AccordionFAQItem
                fqaItem={faq}
                isOpen={openFaqId === faq.id}
                onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}