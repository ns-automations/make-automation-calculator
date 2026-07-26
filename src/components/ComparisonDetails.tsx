import React from 'react';
import { Sliders, Layers, Sparkles } from 'lucide-react';

export const ComparisonDetails: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6">
      <div>
        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          Architectural Breakdown
        </span>
        <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight mt-0.5">
          Why Make.com Overhead Is Significantly Lower
        </h3>
        <p className="text-xs text-slate-500 font-medium">
          A side-by-side comparison of pricing models, visual capabilities, and execution limits.
        </p>
      </div>

      {/* Feature Comparison Table */}
      <div className="overflow-x-auto border border-slate-200 rounded-lg">
        <table className="w-full text-xs text-left">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase text-[10px] tracking-widest">
            <tr>
              <th className="py-3.5 px-4">Capability Metric</th>
              <th className="py-3.5 px-4 bg-slate-100/80 text-slate-800">Zapier</th>
              <th className="py-3.5 px-4 bg-violet-100/80 text-violet-900">Make.com</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
            <tr>
              <td className="py-3.5 px-4 font-bold text-slate-900">Entry Tier Units</td>
              <td className="py-3.5 px-4 bg-slate-50/50 font-mono">750 tasks ($19.99/mo)</td>
              <td className="py-3.5 px-4 bg-violet-50/50 font-mono font-bold text-violet-700">10,000 credits ($10.59/mo)</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-bold text-slate-900">Workflow Interface</td>
              <td className="py-3.5 px-4 bg-slate-50/50">Linear list format</td>
              <td className="py-3.5 px-4 bg-violet-50/50 font-bold text-violet-700">Unlimited visual node canvas</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-bold text-slate-900">Multi-step Logic</td>
              <td className="py-3.5 px-4 bg-slate-50/50">Requires paid tier</td>
              <td className="py-3.5 px-4 bg-violet-50/50 text-violet-700 font-bold">Included on all tiers (Free included)</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-bold text-slate-900">Array Iterators & Routers</td>
              <td className="py-3.5 px-4 bg-slate-50/50">Requires separate steps</td>
              <td className="py-3.5 px-4 bg-violet-50/50 font-bold text-violet-700">Native built-in modules</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-bold text-slate-900">Schedule Frequency</td>
              <td className="py-3.5 px-4 bg-slate-50/50 font-mono">15 min (Starter)</td>
              <td className="py-3.5 px-4 bg-violet-50/50 font-mono font-bold text-violet-700">Down to 1-minute intervals</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-bold text-slate-900">Cost per 10,000 Operations</td>
              <td className="py-3.5 px-4 bg-slate-50/50 font-mono text-slate-900 font-bold">$129.00 / month</td>
              <td className="py-3.5 px-4 bg-violet-50/50 font-mono text-violet-700 font-black">$10.59 / month</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-1">
          <div className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
            <Sliders className="w-4 h-4 text-violet-600" />
            10x Higher Volume
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Make Core includes 10,000 operations for $10.59/mo, whereas Zapier's $19.99/mo plan offers only 750 tasks.
          </p>
        </div>

        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-1">
          <div className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-violet-600" />
            Visual Drag & Drop
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Make features an interactive visual canvas with error handlers, routers, and array iterators built in.
          </p>
        </div>

        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-1">
          <div className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-violet-600" />
            Parallel Testing
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Keep existing Zaps running while building and testing your Make scenarios to ensure zero downtime.
          </p>
        </div>
      </div>
    </div>
  );
};

