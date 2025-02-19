import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText, Clock, CheckCircle, ArrowRight, Bell, CreditCard,
  Send, Brain, User, MessageSquare, Settings, AlertTriangle,
  Star, BarChart, Zap, Users, BookOpen, Award, Briefcase
} from 'lucide-react';

const mockUser = {
  name: '山田太郎',
  email: 'yamada@example.com',
  plan: 'スタンダード',
  remainingQuestions: 8,
  totalQuestions: 10,
  points: 1200
};

const mockAnalysisRequests = [
  {
    id: '1',
    status: 'completed',
    createdAt: '2024-03-15',
    expertise: 'テクノロジー',
    content: 'AIモデルの最適化について',
    aiScore: 85,
    expertScore: 92
  },
  {
    id: '2',
    status: 'in_progress',
    createdAt: '2024-03-16',
    expertise: 'ビジネス',
    content: '新規事業戦略の評価',
    aiScore: 78
  },
  {
    id: '3',
    status: 'pending',
    createdAt: '2024-03-17',
    expertise: '科学',
    content: '実験データの解析手法',
    aiScore: null
  }
];

const mockNotifications = [
  {
    id: '1',
    type: 'analysis_complete',
    title: '分析が完了しました',
    content: 'AIモデルの最適化についての分析が完了しました。',
    createdAt: '2024-03-15 15:30',
    isRead: false
  },
  {
    id: '2',
    type: 'expert_message',
    title: '専門家からのメッセージ',
    content: '追加の情報提供をお願いできますでしょうか？',
    createdAt: '2024-03-15 14:20',
    isRead: true
  },
  {
    id: '3',
    type: 'plan_update',
    title: 'プラン更新のお知らせ',
    content: 'プランの更新時期が近づいています。',
    createdAt: '2024-03-14 10:00',
    isRead: true
  }
];

const mockRecommendedExperts = [
  {
    id: '1',
    name: '鈴木一郎',
    title: 'AI研究者・博士（工学）',
    expertise: 'テクノロジー',
    rating: 4.8,
    reviews: 127,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: '佐藤美咲',
    title: '経営コンサルタント',
    expertise: 'ビジネス',
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
  }
];

export default function MyPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* サイドバー */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="text-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                  alt={mockUser.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{mockUser.name}</h3>
              <p className="text-gray-600">{mockUser.email}</p>
            </div>
            <div className="space-y-2">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full px-4 py-2 rounded-lg flex items-center gap-2 ${
                  activeTab === 'dashboard'
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <BarChart className="w-5 h-5" />
                ダッシュボード
              </button>
              <button
                onClick={() => setActiveTab('analysis')}
                className={`w-full px-4 py-2 rounded-lg flex items-center gap-2 ${
                  activeTab === 'analysis'
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <FileText className="w-5 h-5" />
                分析履歴
              </button>
              <button
                onClick={() => setActiveTab('plan')}
                className={`w-full px-4 py-2 rounded-lg flex items-center gap-2 ${
                  activeTab === 'plan'
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <CreditCard className="w-5 h-5" />
                プラン・支払い
              </button>
              <button
                onClick={() => setActiveTab('experts')}
                className={`w-full px-4 py-2 rounded-lg flex items-center gap-2 ${
                  activeTab === 'experts'
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Users className="w-5 h-5" />
                専門家
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`w-full px-4 py-2 rounded-lg flex items-center gap-2 ${
                  activeTab === 'notifications'
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Bell className="w-5 h-5" />
                通知
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full px-4 py-2 rounded-lg flex items-center gap-2 ${
                  activeTab === 'settings'
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Settings className="w-5 h-5" />
                設定
              </button>
            </div>
          </div>

          {/* クイックアクション */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">クイックアクション</h3>
            <div className="space-y-3">
              <Link
                to="/analysis"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                新規分析を依頼
              </Link>
              <button className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                サポートに相談
              </button>
            </div>
          </div>
        </div>

        {/* メインコンテンツ */}
        <div className="lg:col-span-3">
          {/* ダッシュボード */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* 利用状況 */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">利用状況</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">残り分析回数</span>
                      <Send className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">
                      {mockUser.remainingQuestions}/{mockUser.totalQuestions}
                    </div>
                    <div className="text-sm text-gray-500">今月の利用可能回数</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">ポイント残高</span>
                      <Star className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">
                      {mockUser.points}pt
                    </div>
                    <div className="text-sm text-gray-500">専門家への質問に使用可能</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">現在のプラン</span>
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">
                      {mockUser.plan}
                    </div>
                    <div className="text-sm text-gray-500">2024年4月15日まで</div>
                  </div>
                </div>
              </div>

              {/* 最近の分析 */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">最近の分析</h3>
                  <Link
                    to="#"
                    className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                  >
                    すべて見る
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="space-y-4">
                  {mockAnalysisRequests.slice(0, 3).map(request => (
                    <div key={request.id} className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 p-4 rounded-lg gap-4 sm:gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-0">
                          <span className="font-medium text-gray-800">{request.content}</span>
                          {request.status === 'completed' && (
                            <span className="px-2 py-0.5 bg-green-100 text-green-600 rounded-full text-xs font-medium">
                              完了
                            </span>
                          )}
                          {request.status === 'in_progress' && (
                            <span className="px-2 py-0.5 bg-yellow-100 text-yellow-600 rounded-full text-xs font-medium">
                              分析中
                            </span>
                          )}
                          {request.status === 'pending' && (
                            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                              受付中
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {request.createdAt}
                          </span>
                          <span>{request.expertise}</span>
                          {request.aiScore && (
                            <span className="flex items-center">
                              <Brain className="w-4 h-4 mr-1" />
                              AI評価: {request.aiScore}%
                            </span>
                          )}
                          {request.expertScore && (
                            <span className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              専門家評価: {request.expertScore}%
                            </span>
                          )}
                        </div>
                      </div>
                      {request.status === 'completed' && (
                        <Link
                          to={`/analysis/result/${request.id}`}
                          className="inline-flex items-center justify-center px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors sm:text-base sm:px-4 sm:py-2"
                        >
                          結果を見る
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* おすすめの専門家 */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">おすすめの専門家</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockRecommendedExperts.map(expert => (
                    <div key={expert.id} className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                      <img
                        src={expert.image}
                        alt={expert.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">{expert.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{expert.title}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="ml-1 font-medium">{expert.rating}</span>
                          </div>
                          <span className="text-gray-500">({expert.reviews} レビュー)</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* お知らせ */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">お知らせ</h3>
                  <Link
                    to="#"
                    className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                  >
                    すべて見る
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="space-y-4">
                  {mockNotifications.slice(0, 3).map(notification => (
                    <div key={notification.id} className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                      {notification.type === 'analysis_complete' && (
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      )}
                      {notification.type === 'expert_message' && (
                        <MessageSquare className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      )}
                      {notification.type === 'plan_update' && (
                        <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      )}
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-gray-800">{notification.title}</h4>
                          {!notification.isRead && (
                            <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-xs">
                              新着
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-1">{notification.content}</p>
                        <span className="text-gray-500 text-xs">{notification.createdAt}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 分析履歴 */}
          {activeTab === 'analysis' && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
                <h2 className="text-xl font-semibold text-white flex items-center">
                  <FileText className="w-6 h-6 mr-2" />
                  分析履歴
                </h2>
              </div>
              <div className="p-6">
                <div className="grid gap-4">
                  {mockAnalysisRequests.map(request => (
                    <div key={request.id} className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 p-4 rounded-lg gap-4 sm:gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-0">
                          <span className="font-medium text-gray-800">{request.content}</span>
                          {request.status === 'completed' && (
                            <span className="px-2 py-0.5 bg-green-100 text-green-600 rounded-full text-xs font-medium">
                              完了
                            </span>
                          )}
                          {request.status === 'in_progress' && (
                            <span className="px-2 py-0.5 bg-yellow-100 text-yellow-600 rounded-full text-xs font-medium">
                              分析中
                            </span>
                          )}
                          {request.status === 'pending' && (
                            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                              受付中
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {request.createdAt}
                          </span>
                          <span>{request.expertise}</span>
                          {request.aiScore && (
                            <span className="flex items-center">
                              <Brain className="w-4 h-4 mr-1" />
                              AI評価: {request.aiScore}%
                            </span>
                          )}
                          {request.expertScore && (
                            <span className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              専門家評価: {request.expertScore}%
                            </span>
                          )}
                        </div>
                      </div>
                      {request.status === 'completed' && (
                        <Link
                          to={`/analysis/result/${request.id}`}
                          className="inline-flex items-center justify-center px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors sm:text-base sm:px-4 sm:py-2"
                        >
                          結果を見る
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* プラン・支払い */}
          {activeTab === 'plan' && (
            <div className="space-y-6">
              {/* 現在のプラン */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">現在のプラン</h3>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">{mockUser.plan}</h4>
                      <p className="text-gray-600">月額 ¥29,800（税抜）</p>
                    </div>
                    <Link
                      to="/pricing"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      プランを変更
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">次回更新日</p>
                      <p className="font-medium text-gray-800">2024年4月15日</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">支払い方法</p>
                      <p className="font-medium text-gray-800">クレジットカード（**** 1234）</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 利用状況 */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">利用状況</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">分析依頼回数</span>
                      <span className="text-gray-800 font-medium">
                        {mockUser.remainingQuestions}/{mockUser.totalQuestions}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{
                          width: `${(mockUser.remainingQuestions / mockUser.totalQuestions) * 100}%`
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">ポイント残高</span>
                      <span className="text-gray-800 font-medium">{mockUser.points}pt</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: '60%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 請求履歴 */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">請求履歴</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800">2024年3月分</p>
                      <p className="text-sm text-gray-600">スタンダードプラン</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-800">¥29,800</p>
                      <button className="text-indigo-600 hover:text-indigo-700 text-sm">
                        領収書をダウンロード
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800">2024年2月分</p>
                      <p className="text-sm text-gray-600">スタンダードプラン</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-800">¥29,800</p>
                      <button className="text-indigo-600 hover:text-indigo-700 text-sm">
                        領収書をダウンロード
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 専門家 */}
          {activeTab === 'experts' && (
            <div className="space-y-6">
              {/* お気に入りの専門家 */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">お気に入りの専門家</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockRecommendedExperts.map(expert => (
                    <div key={expert.id} className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                      <img
                        src={expert.image}
                        alt={expert.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800">{expert.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{expert.title}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="ml-1 font-medium">{expert.rating}</span>
                          </div>
                          <span className="text-gray-500">({expert.reviews} レビュー)</span>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                        指名する
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* 専門家を探す */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">専門家を探す</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <BookOpen className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                    <span className="text-gray-800">テクノロジー</span>
                  </button>
                  <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Briefcase className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                    <span className="text-gray-800">ビジネス</span>
                  </button>
                  <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Brain className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                    <span className="text-gray-800">科学</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 通知 */}
          {activeTab === 'notifications' && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6  py-4">
                <h2 className="text-xl font-semibold text-white flex items-center">
                  <Bell className="w-6 h-6 mr-2" />
                  通知
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {mockNotifications.map(notification => (
                    <div key={notification.id} className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                      {notification.type === 'analysis_complete' && (
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      )}
                      {notification.type === 'expert_message' && (
                        <MessageSquare className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      )}
                      {notification.type === 'plan_update' && (
                        <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      )}
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-gray-800">{notification.title}</h4>
                          {!notification.isRead && (
                            <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-xs">
                              新着
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-1">{notification.content}</p>
                        <span className="text-gray-500 text-xs">{notification.createdAt}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}