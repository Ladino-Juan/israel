import { FaHandsHelping, FaChalkboardTeacher, FaMedal } from 'react-icons/fa'
import { FeatureCard } from './feature-card'

type FeatureIcon = React.ComponentType<{ className?: string }>

export interface Feature {
  id: string
  title: string
  description: string
  icon: FeatureIcon
}

export const featuresList: Feature[] = [
  {
    id: '1',
    title: 'ליווי ותמיכה צמודה',
    description:
      '69% הצלחה - נלווה אתכם עד ההצלחה, כולל תמיכה בזום אם צריך. אצלנו אין תלמידים שנתקעים!',
    icon: FaHandsHelping,
  },
  {
    id: '2',
    title: '61 שיעורים פרקטיים',
    description:
      'אנחנו מעלים שיעורים חדשים כל שבוע כדי שתגיעו לתוצאות הטובות ביותר במינימום זמן.',
    icon: FaChalkboardTeacher,
  },
  {
    id: '3',
    title: 'הצלחה או החזר כספי',
    description:
      'אנחנו כל כך בטוחים שתצליחו, שאם לא תגיעו לתוצאות - תקבלו החזר כספי מלא!',
    icon: FaMedal,
  },
]

export function Features() {
  return (
    <section className="bg-black py-[72px] text-white sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            מה יהיה בהכשרה?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-xl text-white/70">
            תהליך מלא ללימוד ובניית מותג איקומרס מצליח, כולל ליווי, שיעורים פרקטיים,
            והתחייבות להצלחה או החזר כספי.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuresList.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}