import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Calculator as CalculatorIcon, 
  DollarSign, 
  Globe, 
  KeyRound,
  Target,
  BarChart3,
  Activity,
  Gauge
} from 'lucide-react';
import { CalculatorInputs, CalculationResults } from '../types';
import { calculateResults } from '../utils/calculations';
import { CALCULATOR_CONSTANTS } from '../constants';

const initialInputs: CalculatorInputs = {
  monthlyIncomeTarget: 1000,
  websiteCount: 1,
  keywordsPerWebsite: 1,
  targetRankingPosition: 3,
  adRevenuePerThousandViews: 5,
  saasRevenuePerThousandVisitors: 100,
  pageviewsPerVisitor: 2,
  keywordDifficulty: 30,
};

export function Calculator() {
  const { t } = useTranslation();
  const [inputs, setInputs] = useState<CalculatorInputs>(initialInputs);
  const results = calculateResults(inputs);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: Math.max(1, Number(value)),
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="h-full flex flex-col space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <CalculatorIcon className="w-5 h-5 text-indigo-600" />
                {t('basicParameters.title')}
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('basicParameters.monthlyIncome')}
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      name="monthlyIncomeTarget"
                      value={inputs.monthlyIncomeTarget}
                      onChange={handleInputChange}
                      min="1"
                      className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('basicParameters.websiteCount')}
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      name="websiteCount"
                      value={inputs.websiteCount}
                      onChange={handleInputChange}
                      min="1"
                      className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('basicParameters.keywordsPerWebsite')}
                  </label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      name="keywordsPerWebsite"
                      value={inputs.keywordsPerWebsite}
                      onChange={handleInputChange}
                      min="1"
                      className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-semibold mb-6 mt-8 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-indigo-600" />
                {t('revenueParameters.title')}
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('revenueParameters.adRevenue')}
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      name="adRevenuePerThousandViews"
                      value={inputs.adRevenuePerThousandViews}
                      onChange={handleInputChange}
                      min="0"
                      step="0.1"
                      className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('revenueParameters.saasRevenue')}
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      name="saasRevenuePerThousandVisitors"
                      value={inputs.saasRevenuePerThousandVisitors}
                      onChange={handleInputChange}
                      min="0"
                      step="0.1"
                      className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('revenueParameters.pageviews')}
                  </label>
                  <div className="relative">
                    <Activity className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      name="pageviewsPerVisitor"
                      value={inputs.pageviewsPerVisitor}
                      onChange={handleInputChange}
                      min="1"
                      step="0.1"
                      className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-semibold mb-6 mt-8 flex items-center gap-2">
                <Target className="w-5 h-5 text-indigo-600" />
                {t('seoParameters.title')}
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('seoParameters.rankingPosition')}
                  </label>
                  <div className="relative">
                    <Target className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      name="targetRankingPosition"
                      value={inputs.targetRankingPosition}
                      onChange={handleInputChange}
                      min="1"
                      max="5"
                      className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {t('revenueParameters.ctr', {
                      rate: (CALCULATOR_CONSTANTS.clickThroughRates[inputs.targetRankingPosition as keyof typeof CALCULATOR_CONSTANTS.clickThroughRates] * 100).toFixed(1)
                    })}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('seoParameters.keywordDifficulty')}
                  </label>
                  <div className="relative">
                    <Gauge className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      name="keywordDifficulty"
                      value={inputs.keywordDifficulty}
                      onChange={handleInputChange}
                      min="0"
                      max="100"
                      className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 h-full">
              <h2 className="text-xl font-semibold mb-6">{t('results.title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ResultCard
                  title={t('results.daily.title')}
                  items={[
                    { label: t('results.daily.incomeTarget'), value: `$${results.dailyIncomeTarget.toFixed(2)}` },
                    { label: t('results.daily.visitors'), value: results.visitorsPerWebsite },
                    { label: t('results.daily.pageViews'), value: results.pageViewsPerWebsite },
                    { label: t('results.daily.searchVolume'), value: results.keywordSearchVolume },
                  ]}
                />
                <ResultCard
                  title={t('results.revenue.title')}
                  items={[
                    { label: t('results.revenue.perUser'), value: `$${results.revenuePerUser.toFixed(3)}` },
                    { label: t('results.revenue.annual'), value: `$${results.annualRevenue.toFixed(2)}` },
                    { label: t('results.revenue.roi'), value: `${results.roi.toFixed(2)}x` },
                  ]}
                />
                <ResultCard
                  title={t('results.backlinks.title')}
                  items={[
                    { label: t('results.backlinks.perWebsite'), value: results.backlinksPerWebsite },
                    { label: t('results.backlinks.cost'), value: `$${results.backlinkCostPerWebsite.toFixed(2)}` },
                    { label: t('results.backlinks.averageCost'), value: `$${results.averageBacklinkCost.toFixed(2)}` },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ResultCardProps {
  title: string;
  items: Array<{ label: string; value: string | number }>;
}

function ResultCard({ title, items }: ResultCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-600">{item.label}:</span>
            <span className="font-medium text-gray-900">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}