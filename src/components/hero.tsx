/* eslint-disable react-hooks/exhaustive-deps */
import { AnimationControls, motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

import cursoImage from './../assets/images/cursor.svg'
import messageImage from './../assets/images/message.svg'
import { ArrowRight as IconArroRight } from './icons'

export function Hero() {
  const cursoImageAnimateControls = useAnimation()
  const messageImageAnimateControls = useAnimation()

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }

  const startFloating = (controls: AnimationControls) => {
    controls.start(floatAnimation)
  }

  useEffect(() => {
    startFloating(cursoImageAnimateControls)
    startFloating(messageImageAnimateControls)
  }, [cursoImageAnimateControls, messageImageAnimateControls])

  async function handleDragEnd(controls: AnimationControls) {
    await controls.start({
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' },
    })
    startFloating(controls)
  }

  return (
    <div className="relative overflow-hidden bg-black py-12 text-white md:py-24 lg:py-32">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1E0B36] to-black opacity-90" />

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Version badge */}
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-2 rounded-lg border border-zinc-800 px-3 py-1.5 transition-colors hover:border-zinc-700 hover:bg-zinc-900/50"
          >
            <span className="text-white/60">מקומות מוגבלים 🚀</span> {/* "Cupos limitados" */}
            <span className="inline-flex items-center gap-1 font-medium text-white">
              <span>הצטרף עכשיו</span> {/* "Únete ahora" */}
              <IconArroRight className="h-4 w-4" />
            </span>
          </a>
        </div>

        {/* Main heading with floating elements */}
        <div className="mt-8 flex justify-center md:mt-12">
          <div className="relative max-w-6xl">
            <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block">מ-0 ל-6 ספרות</span>
              <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">באיקומרס</span>
            </h1>

            {/* Floating cursor image */}
            <motion.div
              className="absolute right-0 top-12 hidden h-12 w-12 sm:right-[20%] sm:top-16 sm:block md:right-[30%] md:top-20 md:h-20 md:w-20 lg:right-[90%] lg:top-24 lg:h-24 lg:w-24"
              drag
              dragSnapToOrigin
              initial={{ y: 0 }}
              animate={cursoImageAnimateControls}
              onDragStart={() => cursoImageAnimateControls.stop()}
              onDragEnd={() => handleDragEnd(cursoImageAnimateControls)}
            >
              <img
                src={cursoImage}
                alt="סמן עכבר"
                className="h-full w-full object-contain"
                draggable="false"
              />
            </motion.div>

            {/* Floating message image */}
            <motion.div
              className="absolute left-0 top-20 hidden h-12 w-12 sm:left-[20%] sm:top-24 sm:block md:left-[30%] md:top-28 md:h-20 md:w-20 lg:left-[90%] lg:top-32 lg:h-24 lg:w-24"
              drag
              dragSnapToOrigin
              initial={{ y: 0 }}
              animate={messageImageAnimateControls}
              onDragStart={() => messageImageAnimateControls.stop()}
              onDragEnd={() => handleDragEnd(messageImageAnimateControls)}
            >
              <img
                src={messageImage}
                alt="בועת הודעה"
                className="h-full w-full object-contain"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>

        {/* Description text */}
        <div className="flex justify-center">
          <p className="mt-6 max-w-md text-center text-base leading-relaxed text-white/80 sm:mt-8 sm:max-w-xl sm:text-lg md:max-w-2xl md:text-xl">
            חולם על עצמאות כלכלית? מעוניין לבנות מותג איקומרס שייצר לך הכנסה קבועה?
            <span className="block sm:inline"> אין שום סיבה שאתה לא תצליח - אם אני הצלחתי, כל אחד יכול להצליח.</span>
          </p>
        </div>

        {/* CTA button */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <button className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 font-medium text-white transition-transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-white/50">
            אני רוצה להרוויח הרבה כסף
          </button>
        </div>
      </div>
    </div>
  )
}