import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  FileText, Star, MessageSquare, Lightbulb, ArrowRight, Download,
  Brain, BookOpen, AlertTriangle, CheckCircle, ArrowLeftRight, Link as LinkIcon,
  Shield
} from 'lucide-react';

// モックデータを更新
const mockResult = {
  id: '1',
  title: 'AIモデルの最適化について',
  originalContent: `
    ChatGPTの回答:
    モデルの最適化には以下の手法が効果的です：
    1. バッチサイズの調整
    2. 学習率の最適化
    3. モデルの軽量化
    4. データの前処理の改善
  `,
  expertise: 'テクノロジー',
  expert: {
    name: '山田太郎',
    title: 'AI研究者・博士（工学）',
    organization: 'テックラボ株式会社',
    rating: 4.8,
    reviews: 127
  },
  analysis: {
    summary: 'ChatGPTの提案は理論的には正しいものの、実務での適用には追加の考慮点が必要です。',
    aiDraft: {
      content: `
        最適化手法の提案：
        1. バッチサイズの動的調整
        2. 学習率のスケジューリング
        3. モデルプルーニング
        4. データ拡張手法の適用
      `,
      improvements: [
        '具体的な数値範囲の提示',
        'ハイパーパラメータの調整方法',
        'メモリ使用量の考慮'
      ]
    },
    expertRevision: {
      content: `
        実践的な最適化アプローチ：
        1. リソース制約を考慮したバッチサイズ設定（16-128の範囲で段階的に調整）
        2. サイクリック学習率with warmup（初期0.001、最大0.01）
        3. 量子化とプルーニングの併用（モデルサイズ30%削減が目標）
        4. GPU使用率に基づくデータローダーの最適化
      `,
      improvements: [
        '具体的なパラメータ範囲の提示',
        'ハードウェア制約の考慮',
        'コスト効率の観点を追加'
      ]
    },
    strengths: [
      '基本的な最適化手法を網羅的に提示している',
      '一般的なベストプラクティスに沿った提案である',
      'ステップバイステップのアプローチが明確'
    ],
    weaknesses: [
      '実際の計算リソースの制約を考慮していない',
      'ビジネスインパクトの視点が欠けている',
      'コスト効率の観点が不足'
    ],
    recommendations: [
      {
        id: '1',
        title: 'リソース使用量の最適化',
        description: 'クラウドコストを考慮したバッチサイズの選定が重要です。具体的には...',
        priority: 'high'
      },
      {
        id: '2',
        title: 'ビジネスKPIとの連携',
        description: '最適化による具体的なビジネス効果の測定方法として...',
        priority: 'medium'
      },
      {
        id: '3',
        title: '段階的な導入計画',
        description: 'リスクを最小限に抑えるため、以下のようなフェーズド導入を推奨...',
        priority: 'medium'
      }
    ],
    references: [
      {
        title: 'Deep Learning Optimization Techniques',
        url: '#',
        type: 'academic',
        relevance: '最適化手法の理論的背景'
      },
      {
        title: 'Production ML Systems',
        url: '#',
        type: 'technical',
        relevance: '実装ガイドライン'
      }
    ],
    aiFactCheck: {
      accuracy: 85,
      supportingData: [
        {
          claim: 'バッチサイズの最適範囲',
          source: 'Recent research in batch size optimization (2023)',
          confidence: 'high'
        },
        {
          claim: '学習率の推奨値',
          source: 'Industry benchmarks from top ML companies',
          confidence: 'medium'
        }
      ]
    }
  },
  createdAt: '2024-03-15',
  updatedAt: '2024-03-16'
};

export default function AnalysisResult() {
  const { id } = useParams();
  const result = mockResult;
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-6">
        {/* ヘッダー */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <FileText className="w-6 h-6 mr-2" />
              分析結果
            </h2>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{result.title}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{result.expertise}</span>
                  <span>更新日: {result.updatedAt}</span>
                </div>
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                PDFをダウンロード
              </button>
            </div>
          </div>
        </div>

        {/* 専門家情報 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{result.expert.name}</h3>
              <p className="text-gray-600">{result.expert.title}</p>
              <p className="text-gray-600">{result.expert.organization}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 mb-1">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="font-medium">{result.expert.rating}</span>
                <span className="text-gray-600">/ 5.0</span>
              </div>
              <p className="text-sm text-gray-600">{result.expert.reviews} レビュー</p>
            </div>
          </div>
        </div>

        {/* AI分析と専門家の回答比較 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b flex justify-between items-center">
            <h3 className="font-semibold text-gray-800 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-indigo-600" />
              AIと専門家の分析比較
            </h3>
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
            >
              <ArrowLeftRight className="w-4 h-4" />
              {showComparison ? '比較を閉じる' : '比較を表示'}
            </button>
          </div>
          <div className="p-6">
            {showComparison ? (
              <div className="grid md:grid-cols-2 gap-6">
                {/* AI下書き */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <Brain className="w-5 h-5 text-gray-600" />
                    <h4 className="font-medium text-gray-800">AI下書き</h4>
                  </div>
                  <pre className="whitespace-pre-wrap text-gray-600 font-sans mb-4">
                    {result.analysis.aiDraft.content}
                  </pre>
                  <div className="border-t pt-4">
                    <h5 className="text-sm font-medium text-gray-700 mb-2">改善が必要な点：</h5>
                    <ul className="space-y-2">
                      {result.analysis.aiDraft.improvements.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 専門家の修正 */}
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="w-5 h-5 text-indigo-600" />
                    <h4 className="font-medium text-gray-800">専門家の修正</h4>
                  </div>
                  <pre className="whitespace-pre-wrap text-gray-600 font-sans mb-4">
                    {result.analysis.expertRevision.content}
                  </pre>
                  <div className="border-t pt-4">
                    <h5 className="text-sm font-medium text-gray-700 mb-2">改善ポイント：</h5>
                    <ul className="space-y-2">
                      {result.analysis.expertRevision.improvements.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <Brain className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <p className="text-gray-600">
                  AIの下書きと専門家の修正内容を比較して表示します。
                  <br />
                  「比較を表示」をクリックしてください。
                </p>
              </div>
            )}
          </div>
        </div>

        {/* AIによるファクトチェック */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b">
            <h3 className="font-semibold text-gray-800 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-gray-600" />
              AIによる信頼性評価
            </h3>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-xl font-bold text-green-600">{result.analysis.aiFactCheck.accuracy}%</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">信頼性スコア</h4>
                <p className="text-sm text-gray-600">AIによる自動評価結果</p>
              </div>
            </div>
            <div className="space-y-4">
              {result.analysis.aiFactCheck.supportingData.map((data, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-1">{data.claim}</h5>
                      <p className="text-sm text-gray-600">{data.source}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      data.confidence === 'high'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      信頼度: {data.confidence === 'high' ? '高' : '中'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 参考文献・データソース */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b">
            <h3 className="font-semibold text-gray-800 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-gray-600" />
              参考文献・データソース
            </h3>
          </div>
          <div className="p-6">
            <div className="grid gap-4">
              {result.analysis.references.map((ref, index) => (
                <div key={index} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">{ref.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{ref.relevance}</p>
                    <a
                      href={ref.url}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 text-sm"
                    >
                      <LinkIcon className="w-4 h-4 mr-1" />
                      ソースを確認
                    </a>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    ref.type === 'academic'
                      ? 'bg-purple-100 text-purple-600'
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {ref.type === 'academic' ? '学術' : '技術'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 推奨アクション */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b">
            <h3 className="font-semibold text-gray-800">推奨アクション</h3>
          </div>
          <div className="p-6">
            <div className="grid gap-4">
              {result.analysis.recommendations.map((rec) => (
                <Link
                  key={rec.id}
                  to={`/analysis/recommendation/${rec.id}`}
                  className="p-4 rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium text-gray-800">{rec.title}</h4>
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
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}