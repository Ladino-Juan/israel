import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import emojiStarImage from '../assets/images/emojistar.svg'
import helixImage from '../assets/images/helix2.svg'

export function CallToAction() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <div
      className="bg-black py-16 text-center text-white md:py-24"
      ref={containerRef}
    >
      <div className="container relative mx-auto max-w-2xl px-4">
        {/* Animated decorative elements */}
        <motion.div 
          style={{ translateY }}
          className="absolute left-full top-8 hidden h-28 w-28 md:block lg:left-[calc(100%+36px)] lg:h-40 lg:w-40"
        >
          <img
            src={helixImage}
            alt="עיטור ספירלה"
            className="h-full w-full object-contain"
          />
        </motion.div>
        
        <motion.div 
          style={{ translateY }}
          className="absolute right-full top-[-80px] hidden h-28 w-28 md:block lg:right-[calc(100%+24px)] lg:top-[-120px] lg:h-40 lg:w-40"
        >
          <img
            src={emojiStarImage}
            alt="עיטור כוכב"
            className="h-full w-full object-contain"
          />
        </motion.div>

        {/* Main content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl">
            קבלו גישה מיידית
          </h2>
          
          <p className="mx-auto text-lg leading-relaxed text-white/70 sm:text-xl md:max-w-lg">
            חגגו את שמחת ההישגים עם אפליקציה שתוכננה לעקוב אחר ההתקדמות שלכם ולהניע את המאמצים שלכם.
          </p>

          {/* Email form */}
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="האימייל שלך"
              className="h-14 rounded-lg bg-white/20 px-5 text-right placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              dir="rtl"
              required
            />
            <button
              className="h-14 rounded-lg bg-white px-6 font-medium text-black transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50"
              type="submit"
            >
              קבלו גישה
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}