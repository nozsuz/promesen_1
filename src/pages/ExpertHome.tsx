import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, Briefcase, Users, Wallet, ArrowRight, CheckCircle, Star, 
  TrendingUp, Send, Shield, Brain, Target, Medal, Trophy, Zap,
  BookOpen, MessageSquare, BadgeCheck, BarChart
} from 'lucide-react';

const benefits = [
  {
    icon: <Wallet className="w-8 h-8" />,
    title: '高い報酬',
    description: '1件の分析で5,000円〜50,000円の報酬。あなたの専門性に応じて柔軟に設定できます。'
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: '柔軟な働き方',
    description: '時間や場所にとらわれず、ご自身のペースで分析業務に取り組めます。'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'キャリアの成長',
    description: '最新のAI技術と専門知識を組み合わせた新しい形の専門家として活躍できます。'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: '専門家コミュニティ',
    description: '他分野の専門家との交流を通じて、新しい知見や人脈を広げることができます。'
  }
];

const requirements = [
  '該当分野での実務経験が3年以上',
  '関連する資格や学位の保有',
  '週10時間以上の稼働が可能',
  'オンラインでのコミュニケーションスキル',
  'LinkedIn または ResearchGate のプロフィール連携'
];

const testimonials = [
  {
    name: '山田太郎',
    title: 'AI研究者・博士（工学）',
    content: '私の専門知識を活かしながら、新しい働き方にチャレンジできています。特に、最新のAI技術と実務経験を組み合わせた分析は、とてもやりがいがあります。',
    rating: 5,
    badges: ['AI専門家', 'トップアナリスト', '優秀回答者']
  },
  {
    name: '鈴木花子',
    title: '経営コンサルタント',
    content: '時間に縛られず、自分のペースで仕事ができるのが魅力です。また、適切な報酬設定により、副業としても十分な収入を得ることができています。',
    rating: 5,
    badges: ['ビジネス戦略', '高評価エキスパート']
  }
];

const qualityFeatures = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: '厳格な審査プロセス',
    description: 'LinkedInやResearchGateとの連携により、実績と専門性を確実に確認。AIによる自動スクリーニングで、信頼できる専門家のみを認定します。'
  },
  {
    icon: <Brain className="w-12 h-12" />,
    title: 'AIサポートシステム',
    description: '最新のAI技術を活用して回答の品質をチェック。誤情報の防止と一貫性の維持を支援し、より正確で信頼性の高い分析を実現します。'
  },
  {
    icon: <Target className="w-12 h-12" />,
    title: '評価・ランキング制度',
    description: 'ユーザー評価とAI分析を組み合わせた独自のスコアリングシステム。高評価の専門家には報酬アップやランク昇格のチャンスがあります。'
  }
];

const recognitionSystem = [
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'ランキングシステム',
    description: '分野別の専門家ランキングで上位にランクインすると、報酬単価の上昇や優先的な案件紹介の特典があります。'
  },
  {
    icon: <Medal className="w-6 h-6" />,
    title: '認定バッジ制度',
    description: '「AI認定エキスパート」「ユーザー推薦専門家」など、実績に応じた各種バッジを獲得できます。'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'スキル認定',
    description: 'AIが分析した回答の傾向から、特定分野での専門性を可視化し、独自の認定を付与します。'
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: '実績の可視化',
    description: '分析件数、高評価率、貢献度などの実績をグラフィカルに表示し、キャリアの成長を実感できます。'
  }
];

const communityFeatures = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: '専門家フォーラム',
    description: '分野を超えた専門家同士の意見交換や、最新のAI技術に関するディスカッションが可能です。'
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: '講演・執筆機会',
    description: '優秀な専門家には、セミナーでの講演や技術記事の執筆機会を提供します。'
  },
  {
    icon: <BadgeCheck className="w-6 h-6" />,
    title: '実績証明',
    description: '「あなたの分析が○○企業で採用されました」といった実績を証明書として発行します。'
  }
];

export default function ExpertHome() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* ヒーローセクション */}
      <section className="relative min-h-[600px] flex items-center justify-center -mt-8 -mx-8 px-4 mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-purple-900/90" />
        </div>

        <div className="relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            あなたの専門知識を
            <br />
            <span className="text-indigo-300">新しい形</span>
            で活かしませんか？
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            ChatGPTの時代に、人間ならではの専門性を活かした
            <br />
            新しい働き方を提案します
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/expert-registration"
              className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg text-lg font-medium group"
            >
              専門家として登録する
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-lg font-medium"
            >
              サービス利用はこちら
              <Send className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 品質管理システム */}
      <section className="mb-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
          専門家の質を支える3つの柱
        </h2>
        <p className="text-gray-600 text-center mb-12">
          最新のテクノロジーと厳格な審査で、高品質な分析サービスを実現します
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {qualityFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-indigo-600 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* メリット */}
      <section className="mb-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          専門家として参加するメリット
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-indigo-600 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 評価・認定システム */}
      <section className="mb-16 px-4">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            評価・認定システム
          </h2>
          <p className="text-gray-600 text-center mb-12">
            実績に応じた評価と認定で、専門家としての価値を高めます
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recognitionSystem.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-indigo-600 mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* コミュニティと成長機会 */}
      <section className="mb-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
          コミュニティと成長機会
        </h2>
        <p className="text-gray-600 text-center mb-12">
          専門家同士の交流と、キャリアアップの機会を提供します
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-indigo-600 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 応募要件 */}
      <section className="mb-16 px-4">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            応募要件
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid gap-4">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 専門家の声 */}
      <section className="mb-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          専門家の声
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {testimonial.badges.map((badge, i) => (
                  <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <div className="font-medium text-gray-800">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-4">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            あなたも専門家として参加しませんか？
          </h2>
          <p className="text-lg mb-8">
            新しい働き方で、あなたの専門性を活かしましょう。
          </p>
          <Link
            to="/expert-registration"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-lg font-medium"
          >
            無料で専門家登録する
          </Link>
        </div>
      </section>
    </div>
  );
}