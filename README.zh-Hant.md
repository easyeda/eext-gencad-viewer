# GenCAD 查看器

[English](./README.en.md) | [简体中文](./README.md) | 繁體中文 | [日本語](./README.ja.md) | [Русский](./README.ru.md)

嘉立創EDA 專業版擴展，支持導入 GenCAD 格式文件（.cad）進行預覽查看。

## 功能特性

- 在 PCB 編輯器和首頁選單中添加「打開 GenCAD 查看器...」選單項
- 點擊選單項後以最大化 iframe 對話框打開 GenCAD 查看器
- 對話框支持最小化/最大化按鈕
- 支持中英文國際化

## 使用方式

1. 在嘉立創EDA 專業版中安裝本擴展
2. 打開 PCB 編輯器（或在首頁），點擊頂部選單欄中的「GenCAD查看器」→「Open GenCAD Viewer...」
3. 在彈出的查看器對話框中打開 `.cad` 文件進行預覽

## 項目結構

```
├── src/
│   └── index.ts                  # 擴展入口文件，導出 openGenCAD() 函數
├── iframe/
│   └── online-gencad-viewer.html # GenCAD 查看器 HTML 頁面（iframe 內容）
├── locales/
│   ├── en.json                   # 英文翻譯
│   ├── zh-Hans.json              # 簡體中文翻譯
│   └── extensionJson/            # extension.json 國際化
├── images/
│   └── logo.png                  # 擴展圖標
├── extension.json                # 擴展清單文件
├── package.json                  # 項目配置
└── config/                       # esbuild 構建配置
```

## 開發

### 環境要求

- Node.js >= 20.17.0

### 安裝依賴

```bash
npm install
```

### 構建

```bash
# 編譯擴展
npm run compile

# 編譯並打包
npm run build
```

### 代碼檢查

```bash
# 運行 ESLint
npm run lint

# 自動修復
npm run fix
```

## 擴展配置

| 欄位 | 值 |
|------|-----|
| 名稱 | gencad-viewer |
| 顯示名稱 | GenCAD查看器 |
| 版本 | 1.0.0 |
| 引擎要求 | eda ^3.0.0 |
| 分類 | Other |
| 許可證 | Apache-2.0 |

## 許可證

[Apache-2.0](./LICENSE)
