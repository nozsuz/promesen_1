import React, { useState } from 'react';
import { MessageSquare, Send, Code, Microscope, Briefcase, Palette } from 'lucide-react';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
  dangerouslyAllowBrowser: true
});

const expertiseAreas = [
  {
    id: 'tech',
    name: 'テクノロジー',
    icon: <Code className="w-6 h-6" />,
    description: 'ソフトウェア開発、IT、デジタルソリューション'
  },
  {
    id: 'science',
    name: '科学',
    icon: <Microscope className="w-6 h-6" />,
    description: '研究、実験、科学的発見'
  },
  {
    id: 'business',
    name: 'ビジネス',
    icon: <Briefcase className="w-6 h-6" />,
    description: '経営、戦略、起業'
  },
  {
    id: 'arts',
    name: 'アート',
    icon: <Palette className="w-6 h-6" />,
    description: 'クリエイティブアート、デザイン、文化研究'
  }
];

export default function AnalysisRequest() {
  const [selectedExpertise, setSelectedExpertise] = useState('');
  const [chatGPTResponse, setChatGPTResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedExpertise || !chatGPTResponse) return;

    if (!import.meta.env.VITE_OPENAI_API_KEY) {
      alert('OpenAI APIキーが設定されていません。');
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert('分析依頼が完了しました。マイページで進捗を確認できます。');
      setSelectedExpertise('');
      setChatGPTResponse('');
    } catch (error) {
      console.error('Error:', error);
      alert('エラーが発生しました。');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
          <h2 className="text-xl font-semibold text-white flex items-center">
            <Send className="w-6 h-6 mr-2" />
            分析依頼の作成
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-4">
            <label className="block text-lg font-medium text-gray-800 mb-3">
              専門分野を選択
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {expertiseAreas.map((area) => (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => setSelectedExpertise(area.id)}
                  className={`p-4 rounded-xl transition-all ${
                    selectedExpertise === area.id
                      ? 'bg-indigo-50 border-2 border-indigo-500 shadow-md'
                      : 'bg-gray-50 border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`mb-3 ${
                      selectedExpertise === area.id ? 'text-indigo-600' : 'text-gray-600'
                    }`}>
                      {area.icon}
                    </div>
                    <div className={`font-medium ${
                      selectedExpertise === area.id ? 'text-indigo-600' : 'text-gray-800'
                    }`}>
                      {area.name}
                    </div>
                    <div className="text-sm text-gray-500 mt-2">{area.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-800 mb-2">
              ChatGPTの回答を貼り付け
            </label>
            <div className="relative">
              <MessageSquare className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
              <textarea
                value={chatGPTResponse}
                onChange={(e) => setChatGPTResponse(e.target.value)}
                className="w-full h-40 pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                placeholder="分析してほしいChatGPTの回答を入力してください..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={!selectedExpertise || !chatGPTResponse || isLoading}
            className={`w-full py-3 px-6 rounded-xl font-medium flex items-center justify-center shadow-md ${
              !selectedExpertise || !chatGPTResponse || isLoading
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-indigo-700'
            }`}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                分析依頼を送信中...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                分析を依頼する
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}