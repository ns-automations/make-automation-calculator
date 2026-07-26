import React, { useState } from 'react';
import { ZapierPlanId, MakeTier } from './types';
import { ZAPIER_PLANS } from './data/pricingData';
import { calculateSavings } from './utils/calculator';
import { Header } from './components/Header';
import { CalculatorInputs } from './components/CalculatorInputs';
import { SavingsResults } from './components/SavingsResults';
import { CTAButtons } from './components/CTAButtons';
import { ComparisonDetails } from './components/ComparisonDetails';
import { SeoContentBlock } from './components/SeoContentBlock';
import { VideoEmbedSection } from './components/VideoEmbedSection';
import { FAQSection } from './components/FAQSection';
import { FreeMigrationModal } from './components/FreeMigrationModal';
import { CheckCircle2, ShieldCheck, TrendingDown } from 'lucide-react';

export default function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<ZapierPlanId>('professional');
  const [monthlyTasks, setMonthlyTasks] = useState<number>(750);
  const [customPrice, setCustomPrice] = useState<string>('');
  const [selectedMakeTier, setSelectedMakeTier] = useState<MakeTier>('Core');

  const [isMigrationModalOpen, setIsMigrationModalOpen] = useState<boolean>(false);

  // When Zapier plan dropdown changes, update default tasks and price input
  const handlePlanChange = (planId: ZapierPlanId) => {
    setSelectedPlanId(planId);
    const plan = ZAPIER_PLANS.find(p => p.id === planId);
    if (plan) {
      setMonthlyTasks(plan.defaultTasks);
      setCustomPrice('');
    }
  };

  // Calculate live results
  const parsedCustomPrice = customPrice !== '' ? parseFloat(customPrice) : undefined;
  const results = calculateSavings(
    selectedPlanId,
    monthlyTasks,
    isNaN(parsedCustomPrice!) ? undefined : parsedCustomPrice,
    selectedMakeTier
  );

  const selectedPlanObj = ZAPIER_PLANS.find(p => p.id === selectedPlanId);
  const selectedPlanLabel = selectedPlanObj ? selectedPlanObj.label : 'Zapier Plan';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col antialiased selection:bg-violet-600 selection:text-white">
      {/* Header */}
      <Header
        onOpenMigrationForm={() => setIsMigrationModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-8 py-8 sm:py-10 space-y-8">
        {/* Top Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block px-3 py-1 bg-violet-100 text-violet-700 text-[10px] font-bold rounded uppercase tracking-widest border border-violet-200">
            Geometric Analysis Model
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase leading-tight">
            Zapier vs Make.com Savings Calculator
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Calculate your operational cost reduction when migrating automations from Zapier to Make.com. Most organizations cut recurring platform fees by <strong>60% to 85%</strong>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-semibold text-slate-500 uppercase tracking-wider pt-1">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-violet-600" />
              100% Free Instant ROI
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-violet-600" />
              July 2026 Pricing Benchmarks
            </span>
            <span className="flex items-center gap-1.5">
              <TrendingDown className="w-3.5 h-3.5 text-violet-600" />
              1:1.2 Safety Conversion Ratio
            </span>
          </div>
        </div>

        {/* Core Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Inputs Column */}
          <div className="lg:col-span-5">
            <CalculatorInputs
              selectedPlanId={selectedPlanId}
              onPlanChange={handlePlanChange}
              monthlyTasks={monthlyTasks}
              onTasksChange={setMonthlyTasks}
              customPrice={customPrice}
              onCustomPriceChange={setCustomPrice}
            />
          </div>

          {/* Right Results Column */}
          <div className="lg:col-span-7">
            <SavingsResults
              results={results}
              selectedMakeTier={selectedMakeTier}
              onMakeTierChange={setSelectedMakeTier}
            />
          </div>
        </div>

        {/* 3 Call to Action Buttons */}
        <CTAButtons
          onOpenMigrationForm={() => setIsMigrationModalOpen(true)}
          monthlySavings={results.monthlySavings}
        />

        {/* Side by Side Comparison Details Table */}
        <ComparisonDetails />

        {/* SEO Content Block (~250 words) */}
        <SeoContentBlock />

        {/* Video Embed Section */}
        <VideoEmbedSection />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 mt-12 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left font-medium">
            <p className="tracking-wide text-[11px]">
              © {new Date().getFullYear()} Make Automation Calculator — Zapier to Make.com Savings Calculator.
            </p>
            <div className="flex items-center gap-4 text-slate-600 text-[11px] uppercase font-bold tracking-wider">
              <button
                onClick={() => setIsMigrationModalOpen(true)}
                className="hover:text-violet-600 transition"
              >
                Free Migration
              </button>
              <a
                href="https://www.fiverr.com/s/42e3D4m"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-600 transition"
              >
                Fiverr Service
              </a>
              <a
                href="https://www.make.com/en/register?pc=automakecalc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-600 transition"
              >
                Make.com
              </a>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 text-[10px] text-slate-400 text-center sm:text-left leading-relaxed">
            This page contains an affiliate link to Make.com. Signing up through it gets you a free 1-month trial of the Pro plan (10,000 credits, no cost), after which your account moves to the Free plan unless you choose to continue on a paid tier. I may earn a commission at no extra cost to you. Pricing figures verified as of July 2026. Always confirm current rates directly with Zapier and Make.com before making a decision.
          </div>
        </div>
      </footer>

      {/* Free Migration Request Modal */}
      <FreeMigrationModal
        isOpen={isMigrationModalOpen}
        onClose={() => setIsMigrationModalOpen(false)}
        selectedPlanLabel={selectedPlanLabel}
        monthlyTasks={monthlyTasks}
        monthlySavings={results.monthlySavings}
        onLeadSubmitted={() => {}}
      />
    </div>
  );
}

