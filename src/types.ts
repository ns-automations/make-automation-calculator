export type ZapierPlanId = 'free' | 'professional' | 'professional_higher' | 'team' | 'custom';

export interface ZapierPlanOption {
  id: ZapierPlanId;
  label: string;
  defaultTasks: number;
  monthlyPrice: number;
  description?: string;
}

export type MakeTier = 'Core' | 'Pro' | 'Teams';

export interface MakePlanOption {
  tier: MakeTier;
  name: string;
  basePrice: number;
  baseCredits: number;
  description: string;
  features: string[];
}

export interface CalculationResult {
  monthlyTasks: number;
  estimatedMakeCredits: number;
  zapierMonthlyCost: number;
  makeMonthlyCost: number;
  monthlySavings: number;
  annualSavings: number;
  savingsPercentage: number;
  makeTier: MakeTier;
  extraPacksCount: number;
  extraPacksCost: number;
}

export interface LeadSubmission {
  id: string;
  name: string;
  email: string;
  workflowDetails: string;
  zapierPlan: string;
  monthlyTasks: number;
  estimatedMonthlySavings: number;
  submittedAt: string;
}
