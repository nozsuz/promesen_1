import React from 'react';
import { UserPlus, Mail, Lock } from 'lucide-react';

export default function UserRegistration() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ユーザー登録処理
    alert('ユーザー登録が完了しました');
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
          <h2 className="text-xl font-semibold text-white flex items-center">
            <UserPlus className="w-6 h-6 mr-2" />
            ユーザー登録
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">お名前</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
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
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
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
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                placeholder="8文字以上の英数字"
                required
                minLength={8}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-colors shadow-md"
          >
            登録する
          </button>
          <p className="text-center text-sm text-gray-600">
            すでにアカウントをお持ちの方は
            <a href="#" className="text-green-600 hover:text-green-700">
              ログイン
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}