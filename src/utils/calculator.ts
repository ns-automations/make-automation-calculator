import { ZapierPlanId, MakeTier, CalculationResult } from '../types';
import {
  ZAPIER_PLANS,
  MAKE_PLANS,
  EXTRA_CREDITS_PER_10K_PRICE,
  ZAPIER_TO_MAKE_CREDIT_RATIO,
  estimateZapierCostByTasks
} from '../data/pricingData';

export function calculateMakeCostForTier(
  monthlyTasks: number,
  tier: MakeTier = 'Core'
): {
  makeCost: number;
  estimatedCredits: number;
  extraPacksCount: number;
  extraPacksCost: number;
} {
  const estimatedCredits = Math.round(monthlyTasks * ZAPIER_TO_MAKE_CREDIT_RATIO);
  
  // Free tier on Make is 1,000 credits for $0
  if (estimatedCredits <= 1000 && tier === 'Core') {
    return {
      makeCost: 0,
      estimatedCredits,
      extraPacksCount: 0,
      extraPacksCost: 0
    };
  }

  const selectedMakePlan = MAKE_PLANS.find(p => p.tier === tier) || MAKE_PLANS[0];
  let basePrice = selectedMakePlan.basePrice;
  let extraPacksCount = 0;
  let extraPacksCost = 0;

  if (estimatedCredits > 10000) {
    extraPacksCount = Math.ceil((estimatedCredits - 10000) / 10000);
    extraPacksCost = extraPacksCount * EXTRA_CREDITS_PER_10K_PRICE;
    basePrice += extraPacksCost;
  }

  return {
    makeCost: Number(basePrice.toFixed(2)),
    estimatedCredits,
    extraPacksCount,
    extraPacksCost: Number(extraPacksCost.toFixed(2))
  };
}

export function calculateZapierCost(
  planId: ZapierPlanId,
  monthlyTasks: number,
  customZapierPrice?: number
): number {
  if (customZapierPrice !== undefined && customZapierPrice >= 0) {
    return customZapierPrice;
  }

  const plan = ZAPIER_PLANS.find(p => p.id === planId);
  if (!plan) return estimateZapierCostByTasks(monthlyTasks);

  if (planId === 'free') return 0;
  if (planId === 'professional' && monthlyTasks <= 750) return 19.99;
  if (planId === 'team' && monthlyTasks <= 2000) return 69.00;

  // If user selected higher tier or task volume exceeds base plan task count, calculate estimated Zapier cost
  return estimateZapierCostByTasks(monthlyTasks);
}

export function calculateSavings(
  planId: ZapierPlanId,
  monthlyTasks: number,
  customZapierPrice?: number,
  makeTier: MakeTier = 'Core'
): CalculationResult {
  const zapierMonthlyCost = calculateZapierCost(planId, monthlyTasks, customZapierPrice);
  const makeDetails = calculateMakeCostForTier(monthlyTasks, makeTier);
  const makeMonthlyCost = makeDetails.makeCost;
  
  const monthlySavings = Number((zapierMonthlyCost - makeMonthlyCost).toFixed(2));
  const annualSavings = Number((monthlySavings * 12).toFixed(2));
  
  const savingsPercentage = zapierMonthlyCost > 0 
    ? Math.round(((zapierMonthlyCost - makeMonthlyCost) / zapierMonthlyCost) * 100)
    : 0;

  return {
    monthlyTasks,
    estimatedMakeCredits: makeDetails.estimatedCredits,
    zapierMonthlyCost,
    makeMonthlyCost,
    monthlySavings,
    annualSavings,
    savingsPercentage,
    makeTier,
    extraPacksCount: makeDetails.extraPacksCount,
    extraPacksCost: makeDetails.extraPacksCost
  };
}
