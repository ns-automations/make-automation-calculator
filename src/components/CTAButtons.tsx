import React from 'react';
import { Sparkles, ExternalLink, ArrowRight, UserCheck } from 'lucide-react';

interface CTAButtonsProps { onOpenMigrationForm: () => void; monthlySavings: number; }

export const CTAButtons: React.FC<CTAButtonsProps> = ({ onOpenMigrationForm }) => {
  return (
    <div className="bg-slate-900 rounded-xl p-6 sm:p-8 text-white space-y-4">
      <div className="text-center space-y-1 mb-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-400">Action Pathways</span>
        <h3 className="text-xl font-extrabold tracking-tight text-white uppercase">Choose Your Migration Strategy</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <button onClick={onOpenMigrationForm} className="flex flex-col items-center justify-center bg-violet-600 hover:bg-violet-500 text-white rounded-lg py-4 px-6 transition-colors shadow-lg shadow-violet-900/30 group border border-violet-500/50" id="cta-free-migration-btn">
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 mb-1 flex items-center gap-1"><Sparkles className="w-3 h-3" />Priority</span>
          <span className="font-bold text-sm sm:text-base flex items-center gap-2">Get My Free Migration<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></span>
          <span className="text-[10px] opacity-75 mt-1 font-normal">1 Zap / 2 Apps integrated free</span>
        </button>
        <a href="https://www.make.com/en/register?pc=automakecalc" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg py-4 px-6 transition-colors text-center group" id="cta-try-make-btn">
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">Self-Service</span>
          <span className="font-bold text-sm sm:text-base flex items-center gap-1.5">Try Make.com Yourself<ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" /></span>
          <span className="text-[10px] opacity-60 mt-1 font-normal text-center">Get 1 month Pro free — 10,000 credits, no cost</span>
        </a>
        <a href="https://www.fiverr.com/s/42e3D4m" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg py-4 px-6 transition-colors text-center group" id="cta-hire-fiverr-btn">
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1 flex items-center gap-1"><UserCheck className="w-3 h-3 text-emerald-400" />Outsourced</span>
          <span className="font-bold text-sm sm:text-base flex items-center gap-1.5">Hire Me to Migrate Zaps<ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" /></span>
          <span className="text-[10px] opacity-60 mt-1 font-normal">Complex workflows via Fiverr</span>
        </a>
      </div>
    </div>
  );
};