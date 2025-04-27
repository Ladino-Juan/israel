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
    <div className="relative overflow-hidden bg-black py-16 text-white md:py-24">
      {/* New gradient background layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1E0B36] to-black opacity-90" />
      

      <div className="container relative mx-auto px-4">
        {/* Version badge */}
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-2 rounded-lg border border-zinc-800 px-3 py-1.5 transition-colors hover:border-zinc-700 hover:bg-zinc-900/50"
          >
            <span className="text-white/60">גרסה 2.0 יצאה</span>
            <span className="inline-flex items-center gap-1 font-medium text-white">
              <span>קרא עוד</span>
              <IconArroRight className="h-4 w-4" />
            </span>
          </a>
        </div>

        {/* Main heading with floating elements */}
        <div className="mt-8 flex justify-center md:mt-12">
          <div className="relative inline-flex">
            <h1 className="inline-flex text-center text-5xl font-bold leading-tight tracking-tighter sm:text-7xl md:text-8xl lg:text-[150px] lg:leading-none">
              משימה אחת <br /> בכל פעם
            </h1>

            {/* Floating cursor image */}
            <motion.div
              className="absolute right-0 top-12 hidden h-16 w-16 sm:right-[30%] sm:top-16 sm:block md:right-[40%] md:top-20 md:h-24 md:w-24 lg:right-[700px] lg:top-[200px] lg:h-[100px] lg:w-[100px]"
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
              className="absolute left-0 top-20 hidden h-16 w-16 sm:left-[30%] sm:top-24 sm:block md:left-[40%] md:top-28 md:h-24 md:w-24 lg:left-[620px] lg:top-[120px] lg:h-[100px] lg:w-[100px]"
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
          <p className="mt-6 max-w-md text-center text-lg leading-relaxed text-white/80 sm:mt-8 sm:text-xl md:max-w-2xl">
            חגגו את שמחת ההישגים עם אפליקציה שתוכננה לעקוב אחר ההתקדמות שלכם, להניע את המאמצים שלכם ולחגוג את ההצלחות שלכם.
          </p>
        </div>

        {/* CTA button */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <button className="rounded-lg bg-white px-6 py-3.5 font-medium text-black transition-transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50">
            הורידו בחינם
          </button>
        </div>
      </div>
    </div>
  )
}