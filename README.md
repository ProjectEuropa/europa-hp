# Project Europa

サイバーパンク/SF テーマのポートフォリオサイト。フリーランス Web 開発・クラウドインフラ構築・技術研修サービスの紹介。

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **UI**: React 19
- **Styling**: Tailwind CSS v4 + カスタムCSSアニメーション
- **Fonts**: Google Fonts (Titillium Web, Rajdhani, Electrolize, Share Tech Mono)
- **Linter/Formatter**: Biome

## Getting Started

```bash
npm install
npm run dev
```

http://localhost:3000 で開発サーバーが起動します。

## Scripts

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | プロダクションビルド |
| `npm run start` | プロダクションサーバー起動 |
| `npm run lint` | Biome lint + format チェック |
| `npm run lint:fix` | Biome lint + format 自動修正 |
| `npm run format` | Biome format 自動修正 |

## Directory Structure

```
app/
├── layout.tsx          # ルートレイアウト (メタデータ・フォント・背景)
├── page.tsx            # ホームページ
├── globals.css         # Tailwind + カスタムテーマ・アニメーション
├── not-found.tsx       # 404ページ
├── about/page.tsx      # About ページ
├── contact/
│   ├── page.tsx        # お問い合わせフォーム
│   └── success/page.tsx
├── portfolio/page.tsx  # ポートフォリオ
└── skill/page.tsx      # スキル・資格

components/
├── Navbar.tsx          # ナビゲーション (モバイル対応)
├── Footer.tsx          # フッター
├── StarField.tsx       # 星空背景アニメーション
└── ui/
    ├── CyberCard.tsx   # サイバーパンク風カード
    ├── Planet.tsx       # 回転する惑星
    └── SectionTitle.tsx # セクション見出し
```

## Design Theme

- ダークベース (`#021114`) + シアンアクセント (`#26dafd`)
- フレームコンポーネント (角装飾・グローライン)
- タイピングアニメーション・スキャンライン効果
- 星空背景・ノイズテクスチャ
- バイリンガル (日本語メイン / 英語サブ)

## Legacy

移行前の静的HTML/CSS/JSサイトは `_legacy_backup/` に保管。
