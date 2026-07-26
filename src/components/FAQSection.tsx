import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: 'Is Make.com actually cheaper than Zapier?',
    a: 'For most workflows, yes — Make\'s entry-level plans include significantly more operations per dollar than Zapier\'s equivalent tiers, and multi-step logic that Zapier gates behind higher-priced plans is included on every Make tier. Use the calculator above to see your specific estimated savings based on your actual usage.'
  },
  {
    q: 'How long does migrating from Zapier to Make take?',
    a: 'Simple, single-purpose Zaps typically take under an hour to rebuild as Make scenarios. More complex, multi-step workflows with custom logic can take a few hours to a day, depending on how many integrations are involved. Every migration is tested live before handoff, so nothing goes live until it\'s confirmed working.'
  },
  {
    q: 'Will my Zaps work exactly the same on Make?',
    a: 'The end result — the same trigger leading to the same actions — carries over faithfully. The interface and setup process look different, since Make uses a visual, node-based canvas instead of Zapier\'s linear step list, but the underlying logic and outcome are rebuilt to match.'
  },
  {
    q: 'What if I\'m not technical — can I still switch?',
    a: 'Yes. The whole point of the migration service is that you don\'t need to learn Make\'s interface yourself — your existing Zaps are rebuilt for you as working Make scenarios. If you\'d rather learn to build your own going forward, the free trial link above is a low-pressure way to explore the platform at your own pace.'
  },
  {
    q: 'How are Zapier "tasks" different from Make.com "operations"?',
    a: 'In Zapier, a task is counted whenever an action step runs. In Make.com, an operation (now called a "credit") is counted for every module that executes — including some triggers, filters, and iterators that Zapier doesn\'t charge for separately. Because the two systems don\'t map 1:1, we apply a conservative 1.2x conversion factor in this calculator, so your savings estimate stays realistic rather than overstated.'
  },
  {
    q: 'Can I keep my Zapier account active while migrating to Make?',
    a: 'Yes. There\'s no requirement to cancel Zapier before or during a migration. We recommend running both platforms in parallel while your new Make scenarios are built and tested, so your existing automations keep working with zero downtime. Once you\'ve confirmed the Make version works correctly, you can cancel Zapier on your own schedule.'
  },
  {
    q: 'What is included in the "Get My Free Migration" offer?',
    a: 'We\'ll rebuild one of your existing Zaps as a working Make scenario at no cost, so you can see it running correctly before committing to anything further. It\'s a low-risk way to confirm the migration works for your specific workflow before deciding whether to continue.'
  },
  {
    q: 'Are Make.com pricing figures up-to-date?',
    a: 'We verify pricing figures against Zapier\'s and Make.com\'s official pricing pages regularly, since both platforms adjust their plans over time. This calculator was last verified against July 2026 pricing. For your exact current rate, always confirm against each platform\'s live pricing page — the estimate here is meant to guide your decision, not replace your own bill.'
  },
  {
    q: 'What if I have complex multi-step Zaps or custom API calls?',
    a: 'Make.com handles multi-step logic, branching, and custom API/webhook calls natively on every plan tier, including free. Complex workflows are exactly where Make\'s visual canvas tends to simplify things compared to Zapier\'s linear step list — but if you\'re unsure how your specific setup would translate, that\'s exactly what the free migration offer above is for.'
  }
];

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4">
      <div>
        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          Knowledge Base
        </span>
        <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight mt-0.5">
          Frequently Asked Questions
        </h3>
        <p className="text-xs text-slate-500 font-medium">
          Key information about migration methodology, API unit conversion, and zero-downtime cutover.
        </p>
      </div>

      <div className="space-y-2 pt-2">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="border border-slate-200 rounded-lg overflow-hidden transition"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full text-left p-4 flex items-center justify-between font-bold text-xs sm:text-sm text-slate-800 bg-slate-50/70 hover:bg-slate-100 transition"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-violet-600' : ''}`} />
              </button>
              {isOpen && (
                <div className="p-4 bg-white text-xs text-slate-600 border-t border-slate-200 leading-relaxed font-medium">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

