export interface CalculatorInputs {
  monthlyIncomeTarget: number;
  websiteCount: number;
  keywordsPerWebsite: number;
  targetRankingPosition: number;
  adRevenuePerThousandViews: number;
  saasRevenuePerThousandVisitors: number;
  pageviewsPerVisitor: number;
  keywordDifficulty: number;
}

export interface CalculationResults {
  dailyIncomeTarget: number;
  visitorsPerWebsite: number;
  pageViewsPerWebsite: number;
  keywordSearchVolume: number;
  backlinksPerWebsite: number;
  backlinkCostPerWebsite: number;
  averageBacklinkCost: number;
  annualRevenue: number;
  roi: number;
  revenuePerUser: number;
}

export interface Constants {
  backlinksPerWebsite: number;
  totalBacklinkBudget: number;
  clickThroughRates: Record<number, number>;
}