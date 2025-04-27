import { motion } from 'framer-motion'
import { useMediaQuery } from '../hooks/use-media-query'

const testimonials = [
  {
    id: 1,
    quote: "הכשרה מדהימה! הליווי הצמוד והשיעורים המעשיים הביאו אותי להרוויח 30,000 ש״ח בחודש הראשון.",
    author: "דוד לוי",
    result: "רווח חודשי: 32,000 ש״ח"
  },
  {
    id: 2,
    quote: "אחרי שנים של ניסיונות כושלים, סוף סוף מצאתי הכשרה שעובדת. הצוות תמך בי בכל שלב.",
    author: "שרה כהן",
    result: "500 מכירות בחודש"
  },
  {
    id: 3,
    quote: "ההבטחה על החזר כספי גרמה לי לנסות - אחרי 3 חודשים הרווחתי פי 10 מההשקעה!",
    author: "אבי ישראלי",
    result: "תשואה: 1,000%"
  },
  {
    id: 4,
    quote: "השיעורים הפרקטיים והליווי האישי עשו את כל ההבדל. עכשיו יש לי עסק איקומרס מפרנס.",
    author: "מיכל אברהם",
    result: "15,000 ש״ח/חודש"
  },
  {
    id: 5,
    quote: "69% הצלחה? אני אחד מהם! תודה על הכל - מההתחלה ועד לרווחים הראשונים.",
    author: "נועם פישר",
    result: "200 מכירות בשבוע"
  }
]

export function TestimonialTicker() {
  const { isMobile } = useMediaQuery()

  return (
    <div className="bg-black py-8 text-white">
      <div className="container">
        <h2 className="text-center text-sm text-white/70 mb-6">
          סיפורי הצלחה מתלמידים שלנו
        </h2>
        <div className="relative flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-8 before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:h-full after:w-8 after:bg-gradient-to-l after:from-black after:to-transparent">
          <motion.div
            className="flex gap-4"
            animate={{
              x: ['0%', '100%'],
            }}
            transition={{
              duration: 100,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-64 p-4 rounded-lg border border-purple-500/30 bg-gradient-to-b from-purple-900/10 to-black"
              >
                <p className="text-xs mb-3 leading-tight">"{testimonial.quote}"</p>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-medium">{testimonial.author}</p>
                  <p className="text-purple-400 text-xs font-bold">{testimonial.result}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}