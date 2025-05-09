import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import appScreen from '../assets/images/app-screen.png'
import { useMediaQuery } from '../hooks/use-media-query'

export function ProductShowcase() {
  const appImageRef = useRef<HTMLImageElement | null>(null)
  const { isMobile } = useMediaQuery()

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1]
  }

  const { scrollYProgress } = useScroll({
    target: appImageRef,
    offset: ['start end', 'end end'],
  })

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  return (
    <div className="bg-black bg-gradient-to-b from-black via-[#2d154a] to-black py-[72px] text-white sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">
          נעים להכיר
        </h2>
        <div className="mx-auto max-w-3xl">
          <p className="mt-5 text-center text-xl text-white/80 leading-relaxed">
            עילאי אוחיון, 18, יזם איקומרס שהתחיל בגיל 12 ופרש מהלימודים כדי לרדוף אחרי חלומות — והגשים אותם.
            היום אני בונה מותגים, מנהל סוכנות שיווק מובילה, ומלמד אחרים איך לעשות את זה בעצמם.
          </p>
          <p className="mt-5 text-center text-xl text-purple-400 font-semibold">
            רוצה לדעת איך גם אתה יכול? השאר פרטים.
          </p>
        </div>
        <motion.div
          style={{
            scale,
            opacity,
            rotateX,
            transformPerspective: '800px',
          }}
          className="mx-auto w-full max-w-4xl"
        >
          <img
            src={appScreen}
            alt="צילום מסך של הקורס"
            className="mt-14 rounded-xl shadow-lg"
            ref={appImageRef}
          />
        </motion.div>
      </div>
    </div>
  )
}
