# GenCAD 查看器

[English](./README.en.md) | 简体中文 | [繁體中文](./README.zh-Hant.md) | [日本語](./README.ja.md) | [Русский](./README.ru.md)

嘉立创EDA 专业版扩展，支持导入 GenCAD 格式文件（.cad）进行预览查看。

## 功能特性

- 在 PCB 编辑器和首页菜单中添加「打开 GenCAD 查看器...」菜单项
- 点击菜单项后以最大化 iframe 对话框打开 GenCAD 查看器
- 对话框支持最小化/最大化按钮
- 支持中英文国际化

## 使用方式

1. 在嘉立创EDA 专业版中安装本扩展
2. 打开 PCB 编辑器（或在首页），点击顶部菜单栏中的「GenCAD查看器」→「Open GenCAD Viewer...」
3. 在弹出的查看器对话框中打开 `.cad` 文件进行预览

## 项目结构

```
├── src/
│   └── index.ts                  # 扩展入口文件，导出 openGenCAD() 函数
├── iframe/
│   └── online-gencad-viewer.html # GenCAD 查看器 HTML 页面（iframe 内容）
├── locales/
│   ├── en.json                   # 英文翻译
│   ├── zh-Hans.json              # 简体中文翻译
│   └── extensionJson/            # extension.json 国际化
├── images/
│   └── logo.png                  # 扩展图标
├── extension.json                # 扩展清单文件
├── package.json                  # 项目配置
└── config/                       # esbuild 构建配置
```

## 开发

### 环境要求

- Node.js >= 20.17.0

### 安装依赖

```bash
npm install
```

### 构建

```bash
# 编译扩展
npm run compile

# 编译并打包
npm run build
```

### 代码检查

```bash
# 运行 ESLint
npm run lint

# 自动修复
npm run fix
```

## 扩展配置

| 字段 | 值 |
|------|-----|
| 名称 | gencad-viewer |
| 显示名称 | GenCAD查看器 |
| 版本 | 1.0.0 |
| 引擎要求 | eda ^3.0.0 |
| 分类 | Other |
| 许可证 | Apache-2.0 |

## 许可证

[Apache-2.0](./LICENSE)
