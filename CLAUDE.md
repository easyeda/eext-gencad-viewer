# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

An EasyEDA Pro extension that imports and previews GenCAD format files (.cad). Extensions run inside EasyEDA Pro's browser environment as IIFE bundles.

## Commands

```bash
npm run compile    # Build src/ → dist/ via esbuild
npm run build      # Compile + package into .eext (zip) in build/dist/
npm run lint       # ESLint check
npm run fix        # ESLint auto-fix
```

There is no test framework configured.

## Architecture

- `src/index.ts` — Extension entry point. Exported functions are bound to menu items via `extension.json` `headerMenus`.
- `extension.json` — Extension manifest (name, menus, activation events, engine compatibility). The `entry` field points to the compiled output.
- `config/esbuild.common.ts` — esbuild config. Output is IIFE format, browser platform, bundled. Do not change `format`, `platform`, `bundle`, `minify`, or `globalName`.
- `build/packaged.ts` — Packages the extension into a `.eext` zip, respecting `.edaignore`. Auto-generates a UUID if missing.
- `iframe/` — HTML pages that can be loaded in extension iframes.
- `.edaignore` — Controls which files are excluded from the packaged `.eext` (similar to `.gitignore` syntax).

## Key Conventions

- The `eda` global object is provided by the EasyEDA Pro host at runtime (types from `@jlceda/pro-api-types`). Do not import it.
- Functions exported from the entry file are referenced by name in `extension.json` `headerMenus[].menuItems[].registerFn`.
- ESLint uses @antfu/eslint-config: tabs for indentation, single quotes, semicolons required.
- Pre-commit hook runs `lint-staged` (eslint --fix on all staged files).
