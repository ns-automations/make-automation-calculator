import React from 'react';
import { Zap, Sparkles, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenMigrationForm: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMigrationForm
}) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-between">
        {/* Brand & Title */}
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white shadow-xs">
              <Zap className="w-4 h-4 fill-current" />
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-none uppercase">
              Migration Value Calculator
            </h1>
          </div>
          <p className="text-slate-500 mt-1 text-xs font-medium tracking-wide hidden sm:block">
            Optimize your automation stack overhead for July 2026
          </p>
        </div>

        {/* Action Badges & Buttons */}
        <div className="flex items-center gap-3">
          <span className="hidden md:inline-block px-3 py-1 bg-violet-100 text-violet-700 text-[10px] font-bold rounded uppercase tracking-widest border border-violet-200">
            Ref: ZP-2026-MK
          </span>

          {/* Quick Migration Link */}
          <button
            onClick={onOpenMigrationForm}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-violet-600 hover:bg-violet-500 rounded-lg shadow-sm transition"
            id="header-free-migration-btn"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Free Migration</span>
            <ArrowRight className="w-3 h-3 hidden sm:inline" />
          </button>
        </div>
      </div>
    </header>
  );
};

