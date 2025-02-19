import React, { useState } from 'react';
import { Users, Mail, Lock, Award, Building2, BookOpen, Briefcase, CheckCircle, AlertCircle } from 'lucide-react';
import { expertiseAreas } from '../data/expertiseAreas';

export default function ExpertRegistration() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    expertise: '',
    organization: '',
    position: '',
    qualifications: '',
    experience: '',
    achievements: '',
    motivation: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      alert('専門家登録申請を受け付けました。審査結果は1週間以内にメールでお知らせいたします。');
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4">
          <h2 className="text-xl font-semibold text-white flex items-center">
            <Users className="w-6 h-6 mr-2" />
            専門家登録
          </h2>
        </div>

        {/* 進捗表示 */}
        <div className="px-6 pt-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                1
              </div>
              <p className="text-sm mt-2">基本情報</p>
            </div>
            <div className="flex-1 border-t-2 border-gray-200" />
            <div className="flex-1 text-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto ${
                step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                2
              </div>
              <p className="text-sm mt-2">専門性</p>
            </div>
            <div className="flex-1 border-t-2 border-gray-200" />
            <div className="flex-1 text-right">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ml-auto ${
                step >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                3
              </div>
              <p className="text-sm mt-2">実績</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {step === 1 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">お名前</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="山田 太郎"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
                  <div className="relative">
                    <Mail className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">パスワード</label>
                  <div className="relative">
                    <Lock className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="8文字以上の英数字"
                      required
                      minLength={8}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">専門分野</label>
                  <select
                    name="expertise"
                    value={formData.expertise}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    required
                  >
                    <option value="">選択してください</option>
                    {expertiseAreas.map(area => (
                      <option key={area.id} value={area.id}>{area.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">所属組織</label>
                <div className="relative">
                  <Building2 className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="○○大学 / ○○研究所"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">役職</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="教授 / 主任研究員など"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">保有資格</label>
                <div className="relative">
                  <Award className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="qualifications"
                    value={formData.qualifications}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    rows={4}
                    placeholder="保有資格をご記入ください"
                    required
                  />
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">実務経験</label>
                <div className="relative">
                  <Briefcase className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    rows={4}
                    placeholder="これまでの実務経験をご記入ください"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">業績・実績</label>
                <div className="relative">
                  <BookOpen className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="achievements"
                    value={formData.achievements}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    rows={4}
                    placeholder="論文、著書、受賞歴などをご記入ください"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">応募動機</label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  rows={4}
                  placeholder="専門家として参加を希望される理由をご記入ください"
                  required
                />
              </div>
            </>
          )}

          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              {step < 3 ? (
                <AlertCircle className="w-5 h-5 text-purple-600 mt-1" />
              ) : (
                <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
              )}
              <div>
                <h3 className="font-medium text-purple-800 mb-2">
                  {step < 3 ? '入力のヒント' : '審査について'}
                </h3>
                <p className="text-sm text-purple-600">
                  {step === 1 && '基本情報は審査の重要な要素となります。正確な情報をご入力ください。'}
                  {step === 2 && '現在の所属と役職、保有資格は専門性を判断する基準となります。'}
                  {step === 3 && 'ご登録いただいた内容を確認の上、専門家として適切かどうかを審査させていただきます。審査結果は1週間以内にメールでお知らせいたします。'}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 text-purple-600 hover:text-purple-700 transition-colors"
              >
                戻る
              </button>
            )}
            <button
              type="submit"
              className="ml-auto px-8 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-colors shadow-md"
            >
              {step < 3 ? '次へ' : '登録を申請する'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}