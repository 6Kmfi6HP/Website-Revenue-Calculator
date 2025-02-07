import { CalculatorInputs, CalculationResults, Constants } from '../types';
import { CALCULATOR_CONSTANTS } from '../constants';

export function calculateResults(
  inputs: CalculatorInputs,
  constants: Constants = CALCULATOR_CONSTANTS
): CalculationResults {
  // Calculate revenue per user
  const revenuePerUser = (
    (inputs.adRevenuePerThousandViews * inputs.pageviewsPerVisitor / 1000) +
    (inputs.saasRevenuePerThousandVisitors / 1000)
  );

  // Daily income target
  const dailyIncomeTarget = inputs.monthlyIncomeTarget / 30;

  // Get CTR based on target ranking position
  const clickThroughRate = constants.clickThroughRates[inputs.targetRankingPosition as keyof typeof constants.clickThroughRates] || 0.102;

  // Visitors needed per website
  const visitorsPerWebsite = Math.ceil(
    (dailyIncomeTarget / inputs.websiteCount) / revenuePerUser
  );

  // Page views per website
  const pageViewsPerWebsite = visitorsPerWebsite * inputs.pageviewsPerVisitor;

  // Required keyword search volume
  const keywordSearchVolume = Math.ceil(
    visitorsPerWebsite / clickThroughRate
  );

  // Backlink calculations
  const backlinksPerWebsite = constants.backlinksPerWebsite;
  const backlinkCostPerWebsite = constants.totalBacklinkBudget / inputs.websiteCount;
  const averageBacklinkCost = backlinkCostPerWebsite / backlinksPerWebsite;

  // ROI calculations
  const annualRevenue = inputs.monthlyIncomeTarget * 12;
  const roi = annualRevenue / constants.totalBacklinkBudget;

  return {
    dailyIncomeTarget,
    visitorsPerWebsite,
    pageViewsPerWebsite,
    keywordSearchVolume,
    backlinksPerWebsite,
    backlinkCostPerWebsite,
    averageBacklinkCost,
    annualRevenue,
    roi,
    revenuePerUser,
  };
}