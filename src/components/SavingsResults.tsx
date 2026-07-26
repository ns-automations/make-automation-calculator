import React from 'react';
import { CalculationResult, MakeTier } from '../types';
import { TrendingDown } from 'lucide-react';
import { MAKE_PLANS } from '../data/pricingData';

interface SavingsResultsProps {
  results: CalculationResult;
  selectedMakeTier: MakeTier;
  onMakeTierChange: (tier: MakeTier) => void;
}

export const SavingsResults: React.FC<SavingsResultsProps> = ({
  results,
  selectedMakeTier,
  onMakeTierChange
}) => {
  const {
    zapierMonthlyCost,
    makeMonthlyCost,
    monthlySavings,
    annualSavings,
    savingsPercentage,
    monthlyTasks,
    estimatedMakeCredits,
    extraPacksCount
  } = results;

  const isPositiveSavings = monthlySavings > 0;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6 shadow-xs relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Comparative Projections
          </span>
          <h2 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight mt-0.5">
            Switch & Save Breakdown
          </h2>
        </div>
        {isPositiveSavings && (
          <div className="flex items-center gap-1.5 bg-violet-100 text-violet-700 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider self-start sm:self-auto border border-violet-200">
            <TrendingDown className="w-4 h-4 text-violet-600" />
            <span>{savingsPercentage}% Lower Overhead</span>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          Select Make.com Tier:
        </label>
        <div className="grid grid-cols-3 gap-2 bg-slate-50 p-1.5 rounded-lg border border-slate-200">
          {MAKE_PLANS.map((plan) => {
            const isSelected = selectedMakeTier === plan.tier;
            return (
              <button
                key={plan.tier}
                type="button"
                onClick={() => onMakeTierChange(plan.tier)}
                className={`py-2 px-3 rounded-md text-xs font-semibold transition flex flex-col items-center justify-center gap-0.5 ${
                  isSelected
                    ? 'bg-violet-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <span>{plan.tier}</span>
                <span className="text-[10px] opacity-80 font-mono">${plan.basePrice}/mo</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-4 pt-1">
        <div className="flex items-center justify-between py-2 border-b border-slate-100">
          <div>
            <span className="text-slate-600 font-medium text-sm">Current Zapier Cost</span>
            <span className="block text-[11px] text-slate-400">
              {monthlyTasks.toLocaleString()} tasks/mo
            </span>
          </div>
          <div className="text-2xl font-bold text-slate-900 font-mono">
            ${zapierMonthlyCost.toFixed(2)}
            <small className="text-xs text-slate-400 font-sans font-normal ml-1">/mo</small>
          </div>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-slate-100">
          <div>
            <span className="text-slate-600 font-medium text-sm">Estimated Make.com Cost</span>
            <span className="block text-[11px] text-violet-600 font-medium">
              {estimatedMakeCredits.toLocaleString()} credits/mo ({selectedMakeTier})
              {extraPacksCount > 0 && ` +${extraPacksCount} extra pack${extraPacksCount > 1 ? 's' : ''}`}
            </span>
          </div>
          <div className="text-2xl font-bold text-violet-600 font-mono">
            ${makeMonthlyCost.toFixed(2)}
            <small className="text-xs text-violet-400 font-sans font-normal ml-1">/mo</small>
          </div>
        </div>
      </div>

      <div className="bg-violet-600 rounded-xl p-6 sm:p-8 text-white shadow-xl shadow-violet-200">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 mb-2">
          Estimated Net Savings
        </p>
        <div className="flex flex-wrap items-baseline gap-3">
          <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight">
            ${annualSavings > 0 ? annualSavings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00'}
          </span>
          <span className="text-sm font-medium opacity-80 underline underline-offset-4">
            per year (${monthlySavings.toFixed(2)}/mo)
          </span>
        </div>
      </div>

      <p className="text-[11px] text-slate-500 italic text-center sm:text-left">
        This is an estimate based on typical migration patterns. Actual savings depend on your specific workflow complexity.
      </p>

      <div className="space-y-2 pt-1">
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>Expense Comparison</span>
          <span className="text-violet-600 font-bold font-mono">
            Save ${monthlySavings.toFixed(2)} / month
          </span>
        </div>
        <div className="space-y-2">
          <div>
            <div className="flex justify-between text-[11px] text-slate-400 mb-1 font-mono">
              <span>Zapier</span>
              <span>${zapierMonthlyCost.toFixed(2)}</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-slate-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (zapierMonthlyCost / Math.max(zapierMonthlyCost, makeMonthlyCost, 1)) * 100)}%` }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[11px] text-slate-400 mb-1 font-mono">
              <span>Make.com</span>
              <span className="text-violet-600 font-bold">${makeMonthlyCost.toFixed(2)}</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-violet-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (makeMonthlyCost / Math.max(zapierMonthlyCost, makeMonthlyCost, 1)) * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
        <p className="text-[10px] text-slate-500 leading-normal">
          <span className="font-bold text-slate-700">Assumption:</span> Make.com operations are modeled at a <strong>1:1.2 task-to-credit ratio</strong> (20% safety buffer) to ensure conservative, defensible savings estimates.
        </p>
      </div>
    </div>
  );
};
