import { FaHandsHelping, FaChalkboardTeacher, FaMedal } from 'react-icons/fa';
import { FeatureCard } from './feature-card';
import { ElementType } from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: ElementType;
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
];

export function Features() {
  return (
    <div className="bg-black py-[72px] text-white sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">
          מה יהיה בהכשרה?
        </h2>
        <div className="mx-auto max-w-xl">
          <p className="mt-5 text-center text-xl text-white/70">
            תהליך מלא ללימוד ובניית מותג איקומרס מצליח, כולל ליווי, שיעורים פרקטיים, והתחייבות להצלחה או החזר כספי.
          </p>
        </div>
        <div className="mt-16 flex flex-col gap-4 sm:flex-row">
          {featuresList.map((feature) => {
            return (
              <FeatureCard key={feature.id} feature={feature} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
