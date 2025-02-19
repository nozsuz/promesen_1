import React from 'react';
import { Sparkles, Star, ThumbsUp, Clock, ArrowRight, MessageSquare, Lightbulb } from 'lucide-react';

const caseStudies = [
  {
    id: '1',
    title: 'AIモデルの最適化で処理速度が3倍に',
    category: 'テクノロジー',
    challenge: 'ChatGPTが提案したAIモデルの最適化方法に不安があった',
    solution: '機械学習の専門家が詳細なレビューを行い、より効率的なアプローチを提案',
    result: '処理速度が3倍に向上し、コストも40%削減',
    expert: '山田太郎',
    expertTitle: 'AI研究者・博士（工学）',
    rating: 5,
    date: '2024年2月',
    details: {
      originalContent: `
        ChatGPTの回答:
        モデルの最適化には以下の手法が効果的です：
        1. バッチサイズの調整
        2. 学習率の最適化
        3. モデルの軽量化
        4. データの前処理の改善
      `,
      analysis: {
        summary: 'ChatGPTの提案は理論的には正しいものの、実務での適用には追加の考慮点が必要です。',
        strengths: [
          '基本的な最適化手法を網羅的に提示',
          '一般的なベストプラクティスに準拠',
          'ステップバイステップのアプローチ'
        ],
        weaknesses: [
          'リソース制約の考慮が不足',
          'ビジネス視点の欠如',
          'コスト効率の観点不足'
        ],
        recommendations: [
          {
            title: 'クラウドコストの最適化',
            description: 'AWS/GCPのコスト最適化機能の活用',
            priority: 'high'
          },
          {
            title: 'モニタリング体制の構築',
            description: 'リアルタイムのパフォーマンス監視',
            priority: 'medium'
          }
        ]
      }
    }
  },
  {
    id: '2',
    title: '新規事業戦略の見直しで売上150%達成',
    category: 'ビジネス',
    challenge: 'ChatGPTが提案した新規事業戦略の実現可能性を確認したかった',
    solution: '経営コンサルタントが市場分析と実現可能性の検証を実施',
    result: '戦略を一部修正し実行、前年比150%の売上を達成',
    expert: '鈴木花子',
    expertTitle: '経営戦略コンサルタント',
    rating: 5,
    date: '2024年1月'
  },
  {
    id: '3',
    title: '実験プロトコルの改善で成功率向上',
    category: '科学',
    challenge: 'ChatGPTが提案した実験手順の安全性と効率性を確認したかった',
    solution: '研究者が詳細なレビューを行い、より安全で効率的な手順を提案',
    result: '実験の成功率が85%から95%に向上',
    expert: '田中誠',
    expertTitle: '分子生物学研究者・博士',
    rating: 4,
    date: '2024年3月'
  }
];

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = React.useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
          <h2 className="text-xl font-semibold text-white flex items-center">
            <Sparkles className="w-6 h-6 mr-2" />
            成功事例
          </h2>
        </div>
        <div className="p-6">
          <div className="grid gap-8">
            {caseStudies.map(study => (
              <div key={study.id}>
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{study.title}</h3>
                    <span className="px-4 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">
                      {study.category}
                    </span>
                  </div>

                  <div className="grid gap-4 mb-6">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">課題</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">解決策</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">結果</h4>
                      <p className="text-green-600 font-medium">{study.result}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <div className="font-medium text-gray-800">{study.expert}</div>
                      <div className="text-sm text-gray-600">{study.expertTitle}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-600">{study.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium text-gray-600">{study.rating}.0</span>
                      </div>
                    </div>
                  </div>

                  {study.details && (
                    <button
                      onClick={() => setSelectedCase(selectedCase === study.id ? null : study.id)}
                      className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1"
                    >
                      {selectedCase === study.id ? '詳細を閉じる' : '詳細を見る'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* 詳細表示部分 */}
                {selectedCase === study.id && study.details && (
                  <div className="mt-4 grid gap-4">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="bg-gray-50 px-6 py-4 border-b">
                        <h4 className="font-semibold text-gray-800 flex items-center">
                          <MessageSquare className="w-5 h-5 mr-2 text-gray-600" />
                          ChatGPTの回答
                        </h4>
                      </div>
                      <div className="p-6">
                        <pre className="whitespace-pre-wrap text-gray-600 font-sans">
                          {study.details.originalContent}
                        </pre>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="bg-gray-50 px-6 py-4 border-b">
                        <h4 className="font-semibold text-gray-800 flex items-center">
                          <Lightbulb className="w-5 h-5 mr-2 text-gray-600" />
                          専門家の分析
                        </h4>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-800 mb-4">{study.details.analysis.summary}</p>
                        
                        <h5 className="font-medium text-gray-800 mb-2">優れている点</h5>
                        <ul className="list-disc list-inside mb-4 text-gray-600">
                          {study.details.analysis.strengths.map((strength, index) => (
                            <li key={index}>{strength}</li>
                          ))}
                        </ul>

                        <h5 className="font-medium text-gray-800 mb-2">改善が必要な点</h5>
                        <ul className="list-disc list-inside mb-4 text-gray-600">
                          {study.details.analysis.weaknesses.map((weakness, index) => (
                            <li key={index}>{weakness}</li>
                          ))}
                        </ul>

                        <h5 className="font-medium text-gray-800 mb-2">推奨アクション</h5>
                        <div className="space-y-3">
                          {study.details.analysis.recommendations.map((rec, index) => (
                            <div key={index} className="p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center gap-2 mb-1">
                                <h6 className="font-medium text-gray-800">{rec.title}</h6>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  rec.priority === 'high'
                                    ? 'bg-red-100 text-red-600'
                                    : 'bg-yellow-100 text-yellow-600'
                                }`}>
                                  {rec.priority === 'high' ? '優先度：高' : '優先度：中'}
                                </span>
                              </div>
                              <p className="text-gray-600">{rec.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
        <div className="flex items-start gap-4">
          <ThumbsUp className="w-12 h-12 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold mb-2">あなたも成功事例を作りませんか？</h3>
            <p className="mb-4">
              ChatGPTの回答を専門家がレビュー。より確実な成果につながります。
            </p>
            <button className="px-6 py-2 bg-white text-green-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              分析を依頼する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}