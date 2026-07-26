import React from 'react';
import { HelpCircle, Layers, DollarSign } from 'lucide-react';
import { ZapierPlanId } from '../types';
import { ZAPIER_PLANS, QUICK_TASK_PRESETS } from '../data/pricingData';

interface CalculatorInputsProps {
  selectedPlanId: ZapierPlanId;
  onPlanChange: (planId: ZapierPlanId) => void;
  monthlyTasks: number;
  onTasksChange: (tasks: number) => void;
  customPrice: string;
  onCustomPriceChange: (price: string) => void;
}

export const CalculatorInputs: React.FC<CalculatorInputsProps> = ({
  selectedPlanId,
  onPlanChange,
  monthlyTasks,
  onTasksChange,
  customPrice,
  onCustomPriceChange
}) => {
  const isHigherTierSelected = selectedPlanId === 'professional_higher' || selectedPlanId === 'custom';

  return (
    <div className="bg-slate-50/70 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
        <div>
          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Configuration
          </span>
          <h2 className="text-lg font-extrabold text-slate-900 tracking-tight uppercase">
            1. Your Current Setup
          </h2>
        </div>
        <span className="text-[10px] font-bold px-2.5 py-1 bg-violet-100 text-violet-700 rounded uppercase tracking-wider">
          Inputs 01 - 02
        </span>
      </div>

      <div className="space-y-2">
        <label htmlFor="zapier-plan-select" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          Input 01: Current Zapier Plan Tier
        </label>
        <div className="relative">
          <select
            id="zapier-plan-select"
            value={selectedPlanId}
            onChange={(e) => onPlanChange(e.target.value as ZapierPlanId)}
            className="w-full appearance-none bg-white border border-slate-300 px-4 py-3.5 rounded-lg text-slate-800 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer pr-10 shadow-xs"
          >
            {ZAPIER_PLANS.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {plan.label} {plan.monthlyPrice > 0 ? `($${plan.monthlyPrice}/mo)` : '(Free)'}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
            <Layers className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="space-y-2 pt-1">
        <div className="flex items-center justify-between">
          <label htmlFor="monthly-tasks-input" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Input 02: Monthly Task Volume
          </label>
          <span className="text-[10px] font-bold uppercase tracking-wider text-violet-600">Editable</span>
        </div>
        <div className="relative">
          <input
            id="monthly-tasks-input"
            type="number"
            min="0"
            step="50"
            value={monthlyTasks || ''}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              onTasksChange(isNaN(val) ? 0 : val);
            }}
            placeholder="Check your Zapier dashboard under Settings → Billing"
            className="w-full bg-white border border-slate-300 px-4 py-3.5 rounded-lg text-slate-800 font-mono text-xl font-bold focus:outline-none focus:ring-2 focus:ring-violet-500 shadow-xs"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-xs font-mono font-bold text-slate-400 pointer-events-none">
            tasks / mo
          </div>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed italic flex items-center gap-1.5 pt-1">
          <HelpCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 not-italic" />
          <span>Check your Zapier dashboard under <strong className="font-semibold text-slate-600 not-italic">Settings → Billing</strong> for exact usage.</span>
        </p>
        <div className="pt-3">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
            Preset Task Volumes:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {QUICK_TASK_PRESETS.map((preset) => {
              const isActive = monthlyTasks === preset.value;
              return (
                <button
                  key={preset.value}
                  type="button"
                  onClick={() => onTasksChange(preset.value)}
                  className={`px-3 py-1.5 text-xs font-mono font-semibold rounded-md border transition ${
                    isActive
                      ? 'bg-violet-600 text-white border-violet-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {preset.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {isHigherTierSelected && (
        <div className="pt-4 border-t border-slate-200/80 space-y-2 animate-fadeIn">
          <div className="flex items-center justify-between">
            <label htmlFor="custom-price-input" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Input 02b: Custom Zapier Monthly Invoice ($)
            </label>
            <span className="text-[10px] text-slate-400">Optional Override</span>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <DollarSign className="w-4 h-4" />
            </div>
            <input
              id="custom-price-input"
              type="number"
              min="0"
              step="0.01"
              value={customPrice}
              onChange={(e) => onCustomPriceChange(e.target.value)}
              placeholder="e.g. 89.00 or 129.00"
              className="w-full pl-9 pr-4 py-3 bg-white rounded-lg border border-slate-300 text-slate-800 font-mono text-sm font-bold focus:outline-none focus:ring-2 focus:ring-violet-500 shadow-xs"
            />
          </div>
        </div>
      )}
    </div>
  );
};
