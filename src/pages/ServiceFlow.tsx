import React from 'react';
import { 
  ArrowRight, Send, Users, FileCheck, Clock, Sparkles, CheckCircle, Zap,
  Brain, Shield, Star, Award, BookOpen, MessageSquare, Target, Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: <Send className="w-8 h-8" />,
    title: '分析依頼の送信',
    description: 'ChatGPTの回答を送信し、専門分野を選択。',
    details: [
      '専門分野の選択',
      'ChatGPTの回答の貼り付け',
      '追加の要望や質問の記入'
    ]
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'AIによる事前分析',
    description: 'AIが回答の下書きを作成し、専門家の分析をサポート。',
    details: [
      '回答内容の自動チェック',
      '参考文献の自動収集',
      '専門家への分析ポイント提示'
    ]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: '厳選された専門家による分析',
    description: '実績と評価に基づいて選定された専門家が詳細に分析。',
    details: [
      'AIの分析結果の検証',
      '実務経験に基づく改善提案',
      '具体的な実装手順の提示'
    ]
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: 'AIと専門家のハイブリッド分析結果',
    description: 'AIと専門家の知見を組み合わせた包括的な分析結果を提供。',
    details: [
      'AIと専門家の分析比較',
      '改善点の具体的な説明',
      '実践的なアクションプラン'
    ]
  }
];

const benefits = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: '厳格な専門家選定',
    description: 'LinkedInやResearchGateと連携し、実績のある専門家のみを認定'
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: '継続的な品質管理',
    description: 'AIによる品質チェックと専門家の評価システムで高品質を維持'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: '専門家の評価制度',
    description: 'ユーザー評価とAI分析による独自のスコアリングシステム'
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AIとの最適な融合',
    description: 'AIの効率性と専門家の経験を組み合わせた革新的な分析'
  }
];

const qualityFeatures = [
  {
    icon: <Scale className="w-6 h-6" />,
    title: 'AIによる品質チェック',
    description: 'GPTが回答の一貫性や正確性を事前にチェックし、専門家の分析をサポート'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: '専門家のランク制度',
    description: '分析の質と評価に基づくランク付けで、高品質な分析を実現'
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: '実績の可視化',
    description: '専門家の実績や評価を透明性高く公開し、信頼性を担保'
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: '専門家同士の相互レビュー',
    description: '専門家コミュニティ内での相互チェックで品質を向上'
  }
];

export default function ServiceFlow() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* サービスの流れ */}
      <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
          <h2 className="text-xl font-semibold text-white">サービスの流れ</h2>
        </div>
        <div className="p-6">
          <div className="grid gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-full bg-indigo-200 my-2" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <ArrowRight className="w-4 h-4 text-indigo-500 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 品質管理システム */}
      <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
          <h2 className="text-xl font-semibold text-white">品質管理システム</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-indigo-600">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* サービスのメリット */}
      <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
          <h2 className="text-xl font-semibold text-white">サービスのメリット</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-indigo-600">{benefit.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl shadow-lg overflow-hidden text-white">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">サービスを利用してみませんか？</h2>
            <p className="text-indigo-100">
              AIと専門家の知見を組み合わせた、新しい形の分析サービス。
              <br />
              まずは料金プランをご確認ください。
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Link
              to="/pricing"
              className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
            >
              料金プランを見る
            </Link>
            <Link
              to="/analysis"
              className="px-6 py-3 bg-indigo-400 text-white rounded-lg font-medium hover:bg-indigo-500 transition-colors"
            >
              分析を依頼する
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}