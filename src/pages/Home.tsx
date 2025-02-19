import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const quotes = [
  {
    text: "専門家の目線で、あなたのアイデアをもっと確かなものに",
    author: "プロの目線"
  },
  {
    text: "ChatGPTの回答を、現場のプロがより実践的にアップデート",
    author: "プロの目線"
  },
  {
    text: "理論と実践の橋渡し。プロの経験であなたの選択をサポート",
    author: "プロの目線"
  }
];

export default function Home() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="relative min-h-[calc(100vh-2rem)] -mt-8 -mx-8 flex items-center justify-center">
      {/* 背景画像とオーバーレイ */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-purple-900/90" />
      </div>

      {/* コンテンツ */}
      <div className="relative w-full max-w-4xl mx-auto text-center px-4 pt-12 md:pt-24">
        <div className="mb-8 md:mb-12">
          {/* タイトル */}
          <div className="inline-block px-2 md:px-0">
            <div className="relative mb-1 md:mb-2">
              <span className="absolute -left-2 md:-left-4 -top-2 md:-top-4">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-indigo-300 animate-pulse" />
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                ChatGPTの回答を
              </h1>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 blur-2xl opacity-20" />
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-indigo-200 to-purple-200 text-transparent bg-clip-text">
                  プロの目線
                </span>
                <span className="text-white">で確認</span>
              </h1>
            </div>
          </div>
          
          {/* キャッチフレーズ */}
          <div className="mt-8 md:mt-12 mb-8 md:mb-10">
            <blockquote className="relative">
              <div className="absolute -left-2 md:-left-3 -top-2 md:-top-3 text-3xl md:text-4xl text-indigo-300 opacity-50">"</div>
              <div className="absolute -right-2 md:-right-3 -bottom-2 md:-bottom-3 text-3xl md:text-4xl text-indigo-300 opacity-50">"</div>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-light leading-relaxed px-4 md:px-8">
                {randomQuote.text}
              </p>
            </blockquote>
          </div>

          {/* サブタイトル */}
          <div className="relative inline-block px-2 md:px-0">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl" />
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
              各分野の現役プロフェッショナルが
              <br className="hidden sm:block" />
              実践的な視点でアドバイスします
            </p>
          </div>
        </div>

        {/* CTAボタン */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 mb-12 md:mb-16">
          <Link
            to="/user-registration"
            className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg transition-all shadow-lg text-base sm:text-lg font-medium overflow-hidden w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-700 transform translate-y-full group-hover:translate-y-0 transition-transform" />
            <span className="relative flex items-center justify-center">
              ユーザー登録
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link
            to="/case-studies"
            className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg transition-all shadow-lg text-base sm:text-lg font-medium overflow-hidden w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform" />
            <span className="relative flex items-center justify-center">
              成功事例を見る
              <ArrowRight className="w-5 h-5 ml-2" />
            </span>
          </Link>
        </div>

        {/* 専門家向けリンク */}
        <div className="text-center mb-16 md:mb-24">
          <Link
            to="/expert"
            className="inline-flex items-center text-gray-200 hover:text-indigo-300 transition-colors text-base sm:text-lg group"
          >
            専門家としての参加はこちら
            <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 特徴 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-4">
          <div className="group bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl transition-all duration-300 hover:bg-white/15">
            <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">
                現役プロが分析
              </h3>
              <p className="text-base md:text-lg text-gray-200">
                各分野の第一線で
                <br className="hidden sm:block" />
                活躍中の専門家が担当
              </p>
            </div>
          </div>
          <div className="group bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl transition-all duration-300 hover:bg-white/15">
            <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">
                実践的なアドバイス
              </h3>
              <p className="text-base md:text-lg text-gray-200">
                現場での経験を活かした
                <br className="hidden sm:block" />
                具体的な提案
              </p>
            </div>
          </div>
          <div className="group bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl transition-all duration-300 hover:bg-white/15">
            <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">
                スピーディな対応
              </h3>
              <p className="text-base md:text-lg text-gray-200">
                最短1営業日で
                <br className="hidden sm:block" />
                分析結果をお届け
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}