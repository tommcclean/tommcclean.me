'use client';

import { useAppSelector } from '@/lib/hooks';
import CountUp from '@/components/CountUp';

export default function Stats() {
  const { stats } = useAppSelector((state) => state.stats);

  return (
    <div className="bg-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="group text-center">
              <div className="mb-1 text-4xl font-extrabold tracking-tight text-white transition-transform duration-300 group-hover:scale-110 sm:text-5xl">
                <CountUp value={stat.value} />
              </div>
              <div className="text-sm font-medium uppercase tracking-widest text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
