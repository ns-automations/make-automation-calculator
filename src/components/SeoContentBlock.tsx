import React from 'react';
import { ShieldCheck, Cpu, HelpCircle, Layers } from 'lucide-react';

export const SeoContentBlock: React.FC = () => {
  return (
    <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
      <div>
        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          Comprehensive Analysis
        </span>
        <h2 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight mt-0.5">
          Why Make.com Overhead Is Significantly Lower
        </h2>
      </div>

      <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 font-medium">
        <p>
          Zapier and Make.com both connect the apps your business runs on, but they price automation very differently — and that difference compounds fast as your workflows grow.
        </p>
        <p>
          Zapier charges per task, where a task is counted every time a single action step executes. A five-step workflow that runs 100 times a month doesn't cost 100 tasks — it costs 500, because every action in every run draws from your monthly allowance. Teams routinely underestimate their real task burn by three to five times when they first calculate their Zapier bill this way.
        </p>
        <p>
          Make.com uses a similar per-execution model, but its entry-level Core plan includes roughly 10,000 credits for a fraction of what Zapier charges for 750 tasks at the same tier. That gap alone explains most of the savings — before accounting for the fact that Make's visual, node-based canvas makes complex logic (branching, iterators, error handling) available on every tier, while Zapier gates multi-step workflows and premium apps behind higher-priced plans.
        </p>
        <p>
          The tradeoff is real, and worth naming honestly: migrating means rebuilding each Zap as a Make scenario, which takes time and technical familiarity with a new interface. That's exactly the gap this calculator — and the migration service below it — exists to close. You get the cost comparison up front, and a clear, low-risk path to actually making the switch, whether that's doing it yourself with a generous free tier, or handing off the rebuild entirely.
        </p>
      </div>
    </section>
  );
};
