import React from 'react';
import { Code, Microscope, Briefcase, Palette } from 'lucide-react';

interface Organization {
  id: string;
  name: string;
  type: string;
  description: string;
}

interface ExpertiseArea {
  id: string;
  name: string;
  icon: JSX.Element;
  description: string;
  organizations: Organization[];
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: 'tech',
    name: 'テクノロジー',
    icon: React.createElement(Code, { className: "w-6 h-6" }),
    description: 'ソフトウェア開発、IT、デジタルソリューション',
    organizations: [
      { id: '1', name: 'テックラボ株式会社', type: 'IT企業', description: 'AI・機械学習の研究開発' },
      { id: '2', name: '未来技研', type: 'R&D', description: '次世代テクノロジーの研究' },
      { id: '3', name: 'デジタルソリューションズ', type: 'IT企業', description: 'エンタープライズソフトウェア開発' }
    ]
  },
  {
    id: 'science',
    name: '科学',
    icon: React.createElement(Microscope, { className: "w-6 h-6" }),
    description: '研究、実験、科学的発見',
    organizations: [
      { id: '4', name: '国立研究所', type: '研究機関', description: '基礎科学研究' },
      { id: '5', name: '先端医療センター', type: '医療機関', description: '医療技術研究' },
      { id: '6', name: 'バイオテック研究所', type: '研究機関', description: 'バイオテクノロジー研究' }
    ]
  },
  {
    id: 'business',
    name: 'ビジネス',
    icon: React.createElement(Briefcase, { className: "w-6 h-6" }),
    description: '経営、戦略、起業',
    organizations: [
      { id: '7', name: 'グローバルコンサル', type: 'コンサルティング', description: '経営戦略コンサルティング' },
      { id: '8', name: 'マーケットプロ', type: 'マーケティング', description: 'デジタルマーケティング支援' },
      { id: '9', name: 'ビジネスイノベーション', type: 'シンクタンク', description: '事業開発支援' }
    ]
  },
  {
    id: 'arts',
    name: 'アート',
    icon: React.createElement(Palette, { className: "w-6 h-6" }),
    description: 'クリエイティブアート、デザイン、文化研究',
    organizations: [
      { id: '10', name: 'アートスタジオ', type: 'クリエイティブ', description: 'デジタルアート制作' },
      { id: '11', name: 'クリエイティブラボ', type: 'デザイン', description: 'UI/UXデザイン' },
      { id: '12', name: 'カルチャーリサーチ', type: '研究機関', description: '文化・芸術研究' }
    ]
  }
];