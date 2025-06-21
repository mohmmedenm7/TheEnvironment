'use client';
import React, { useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { FaLeaf, FaRecycle, FaWater, FaTree } from 'react-icons/fa';

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const cards = [
  {
    icon: <FaTree className="text-green-600 text-4xl" />,
    title: 'ازرع شجرة',
    text: 'زراعة شجرة واحدة يمكنها امتصاص أكثر من 20 كجم من ثاني أكسيد الكربون سنويًا.',
  },
  {
    icon: <FaRecycle className="text-green-600 text-4xl" />,
    title: 'أعد التدوير',
    text: 'إعادة التدوير تساعد في تقليل النفايات وتوفير الموارد الطبيعية.',
  },
  {
    icon: <FaWater className="text-green-600 text-4xl" />,
    title: 'وفر الماء',
    text: 'ترشيد استهلاك المياه يحافظ على هذا المورد الحيوي للأجيال القادمة.',
  },
  {
    icon: <FaLeaf className="text-green-600 text-4xl" />,
    title: 'كن صديقًا للبيئة',
    text: 'غيّر عاداتك اليومية لصالح كوكب الأرض، وابدأ بخطوة صغيرة كل يوم.',
  },
];

export default function TiltCards() {
  return (
   <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      {cards.map((card, index) => (
        <TiltCard key={index} icon={card.icon} title={card.title} text={card.text} />
      ))}
    </div>
  );
}

function TiltCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = (ref.current as HTMLDivElement).getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / rect.height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / rect.width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform,
      }}
      className="relative w-full h-80 rounded-2xl bg-gradient-to-br from-green-200 to-green-100 shadow-lg"
    >
      <div
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
        }}
    className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-xl px-6 py-8 text-center"
  >
        <div style={{ transform: 'translateZ(75px)' }}>{icon}</div>
        <h3
          style={{ transform: 'translateZ(50px)' }}
          className="text-xl font-bold text-green-800 mt-4"
        >
          {title}
        </h3>
        <p
          style={{ transform: 'translateZ(25px)' }}
          className="text-sm text-gray-700 mt-2"
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
}
