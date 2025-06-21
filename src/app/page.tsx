'use client';
import Image from 'next/image';
import { useState } from 'react';
import Wheel from './components/Wheel';
import EnvironmentCards from './components/EnvironmentCards';


export default function LandingPage() {
  return (
    <main className="min-h-screen bg-green-50 px-6 py-12 flex flex-col items-center font-sans text-gray-800">
      {/* Section 1: Header with child image and description */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between mb-20 max-w-6xl">
        <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/child.png"
            alt="طفل"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">صديق البيئة الصغير</h2>
          <p className="bg-white p-6 rounded-xl shadow text-lg leading-relaxed">
            هذا الطفل يحب الزراعة ويحافظ على البيئة. تعرف على دوره في حماية الطبيعة وتعزيز الوعي البيئي.
          </p>
        </div>
      </section>

      {/* Section 2: Header with girl image and description (reversed layout) */}
      <section className="w-full flex flex-col md:flex-row-reverse items-center justify-between mb-20 max-w-6xl">
        <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/girl.png"
            alt="طفلة"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pr-10 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">بطلتنا البيئية</h2>
          <p className="bg-white p-6 rounded-xl shadow text-lg leading-relaxed">
            هذه الطفلة تشارك في حماية البيئة من خلال التدوير والحفاظ على نظافة الأماكن العامة.
          </p>
        </div>
      </section>

      {/* Section 3: Half Circle Topics Section */}
      <Wheel />
<section className="bg-green-50 py-16 px-6 text-center max-w-4xl mx-auto rounded-xl shadow-md">
  <h2 className="text-3xl font-bold text-green-800 mb-6">لنصنع فرقًا معًا!</h2>
  <p className="text-lg text-gray-700 leading-relaxed">
    البيئة هي بيتنا المشترك، وكل تصرف نقوم به يؤثر عليها بشكل مباشر. سواء بزرع شجرة، أو بتقليل استخدام البلاستيك، أو بالحفاظ على نظافة الشوارع، فإن كل خطوة صغيرة تساهم في بناء مستقبل أخضر وآمن لنا ولأجيالنا القادمة.
    <br /><br />
    انضم إلينا في رحلة التوعية والعمل من أجل كوكبنا 🌍
  </p>
</section>

      
<EnvironmentCards />

<section className="bg-white py-16 px-6 text-center max-w-6xl mx-auto">
  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-8">
    <Image
      src="/IMG-20250618-WA0029.jpg" // ← تأكد من توفر هذه الصورة في public/
      alt="عائلة تحافظ على البيئة"
      layout="fill"
      objectFit="cover"
      className="rounded-2xl"
    />
  </div>

  <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
    التغيير يبدأ من داخل البيت
  </h2>
  <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
    العائلة الواعية تربي أجيالًا تحب الطبيعة وتحميها. لنكن قدوة في احترام البيئة،
    ولنصنع معًا مجتمعًا يضع كوكبنا في أولوياته.
  </p>
</section>


    </main>
  );
}

