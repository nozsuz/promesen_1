import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, User, UserPlus, Users, Send, FileText, MessageCircle, MinusCircle, Building2, Scale, Shield, Lightbulb, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import AnalysisRequest from './pages/AnalysisRequest';
import UserRegistration from './pages/UserRegistration';
import ExpertRegistration from './pages/ExpertRegistration';
import CaseStudies from './pages/CaseStudies';
import MyPage from './pages/MyPage';
import AnalysisResult from './pages/AnalysisResult';
import RecommendationDetail from './pages/RecommendationDetail';
import ServiceFlow from './pages/ServiceFlow';
import CompanyInfo from './pages/CompanyInfo';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Enterprise from './pages/Enterprise';
import ExpertHome from './pages/ExpertHome';
import Pricing from './pages/Pricing';

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/service-flow', text: 'サービスの流れ' },
    { path: '/pricing', text: '料金プラン' },
    { path: '/case-studies', text: '導入事例' },
    { path: '/company', text: '会社概要' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Lightbulb className="w-8 h-8 text-indigo-600" />
              <span className="font-bold text-xl text-gray-800">プロの目線</span>
            </Link>
            <div className="hidden md:flex items-center ml-8 space-x-8">
              {menuItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-gray-600 hover:text-indigo-600 transition-colors ${
                    location.pathname === item.path ? 'text-indigo-600' : ''
                  }`}
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/mypage"
              className="px-4 py-2 text-gray-600 hover:text-indigo-600 transition-colors"
            >
              マイページ
            </Link>
            <Link
              to="/analysis"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              分析を依頼
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-indigo-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.text}
              </Link>
            ))}
            <Link
              to="/mypage"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              マイページ
            </Link>
            <Link
              to="/analysis"
              className="block px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              分析を依頼
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function ChatSupport() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
    { type: 'system', text: 'サポートチームがお手伝いいたします。ご質問をどうぞ。' }
  ]);
  const [input, setInput] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { type: 'user', text: input }]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'system',
        text: 'ありがとうございます。担当者が確認次第、ご返信させていただきます。'
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span>チャットサポート</span>
        </button>

        {isOpen && (
          <div className="absolute bottom-14 right-0 w-96 bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-indigo-600 px-4 py-3 flex justify-between items-center">
              <h3 className="text-white font-medium flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                チャットサポート
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-indigo-200"
              >
                <MinusCircle className="w-5 h-5" />
              </button>
            </div>
            <div className="h-96 flex flex-col">
              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.type === 'user'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSubmit} className="p-4 border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="メッセージを入力..."
                    className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-6 h-6 text-indigo-600" />
              <span className="font-bold text-gray-800">プロの目線</span>
            </div>
            <p className="text-sm text-gray-600">
              ChatGPTの回答を、各分野の専門家が分析・アドバイスするサービスです。
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-4">会社情報</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/company" className="text-gray-600 hover:text-indigo-600">
                  会社概要
                </Link>
              </li>
              <li>
                <a href="mailto:info@pro-mesen.co.jp" className="text-gray-600 hover:text-indigo-600">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-4">サービス</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/service-flow" className="text-gray-600 hover:text-indigo-600">
                  サービスの流れ
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-600 hover:text-indigo-600">
                  導入事例
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-4">規約・ポリシー</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-indigo-600">
                  利用規約
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-indigo-600">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>&copy; 2024 プロの目線 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      <div className="flex-1 flex flex-col min-h-screen">
        <main className="flex-1 p-8">{children}</main>
        <Footer />
      </div>
      <ChatSupport />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<AnalysisRequest />} />
          <Route path="/user-registration" element={<UserRegistration />} />
          <Route path="/expert-registration" element={<ExpertRegistration />} />
          <Route path="/expert" element={<ExpertHome />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/analysis/result/:id" element={<AnalysisResult />} />
          <Route path="/analysis/recommendation/:id" element={<RecommendationDetail />} />
          <Route path="/service-flow" element={<ServiceFlow />} />
          <Route path="/company" element={<CompanyInfo />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Layout>
    </Router>
  );
}