import React, { useState } from 'react';
import { MessageSquare, Send, Code, Microscope, Briefcase, Palette, Brain, BookOpen, Target, ArrowRight, AlertTriangle, CheckCircle } from 'lucide-react';
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
    description: 'ソフトウェア開発、IT、デジタルソリューション',
    systemPrompt: `あなたは技術分野の専門AIアシスタントです。
    以下の観点からChatGPTの回答を分析してください：
    - コードの品質と最新のベストプラクティスとの整合性
    - スケーラビリティとパフォーマンスへの影響
    - セキュリティリスクと対策
    - 実装の複雑さと保守性
    - クラウドやインフラストラクチャへの影響
    
    また、ユーザーが指摘した懸念点や要望に特に注目し、それらの点について詳しく分析してください。
    得たいアウトプットとして指定された内容についても、実現可能性と改善案を検討してください。`
  },
  {
    id: 'science',
    name: '科学',
    icon: <Microscope className="w-6 h-6" />,
    description: '研究、実験、科学的発見',
    systemPrompt: `あなたは科学研究分野の専門AIアシスタントです。
    以下の観点からChatGPTの回答を分析してください：
    - 科学的手法の妥当性
    - 実験デザインの適切性
    - データ分析手法の正確性
    - 研究倫理への配慮
    - 再現性と検証可能性
    
    また、ユーザーが指摘した懸念点や要望に特に注目し、それらの点について詳しく分析してください。
    得たいアウトプットとして指定された内容についても、実現可能性と改善案を検討してください。`
  },
  {
    id: 'business',
    name: 'ビジネス',
    icon: <Briefcase className="w-6 h-6" />,
    description: '経営、戦略、起業',
    systemPrompt: `あなたはビジネス戦略の専門AIアシスタントです。
    以下の観点からChatGPTの回答を分析してください：
    - 市場動向との整合性
    - 実現可能性とリソース要件
    - ROIと投資対効果
    - リスク分析と対策
    - 競合優位性への影響
    
    また、ユーザーが指摘した懸念点や要望に特に注目し、それらの点について詳しく分析してください。
    得たいアウトプットとして指定された内容についても、実現可能性と改善案を検討してください。`
  },
  {
    id: 'arts',
    name: 'アート',
    icon: <Palette className="w-6 h-6" />,
    description: 'クリエイティブアート、デザイン、文化研究',
    systemPrompt: `あなたはクリエイティブ分野の専門AIアシスタントです。
    以下の観点からChatGPTの回答を分析してください：
    - デザイン原則との整合性
    - ユーザー体験への影響
    - 文化的・社会的な影響
    - 創造性と革新性
    - 実現可能性と技術的制約
    
    また、ユーザーが指摘した懸念点や要望に特に注目し、それらの点について詳しく分析してください。
    得たいアウトプットとして指定された内容についても、実現可能性と改善案を検討してください。`
  }
];

export default function AnalysisRequest() {
  const [step, setStep] = useState(1);
  const [chatGPTResponse, setChatGPTResponse] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('');
  const [concerns, setConcerns] = useState('');
  const [desiredOutput, setDesiredOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<{
    summary: string;
    satisfiedPoints: string[];
    concernPoints: string[];
    expertQuestions: string[];
    suggestedApproach: string;
    confidence: number;
  } | null>(null);

  const handleAIAnalysis = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatGPTResponse || !selectedExpertise) return;

    if (!import.meta.env.VITE_OPENAI_API_KEY) {
      alert('OpenAI APIキーが設定されていません。');
      return;
    }

    setIsLoading(true);
    try {
      const expertise = expertiseAreas.find(area => area.id === selectedExpertise);
      if (!expertise) throw new Error('専門分野が見つかりません');

      const completion = await openai.chat.completions.create({
        model: "chatgpt-4o-latest",
        messages: [
          {
            role: "system",
            content: `${expertise.systemPrompt}

以下の形式で分析結果を返してください。必ず有効なJSONとして解析できる形式を守ってください：

{
  "summary": "全体的な分析の要約（200文字程度）",
  "satisfiedPoints": ["ChatGPTの回答で十分に満たされている点を3-4個"],
  "concernPoints": ["さらなる検討や専門家の意見が必要な点を3-4個"],
  "expertQuestions": ["専門家に確認すべき具体的な質問を3-4個"],
  "suggestedApproach": "専門家への相談アプローチの提案（200文字程度）",
  "confidence": 85
}`
          },
          {
            role: "user",
            content: `以下のChatGPTの回答を分析してください：

${chatGPTResponse}

ユーザーが指摘している懸念点・問題点：
${concerns}

ユーザーが得たいアウトプット：
${desiredOutput}`
          }
        ],
        response_format: { type: "json_object" } // JSON形式での応答を強制
      });

      const analysisResult = JSON.parse(completion.choices[0].message.content || '{}');
      setAiAnalysis(analysisResult);
      setStep(2);
    } catch (error) {
      console.error('Error:', error);
      alert('AIによる分析中にエラーが発生しました。');
    } finally {
      setIsLoading(false);
    }
  };

  const handleExpertRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedExpertise || !chatGPTResponse || !aiAnalysis) return;

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert('専門家への分析依頼が完了しました。マイページで進捗を確認できます。');
      setSelectedExpertise('');
      setChatGPTResponse('');
      setConcerns('');
      setDesiredOutput('');
      setAiAnalysis(null);
      setStep(1);
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

        {/* ステップインジケーター */}
        <div className="px-6 pt-6">
          <div className="flex items-center">
            <div className="flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                1
              </div>
              <p className="text-sm mt-2">AI分析</p>
            </div>
            <div className="flex-1 border-t-2 border-gray-200" />
            <div className="flex-1 text-right">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ml-auto ${
                step >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                2
              </div>
              <p className="text-sm mt-2">専門家に依頼</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          {step === 1 ? (
            <form onSubmit={handleAIAnalysis} className="space-y-6">
              {/* 専門分野の選択 */}
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
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-lg font-medium text-gray-800 mb-2">
                  懸念点・問題点
                </label>
                <div className="relative">
                  <AlertTriangle className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                  <textarea
                    value={concerns}
                    onChange={(e) => setConcerns(e.target.value)}
                    className="w-full h-32 pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    placeholder="ChatGPTの回答で不十分な点や、さらに深掘りしたい部分を具体的に記入してください..."
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-lg font-medium text-gray-800 mb-2">
                  得たいアウトプット（任意）
                </label>
                <div className="relative">
                  <Target className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                  <textarea
                    value={desiredOutput}
                    onChange={(e) => setDesiredOutput(e.target.value)}
                    className="w-full h-32 pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    placeholder="専門家からどのようなアドバイスや提案が欲しいか、具体的に記入してください..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={!selectedExpertise || !chatGPTResponse || !concerns || isLoading}
                className={`w-full py-3 px-6 rounded-xl font-medium flex items-center justify-center shadow-md ${
                  !selectedExpertise || !chatGPTResponse || !concerns || isLoading
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-indigo-700'
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                    AI分析を実行中...
                  </>
                ) : (
                  <>
                    <Brain className="w-5 h-5 mr-2" />
                    AIによる事前分析を開始
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              {/* AI分析結果 */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="w-6 h-6 text-indigo-600" />
                  <h3 className="text-lg font-medium text-gray-800">AIによる事前分析</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">分析概要</h4>
                    <p className="text-gray-600">{aiAnalysis?.summary}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">ChatGPTの回答で十分な点</h4>
                    <ul className="space-y-2">
                      {aiAnalysis?.satisfiedPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">さらなる検討が必要な点</h4>
                    <ul className="space-y-2">
                      {aiAnalysis?.concernPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">専門家への確認ポイント</h4>
                    <ul className="space-y-2">
                      {aiAnalysis?.expertQuestions.map((question, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Target className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">専門家への相談アプローチ</h4>
                    <p className="text-gray-600">{aiAnalysis?.suggestedApproach}</p>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t">
                    <div className="text-lg font-medium text-gray-800">信頼性スコア:</div>
                    <div className="text-2xl font-bold text-indigo-600">{aiAnalysis?.confidence}%</div>
                  </div>
                </div>
              </div>

              {/* 専門家への依頼フォーム */}
              <form onSubmit={handleExpertRequest} className="space-y-6">
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 px-6 bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                  >
                    AI分析に戻る
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`flex-1 py-3 px-6 rounded-xl font-medium flex items-center justify-center ${
                      isLoading
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-indigo-700'
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                        送信中...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        専門家に分析を依頼
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
