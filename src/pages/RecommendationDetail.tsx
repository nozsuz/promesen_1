import React from 'react';
import { useParams } from 'react-router-dom';
import { FileText, CheckCircle, Clock, ArrowRight, Calendar, Target, BarChart as ChartBar } from 'lucide-react';

const mockRecommendation = {
  id: '1',
  title: 'リソース使用量の最適化',
  priority: 'high',
  overview: 'クラウドコストを考慮したバッチサイズの選定と実装方法について',
  description: `
    AIモデルの最適化において、計算リソースの効率的な使用は重要な課題です。
    特に大規模なデータセットを扱う場合、適切なバッチサイズの選定が
    トレーニング時間とコストに大きな影響を与えます。
  `,
  implementation: {
    steps: [
      {
        title: '現状分析',
        description: 'メモリ使用量とGPU使用率の計測を行い、現在のボトルネックを特定',
        duration: '1-2日'
      },
      {
        title: 'パラメータ調整',
        description: 'バッチサイズと学習率の最適な組み合わせを実験的に決定',
        duration: '3-4日'
      },
      {
        title: 'モニタリング設定',
        description: 'リソース使用量の継続的な監視システムの構築',
        duration: '2-3日'
      }
    ]
  },
  expectedOutcomes: [
    {
      metric: 'トレーニング時間',
      current: '24時間/エポック',
      target: '8時間/エポック',
      impact: 'high'
    },
    {
      metric: 'GPUコスト',
      current: '10万円/月',
      target: '3万円/月',
      impact: 'high'
    },
    {
      metric: 'メモリ使用量',
      current: '32GB',
      target: '16GB',
      impact: 'medium'
    }
  ],
  risks: [
    {
      type: '技術的リスク',
      description: '小さすぎるバッチサイズによる学習の不安定化',
      mitigation: '段階的な調整と継続的なモニタリング'
    },
    {
      type: '運用リスク',
      description: 'システム移行時のダウンタイム',
      mitigation: '週末の低負荷時間帯での実施'
    }
  ]
};

export default function RecommendationDetail() {
  const { id } = useParams();
  const recommendation = mockRecommendation;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-6">
        {/* ヘッダー */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <FileText className="w-6 h-6 mr-2" />
              推奨アクション詳細
            </h2>
          </div>
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{recommendation.title}</h1>
                <p className="text-gray-600">{recommendation.overview}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                recommendation.priority === 'high'
                  ? 'bg-red-100 text-red-600'
                  : 'bg-yellow-100 text-yellow-600'
              }`}>
                優先度：{recommendation.priority === 'high' ? '高' : '中'}
              </span>
            </div>
          </div>
        </div>

        {/* 詳細説明 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">詳細説明</h3>
            <p className="text-gray-600 whitespace-pre-line">{recommendation.description}</p>
          </div>
        </div>

        {/* 実装ステップ */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b">
            <h3 className="font-semibold text-gray-800 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-gray-600" />
              実装ステップ
            </h3>
          </div>
          <div className="p-6">
            <div className="grid gap-4">
              {recommendation.implementation.steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-medium">
                        {index + 1}
                      </span>
                      <h4 className="font-medium text-gray-800">{step.title}</h4>
                    </div>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      想定期間: {step.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 期待される成果 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b">
            <h3 className="font-semibold text-gray-800 flex items-center">
              <Target className="w-5 h-5 mr-2 text-gray-600" />
              期待される成果
            </h3>
          </div>
          <div className="p-6">
            <div className="grid gap-4">
              {recommendation.expectedOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-800">{outcome.metric}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        outcome.impact === 'high'
                          ? 'bg-green-100 text-green-600'
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        インパクト: {outcome.impact === 'high' ? '大' : '中'}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">現在</p>
                        <p className="font-medium text-gray-700">{outcome.current}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">目標</p>
                        <p className="font-medium text-green-600">{outcome.target}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* リスクと対策 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b">
            <h3 className="font-semibold text-gray-800">リスクと対策</h3>
          </div>
          <div className="p-6">
            <div className="grid gap-4">
              {recommendation.risks.map((risk, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium text-gray-800">{risk.type}</h4>
                  </div>
                  <p className="text-gray-600 mb-2">{risk.description}</p>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="font-medium text-gray-700">対策:</span>
                    <span className="text-gray-600">{risk.mitigation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}