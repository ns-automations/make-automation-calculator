import React, { useState } from 'react';
import { X, Sparkles, CheckCircle, Send, ShieldCheck, ArrowRight } from 'lucide-react';
import { LeadSubmission } from '../types';

interface FreeMigrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanLabel: string;
  monthlyTasks: number;
  monthlySavings: number;
  onLeadSubmitted: (newLead: LeadSubmission) => void;
}

export const FreeMigrationModal: React.FC<FreeMigrationModalProps> = ({
  isOpen,
  onClose,
  selectedPlanLabel,
  monthlyTasks,
  monthlySavings,
  onLeadSubmitted
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [workflowDetails, setWorkflowDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !workflowDetails.trim()) {
      setErrorMsg('Please complete all fields to claim your free migration.');
      return;
    }
    setIsSubmitting(true);
    setErrorMsg('');
    const newLead: LeadSubmission = {
      id: 'lead_' + Date.now(),
      name: name.trim(),
      email: email.trim(),
      workflowDetails: workflowDetails.trim(),
      zapierPlan: selectedPlanLabel,
      monthlyTasks,
      estimatedMonthlySavings: monthlySavings,
      submittedAt: new Date().toISOString()
    };
    try {
      const response = await fetch('https://hook.us2.make.com/2pvprc3s411o5lli1eexfocgcdsg463m', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newLead.name,
          email: newLead.email,
          workflowDetails: newLead.workflowDetails,
          zapierPlan: newLead.zapierPlan,
          monthlyTasks: newLead.monthlyTasks,
          estimatedMonthlySavings: newLead.estimatedMonthlySavings,
          submittedAt: newLead.submittedAt
        })
      });
      if (!response.ok) { throw new Error('Submission failed'); }
      setIsSubmitting(false);
      setIsSuccess(true);
      onLeadSubmitted(newLead);
    } catch (err) {
      console.error('Failed to submit lead:', err);
      setIsSubmitting(false);
      setErrorMsg('Something went wrong submitting your request. Please try again.');
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setName('');
    setEmail('');
    setWorkflowDetails('');
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden relative">
        <div className="bg-slate-900 text-white p-6 relative border-b border-slate-800">
          <button onClick={handleResetAndClose} className="absolute top-4 right-4 p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition" aria-label="Close modal">
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-violet-600 text-white font-bold text-[10px] uppercase tracking-widest">Complimentary Migration</span>
          </div>
          <h3 className="text-xl font-extrabold tracking-tight text-white flex items-center gap-2 uppercase">
            <Sparkles className="w-5 h-5 text-amber-300" />
            Claim Free 1-Zap Migration
          </h3>
          <p className="text-xs text-slate-400 mt-1">Convert 1 Zapier automation connecting up to 2 apps at zero cost.</p>
        </div>
        <div className="p-6 space-y-4">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-extrabold uppercase text-slate-900 tracking-tight">Request Confirmed!</h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto">
                  Thank you, <strong>{name}</strong>. We've recorded your request and will review your workflow at <strong>{email}</strong>.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-left border border-slate-200 text-xs space-y-1.5 font-mono">
                <div className="font-bold text-slate-800 border-b border-slate-200 pb-1 uppercase font-sans text-[10px] tracking-widest">Submission Summary:</div>
                <div><span className="text-slate-400">Monthly Savings:</span> <strong className="text-violet-600">${monthlySavings.toFixed(2)}/mo</strong></div>
                <div className="truncate"><span className="text-slate-400">Workflow:</span> <span className="text-slate-800">{workflowDetails}</span></div>
              </div>
              <div className="pt-2 flex flex-col gap-2">
                <a href="https://www.fiverr.com/s/42e3D4m" target="_blank" rel="noopener noreferrer" className="w-full py-3 px-4 bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition">
                  <span>Need Complex Multi-Zap Migration? View Fiverr Gig</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button onClick={handleResetAndClose} className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-lg">Close Window</button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-700 border border-red-200 rounded-lg text-xs font-semibold">{errorMsg}</div>
              )}
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-center justify-between text-xs text-slate-800 font-mono">
                <div>
                  <span className="text-slate-500 font-sans text-[10px] font-bold uppercase tracking-widest block">Projected Savings</span>
                  <span className="text-violet-600 font-bold text-sm">${monthlySavings.toFixed(2)}/mo</span>
                </div>
                <span className="text-[10px] text-slate-600 bg-slate-200 px-2 py-1 rounded font-bold uppercase tracking-wider">{monthlyTasks.toLocaleString()} tasks</span>
              </div>
              <div className="space-y-1">
                <label htmlFor="lead-name" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name <span className="text-red-500">*</span></label>
                <input id="lead-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Alex Johnson" className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-violet-500 shadow-xs" />
              </div>
              <div className="space-y-1">
                <label htmlFor="lead-email" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Work Email Address <span className="text-red-500">*</span></label>
                <input id="lead-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="alex@company.com" className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-violet-500 shadow-xs" />
              </div>
              <div className="space-y-1">
                <label htmlFor="lead-workflow" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Simple Zapier Workflow Description <span className="text-red-500">*</span></label>
                <textarea id="lead-workflow" rows={3} required value={workflowDetails} onChange={(e) => setWorkflowDetails(e.target.value)} placeholder="Describe your simple zap connecting up to 2 apps (e.g. Typeform to Slack/HubSpot)." className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none shadow-xs" />
              </div>
              <div className="pt-2">
                <button type="submit" disabled={isSubmitting} className="w-full py-3.5 px-4 bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs uppercase tracking-widest rounded-lg shadow-md flex items-center justify-center gap-2 transition disabled:opacity-50" id="submit-migration-form-btn">
                  {isSubmitting ? <span>Processing Request...</span> : <><Send className="w-4 h-4" /><span>Submit Free Migration Request</span></>}
                </button>
              </div>
              <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-violet-600" />
                <span>Your information is submitted securely and never shared.</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
