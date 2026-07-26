import { ZapierPlanOption, MakePlanOption } from '../types';

// Zapier pricing reference (July 2026 reference rates - annual billing base)
export const ZAPIER_PLANS: ZapierPlanOption[] = [
  {
    id: 'free',
    label: 'Free (100 tasks/mo)',
    defaultTasks: 100,
    monthlyPrice: 0,
    description: '100 tasks/mo, 100 Zaps, 15-min update speed'
  },
  {
    id: 'professional',
    label: 'Professional (750 tasks/mo)',
    defaultTasks: 750,
    monthlyPrice: 19.99,
    description: '750 tasks/mo, unlimited Zaps, multi-step Zaps'
  },
  {
    id: 'professional_higher',
    label: 'Professional — higher tier (custom task count)',
    defaultTasks: 5000,
    monthlyPrice: 89,
    description: 'Custom high volume (e.g. 1.5k, 2k, 5k, 10k, 20k, 50k tasks)'
  },
  {
    id: 'team',
    label: 'Team (2,000 tasks/mo)',
    defaultTasks: 2000,
    monthlyPrice: 69,
    description: '2,000 tasks/mo, unlimited users, folder permissions'
  },
  {
    id: 'custom',
    label: "Not sure / I'll estimate by tasks",
    defaultTasks: 1000,
    monthlyPrice: 29.99,
    description: 'Specify your estimated monthly task volume directly'
  }
];

// Helper to look up approximate Zapier price for higher task volumes
export function estimateZapierCostByTasks(tasks: number): number {
  if (tasks <= 100) return 0;
  if (tasks <= 750) return 19.99;
  if (tasks <= 1500) return 39.00;
  if (tasks <= 2000) return 49.00;
  if (tasks <= 5000) return 89.00;
  if (tasks <= 10000) return 129.00;
  if (tasks <= 20000) return 189.00;
  if (tasks <= 50000) return 299.00;
  if (tasks <= 100000) return 599.00;
  
  // Beyond 100k, approx $5.50 per 1,000 extra tasks
  return 599 + Math.ceil((tasks - 100000) / 1000) * 5.50;
}

// Make.com pricing reference (July 2026 rates)
export const MAKE_PLANS: MakePlanOption[] = [
  {
    tier: 'Core',
    name: 'Core Plan',
    basePrice: 10.59,
    baseCredits: 10000,
    description: 'Essential features for automation growth',
    features: ['10,000 operations/mo included', 'Unlimited active scenarios', 'Min. 1-minute execution intervals']
  },
  {
    tier: 'Pro',
    name: 'Pro Plan',
    basePrice: 18.82,
    baseCredits: 10000,
    description: 'Advanced capabilities with priority execution',
    features: ['10,000 operations/mo included', 'Priority execution queue', 'Custom variables & advanced tools']
  },
  {
    tier: 'Teams',
    name: 'Teams Plan',
    basePrice: 34.12,
    baseCredits: 10000,
    description: 'Team collaboration with shared workspaces',
    features: ['10,000 operations/mo included', 'Multi-user workspace roles', 'Shared templates & scenario history']
  }
];

// Extra credits per 10,000 credit pack on Make.com
export const EXTRA_CREDITS_PER_10K_PRICE = 11.00;

// Conversion ratio: Zapier task to Make operation/credit
// Zapier tasks and Make operations are not 1:1.
// Simple workflows map 1:1, but triggers/filters/routers in Make can consume extra credits.
// Using 1.2 ratio (20% safety margin) produces a conservative, defensible estimate.
export const ZAPIER_TO_MAKE_CREDIT_RATIO = 1.2;

// Quick preset task counts for standard testing / comparison
export const QUICK_TASK_PRESETS = [
  { label: '750', value: 750 },
  { label: '2,000', value: 2000 },
  { label: '5,000', value: 5000 },
  { label: '10,000', value: 10000 },
  { label: '25,000', value: 25000 },
  { label: '50,000', value: 50000 }
];
