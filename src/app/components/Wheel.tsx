'use client';
import { useState } from 'react';
import Image from 'next/image';

const topics = [
  { label: 'زراعة الأشجار', icon: '/tree.png' },
  { label: 'إعادة التدوير', icon: '/recycle.png' },
  { label: 'ترشيد المياه', icon: '/water.png' },
  { label: 'حماية الحيوانات', icon: '/wildlife.png' },
  { label: 'تنظيف البيئة', icon: '/clean.png' },
  { label: 'الطاقة المتجددة', icon: '/energy.png' },
];

export default function Wheel() {
  const [angle, setAngle] = useState(0);

  const rotateWheel = () => {
    setAngle((prev) => prev + 60);
  };

  const currentIndex = ((360 - (angle % 360)) / 60) % topics.length;
  const currentTopic = topics[Math.round(currentIndex) % topics.length];

  return (
    <section className="w-full bg-green-100 pt-32 pb-32 flex flex-col items-center relative">
      {/* اسم الموضوع */}
      <div className="mb-8 bg-white px-6 py-3 rounded-xl shadow text-xl font-bold text-green-800 z-10">
        {currentTopic.label}
      </div>

      {/* حاوية العجلة كاملة */}
      <div className="relative w-full h-auto flex justify-center">
        <div
          className="relative w-80 h-80 rounded-full bg-gradient-to-br from-white to-green-50 shadow-xl border border-green-300 cursor-pointer"
          onClick={rotateWheel}
        >
          <div
            className="relative w-full h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `rotate(${angle}deg)` }}
          >
            {topics.map((topic, index) => {
              const total = topics.length;
              const angleDeg = (index * 360) / total;
              const radius = 100;
              const x = 160 + radius * Math.cos((angleDeg * Math.PI) / 180);
              const y = 160 + radius * Math.sin((angleDeg * Math.PI) / 180);

              return (
                <div
                  key={index}
                  className="absolute w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center border border-green-300"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: `translate(-50%, -50%) rotate(${-angle}deg)`,
                  }}
                >
                  <Image src={topic.icon} alt={topic.label} width={28} height={28} />
                </div>
              );
            })}
          </div>

          {/* الدائرة الوسطى */}
          <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-green-200 rounded-full shadow-md border border-green-300 flex items-center justify-center font-bold text-green-800 z-20 transform -translate-x-1/2 -translate-y-1/2">
            🌍
          </div>
        </div>
      </div>
    </section>
  );
}
