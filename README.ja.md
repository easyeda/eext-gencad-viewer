# GenCAD ビューア

[English](./README.en.md) | [简体中文](./README.md) | [繁體中文](./README.zh-Hant.md) | 日本語 | [Русский](./README.ru.md)

EasyEDA Pro 拡張機能。GenCAD フォーマットファイル（.cad）のインポートとプレビューに対応しています。

## 機能

- PCB エディタおよびホームページメニューに「Open GenCAD Viewer...」メニュー項目を追加
- メニュー項目をクリックすると、最大化された iframe ダイアログで GenCAD ビューアを表示
- ダイアログは最小化/最大化ボタンに対応
- 国際化対応（中国語・英語）

## 使い方

1. EasyEDA Pro に本拡張機能をインストール
2. PCB エディタ（またはホームページ）を開き、トップメニューバーの「GenCAD查看器」→「Open GenCAD Viewer...」をクリック
3. 表示されたビューアダイアログで `.cad` ファイルを開いてプレビュー

## プロジェクト構成

```
├── src/
│   └── index.ts                  # 拡張機能エントリポイント、openGenCAD() をエクスポート
├── iframe/
│   └── online-gencad-viewer.html # GenCAD ビューア HTML ページ（iframe コンテンツ）
├── locales/
│   ├── en.json                   # 英語翻訳
│   ├── zh-Hans.json              # 簡体字中国語翻訳
│   └── extensionJson/            # extension.json 国際化
├── images/
│   └── logo.png                  # 拡張機能アイコン
├── extension.json                # 拡張機能マニフェスト
├── package.json                  # プロジェクト設定
└── config/                       # esbuild ビルド設定
```

## 開発

### 必要環境

- Node.js >= 20.17.0

### 依存関係のインストール

```bash
npm install
```

### ビルド

```bash
# 拡張機能をコンパイル
npm run compile

# コンパイルしてパッケージ化
npm run build
```

### リント

```bash
# ESLint を実行
npm run lint

# 自動修正
npm run fix
```

## 拡張機能設定

| フィールド | 値 |
|-----------|-----|
| 名前 | gencad-viewer |
| 表示名 | GenCAD查看器 |
| バージョン | 1.0.0 |
| エンジン要件 | eda ^3.0.0 |
| カテゴリ | Other |
| ライセンス | Apache-2.0 |

## ライセンス

[Apache-2.0](./LICENSE)
