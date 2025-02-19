import React from 'react';
import { Scale } from 'lucide-react';

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
          <h2 className="text-xl font-semibold text-white flex items-center">
            <Scale className="w-6 h-6 mr-2" />
            利用規約
          </h2>
        </div>
        <div className="p-6">
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              この利用規約（以下、「本規約」といいます。）は、株式会社プロの目線（以下、「当社」といいます。）が提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-8 mb-4">第1条（適用）</h3>
            <p className="text-gray-600 mb-6">
              本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-8 mb-4">第2条（利用登録）</h3>
            <p className="text-gray-600 mb-6">
              1. 本サービスにおいては、登録希望者が本規約に同意の上、当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。<br />
              2. 当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあります。
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>虚偽の事項を届け出た場合</li>
              <li>本規約に違反したことがある者からの申請である場合</li>
              <li>その他、当社が利用登録を相当でないと判断した場合</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-800 mt-8 mb-4">第3条（禁止事項）</h3>
            <p className="text-gray-600 mb-2">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
              <li>当社のサービスの運営を妨害するおそれのある行為</li>
              <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
              <li>他のユーザーに成りすます行為</li>
              <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-800 mt-8 mb-4">第4条（本サービスの提供の停止等）</h3>
            <p className="text-gray-600 mb-6">
              当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-8 mb-4">第5条（利用制限および登録抹消）</h3>
            <p className="text-gray-600 mb-6">
              当社は、本規約に違反したユーザーに対して、事前の通知なく、ユーザーに対して本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-8 mb-4">第6条（保証の否認および免責事項）</h3>
            <p className="text-gray-600 mb-6">
              1. 当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。<br />
              2. 当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意又は重過失による場合を除き、一切の責任を負いません。
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-8 mb-4">第7条（サービス内容の変更等）</h3>
            <p className="text-gray-600 mb-6">
              当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-8 mb-4">第8条（利用規約の変更）</h3>
            <p className="text-gray-600 mb-6">
              当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-8 mb-4">第9条（通知または連絡）</h3>
            <p className="text-gray-600 mb-6">
              ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-8 mb-4">第10条（権利義務の譲渡の禁止）</h3>
            <p className="text-gray-600 mb-6">
              ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-8 mb-4">第11条（準拠法・裁判管轄）</h3>
            <p className="text-gray-600">
              1. 本規約の解釈にあたっては、日本法を準拠法とします。<br />
              2. 本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}