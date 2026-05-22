# GenCAD Viewer

English | [简体中文](./README.md) | [繁體中文](./README.zh-Hant.md) | [日本語](./README.ja.md) | [Русский](./README.ru.md)

An EasyEDA Pro extension that imports and previews GenCAD format files (.cad).

## Features

- Adds an "Open GenCAD Viewer..." menu item in the PCB editor and home page menus
- Opens the GenCAD viewer in a maximized iframe dialog
- Dialog supports minimize/maximize buttons
- Internationalization support (Chinese and English)

## Usage

1. Install this extension in EasyEDA Pro
2. Open the PCB editor (or the home page), then click "GenCAD Viewer" > "Open GenCAD Viewer..." in the top menu bar
3. In the viewer dialog, open a `.cad` file to preview

## Project Structure

```
├── src/
│   └── index.ts                  # Extension entry point, exports openGenCAD()
├── iframe/
│   └── online-gencad-viewer.html # GenCAD viewer HTML page (iframe content)
├── locales/
│   ├── en.json                   # English translations
│   ├── zh-Hans.json              # Simplified Chinese translations
│   └── extensionJson/            # extension.json i18n
├── images/
│   └── logo.png                  # Extension icon
├── extension.json                # Extension manifest
├── package.json                  # Project configuration
└── config/                       # esbuild build configuration
```

## Development

### Requirements

- Node.js >= 20.17.0

### Install Dependencies

```bash
npm install
```

### Build

```bash
# Compile the extension
npm run compile

# Compile and package
npm run build
```

### Linting

```bash
# Run ESLint
npm run lint

# Auto-fix
npm run fix
```

## Extension Configuration

| Field | Value |
|-------|-------|
| Name | gencad-viewer |
| Display Name | GenCAD Viewer |
| Version | 1.0.0 |
| Engine Requirement | eda ^3.0.0 |
| Category | Other |
| License | Apache-2.0 |

## License

[Apache-2.0](./LICENSE)
