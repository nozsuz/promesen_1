import React, { useState } from 'react';
import { MessageSquare, Send, Code, Microscope, Briefcase, Palette, Brain, BookOpen, Target } from 'lucide-react';
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
    // 評価軸：コードの品質、スケーラビリティとパフォーマンス、セキュリティ、実装の複雑さと保守性、クラウド・インフラストラクチャ
    systemPrompt: `あなたは技術分野の専門AIアシスタントです。ChatGPTの回答を以下の評価軸に基づいて評価・分析し、各軸ごとに0〜100点の評価と簡単なコメントを付与してください。また、全体の分析の要約と参考文献も示してください。

【評価軸】
- コードの品質
- スケーラビリティとパフォーマンス
- セキュリティ
- 実装の複雑さと保守性
- クラウド・インフラストラクチャ

出力は下記の形式のJSONで、コードブロック等の余計な記号は含まず、**純粋なJSON形式**のみで返してください：

{
  "summary": "全体的な分析の要約（200文字程度）",
  "axisScores": {
    "コードの品質": { "score": 80, "comment": "最新のベストプラクティスに従っているが、テスト不足が懸念される" },
    "スケーラビリティとパフォーマンス": { "score": 75, "comment": "高負荷時の挙動に改善の余地あり" },
    "セキュリティ": { "score": 65, "comment": "セキュリティリスクに対する対策が不十分" },
    "実装の複雑さと保守性": { "score": 70, "comment": "保守性はあるが、複雑な部分が見受けられる" },
    "クラウド・インフラストラクチャ": { "score": 85, "comment": "クラウド環境への適応は良好" }
  },
  "references": [
    {
      "title": "参考文献やリソースのタイトル",
      "relevance": "その参考文献が関連する理由や重要性"
    }
  ]
}`
  },
  {
    id: 'science',
    name: '科学',
    icon: <Microscope className="w-6 h-6" />,
    description: '研究、実験、科学的発見',
    // 評価軸：科学的手法、実験デザイン、データ分析、研究倫理、再現性と検証可能性
    systemPrompt: `あなたは科学研究分野の専門AIアシスタントです。ChatGPTの回答を以下の評価軸に基づいて評価・分析し、各軸ごとに0〜100点の評価と簡単なコメントを付与してください。また、全体の分析の要約と参考文献も示してください。

【評価軸】
- 科学的手法
- 実験デザイン
- データ分析
- 研究倫理
- 再現性と検証可能性

出力は下記の形式のJSONで、コードブロック等の余計な記号は含まず、**純粋なJSON形式**のみで返してください：

{
  "summary": "全体的な分析の要約（200文字程度）",
  "axisScores": {
    "科学的手法": { "score": 85, "comment": "仮説の設定と検証方法が明確" },
    "実験デザイン": { "score": 80, "comment": "適切なデザインだが、再現性に課題あり" },
    "データ分析": { "score": 75, "comment": "統計手法は妥当だが、サンプル数が少ない" },
    "研究倫理": { "score": 90, "comment": "倫理的配慮が十分" },
    "再現性と検証可能性": { "score": 70, "comment": "再現性に一部不安あり" }
  },
  "references": [
    {
      "title": "参考文献やリソースのタイトル",
      "relevance": "その参考文献が関連する理由や重要性"
    }
  ]
}`
  },
  {
    id: 'business',
    name: 'ビジネス',
    icon: <Briefcase className="w-6 h-6" />,
    description: '経営、戦略、起業',
    // 評価軸：市場動向、実現可能性、ROIと投資対効果、リスク管理、競合優位性
    systemPrompt: `あなたはビジネス戦略の専門AIアシスタントです。ChatGPTの回答を以下の評価軸に基づいて評価・分析し、各軸ごとに0〜100点の評価と簡単なコメントを付与してください。また、全体の分析の要約と参考文献も示してください。

【評価軸】
- 市場動向
- 実現可能性
- ROIと投資対効果
- リスク管理
- 競合優位性

出力は下記の形式のJSONで、コードブロック等の余計な記号は含まず、**純粋なJSON形式**のみで返してください：

{
  "summary": "全体的な分析の要約（200文字程度）",
  "axisScores": {
    "市場動向": { "score": 75, "comment": "市場の動向とトレンドに合致している" },
    "実現可能性": { "score": 70, "comment": "リソースの確保に一部課題あり" },
    "ROIと投資対効果": { "score": 65, "comment": "期待されるROIは平均的" },
    "リスク管理": { "score": 60, "comment": "潜在的なリスクが見落とされている" },
    "競合優位性": { "score": 80, "comment": "競合との差別化が明確" }
  },
  "references": [
    {
      "title": "参考文献やリソースのタイトル",
      "relevance": "その参考文献が関連する理由や重要性"
    }
  ]
}`
  },
  {
    id: 'arts',
    name: 'アート',
    icon: <Palette className="w-6 h-6" />,
    description: 'クリエイティブアート、デザイン、文化研究',
    // 評価軸：デザイン原則、文化的影響、創造性と革新性、実現可能性、市場適応性
    systemPrompt: `あなたはクリエイティブ分野の専門AIアシスタントです。ChatGPTの回答を以下の評価軸に基づいて評価・分析し、各軸ごとに0〜100点の評価と簡単なコメントを付与してください。また、全体の分析の要約と参考文献も示してください。

【評価軸】
- デザイン原則
- 文化的影響
- 創造性と革新性
- 実現可能性
- 市場適応性

出力は下記の形式のJSONで、コードブロック等の余計な記号は含まず、**純粋なJSON形式**のみで返してください：

{
  "summary": "全体的な分析の要約（200文字程度）",
  "axisScores": {
    "デザイン原則": { "score": 85, "comment": "美的整合性が高い" },
    "文化的影響": { "score": 80, "comment": "社会的・文化的背景が反映されている" },
    "創造性と革新性": { "score": 90, "comment": "斬新なアイデアが多い" },
    "実現可能性": { "score": 70, "comment": "技術的な実装には一部課題あり" },
    "市場適応性": { "score": 75, "comment": "市場トレンドに適応している" }
  },
  "references": [
    {
      "title": "参考文献やリソースのタイトル",
      "relevance": "その参考文献が関連する理由や重要性"
    }
  ]
}`
  }
];

export default function AnalysisRequest() {
  const [step, setStep] = useState(1);
  const [chatGPTResponse, setChatGPTResponse] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<{
    summary: string;
    axisScores: { [axis: string]: { score: number; comment: string } };
    references: { title: string; relevance: string }[];
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
          { role: "system", content: expertise.systemPrompt },
          {
            role: "user",
            content: `以下のChatGPTの回答を分析してください：

${chatGPTResponse}`
          }
        ]
      });

      let rawContent = completion.choices[0].message.content || '';
      const cleanedContent = rawContent.replace(/```(json)?/g, '').replace(/```/g, '').trim();
      const analysisResult = JSON.parse(cleanedContent);

      // 各評価軸のスコアを平均して全体信頼性スコアとする
      if (analysisResult.axisScores) {
        const scores = Object.values(analysisResult.axisScores).map((axis: any) => axis.score);
        const overallScore = scores.reduce((acc: number, curr: number) => acc + curr, 0) / scores.length;
        analysisResult.confidence = Math.round(overallScore);
      } else {
        analysisResult.confidence = 50;
      }

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
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                1
              </div>
              <p className="text-sm mt-2">AI分析</p>
            </div>
            <div className="flex-1 border-t-2 border-gray-200" />
            <div className="flex-1 text-right">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ml-auto ${step >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
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
                <label className="block text-lg font-medium text-gray-800 mb-3">専門分野を選択</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {expertiseAreas.map(area => (
                    <button
                      key={area.id}
                      type="button"
                      onClick={() => setSelectedExpertise(area.id)}
                      className={`p-4 rounded-xl transition-all ${selectedExpertise === area.id ? 'bg-indigo-50 border-2 border-indigo-500 shadow-md' : 'bg-gray-50 border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'}`}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className={`mb-3 ${selectedExpertise === area.id ? 'text-indigo-600' : 'text-gray-600'}`}>{area.icon}</div>
                        <div className={`font-medium ${selectedExpertise === area.id ? 'text-indigo-600' : 'text-gray-800'}`}>{area.name}</div>
                        <div className="text-sm text-gray-500 mt-2">{area.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-lg font-medium text-gray-800 mb-2">ChatGPTの回答を貼り付け</label>
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
              <button
                type="submit"
                disabled={!selectedExpertise || !chatGPTResponse || isLoading}
                className={`w-full py-3 px-6 rounded-xl font-medium flex items-center justify-center shadow-md ${!selectedExpertise || !chatGPTResponse || isLoading ? 'bg-gray-300 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-indigo-700'}`}
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
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">分析概要</h4>
                    <p className="text-gray-600">{aiAnalysis?.summary}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">評価軸別スコア</h4>
                    {aiAnalysis?.axisScores ? (
                      <ul className="space-y-2">
                        {Object.entries(aiAnalysis.axisScores).map(([axis, data], index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Target className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-medium text-gray-800">{axis}：{data.score}点</div>
                              <div className="text-sm text-gray-600">{data.comment}</div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600">評価軸のスコアがありません。</p>
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">参考文献</h4>
                    <ul className="space-y-2">
                      {aiAnalysis?.references.map((ref, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <BookOpen className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-gray-800">{ref.title}</div>
                            <div className="text-sm text-gray-600">{ref.relevance}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
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
                    className={`flex-1 py-3 px-6 rounded-xl font-medium flex items-center justify-center ${isLoading ? 'bg-gray-300 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-indigo-700'}`}
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
