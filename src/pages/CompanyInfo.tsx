import React from 'react';
import { Building2, Mail, MapPin, Phone, Award, BookOpen, Briefcase, Users } from 'lucide-react';

export default function CompanyInfo() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* 会社概要 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
          <h2 className="text-xl font-semibold text-white flex items-center">
            <Building2 className="w-6 h-6 mr-2" />
            会社概要
          </h2>
        </div>
        <div className="p-6">
          <div className="grid gap-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">企業情報</h3>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">会社名</dt>
                  <dd className="mt-1 text-gray-800">株式会社プロの目線</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">設立</dt>
                  <dd className="mt-1 text-gray-800">2024年1月</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">代表取締役</dt>
                  <dd className="mt-1 text-gray-800">山田 太郎</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">資本金</dt>
                  <dd className="mt-1 text-gray-800">1,000万円</dd>
                </div>
              </dl>
            </div>

            <div className="border-b pb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">事業内容</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ChatGPTの回答に対する専門家による分析・アドバイスサービス</li>
                <li>• AIを活用したビジネス支援サービス</li>
                <li>• 各分野の専門家によるコンサルティングサービス</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">所在地・連絡先</h3>
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <dt className="text-sm font-medium text-gray-500">本社所在地</dt>
                    <dd className="mt-1 text-gray-800">
                      〒100-0001<br />
                      東京都千代田区丸の内1-1-1
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <dt className="text-sm font-medium text-gray-500">電話番号</dt>
                    <dd className="mt-1 text-gray-800">03-1234-5678</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <dt className="text-sm font-medium text-gray-500">メールアドレス</dt>
                    <dd className="mt-1 text-gray-800">info@pro-mesen.co.jp</dd>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 代表取締役プロフィール */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
          <h2 className="text-xl font-semibold text-white flex items-center">
            <Users className="w-6 h-6 mr-2" />
            代表取締役プロフィール
          </h2>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* プロフィール画像 */}
            <div className="md:col-span-1">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                  alt="山田太郎"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">山田 太郎</h3>
                <p className="text-gray-600">代表取締役CEO</p>
              </div>
            </div>

            {/* プロフィール情報 */}
            <div className="md:col-span-2">
              <div className="space-y-6">
                {/* 経歴 */}
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-indigo-600" />
                    経歴
                  </h4>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-24 flex-shrink-0 text-gray-500">2010年</div>
                      <div className="flex-1 text-gray-800">東京大学工学部 卒業</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-24 flex-shrink-0 text-gray-500">2010-2015年</div>
                      <div className="flex-1 text-gray-800">グローバルコンサルティング株式会社<br />AIソリューション部門</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-24 flex-shrink-0 text-gray-500">2015-2020年</div>
                      <div className="flex-1 text-gray-800">テックイノベーション株式会社<br />最高技術責任者（CTO）</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-24 flex-shrink-0 text-gray-500">2024年</div>
                      <div className="flex-1 text-gray-800">株式会社プロの目線 設立<br />代表取締役就任</div>
                    </div>
                  </div>
                </div>

                {/* 資格・受賞歴 */}
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-indigo-600" />
                    資格・受賞歴
                  </h4>
                  <ul className="space-y-2 text-gray-800">
                    <li>• 情報処理安全確保支援士（RISS）</li>
                    <li>• AIソリューションアーキテクト認定</li>
                    <li>• 2019年 日本テクノロジー大賞 優秀賞</li>
                    <li>• 2021年 デジタルトランスフォーメーション推進賞</li>
                  </ul>
                </div>

                {/* 著書・講演 */}
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-indigo-600" />
                    著書・講演
                  </h4>
                  <ul className="space-y-2 text-gray-800">
                    <li>• 『AI時代の経営戦略』（2022年、ビジネス出版）</li>
                    <li>• 『デジタルトランスフォーメーション実践ガイド』（2021年、テック出版）</li>
                    <li>• TEDxTokyo 2023 登壇「AIと人間の共生」</li>
                    <li>• Digital Innovation Summit 2024 基調講演</li>
                  </ul>
                </div>

                {/* メッセージ */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">代表メッセージ</h4>
                  <p className="text-gray-600 leading-relaxed">
                    AI技術の急速な発展により、ビジネスの在り方が大きく変わりつつある今、
                    私たちは人間の専門性とAIの可能性を最適な形で組み合わせ、
                    新しい価値を創造することを目指しています。
                    プロの目線は、ChatGPTをはじめとするAIツールの活用を、
                    各分野の専門家の知見で補完することで、
                    より確実で実践的なソリューションを提供します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}