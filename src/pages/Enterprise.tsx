import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Shield, Brain, Target, Code, Scale, 
  BookOpen, Briefcase, Lock, MessageSquare, Zap
} from 'lucide-react';

const industrySpecificSolutions = [
  {
    icon: <Scale className="w-6 h-6" />,
    title: '法務・コンプライアンス',
    description: '法的文書のレビュー、コンプライアンスチェック、契約書分析など'
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'IT・エンジニアリング',
    description: 'コードレビュー、アーキテクチャ設計、技術文書作成支援など'
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: '経営・戦略',
    description: '市場分析、事業計画策定、リスク評価、M&A調査など'
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: '研究開発',
    description: '特許調査、研究トレンド分析、技術動向調査など'
  }
];

const enterpriseFeatures = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'カスタムAIモデル',
    description: '業界特化型のGPTモデルを提供し、より正確で実用的な回答を実現'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: '専門家チーム',
    description: '業界経験豊富な専門家チームが常時サポート'
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'セキュリティ',
    description: 'エンタープライズグレードのセキュリティと専用インフラを提供'
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: '24/7サポート',
    description: '専任のサポートチームが24時間365日対応'
  }
];

export default function Enterprise() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* ヒーローセクション */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">エンタープライズプラン</h1>
        <p className="text-xl text-gray-600 mb-8">
          大規模な組織向けに、カスタマイズ可能な法人プランをご用意しています。
          <br />
          お客様のニーズに合わせた柔軟なソリューションを提供します。
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg text-lg font-medium"
          >
            お問い合わせ
          </Link>
          <Link
            to="/case-studies"
            className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-50 transition-colors shadow-lg text-lg font-medium"
          >
            導入事例を見る
          </Link>
        </div>
      </section>

      {/* プラン概要 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
              <Building2 className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Enterprise Basic</h2>
              <p className="text-gray-600">中小企業向け業務支援プラン</p>
            </div>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <Zap className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">月間50回まで分析依頼可能</span>
            </li>
            <li className="flex items-start gap-2">
              <Zap className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">業界専門家による監修</span>
            </li>
            <li className="flex items-start gap-2">
              <Zap className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">社内GPTの最適化支援</span>
            </li>
            <li className="flex items-start gap-2">
              <Zap className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">API連携オプション</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Enterprise Premium</h2>
              <p className="text-gray-600">大企業向けカスタマイズプラン</p>
            </div>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <Zap className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">分析依頼回数無制限</span>
            </li>
            <li className="flex items-start gap-2">
              <Zap className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">業界特化型GPTの提供</span>
            </li>
            <li className="flex items-start gap-2">
              <Zap className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">専用API・SDK提供</span>
            </li>
            <li className="flex items-start gap-2">
              <Zap className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">社内ナレッジベース統合</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 業界別ソリューション */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            業界別ソリューション
          </h2>
          <p className="text-gray-600">
            各業界に特化した専門家監修のAIソリューションを提供
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industrySpecificSolutions.map((solution, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                {solution.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {solution.title}
              </h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* エンタープライズ機能 */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            エンタープライズ機能
          </h2>
          <p className="text-gray-600">
            大規模な組織のニーズに応える、高度な機能とサポート
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {enterpriseFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            お客様に最適なプランをご提案します
          </h2>
          <p className="text-lg mb-8">
            ご要望をお聞かせください。専任のコンサルタントが詳しくご説明いたします。
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-lg font-medium"
          >
            無料相談を予約する
          </Link>
        </div>
      </section>
    </div>
  );
}